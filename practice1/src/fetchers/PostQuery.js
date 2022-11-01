import axios from "axios";

export const fetchPosts = async () => {
  console.log("Fetching Posts");

  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const Posts = response.data;
  console.log("Posts :", Posts);
  return Posts;
};

export const fetchIndividualPost = async (id) => {
  try {
    console.log("Fetching a post");

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    const Post = response.data;
    console.log("individial Post: ", Post);
    return Post;
  } catch (err) {
    console.log(err);
  }
};
