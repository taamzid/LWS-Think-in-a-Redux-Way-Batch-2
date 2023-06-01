import React from "react";
import { Link } from "react-router-dom";

const BlogGridItem = ({ blog = {} }) => {
  const { id, title, image, createdAt, isSaved, likes, tags } = blog;
  return (
    <div>
      <Link to={`blogs/${id}`}>
        <img src={image} class="lws-card-image" alt="" />
      </Link>
      <div class="p-4">
        <div class="lws-card-header">
          <p class="lws-publishedDate">{createdAt}</p>
          <p class="lws-likeCount">
            <i class="fa-regular fa-thumbs-up"></i>
            &nbsp;{likes}
          </p>
        </div>

        <Link to={`blogs/${id}`} class="lws-postTitle">
          {title}
        </Link>
        <div class="lws-tags">
          {tags.map((tag, index) => (
            <span key={tag}>
              #{tag} {index !== tags.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
        {isSaved ? (
          <div class="flex gap-2 mt-4">
            <span class="lws-badge">saved</span>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default BlogGridItem;
