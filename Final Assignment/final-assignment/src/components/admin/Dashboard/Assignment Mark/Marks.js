import React from "react";

const Marks = ({ marks }) => {
  const { title, createdAt, student_name, repo_link, mark } = marks;
  return (
    <div>
      <tr>
        <td class="table-td">{title}</td>
        <td class="table-td">{createdAt}</td>
        <td class="table-td">{student_name}</td>
        <td class="table-td">{repo_link}</td>
        <td class="table-td input-mark">
          <input max="100" value={mark} />
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            class="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
        </td>
      </tr>
    </div>
  );
};

export default Marks;
