import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Question({
  name,
  nextPage,
  lastPage,
  auswahl,
  setAuswahl,
}) {
  useEffect(() => {
    console.log(lastPage);
    console.log(auswahl);
  }, []);
  function add4() {
    setAuswahl([...auswahl, { zahl: 4 }]);
  }
  function add3() {
    setAuswahl([...auswahl, { zahl: 3 }]);
  }
  function add2() {
    setAuswahl([...auswahl, { zahl: 2 }]);
  }
  function add1() {
    setAuswahl([...auswahl, { zahl: 1 }]);
  }
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={add4}>Trifft zu</button>
      <button onClick={add3}>Manchmal</button>
      <button onClick={add2}>Selten</button>
      <button onClick={add1}>Trifft gar nicht zu</button>
      <br />
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        Continue
      </Link>
    </div>
  );
}
