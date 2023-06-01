import React from "react";
import Nav from "../Nav/Nav";
import { Link } from "react-router-dom";
import Quizes from "./Quizes";
import { useGetQuizesQuery } from "../../../../features/quiz/quizApi";
import Error from "../../../ui/Error";

const Quiz = () => {
  const { data: quizzes, isLoading, isError } = useGetQuizesQuery();
  
  let content = null;
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && quizzes?.length === 0) {
    content = <Error message="No quizes found!" />;
  }

  if (!isLoading && !isError && quizzes?.length > 0) {
    content = quizzes.map((quiz) => <Quizes key={quiz.id} quiz={quiz} />);
  }
  return (
    <div>
      <Nav />
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-full px-5 lg:px-20">
          <div class="px-3 py-20 bg-opacity-10">
            <div class="w-full flex">
              <button class="btn ml-auto">Add Quiz</button>
            </div>
            <div class="overflow-x-auto mt-4">
              <table class="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th class="table-th">Question</th>
                    <th class="table-th">Video</th>
                    <th class="table-th justify-center">Action</th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-slate-600/50">{content}</tbody>
              </table>
            </div>
          </div>
          <br />
          <div className="w-full flex mx-auto max-w-full px-5 lg:px-15">
            <Link
              to="/admin/dashboard"
              className="font-medium text-violet-600 hover:text-violet-500 ml-auto"
            >
              Go back to Dashboard!
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Quiz;
