import React from 'react';

export const DeleteComment = ({ handleDelteComment }) => {
  return (
    <div className="DeleteComment" onClick={handleDelteComment}>
      Delete
    </div>
  );
};
