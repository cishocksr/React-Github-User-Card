import React from "react";

const UserCard = props => {
  console.log("UserCard: ", props);

  return (
    <div className="git-card">
      <h1>Git User</h1>
      <img src={props.userCards.avatar_url} alt={props.userCards.name} />
      <div className="user-info">
        <h3>{props.userCards.name}</h3>
        <p>{props.userCards.login}</p>
        <p>{props.userCards.location}</p>
      </div>
    </div>
  );
};

export default UserCard;
