import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../../redux/bookList/thunk/addBooks";

const BookForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [thumbnail, setThumbnail] = useState();
  const [price, setPrice] = useState();
  const [rating, setRating] = useState();
  const [featured, setFeatured] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    let booksObj = {
      name,
      author,
      thumbnail,
      price,
      rating,
      featured,
    };
    dispatch(addBook(booksObj));
    setName("");
    setAuthor("");
    setThumbnail("");
    setPrice("");
    setRating("");
    setFeatured("");
  };

  return (
    <div>
      <form class="book-form">
        <div class="space-y-2">
          <label for="name">Book Name</label>
          <input
            required
            class="text-input"
            type="text"
            id="input-Bookname"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="category">Author</label>
          <input
            required
            class="text-input"
            type="text"
            id="input-Bookauthor"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>

        <div class="space-y-2">
          <label for="image">Image Url</label>
          <input
            required
            class="text-input"
            type="text"
            id="input-Bookthumbnail"
            name="thumbnail"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </div>

        <div class="grid grid-cols-2 gap-8 pb-4">
          <div class="space-y-2">
            <label for="price">Price</label>
            <input
              required
              class="text-input"
              type="number"
              id="input-Bookprice"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div class="space-y-2">
            <label for="quantity">Rating</label>
            <input
              required
              class="text-input"
              type="number"
              id="input-Bookrating"
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
            id="input-Bookfeatured"
            type="checkbox"
            name="featured"
            class="w-4 h-4"
            checked={featured}
            onChange={(e) => setFeatured(e.target.checked)}
          />
          <label for="featured" class="ml-2 text-sm">
            {" "}
            This is a featured book{" "}
          </label>
        </div>

        <button type="submit" class="submit" id="submit" onClick={handleSubmit}>
          Add Book
        </button>
      </form>
    </div>
  );
};

export default BookForm;
