import React from 'react';
import { AddContentEditPost } from './AddContentEditPost';

export const ModalEditPost = ({ contentEdit, getValueEditPost }) => {
  return (
    <div className="ModalEditPost">
      <AddContentEditPost contentEdit={contentEdit} getValueEditPost={getValueEditPost}></AddContentEditPost>
    </div>
  );
};
