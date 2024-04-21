import './modal.css';

// Modal 컴포넌트 만들어서 App.js에서 사용
// 컴포넌트 만든다음 내보낸다 (컴포넌트는 대문자로 시작하는 함수)

export default function Modal({id, _header, _body, _footer, onClose}) {

  return (
    <>
    {/* id값은 사용하는 곳에서 설정할 수 있게 해보자
    ==> 매개변수 (사용하는 곳에서 결정하게한다)
    ==> 컴포넌트의 매개변수 1. props 2. {} 직접생성

    id값을 사용하는 곳에서 넣어줬으면 그것으로 설정하고,
    안넣었으면 'Modal'로 아이디 설정
    &&: (그리고) 앞에꺼가 틀렸으면 어차피 틀린거여서 뒤에꺼 무시
    ||: (또는) 앞에꺼가 맞았으면 어차피 맞은거여서 뒤에꺼 무시
    틀렸다(0, false, "", null, Nan, undefined)
    */}
      <div className='modal-component' id={id || 'Modal'} onClick={(e) => {
        if (e.target.className === 'modal-component'){
          onClose();
        }
        // console.log(e.target.className)
      }}>
        <div className='modal-content'>
          <div className='modal-header'>
            <span className='close-modal-icon' onClick={onClose}>&times;</span>
            {/* 모달의 내용은 사용하는 곳에서 정하자 == 매개변수 */}
            <h2>{_header}</h2>
          </div>
          <div className='modal-body'>
            {_body}
          </div>
          <div className='modal-footer'>
            {_footer}
          </div>
        </div>
        
      </div>
    </>
  )
}