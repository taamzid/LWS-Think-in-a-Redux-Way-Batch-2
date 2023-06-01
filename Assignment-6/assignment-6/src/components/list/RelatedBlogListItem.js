import React from "react";
import { Link } from "react-router-dom";

const RelatedBlogListItem = ({ blog }) => {
  const { id, image, tags, createdAt, title } = blog;
  return (
    <div>
      <div class="space-y-4 related-post-container">
        <div class="card">
          <Link to={`/blogs/${id}`}>
            <img src={image} class="card-image" alt="" />
          </Link>
          <div class="p-4">
            <Link
              to={`/blogs/${id}`}
              class="text-lg post-title lws-RelatedPostTitle"
            >
              {title}
            </Link>
            <div class="mb-0 tags">
              {tags.map((tag, index) => (
                <span key={tag}>
                  #{tag} {index !== tags.length - 1 ? ", " : ""}
                </span>
              ))}
            </div>
            <p>{createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedBlogListItem;
