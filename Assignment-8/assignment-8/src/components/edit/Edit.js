import React from "react";
import { useParams } from "react-router-dom";
import { useGetBookQuery } from "../../features/api/apiSlice";
import Error from "../../ui/Error";
import EditForm from "./EditForm";

const Edit = () => {
  const { bookId } = useParams();
  const { data: book, isLoading, isError } = useGetBookQuery(bookId);

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error!" />;
  }
  if (!isLoading && !isError && book?.id) {
    content = <EditForm book={book} />;
  }

  return (
    <main class="py-6 2xl:px-6">
      <div class="container">
        <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
          <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
          {content}
        </div>
      </div>
    </main>
  );
};

export default Edit;
