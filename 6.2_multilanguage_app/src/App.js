import React, { useState } from "react";
import { IntlProvider } from "react-intl";
import { FormattedMessage } from "react-intl";
import messagesFr from "./translation/fr";
import messagesEn from "./translation/en";

const messages = {
  fr: messagesFr,
  en: messagesEn,
};

const App = () => {
  const [language, setLanguage] = useState("fr");
  const switchLang = () => {
    if (language === "fr") {
      setLanguage("en");
      return;
    }
    setLanguage("fr");
  };

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <button onClick={switchLang}>Changer de langue</button>
      <h1>
        <FormattedMessage id="Titre" />
      </h1>
      <p>
        <FormattedMessage id="Présentation" />
      </p>
      <p>
        <FormattedMessage id="Travaux" />
      </p>
      <h3>
        <FormattedMessage id="Contact" />
      </h3>
    </IntlProvider>
  );
};

export default App;
