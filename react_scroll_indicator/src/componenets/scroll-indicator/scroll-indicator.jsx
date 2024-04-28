// ScrollIndicator 라는 컴포넌트를 만들어서 App.js에 붙이기
import './scroll-indicator.css';

// 다른 파일에서 사용할 수 있게 export
export default function ScrollIndicator() {

  // useEffect에서 비동기로 fetch(get요청)
  // 서버에서 데이터를 받아옴
  // 1. 서버의 주소
  // 2. 데이터를 저장할 state
  // 3. fetch와 같은 오래 걸리는 작업을 처리할 useEffect

  return (
    <>
      <h2>ScrollIndicator</h2>
    </>
  )
};