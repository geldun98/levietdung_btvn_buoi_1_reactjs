import React from 'react';

export const EditPost = ({ handleEditPost }) => {
  return (
    <div className="EditPost" onClick={handleEditPost}>
      Edit
    </div>
  );
};
