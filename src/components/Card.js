import React from "react";
import { Link } from "react-router-dom";

const Card = ({ value }) => {
  return (
    <div className="card">
      <Link to={`/logement/${value.id}`}>
        <img src={value.cover} alt="" />
      </Link>
      <h3>{value.title}</h3>
    </div>
  );
};

export default Card;
