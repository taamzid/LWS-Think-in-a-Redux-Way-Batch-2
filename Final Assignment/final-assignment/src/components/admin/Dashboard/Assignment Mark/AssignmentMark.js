import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import Marks from "./Marks";
import { useGetMarksQuery } from "../../../../features/assignmentMark/markApi";
import Error from "../../../ui/Error";

const AssignmentMark = () => {
  const { data: assignmentMark, isLoading, isError } = useGetMarksQuery();

  let content = null;
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && assignmentMark?.length === 0) {
    content = <Error message="No marks found!" />;
  }

  if (!isLoading && !isError && assignmentMark?.length > 0) {
    content = assignmentMark.map((mark) => (
      <Marks key={mark.id} marks={mark} />
    ));
  }
  return (
    <div>
      <Nav />
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-full px-5 lg:px-20">
          <div class="px-3 py-20 bg-opacity-10">
            <ul class="assignment-status">
              <li>
                Total <span>4</span>
              </li>
              <li>
                Pending <span>3</span>
              </li>
              <li>
                Mark Sent <span>0</span>
              </li>
            </ul>
            <div class="overflow-x-auto mt-4">
              <table class="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th class="table-th">Assignment</th>
                    <th class="table-th">Date</th>
                    <th class="table-th">Student Name</th>
                    <th class="table-th">Repo Link</th>
                    <th class="table-th">Mark</th>
                  </tr>
                </thead>

                <tbody class="divide-y divide-slate-600/50">{content}</tbody>
              </table>
            </div>
          </div>
        </div>
        <br />
        <div className="w-full flex mx-auto max-w-full px-5 lg:px-20">
          <Link
            to="/admin/dashboard"
            className="font-medium text-violet-600 hover:text-violet-500 ml-auto"
          >
            Go back to Dashboard!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AssignmentMark;
