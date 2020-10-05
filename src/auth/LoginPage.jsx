import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import fakeAuth from "./fakeAuth";

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const [name, setName] = useState("");
  const [vorname, setVorname] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeVorname = (e) => {
    setVorname(e.target.value);
  };
  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    fakeAuth.authenticate(
      () => {
        history.replace(from);
      },
      name,
      vorname
    );
  };

  return (
    <div>
      <h1>
        Geben sie bitte Ihre Benutzerdaten ein um den EignungsTest durch zu
        führen
      </h1>
      <input type="text" placeholder="Nachname" onChange={changeName} />
      <br />
      <input type="text" placeholder="Vorname" onChange={changeVorname} />
      <br />
      <button onClick={login}>Test Starten</button>
    </div>
  );
}

export default LoginPage;
