const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

// initial state
const initialState = {
  loading: false,
  videos: [],
  tags: [],
  relatedTagVideos: [],
  error: "",
};

// create async thunk
const fetchVideos = createAsyncThunk("video/fetchVideos", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const videos = await response.json();

  return videos;
});

const fetchRelatedTagVideos = createAsyncThunk(
  "video/fetchRelatedTagVideos",
  async (tags) => {
    const tagString = tags.reduce((url, tag, index) => {
      const separator = index === 0 ? "?" : "&";
      return url + `${separator}tags_like=${tag}`;
    }, "http://localhost:9000/videos");

    const response = await fetch(tagString);
    const videos = await response.json();
    videos.sort((a, b) => {
      const viewsA = parseInt(a.views);
      const viewsB = parseInt(b.views);
      if (viewsA > viewsB) {
        return -1;
      }
      if (viewsA < viewsB) {
        return 1;
      }
      return 0;
    });

    return videos;
  }
);

const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchVideos.pending, (state, action) => {
      state.loading = true;
      state.error = "";
    });

    builder.addCase(fetchVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.videos = action.payload;
      state.tags = action.payload.tags;
    });

    builder.addCase(fetchVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.videos = [];
    });

    builder.addCase(fetchRelatedTagVideos.pending, (state, action) => {
      state.loading = true;
      state.relatedTagVideos = "";
    });

    builder.addCase(fetchRelatedTagVideos.fulfilled, (state, action) => {
      state.loading = false;
      state.error = "";
      state.relatedTagVideos = action.payload;
    });

    builder.addCase(fetchRelatedTagVideos.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.relatedTagVideos = [];
    });
  },
});

module.exports = videoSlice.reducer;
module.exports.fetchVideos = fetchVideos;
module.exports.fetchRelatedTagVideos = fetchRelatedTagVideos;
