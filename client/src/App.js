// import "./App.scss";
import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

// context
import AppStore from "./contexts/GlobalContext/globalContext";

// components
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import ChatButton from "./components/ChatButton/ChatButton";
import ChatWindow from "./components/ChatWindow/ChatWindow";

// pages
import LandingPage from "./pages/LandingPage/LandingPage";

// global styles
import { GlobalStyles } from "./index.styles";

// sc
import { Container } from "./App.styles";

function App() {
  const { chat } = useContext(AppStore);
  const { chatHidden } = chat;
  return (
    <Container>
      <GlobalStyles />
      <Header />
      <ChatButton />
      {chatHidden ? null : <ChatWindow />}
      <Menu />
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
      <Footer />
    </Container>
  );
}

export default App;
