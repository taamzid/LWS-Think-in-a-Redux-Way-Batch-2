import { apiSlice } from "../api/apiSlice";

export const markApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMarks: builder.query({
      query: () => "assignmentMark",
    }),
  }),
});

export const { useGetMarksQuery } = markApi;
