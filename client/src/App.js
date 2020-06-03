// import "./App.scss";
import React from "react";
import { Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";

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
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
