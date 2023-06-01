import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loading from "../ui/Loading";
import RelatedBlogListItem from "./RelatedBlogListItem";

const RelatedBlogList = ({ currentBlogId, tags }) => {
  const dispatch = useDispatch();
  const { relatedBlogs, isLoading, isError, error } = useSelector(
    (state) => state.relatedBlogs
  );

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id: currentBlogId }));
  }, [dispatch, tags, currentBlogId]);

  console.log(tags);

  // decide what to render
  let content = null;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError) {
    content = <div className="col-span-12">{error}</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length === 0) {
    content = <div className="col-span-12">No related Blogs found!</div>;
  }
  if (!isLoading && !isError && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => (
      <RelatedBlogListItem key={blog.id} blog={blog} />
    ));
  }

  return (
    <aside>
      <h4 class="mb-4 text-xl font-medium" id="lws-relatedPosts">
        Related Posts
      </h4>
      {content}
    </aside>
  );
};

export default RelatedBlogList;
