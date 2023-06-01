import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Sidebar from "../sidebar/Sidebar";
import Loading from "../ui/Loading";
import BlogGridItem from "./BlogGridItem";
const BlogGrid = () => {
  const [sort, setSort] = useState("");
  const dispatch = useDispatch();

  const onSortChange = (value) => {
    setSort(value);
  };

  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  const [filteredBlogs, setFilteredBlogs] = useState(
    JSON.parse(localStorage.getItem("filteredBlogs")) || blogs
  );

  useEffect(() => {
    dispatch(fetchBlogs());
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("filteredBlogs", JSON.stringify(filteredBlogs));
  }, [filteredBlogs]);

  const onFilterChange = (value) => {
    if (value === "saved") {
      dispatch(fetchBlogs()).then(() => {
        setFilteredBlogs(blogs.filter((blog) => blog.isSaved));
      });
    } else {
      setFilteredBlogs(blogs);
    }
  };

  const sortedBlogs =
    sort === "newest"
      ? [...filteredBlogs].sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : sort === "most_liked"
      ? [...filteredBlogs].sort((a, b) => b.likes - a.likes)
      : filteredBlogs;

  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;
  if (!isError && !isLoading && blogs?.length === 0) {
    content = <div className="col-span-12">No blogs found!</div>;
  }
  if (!isError && !isLoading && blogs?.length > 0) {
    content = sortedBlogs.map((blog) => (
      <BlogGridItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <>
      <Sidebar onSortChange={onSortChange} onFilterChange={onFilterChange} />
      <main id="lws-postContainer">
        <div class="post-container">{content}</div>
      </main>
    </>
  );
};

export default BlogGrid;
