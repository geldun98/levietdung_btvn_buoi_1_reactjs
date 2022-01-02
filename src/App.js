import { useState } from 'react';
import './App.scss';
import { AddPost } from './components/AddPost';
import { ListPost } from './components/ListPost';
import { Modal } from './components/Modal';
import { ModalEditPost } from './components/ModalEditPost';

function App() {
  const [modal, setModal] = useState(false);
  const [modaledit, setModalEdit] = useState(false);
  const [listArrayPost, setListArrayPost] = useState([]);
  const [contentEdit, setContentEdit] = useState({});

  function updateListPost(valueInput) {
    let newListArrayPost = [...listArrayPost, valueInput];
    setListArrayPost(newListArrayPost);
  }
  function deleteListPost(id) {
    let newListArrayPost = [...listArrayPost];
    newListArrayPost.splice(id, 1);
    setListArrayPost(newListArrayPost);
  }
  function editListPost(id) {
    setModalEdit(!modaledit);
    let getContent = listArrayPost[id];
    let getKey = id;
    setContentEdit({ getKey: getKey, getContent: getContent });
  }
  function getValueEditPost(id, value) {
    let newListArrayPost = [...listArrayPost];
    newListArrayPost[id] = value;
    setListArrayPost(newListArrayPost);
    setModalEdit(!modaledit);
  }
  function checkModal() {
    setModal(!modal);
  }
  return (
    <div className="App">
      {modal && <Modal checkModal={checkModal} updateListPost={updateListPost}></Modal>}
      <AddPost checkModal={checkModal} updateListPost={updateListPost}></AddPost>
      <ListPost listArrayPost={listArrayPost} deleteListPost={deleteListPost} editListPost={editListPost}></ListPost>
      {modaledit && <ModalEditPost contentEdit={contentEdit} getValueEditPost={getValueEditPost}></ModalEditPost>}
    </div>
  );
}

export default App;
