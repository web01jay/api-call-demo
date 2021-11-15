import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import DataTable from "react-data-table-component";

export const Users = () => {
  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setIsLoading(true);
    // GET request for remote image in node.js
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/users",
      responseType: "stream",
    }).then(function (response) {
      // console.log(response);
      setUser(response.data);
      console.log(user, "users");
      // response.data.pipe(fs.createWriteStream("ada_lovelace.jpg"));
      setIsLoading(false)
    });
  }, []);
  const columns = [
    {
      name: "Id",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Actions",
      cell: (row) => {
        return (
          <button
            className="btn"
            onClick={() => {
              history.push(`/users/${row.id}`);
            }}
          >
            view
          </button>
        );
      },
    },
  ];
  return (
    <>
      <div className="page-content">
        <div className="container py-5">
          <h2 className="user-list">Users</h2>
          {isLoading === true ? (
            <p className="text-center my-5">Loading</p>
          ) : (
            <DataTable columns={columns} data={user} />
          )}
        </div>
      </div>
    </>
  );
};
