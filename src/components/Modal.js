import React from 'react';
import { AddContentPost } from './AddContentPost';

export const Modal = ({ checkModal, updateListPost }) => {
  return (
    <div className="Modal">
      <AddContentPost checkModal={checkModal} updateListPost={updateListPost}></AddContentPost>
    </div>
  );
};
