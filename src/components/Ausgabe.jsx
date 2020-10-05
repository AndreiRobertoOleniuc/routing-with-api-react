import React, { useState, useEffect } from "react";

export default function Ausgabe({ auswahl, setAuswahl, initial }) {
  var sum = "";
  const [res, setRes] = useState("");
  console.log(auswahl);
  useEffect(() => {
    for (let i = 0; i < auswahl.length; i++) {
      console.log(auswahl[i].zahl);
      sum = sum.concat(auswahl[i].zahl);
    }
    console.log(sum);
    fetchData();
  }, []);
  const fetchData = async () => {
    console.log(sum);
    const data = await fetch(
      `http://localhost:8080/calculateRate?answers=${sum}`
    );
    const respone = await data.json();
    console.log(respone.procent);
    setRes(respone.procent);
    setAuswahl(initial);
  };
  return (
    <div>
      <h1>Ausgabe</h1>
      <h3>Sie passen zu {res}% der IMS</h3>
    </div>
  );
}
