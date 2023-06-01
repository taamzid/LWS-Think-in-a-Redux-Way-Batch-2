import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { useAddAssignmentMutation } from "../../../../../features/assignment/assignmentApi";

const Form = () => {
  const [addAssignment, { isLoading }] = useAddAssignmentMutation();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [video_title, setVideoTitle] = useState("");
  const [totalMark, setTotalMark] = useState("");
  const [video_id, setVideoId] = useState("");

  const resetForm = () => {
    setTitle("");
    setVideoTitle("");
    setTotalMark("");
    setVideoId("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAssignment({
      title,
      video_title,
      totalMark,
      video_id: Number(video_id),
    });
    resetForm();
    navigate("/admin/assignment");
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
        <label for="lws-videoDescription">Video Title</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoDescription"
          name="description"
          value={video_title}
          onChange={(e) => setVideoTitle(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoUrl">Total Mark</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoUrl"
          name="url"
          value={totalMark}
          onChange={(e) => setTotalMark(e.target.value)}
        />
      </div>
      <div class="space-y-2">
        <label for="lws-videoViews">Video Id</label>
        <input
          required
          class="text-input"
          type="text"
          id="lws-videoViews"
          name="views"
          value={video_id}
          onChange={(e) => setVideoId(e.target.value)}
        />
      </div>

      <button disabled={isLoading} type="submit" class="submit" id="lws-submit">
        Add Assignment
      </button>
    </form>
  );
};

export default Form;
