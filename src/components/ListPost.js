import React from 'react';
import { ItemPost } from './ItemPost';

export const ListPost = ({ listArrayPost, deleteListPost, editListPost }) => {
  return (
    <div className="ListPost">
      {listArrayPost.map((itemPost, index) => (
        <ItemPost key={index} id={index} deleteListPost={deleteListPost} editListPost={editListPost}>
          {itemPost}
        </ItemPost>
      ))}
    </div>
  );
};
