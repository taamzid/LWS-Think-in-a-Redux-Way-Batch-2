import React, { useState } from "react";
import { useGetBooksQuery } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import VideoLoader from "../../ui/VideoLoader";
import Book from "./Book";

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery();

  const [activeFilter, setActiveFilter] = useState("all");
  const filteredBooks =
    activeFilter === "all" ? books : books.filter((book) => book.featured);

  const handleFilterAll = () => {
    setActiveFilter("all");
  };

  const handleFilterFeatured = () => {
    setActiveFilter("featured");
  };

  let content = null;

  if (isLoading) {
    content = (
      <>
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
        <VideoLoader />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && books?.length === 0) {
    content = <Error message="No books found!" />;
  }

  if (!isLoading && !isError && books?.length > 0) {
    content = filteredBooks.map((book) => <Book key={book.id} book={book} />);
  }

  return (
    <main class="py-12 px-6 2xl:px-6 container">
      <div class="order-2 xl:-order-1">
        <div class="flex items-center justify-between mb-12">
          <h4 class="mt-2 text-xl font-bold">Book List</h4>

          <div class="flex items-center space-x-4">
            <button
              class={`lws-filter-btn ${
                activeFilter === "all" ? "active-filter" : ""
              }`}
              onClick={handleFilterAll}
            >
              All
            </button>
            <button
              class={`lws-filter-btn ${
                activeFilter === "featured" ? "active-filter" : ""
              }`}
              onClick={handleFilterFeatured}
            >
              Featured
            </button>
          </div>
        </div>
        <div class="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {content}
        </div>
      </div>
    </main>
  );
};

export default Books;
