import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, Button, Row, Col} from 'react-bootstrap';
import './App.css';
import React, { useState } from 'react';
// css를 제공해주는 사이트: bootstrap
// npm install react-bootstrap bootstrap

// 자바스크립트 파일은 확장자명을 생략
// 다른 자바스크립트에서 export한건 import로 가져와서 사용 (변수처럼 사용)
import data from './data'
import {num1, num2, num3} from './data.js'

// 이미지를 사용하려면 import
import mainBG from './main.png'; // 이미지 import

function App() {
  let [items, setItems] = useState(data); // data는 변수니깐 state로
  let [photo, setPhoto] = useState(['/camera.png','/lens.png','/films.png']); // useState import

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={'/logo192.png'} width={'50px'} height={'50px'}/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#features">상세페이지</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <div className={'main-bg'}> </div> 
      <Container>
        <Row>
          {/* data갯수와 image가 바뀔 수 있으니까 useState 처리 
            data: 변수 (사용자 입력 또는 서버로 부터 데이터를 받았을때 변경이 되어도 화면은 안바뀜 ==> useState로 변경)
          */}
          {/* map을 통해서 useState(data) 만큼 반복 */}
          {/* <ItemCol data={data[0]} img={photo[0]}/>
          <ItemCol data={data[1]} img={photo[1]}/>
          <ItemCol data={data[2]} img={photo[2]}/> */}
          {data.map((item, idx) => (
            <ItemCol key={idx} data={item} img={photo[idx]} />
          ))}
        </Row>
      </Container>


      {/* <Container>
        <Row>
          <Col>
            <img src={'/camera.png'} width={'200px'} height={'200px'} />
            <h4>{data[0].title}</h4>
            <p>{data[0].price}원</p>
          </Col>
          <Col>
            <img src={'/lens.png'} width={'200px'} height={'200px'} />
            <h4>{data[1].title}</h4>
            <p>{data[1].price}원</p>
          </Col>
          <Col>
            <img src={'/films.png'} width={'200px'} height={'200px'} />
            <h4>{data[2].title}</h4>
            <p>{data[2].price}원</p>
          </Col>
        </Row>
      </Container> */}

    {/* 
      <div style={{backgroundImage: `url(/logo192.png)`,
      height:'300px', width:'100%',
      backgroundSize:'cover',
      backgroundPosition:'center'}}>

      </div> */}

      <br/>
      <Button variant="primary">기본버튼</Button>{' '}
    </div>
  );
}

export default App;


// 컴포넌트는 맨 앞글자는 대문자
// return에 html(JSX) 코드
// 컴포넌트로 분리를 했으면 props로 받아와야하는 부분을 변경
function ItemCol(props) {
  // 사용하는 곳에서 결정해줘야하는 부분(그때그때 바뀌어야하는 부분)만 props 처리
  return (
    <>
      <Col>
        <img src={props.img} width={'200px'} height={'200px'} />
        <h4>{props.data.title}</h4>
        <p>{props.data.price}원</p>
      </Col>
    </>
  )
}