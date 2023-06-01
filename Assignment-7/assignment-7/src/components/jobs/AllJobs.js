import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../../features/job/jobSlice";
import JobList from "./JobList";
import SearchAndFilters from "./SearchAndFilters";
import { useEffect, useState } from "react";

const AllJobs = () => {
  const dispatch = useDispatch();
  const { jobs, isLoading, isError } = useSelector((state) => state.job);
  const [filteredJobs, setFilteredJobs] = useState("");
  const [sort, setSort] = useState("");

  const onSortChange = (value) => {
    setSort(value);
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  let sortedJobs = [...jobs];
  if (sort === "lowToHigh") {
    sortedJobs.sort((a, b) => a.salary - b.salary);
  } else if (sort === "highToLow") {
    sortedJobs.sort((a, b) => b.salary - a.salary);
  }
  sortedJobs = sortedJobs.filter((job) => {
    return (
      job.title.toLowerCase().includes(filteredJobs.toLowerCase()) ||
      job.location.toLowerCase().includes(filteredJobs.toLowerCase())
    );
  });

  let content = null;
  if (isLoading) content = <p>Loading...</p>;

  if (!isLoading && isError)
    content = <p className="error">There was an error occured</p>;

  if (!isLoading && !isError && jobs?.length === 0) {
    content = <p>No jobs found!</p>;
  }

  if (!isLoading && !isError && jobs?.length > 0) {
    content = sortedJobs.map((job) => <JobList key={job.id} job={job} />);
  }

  return (
    <div class="lg:pl-[14rem]  mt-[5.8125rem]">
      <main class="max-w-3xl rounded-lg  mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <SearchAndFilters onSortChange={onSortChange} />
        {content}
      </main>
    </div>
  );
};

export default AllJobs;
