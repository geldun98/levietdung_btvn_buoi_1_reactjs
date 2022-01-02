import React from 'react';

export const DeletePost = ({ handleDeletePost }) => {
  return (
    <div className="DeletePost" onClick={handleDeletePost}>
      Delete
    </div>
  );
};
