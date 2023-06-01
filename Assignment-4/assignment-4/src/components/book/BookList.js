import BookForm from "./BookForm";
import ShowBook from "./ShowBook";

const BookList = () => {
  return (
    <>
      <main class="py-12 2xl:px-6">
        <div class="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
          <ShowBook />
          <div>
            <div class="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
              <h4 class="mb-8 text-xl font-bold text-center">Add New Book</h4>
              <BookForm />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default BookList;
