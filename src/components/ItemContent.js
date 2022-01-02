import React from 'react';
import { DeleteComment } from './DeleteComment';
import { EditComment } from './EditComment';
export const ItemContent = (props) => {
  function handleDelteComment() {
    props.delteItemComment(props.id);
  }
  function handleEditComment() {
    props.editItemComment(props.id);
  }
  return (
    <div className="ItemContent">
      <EditComment handleEditComment={handleEditComment}></EditComment>
      <DeleteComment handleDelteComment={handleDelteComment}></DeleteComment>

      {props.children}
    </div>
  );
};
