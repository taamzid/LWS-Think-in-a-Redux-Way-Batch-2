import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useGetvideosQuery } from "../../../../features/videos/videosApi";
import Error from "../../../ui/Error";
import Video from "./Video";

const Videos = () => {
  const { data: videos, isLoading, isError } = useGetvideosQuery();
  let content = null;
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No Videos found!" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Video key={video.id} video={video} />);
  }
  return (
    <div>
      <Nav />
      <section class="py-6 bg-primary">
        <div class="mx-auto max-w-full px-5 lg:px-20">
          <div class="px-3 py-20 bg-opacity-10">
            <Link to="/admin/addVideo">
              <div class="w-full flex">
                <button class="btn ml-auto">Add Video</button>
              </div>
            </Link>
            <div class="overflow-x-auto mt-4">
              <table class="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                  <tr>
                    <th class="table-th">Video Title</th>
                    <th class="table-th">Description</th>
                    <th class="table-th">Action</th>
                  </tr>
                </thead>

                {content}
              </table>
            </div>
          </div>
          <br />
        </div>
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

export default Videos;
