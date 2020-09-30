import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Question({ name, nextPage, lastPage }) {
  useEffect(() => {
    console.log(lastPage);
  }, []);
  return (
    <div>
      <h1>{name}</h1>
      <button>Trifft zu</button>
      <button>Manchmal</button>
      <button>Selten</button>
      <button>Trifft gar nicht zu</button>
      <br />
      <Link to={lastPage === "true" ? "/" : `/Questions/${nextPage}`}>
        Next Question
      </Link>
    </div>
  );
}
