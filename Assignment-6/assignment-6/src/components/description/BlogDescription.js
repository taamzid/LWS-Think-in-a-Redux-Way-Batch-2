import { useState } from "react";

const BlogDescription = ({ blog }) => {
  const { title, image, isSaved, likes, tags, description } = blog;

  const [saved, setSaved] = useState(isSaved);
  const [numLikes, setNumLikes] = useState(likes);

  const handleSaveClick = () => {
    setSaved((saved) => !saved);
  };

  const handleLikeClick = () => {
    setNumLikes((numLikes) => numLikes + 1);
    fetch(`/blogs/${blog.id}`, {
      method: "POST",
      body: JSON.stringify({ likes: numLikes + 1 }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setNumLikes(data.likes);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <main class="post">
      <img
        src={image}
        alt="githum"
        class="w-full rounded-md"
        id="lws-megaThumb"
      />
      <div>
        <h1 class="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div class="tags" id="lws-singleTags">
          {tags.map((tag, index) => (
            <span key={tag}>
              #{tag} {index !== tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        <div class="btn-group">
          <button
            class="like-btn"
            id="lws-singleLinks"
            onClick={handleLikeClick}
          >
            <i class="fa-regular fa-thumbs-up"></i> {numLikes}
          </button>
          <button
            class={`save-btn ${saved ? "active" : ""}`}
            id="lws-singleSavedBtn"
            onClick={handleSaveClick}
          >
            <i class="fa-regular fa-bookmark"></i> {saved ? "Saved" : "save"}{" "}
          </button>
        </div>
        <div class="mt-6">
          <p>{description}</p>
        </div>
      </div>
    </main>
  );
};

export default BlogDescription;
