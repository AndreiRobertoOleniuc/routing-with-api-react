import React, { useState, useEffect } from "react";
import "./styles/App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
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
            {data.map((item) => (
              <li key={item.id}>
                <Link to={`/Questions/${item.id}`}>{item.id}</Link>
              </li>
            ))}
          </ul>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/Ausgabe">
              <Ausgabe auswahl={auswahl} />
            </Route>
            {data.map((item) => (
              <Route key={item.id} exact path={`/Questions/${item.id}`}>
                <Question
                  name={item.question}
                  nextPage={item.id + 1}
                  lastPage={item.id === data.length ? "true" : "false"}
                  auswahl={auswahl}
                  setAuswahl={setAuswahl}
                />
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
    </div>
  );
}
export default App;
