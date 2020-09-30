import React from "react";
import { Link } from "react-router-dom";
export default function Question({ name, nextPage, lastPage }) {
  return (
    <div>
      <h1>{name}</h1>
      <Link to={`/Questions/${nextPage}`}>Next Question</Link>
    </div>
  );
}
