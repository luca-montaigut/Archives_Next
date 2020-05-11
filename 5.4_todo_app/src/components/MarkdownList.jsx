import React from 'react';

const MarkdownInput = ({ handleChange, saveNote, title, content, id }) => (
  <>
    <div id="notetitle">
      <input
        type="text"
        name="title"
        value={title || ''}
        placeholder="Titre de votre notre"
        onChange={(e) => handleChange({ title: e.currentTarget.value })}
      />
    </div>
    <div>
      <textarea
        type="text"
        name="content"
        value={content || ''}
        placeholder="Contenu de votre note ici..."
        onChange={(e) => handleChange({ content: e.currentTarget.value })}
      />
    </div>
    <div>
      <button
        onClick={() => {
          saveNote({ id, title, content });
        }}
      >
        {' '}
        Sauvegarde{' '}
      </button>
    </div>
  </>
);

export default MarkdownInput;
