import React, { useState, useEffect } from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Question from "./components/Question";
import Home from "./components/Home";
import Ausgabe from "./components/Ausgabe";

function App() {
  useEffect(() => {
    fetchData();
  }, []);
  const [data, setData] = useState([]);
  const [auswahl, setAuswahl] = useState([]);
  const fetchData = async () => {
    const fetchData = await fetch("http://localhost:8080/getAllQuestion");
    const questions = await fetchData.json();
    setData(questions);
  };
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/Questions/1">Eignungs Test</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Ausgabe">
              <Ausgabe auswahl={auswahl} setAuswahl={setAuswahl} />
            </Route>
            <Route path="/public">
              <Home />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            {data.map((item) => (
              <PrivateRoute key={item.id} exact path={`/Questions/${item.id}`}>
                <Question
                  name={item.question}
                  nextPage={item.id + 1}
                  lastPage={item.id === data.length ? "true" : "false"}
                  auswahl={auswahl}
                  setAuswahl={setAuswahl}
                />
              </PrivateRoute>
            ))}
          </Switch>
          <ul>
            {data.map((item) => (
              <li key={item.id}>
                <Link to={`/Questions/${item.id}`}>{item.id}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Router>
    </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb, name, vorname) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};
// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const [name, setName] = useState("");
  const [vorname, setVorname] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const changeVorname = (e) => {
    setVorname(e.target.value);
    console.log(vorname);
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

export default App;
