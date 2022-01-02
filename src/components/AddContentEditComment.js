import React, { useState } from 'react';

export const AddContentEditComment = ({ contentEditComment, getValueEditComment }) => {
  const [valueInput, setValueInput] = useState(contentEditComment.content);

  function handleConfirm() {
    getValueEditComment(contentEditComment.key, valueInput);
  }
  function handleInput(e) {
    setValueInput(e.target.value);
  }
  return (
    <div className="AddContentEditComment">
      <textarea defaultValue={contentEditComment.content} onChange={handleInput}></textarea>
      <button onClick={handleConfirm}>Confirm</button>
    </div>
  );
};
