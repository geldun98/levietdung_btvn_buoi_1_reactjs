import React from 'react';
import { useState, useRef } from 'react/cjs/react.development';

export const ItemComment = ({ updateComment }) => {
  const inputRef = useRef();

  const [valueInputComment, setValueInputComment] = useState('');
  function handleAddComment() {
    updateComment(valueInputComment);
    inputRef.current.value = '';
  }

  function handleInputComment(e) {
    setValueInputComment(e.target.value);
  }
  return (
    <div className="ItemComment">
      <span>Comment:</span>
      <input ref={inputRef} onChange={handleInputComment}></input>
      <button onClick={handleAddComment}>Add</button>
    </div>
  );
};
