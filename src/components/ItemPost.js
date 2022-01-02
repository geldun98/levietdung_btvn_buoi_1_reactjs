import React from 'react';
import { DeletePost } from './DeletePost';
import { EditPost } from './EditPost';
import { ListComment } from './ListComment';
export const ItemPost = (props) => {
  function handleDeletePost() {
    props.deleteListPost(props.id);
  }
  function handleEditPost() {
    props.editListPost(props.id);
  }
  return (
    <div className="ItemPost">
      <EditPost handleEditPost={handleEditPost}></EditPost>
      <DeletePost handleDeletePost={handleDeletePost}></DeletePost>

      <div className="ItemPost-Top">{props.children}</div>
      <ListComment></ListComment>
    </div>
  );
};
