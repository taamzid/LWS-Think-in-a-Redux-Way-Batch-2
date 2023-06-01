import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEditBookMutation } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import Success from "../../ui/Success";

const EditForm = ({ book }) => {
  const {
    id,
    name: initialName,
    author: initialAuthor,
    thumbnail: initialThumbnail,
    price: initialPrice,
    rating: initialRating,
    featured: initialFeatured,
  } = book;

  const [editBook, { isSuccess, isLoading, isError }] = useEditBookMutation();
  const navigate = useNavigate();

  const [name, setName] = useState(initialName);
  const [author, setAuthor] = useState(initialAuthor);
  const [thumbnail, setThumbnail] = useState(initialThumbnail);
  const [price, setPrice] = useState(initialPrice);
  const [rating, setRating] = useState(initialRating);
  const [featured, setFeatured] = useState(initialFeatured);

  const handleSubmit = (e) => {
    e.preventDefault();
    editBook({
      id,
      data: {
        name,
        author,
        thumbnail,
        price,
        rating: Number(rating),
        featured,
      },
    });
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST" class="book-form">
        <div class="space-y-2">
          <label for="lws-bookName">Book Name</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-bookName"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-author">Author</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="lws-thumbnail">Image Url</label>
          <input
            required
            class="text-input"
            type="text"
            id="lws-thumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div class="grid grid-cols-2 gap-8 pb-4">
          <div class="space-y-2">
            <label for="lws-price">Price</label>
            <input
              required
              class="text-input"
              type="number"
              id="lws-price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div class="space-y-2">
            <label for="lws-rating">Rating</label>
            <input
              required
              class="text-input"
              type="number"
              id="lws-rating"
              name="rating"
              min="1"
              max="5"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
        </div>

        <div class="flex items-center">
          <input
            id="lws-featured"
            type="checkbox"
            name="featured"
            class="w-4 h-4"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <label for="lws-featured" class="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button
          disabled={isLoading}
          type="submit"
          class="submit"
          id="lws-submit"
        >
          Edit Book
        </button>
        {isSuccess && <Success message="Book was edited successfully" />}
        {isError && <Error message="There was an error editing book!" />}
      </form>
    </div>
  );
};

export default EditForm;
