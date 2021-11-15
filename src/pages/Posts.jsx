import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Posts = () => {
    const [posts, setPosts] = useState([])
  const { id } = useParams();
  useEffect(() => {
    // GET request for remote image in node.js
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/posts/?userId=${id}`,
      responseType: "stream",
    }).then(function (response) {
      // console.log(response);
      setPosts(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <div className="container my-5">
      <div className="card rounded text-start mb-3">
        <div className="card-header">
          <h5></h5>
        </div>
        <div className="card-body">
            
        </div>
      </div>
    </div>
  );
};

export default Posts;
