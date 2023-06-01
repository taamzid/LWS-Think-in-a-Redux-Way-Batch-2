import React, { useState } from "react";
import { useAddVideoMutation } from "../../../../../features/videos/videosApi";
import { useNavigate } from "react-router-dom";
import "./Form.css";

const Form = () => {
  const [addVideo, { isLoading }] = useAddVideoMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [createdAt, setCreatedAt] = useState("");

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setUrl("");
    setViews("");
    setDuration("");
    setCreatedAt("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addVideo({
      title,
      description,
      url,
      views,
      duration,
      createdAt,
    });
    resetForm();
    navigate("/admin/videos");
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div class="space-y-2">
        <label for="lws-videoTitle">Video Name</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoTitle"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoDescription">Description</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoDescription"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoUrl">Url</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoUrl"
          name="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoViews">Views</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoViews"
          name="views"
          value={views}
          onChange={(e) => setViews(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoDuration">Duration</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoDuration"
          name="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoCreatedAt">CreatedAt</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoCreatedAt"
          name="createdAt"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
      </div>
      <button disabled={isLoading} type="submit" class="submit" id="lws-submit">
        Add Video
      </button>
    </form>
  );
};

export default Form;
