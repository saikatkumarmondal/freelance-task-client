import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const UserCard = () => {
  const { email } = useParams();
  const [userInfo, setUserInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!email) return;

    fetch(`http://localhost:7777/users/${email}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setUserInfo(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [email]);

  if (loading) return <div>Loading user info...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!userInfo) return <div>No user found with email: {email}</div>;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={userInfo.photo || "https://i.ibb.co/yYXb0Gf/default-avatar.png"}
          alt={userInfo.name || "User photo"}
          className="rounded-xl w-32 h-32 object-cover"
          onError={(e) => {
            e.target.src = "https://i.ibb.co/yYXb0Gf/default-avatar.png";
          }}
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{userInfo.name || "No Name Provided"}</h2>
        <p>{userInfo.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
