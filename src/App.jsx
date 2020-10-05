import React, { useState, useEffect } from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Question from "./components/Question";
import Home from "./components/Home";
import Ausgabe from "./components/Ausgabe";
import LoginPage from "./auth/LoginPage";
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  let initial = [];
  const [data, setData] = useState([]);
  const [auswahl, setAuswahl] = useState(initial);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    console.log("Ascy Running");
    const fetchData = await fetch("http://localhost:8080/getAllQuestion");
    const questions = await fetchData.json();
    setData(questions);
    console.log(questions);
    for (let i = 1; i <= questions.length; i++) {
      initial = [...initial, { id: i, zahl: 0 }];
    }
    setAuswahl(initial);
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
              <Ausgabe
                auswahl={auswahl}
                setAuswahl={setAuswahl}
                initial={initial}
              />
            </Route>
            <Route path="/public">
              <Home />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            {data.map((questions) => (
              <PrivateRoute
                key={questions.id}
                exact
                path={`/Questions/${questions.id}`}
              >
                <Question
                  name={questions.question}
                  nextPage={questions.id + 1}
                  lastPage={questions.id === data.length ? "true" : "false"}
                  auswahl={auswahl}
                  setAuswahl={setAuswahl}
                />
              </PrivateRoute>
            ))}
          </Switch>
          <ul>
            {data.map((questions) => (
              <li key={questions.id}>
                <Link to={`/Questions/${questions.id}`}>{questions.id}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Router>
    </div>
  );
}

export default App;
