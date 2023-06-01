import { apiSlice } from "../api/apiSlice";

export const assignmentsApi = apiSlice.injectEndpoints({
  tagTypes: ["Assignments"],
  endpoints: (builder) => ({
    getAssignments: builder.query({
      query: () => "assignments",
      providesTags: ["Assignments"],
    }),
    addAssignment: builder.mutation({
      query: (data) => ({
        url: "/assignments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Assignments"],
    }),
  }),
});

export const { useGetAssignmentsQuery, useAddAssignmentMutation } =
  assignmentsApi;
