import React, { useState, useEffect } from "react";

export default function Ausgabe({ auswahl, setAuswahl, initial }) {
  var sum = "";
  const [res, setRes] = useState("");
  useEffect(() => {
    for (let i = 0; i < auswahl.length; i++) {
      sum = sum.concat(auswahl[i].zahl);
    }
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      `http://localhost:8080/calculateRate?answers=${sum}`
    );
    const respone = await data.json();
    console.log(respone.procent);
    setRes(respone.procent);

    //Um Daten Initial wieder zu Setzten
    const fetchData = await fetch("http://localhost:8080/getAllQuestion");
    const questions = await fetchData.json();
    for (let i = 1; i <= questions.length; i++) {
      initial = [...initial, { id: i, zahl: 0 }];
    }
    setAuswahl(initial);
  };
  return (
    <div>
      <h1>Ausgabe</h1>
      <h3>Sie passen zu {res}% der IMS</h3>
    </div>
  );
}
