import React, { useState } from 'react';

export const AddContentPost = ({ checkModal, updateListPost }) => {
  const [valueInput, setValueInput] = useState('');

  function removeAddPost() {
    checkModal();
  }
  function handleAddPost() {
    checkModal();
    updateListPost(valueInput);
  }

  function handleInputPost(e) {
    setValueInput(e.target.value);
  }
  return (
    <div className="AddContentPost">
      <span id="closeAddPost" onClick={removeAddPost}>
        X
      </span>
      <textarea type="textarea" id="inputPost" onChange={handleInputPost}></textarea>
      <button id="submitPost" onClick={handleAddPost}>
        Đăng
      </button>
    </div>
  );
};
