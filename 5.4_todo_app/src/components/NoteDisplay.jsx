import React from "react";
import Showdown from "showdown";

const NoteDisplay = ({ title, content }) => {
  const converter = new Showdown.Converter();
  const noteContent = converter.makeHtml(content);

  function createMarkup(text) {
    return { __html: text };
  }

  return (
    <>
      <h1 id="notetitle">{title}</h1>
      <div
        id="notecontent"
        dangerouslySetInnerHTML={createMarkup(noteContent)}
      />
    </>
  );
};

export default NoteDisplay;
