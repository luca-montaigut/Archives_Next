import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { IntlProvider } from "react-intl";
import messagesFr from "./translation/fr";
import messagesEn from "./translation/en";

import Navbar from "./pages/components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Works from "./pages/Works";

import "antd/dist/antd.css";
import "./App.css";

import { Layout } from "antd";

const { Header, Content } = Layout;

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const [language, setLanguage] = useState("fr");

  useEffect(() => {
    if (localStorage.getItem("lang")) {
      setLanguage(localStorage.getItem("lang"));
    }
  }, []);

  const changeLanguage = (e) => {
    if (language === "fr") {
      setLanguage("en");
      localStorage.setItem("lang", "en");
    } else {
      setLanguage("fr");
      localStorage.setItem("lang", "fr");
    }
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Header className="header">
            <Navbar language={language} changeLanguage={changeLanguage} />
          </Header>
          <Layout>
            <Content
              className="content-back"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/works">
                  <Works />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Router>
      </Layout>
    </IntlProvider>
  );
};

export default App;
