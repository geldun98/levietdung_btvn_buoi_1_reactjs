import React, { useState } from 'react';
import { ItemComment } from './ItemComment';
import { ItemContent } from './ItemContent';
import { ModalEditComment } from './ModalEditComment';

export const ListComment = () => {
  const [arrayComment, setArrayComment] = useState([]);
  const [modalEdit, setModalEdit] = useState(false);
  const [contentEditComment, setContentEditComment] = useState({});
  function updateComment(valueComment) {
    const newArrayComment = [...arrayComment, valueComment];

    setArrayComment(newArrayComment);
  }
  function delteItemComment(id) {
    let newListArrayComment = [...arrayComment];
    newListArrayComment.splice(id, 1);
    setArrayComment(newListArrayComment);
  }
  function editItemComment(id) {
    setModalEdit(!modalEdit);
    let content = arrayComment[id];
    let key = id;
    setContentEditComment({ key, content });
  }

  function getValueEditComment(id, value) {
    setModalEdit(!modalEdit);
    let newListArrayComment = [...arrayComment];
    newListArrayComment[id] = value;
    setArrayComment(newListArrayComment);
  }
  return (
    <div>
      {modalEdit && (
        <ModalEditComment
          contentEditComment={contentEditComment}
          getValueEditComment={getValueEditComment}
        ></ModalEditComment>
      )}
      {arrayComment.map((item, index) => (
        <ItemContent key={index} id={index} delteItemComment={delteItemComment} editItemComment={editItemComment}>
          {item}
        </ItemContent>
      ))}
      <ItemComment updateComment={updateComment}></ItemComment>
    </div>
  );
};
