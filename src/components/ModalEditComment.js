import React from 'react';
import { AddContentEditComment } from './AddContentEditComment';

export const ModalEditComment = ({ contentEditComment, getValueEditComment }) => {
  return (
    <div className="ModalEditComment">
      <AddContentEditComment
        contentEditComment={contentEditComment}
        getValueEditComment={getValueEditComment}
      ></AddContentEditComment>
    </div>
  );
};
