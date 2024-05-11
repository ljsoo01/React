// 1. css 연결
// 2. 컴포넌트 function (첫글자 대문자)
// 3. export default 내보내기
import { Link } from 'react-router-dom';
import './header.css';

export default function Header() {

  return (
    <div>
      <nav className='nav-container'>
        <Link to={"/"}>
          <h1 className='nav-title'>리액트 리덕스 쇼핑 장바구니</h1>
        </Link>

        <ul className='nav-ul'>
          <Link to={'/'}>
            <li className='nav-li'>Home</li>
          </Link>
          <Link to={'/cart'}>
            <li className='nav-li'>Cart</li>
          </Link>
        </ul>
      </nav>
    </div>
  )
}
