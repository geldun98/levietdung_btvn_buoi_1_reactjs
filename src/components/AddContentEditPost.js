import React, { useState } from 'react';

export const AddContentEditPost = ({ contentEdit, getValueEditPost }) => {
  const [valueInput, setValueInput] = useState(contentEdit.getContent);

  function handleInput(e) {
    setValueInput(e.target.value);
  }
  function handleConfirm() {
    getValueEditPost(contentEdit.getKey, valueInput);
  }
  return (
    <div className="AddContentEditPost">
      <textarea defaultValue={contentEdit.getContent} onChange={handleInput}></textarea>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};
