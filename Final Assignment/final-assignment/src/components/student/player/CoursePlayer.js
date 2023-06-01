import React from "react";
import StudentNav from "../Nav/StudentNav";
import Player from "./Player";
import Error from "../../ui/Error";
import { useGetvideosQuery } from "../../../features/videos/videosApi";

const CoursePlayer = () => {
  const { data: videos, isLoading, isError } = useGetvideosQuery();

  let content = null;
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isLoading && !isError && videos?.length === 0) {
    content = <Error message="No Videos found!" />;
  }

  if (!isLoading && !isError && videos?.length > 0) {
    content = videos.map((video) => <Player key={video.id} video={video} />);
  }

  return (
    <div>
      <StudentNav />
      <section class="py-6 bg-primary">{content}</section>
    </div>
  );
};

export default CoursePlayer;
