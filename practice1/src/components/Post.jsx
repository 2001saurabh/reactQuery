import React from "react";
import { QueryClient, useQuery } from "react-query";
import { fetchPosts } from "../fetchers/PostQuery";

const Post = () => {
  console.log("render");

  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["Posts"],
    fetchPosts,
    { staleTime: 60000 }
  );

  // if getting fetch then
  if (isLoading) {
    console.log("loading");
    return <div> loading........</div>;
  }

  if (isError) {
    console.log("error");
    return <div>error .......</div>;
  }
  return (
    <div>
        {/* data is comming in array form so first we have to map it and then it will 
        be in individual objects so we can easily use (.) to extract details like (posts.id) */}
      {data &&
        data.map((posts) => (
          <div key={posts.id}>
            <h3>
              {posts.id} - {posts.title}
            </h3>
            <p>{posts.body}</p>
          </div>
        ))}
    </div>
  );
};

export default Post;
