import React, { useEffect, useState } from "react";
import axios from "axios";

export const AfterLogin = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // GET request for remote image in node.js
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
      responseType: "stream",
    }).then(function (response) {
      // console.log(response);
      setUser(response.data);
      console.log(user, "users" );
      // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
    });
  }, []);
  return (
    <>
      <div className="page-content">
        <div className="container py-5">
          <h2 className="user-list">Users</h2>
          {user.map((user, uId) => (
            <div key={uId} className="card rounded text-start mb-3">
              <div className="card-header">
                <h5>{user.name}</h5>
              </div>
              <div className="card-body">
                <p className="font-weight-bold">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Tempora, ratione eaque. Minus, a placeat sit aut distinctio
                  numquam delectus in laboriosam neque reiciendis vitae et
                  repellendus veniam sed non itaque.
                </p>
              </div>
              <div className="card-footer text-end">
                <a href="#!" className="btn btn-success">
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
