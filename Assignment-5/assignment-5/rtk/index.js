const store = require("./app/store");
const {
  fetchVideos,
  fetchRelatedTagVideos,
} = require("./features/videos/videoSlice");

store.subscribe(() => {});

store.dispatch(fetchVideos()).then(() => {
  const tags = store.getState().video.tags;
  store.dispatch(fetchRelatedTagVideos(tags));
});
