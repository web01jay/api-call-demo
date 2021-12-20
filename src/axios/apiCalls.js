import axios from "axios";

export const deleteUserPost = async (postId) => {
  return ( await axios({
    method: "delete",
    url: `https://jsonplaceholder.typicode.com/posts/${postId}`,
  }))
};

export const getUserPosts = async (userId) => {
  return ( await axios({
    method: "get",
    url: `https://jsonplaceholder.typicode.com/posts/?userId=${userId}`,
  }))
};

export const getUserProfile = async (userId) => {
    return ( await axios({
        method: "get",
        url: `https://jsonplaceholder.typicode.com/users/?id=${userId}`,
    }))
}

