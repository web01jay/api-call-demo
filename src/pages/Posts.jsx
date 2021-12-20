import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { deleteUserPost, getUserPosts } from "../axios/apiCalls";
const Posts = () => {
  const [posts, setPosts] = useState([]);

  const { id } = useParams();
  useEffect(() => {
   getUserData();
  }, []);
  
  // get all posts 
  const getUserData = async () => {
    try {
      let response = await getUserPosts(id)
      setPosts(response.data);
    } catch (e) {
      console.log(e, `errors`)
    }
  }

  // delete posts
  const deletePost = async (postId) => {
    try {
      await deleteUserPost(postId)
      alert(`data deleted`);
    } catch (e) {
      console.log(e);
    }
  };

  
  return (
    <div className="container my-5">
      {posts.map((post, index) => {
        return (
          <div className="card rounded text-start mb-3" key={index}>
            <div className="card-header">
              <h5>{post.title}</h5>
            </div>
            <div className="card-body">{post.body}</div>
            <div className="card-footer text-end">
              <button className="btn btn-success">Edit</button>
              <button
                className="btn btn-danger ms-2"
                onClick={() => {
                  deletePost(post.id);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
