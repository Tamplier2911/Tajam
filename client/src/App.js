// import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

// components

// pages
import LandingPage from "./pages/LandingPage/LandingPage";

// global styles
// import { GlobalStyles } from "./index.styles";

// sc
import { Container } from "./App.styles";

function App() {
  return (
    <Container>
      {/* <GlobalStyles /> */}
      <header
        style={{
          gridColumn: "full-start / full-end",
          backgroundColor: "transparent",
          height: "6rem",
          position: "fixed",
          color: "white",
          boxShadow: "0 0.2rem 0.4rem white",
          width: "100%",
        }}
      >
        header
      </header>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <footer
        style={{
          gridColumn: "full-start / full-end",
          backgroundColor: "orangered",
          height: "6rem",
        }}
      >
        footer
      </footer>
    </Container>
  );
}

export default App;
