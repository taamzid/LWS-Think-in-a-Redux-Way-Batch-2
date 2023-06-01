import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import BlogDescription from "../components/description/BlogDescription";
import RelatedBlogList from "../components/list/RelatedBlogList";
import Loading from "../components/ui/Loading";
import { fetchBlog } from "../features/blog/blogSlice";

const Blog = () => {
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );
  const dispatch = useDispatch();
  const { blogId } = useParams();

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch, blogId]);

  const { id, tags } = blog || {};

  let content = null;
  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isLoading && !isError && !blog?.id) {
    content = <div className="col-span-12">No blog found!</div>;
  }

  if (!isLoading && !isError && blog?.id) {
    content = (
      <section class="post-page-container">
        <BlogDescription blog={blog} />
        <RelatedBlogList currentBlogId={id} tags={tags} />
      </section>
    );
  }

  return (
    <>
      <div class="container mt-8">
        <Link
          to="/"
          class="inline-block text-gray-600 home-btn"
          id="lws-goHome"
        >
          <i class="mr-2 fa-solid fa-house"></i>Go Home
        </Link>
      </div>
      {content}
    </>
  );
};

export default Blog;
