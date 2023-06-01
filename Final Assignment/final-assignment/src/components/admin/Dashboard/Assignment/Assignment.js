import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Assignments from "./Assignments";
import Error from "../../../ui/Error";
import { useGetAssignmentsQuery } from "../../../../features/assignment/assignmentApi";

const Assignment = () => {
  const { data: assignments, isLoading, isError } = useGetAssignmentsQuery();

  let content = null;
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && assignments?.length === 0) {
    content = <Error message="No Assignments found!" />;
  }

  if (!isLoading && !isError && assignments?.length > 0) {
    content = assignments.map((assignment) => (
      <Assignments key={assignment.id} assignment={assignment} />
    ));
  }
  return (
    <div>
      <Nav />
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-full px-5 lg:px-20">
          <div class="px-3 py-20 bg-opacity-10">
            <Link to="/admin/addAssignment">
              <div class="w-full flex">
                <button class="btn ml-auto">Add Assignment</button>
              </div>
            </Link>
            <div class="overflow-x-auto mt-4">
              <table class="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th class="table-th">Title</th>
                    <th class="table-th">Video Title</th>
                    <th class="table-th">Mark</th>
                    <th class="table-th">Action</th>
                  </tr>
                </thead>

                {content}
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

export default Assignment;
