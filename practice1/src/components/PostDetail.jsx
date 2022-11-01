import React from "react";
import { useQuery } from "react-query";
import { fetchIndividualPost } from "../fetchers/PostQuery";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isError, isSuccess, isLoading, error } = useQuery(
    ["IndividualPost", id],
    () => fetchIndividualPost(id),
    { staleTime: 60000 }
  );

  if (isLoading) {
    return <div> loading.....</div>;
  }
  if (isError) {
    return <div> Error: {error}</div>;
  }

  return (
    <div>
      {data ? (
        <div key={data.id}>
          <h3>
            {data.id} - {data.title}
          </h3>
          <p>{data.body}</p>
        </div>
      ) : null}
    </div>
  );
};

export default PostDetail;
