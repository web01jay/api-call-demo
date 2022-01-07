import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getUserProfile } from "../axios/apiCalls";

const UserProfile = () => {
  const [userDetail, setUserDetail] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  useEffect(() => {
    getUserProfileData()
  }, []);
  const getUserProfileData = async () => {
    setIsLoading(true)
    try {
      const response = await getUserProfile(id)
      setUserDetail(response.data[0]);
      console.log(response, "response")
    } catch (e) {
      console.log(e)
    }
    setIsLoading(false)
  }
  return (
    <div className="container my-5">
      {isLoading === true ? (
        <p className="text-center my-5">Loading</p>
      ) : (userDetail ? (<>
            <div className="card rounded text-start mb-3">
          <div className="card-header">
            <h5>{userDetail?.name}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <span className="font-weight-bold">User Name: </span>
                <span>{userDetail?.username}</span>
              </div>
              <div className="col-md-6">
                <span className="font-weight-bold">Name: </span>
                <span>{userDetail?.name}</span>
              </div>
              <div className="col-md-6">
                <span className="font-weight-bold">Email: </span>
                <span>{userDetail?.email}</span>
              </div>
              <div className="col-md-6">
                <span className="font-weight-bold">Phone: </span>
                <span>{userDetail?.phone}</span>
              </div>
              <div className="col-md-6">
                <span className="font-weight-bold">Company: </span>
                <span>{userDetail?.company?.name}</span>
              </div>
              <div className="col-md-6">
                <span className="font-weight-bold">Catch Phrase: </span>
                <span>{userDetail?.company?.catchPhrase}</span>
              </div>
              <div className="col-md-12">
                <span className="font-weight-bold">Address: </span>
                <span>
                  {userDetail?.address?.street}, {userDetail?.address?.suite},{" "}
                  {userDetail?.address?.city}, {userDetail?.address?.zipcode}
                </span>
              </div>
            </div>
          </div>
          <div className="card-footer text-end">
            <button
              onClick={() => {
                history.push(`/users/${id}/posts`);
              }}
              className="btn btn-success"
            >
              View Posts
            </button>
          </div>
        </div>
        </>) : (<p>
          No details Found.. :(
        </p>)
      )}
    </div>
  );
};

export default UserProfile;
