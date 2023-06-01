import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAddBookMutation } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import Success from "../../ui/Success";

const Form = () => {
  const [addBook, { isLoading, isSuccess, isError }] = useAddBookMutation();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [featured, setFeatured] = useState("");

  const resetForm = () => {
    setName("");
    setPrice("");
    setAuthor("");
    setRating("");
    setThumbnail("");
    setFeatured("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({
      name,
      author,
      thumbnail,
      price,
      rating: Number(rating),
      featured,
    });
    resetForm();
    navigate("/");
  };

  return (
    <form method="POST" onSubmit={handleSubmit} class="book-form">
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

      <button disabled={isLoading} type="submit" class="submit" id="lws-submit">
        Add Book
      </button>
      {isSuccess && <Success message="Book was added successfully" />}
      {isError && <Error message="There was an error adding book!" />}
    </form>
  );
};

export default Form;
