import React from 'react';

export const AddPost = ({ checkModal }) => {
  function handleModalPost() {
    checkModal();
  }
  return (
    <div className="AddPost" onClick={handleModalPost}>
      <p>Bạn đang nghĩ gì ?</p>
    </div>
  );
};
