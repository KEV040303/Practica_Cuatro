import React from "react";

const UserCard = ({ id, name, username, email }) => {
  return (
    <>
      <div className="userCard">
        <div className="userCard-img">
          <img
            src={`https://picsum.photos/seed/${id}/300/300`}
            alt="USER IMG"
          />
        </div>
        <div className="texto">
          <h3 className="userCard-name">{name}</h3>
          <p className="userCard-data">@{username}</p>
          <p className="userCard-data">{email}</p>
        </div>
      </div>
    </>
  );
};

export default UserCard;
