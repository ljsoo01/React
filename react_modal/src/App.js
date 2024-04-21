import logo from './logo.svg';
import './App.css';
import Modal from './components/modal-popup/modal';
import { useState } from 'react';
// .jsx: 자바스크립트에서 HTML형식으로 코딩할 수 있게 해주는 확장자
// index 이름은 폴더까지만 import해도 됨
// state를 만들어서 모달창을 띄우고 지우고


function App() {
  let [showModal, setShowModal] = useState(false); // true면 모달뜨고 false면 안뜨고 

  function modalClose() {
    // 모달을 열기 위해선 setShowModal(true) 했으니깐
    // 모달을 닫기 위해선 ~~~~
    // 리액트에서 화면을 변경하기 위해선 state를 수정한다
    setShowModal(false);
  }

  // 버튼 누르면 setShowModal을 true로 바꾼다 (showModal을 true로 변경하게끔)
  return (
    <div className="App">
      <button onClick={() => setShowModal(true)}>모달창 열기</button>

      {
        // showModal이 true일때만 <Modal /> 실행하게끔 코딩
        // &&: 그리고 (앞과 뒤가 맞으면 true, 하나라도 틀리면 false)
        // &&: 앞에꺼가 틀리면 (false, null, Nan) 뒤에꺼는 어차피 검사안함
        showModal && <Modal id={'modal-1'} onClose={modalClose} _body={<div>모달창 바디</div>} _header={<div><p>Title</p></div>} _footer={<h2>Footer</h2>}/>
      }
    </div>
  );
}

export default App;
