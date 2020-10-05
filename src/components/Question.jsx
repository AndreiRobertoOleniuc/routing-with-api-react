import React, { useEffect } from "react";
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
  useEffect(() => {
    console.log("");
    console.log(`This is the ID i got out of the UseLocation ${intId}`);
    auswahl.map((quesiton) => {
      console.log(`This is my Question ID from the Map ${quesiton.id}`);
    });
  }, []);
  function add4() {
    setAuswahl([...auswahl, { id: nextPage - 1, zahl: 4 }]);
    auswahl.map((que) => {
      if (intId === que.id) {
        console.log("Yes");
      }
    });
  }
  function add3() {
    setAuswahl([...auswahl, { id: nextPage - 1, zahl: 3 }]);
    auswahl.map((que) => {
      if (intId === que.id) {
        console.log("Yes");
      }
    });
  }
  function add2() {
    setAuswahl([...auswahl, { id: nextPage - 1, zahl: 2 }]);
    auswahl.map((que) => {
      if (intId === que.id) {
        console.log("Yes");
      }
    });
  }
  function add1() {
    setAuswahl([...auswahl, { id: nextPage - 1, zahl: 1 }]);
    auswahl.map((que) => {
      if (intId === que.id) {
        console.log("Yes");
      }
    });
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
