import React from "react";
import Nav from "../../Nav/Nav";
import Form from "./Form";

const AddAssignment = () => {
  return (
    <>
      <Nav />
      <main class="py-6 2xl:px-6">
        <div class="container">
          <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 class="mb-8 text-xl font-bold text-center">
              Add New Assignment
            </h4>
            <Form />
          </div>
        </div>
      </main>
    </>
  );
};

export default AddAssignment;
