import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Question({
  name,
  nextPage,
  lastPage,
  auswahl,
  setAuswahl,
}) {
  const location = useLocation();
  var idOfQuestion = location.pathname.substring(11, location.pathname.length);
  var intId = parseInt(idOfQuestion);
  if (intId === 1) {
    console.log("New Run");
  }
  function add4() {
    setAuswahl(
      auswahl.map((item) => {
        if (item.id === intId) {
          console.log(4);
          return {
            ...item,
            zahl: 4,
          };
        }
        return item;
      })
    );
  }
  function add3() {
    setAuswahl(
      auswahl.map((item) => {
        if (item.id === intId) {
          console.log(3);
          return {
            ...item,
            zahl: 3,
          };
        }
        return item;
      })
    );
  }
  function add2() {
    setAuswahl(
      auswahl.map((item) => {
        if (item.id === intId) {
          console.log(2);
          return {
            ...item,
            zahl: 2,
          };
        }
        return item;
      })
    );
  }
  function add1() {
    setAuswahl(
      auswahl.map((item) => {
        if (item.id === intId) {
          console.log(1);
          return {
            ...item,
            zahl: 1,
          };
        }
        return item;
      })
    );
  }
  return (
    <div>
      <h1>{name}</h1>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add4}>Trifft zu</button>
      </Link>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add3}>Manchmal</button>
      </Link>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add2}>Selten</button>
      </Link>
      <Link to={lastPage === "true" ? "/Ausgabe" : `/Questions/${nextPage}`}>
        <button onClick={add1}>Trifft gar nicht zu</button>
      </Link>
    </div>
  );
}
