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
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add4}>Trifft zu</button>
      </Link>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add3}>Trifft zu</button>
      </Link>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add2}>Trifft zu</button>
      </Link>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add1}>Trifft zu</button>
      </Link>
    </div>
  );
}
