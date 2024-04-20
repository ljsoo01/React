// 스타일 시트, 자바스크립트 데이터를 import
/*
  ./ : 지금 여기
  ../ : 한번 나가서
  / : 프로젝트 경로
  /src : src폴더로 들어가서
*/
import { useState } from 'react'
import data from './data' // 이 파일 옆에 있는 data 파일을 data란 키워드로 사용
import './styles.css' // 이 파일 옆에 있는 styles.css를 갖다쓰겠다

export default function Accordion() {
  // 선택된 title의 번호를 저장할 state (UI와 연결된 변수)
  let [selected, setSelected] =useState(null) // null: 없음, 선택되면 setSelected를 통해서 id를 넣어주기
  // 플래그 (단일선택 // 다중선택)
  let [enableMultiSelection, setEnableMultiSelection] = useState(false) // false면 단일선택, true면 다중선택
  let [selectedList, setSelectedList] = useState([]); // 처음에는 없음

  function clickTitle(id) {
    // console.log(id);
    // 아이디를 selected에 넣는다 ==> setSelected(값)
    // useState의 값을 갱신하려면 두번째 있는 것을 사용
    // setSelected(id)

    // selected가 id와 다르면 id값을 넣고
    // 같으면 null 넣고
    id !== selected ? setSelected(id) : setSelected(null)
  }

  // 다중 선택일때는 선택된 애들을 '모두 보관' ==> 배열
  // console.log(enableMultiSelection)

  function multiSelectTitle(id) {
    // 배열의 값을 갱신하기 위해서는 ...으로 분해했다가 다시 []로 감싼다
    // 객체의 값을 갱신하기 위해서는 ..으로 분해했다가 다시 {}로 감싼다
    let copyList = [...selectedList]
    // console.log(selectedList.indexOf(id)) // 다중선택배열에서 id값을 검사 (indexOf(): 만약 배열 안에서 id를 찾을 수 없다면 -1) 

    // 있는지 검사 ==> 없으면 추가
    let findIndexOfId =selectedList.indexOf(id) // 아이디 이미 있으면 그 위치
    // jsx가 아닌 js문법이니까 if-else
    if(findIndexOfId === -1) {
      copyList.push(id) // 배열에 추가 push(값)
    } else {
      // 있었으면 배열에서 제거 splice(인덱스, 몇개없앨건지)
      copyList.splice(findIndexOfId, 1) // 찾은 인덱스로부터 1개 없앰(닫기)
    }
    setSelectedList(copyList)
    // console.log(selectedList)
  }

  return(
    <div className='wrapper'>
      <button onClick={() => {setEnableMultiSelection(!enableMultiSelection)}}>다중 선택 ON/OFF</button>
      <div className='accordion'>
        {
          data.map((element, idx) => {
            return (
              <div className="item" key={idx}>
                <div className="title" onClick={() => {
                  enableMultiSelection === true ? multiSelectTitle(element.id)
                  : clickTitle(element.id)
                }}>
                  <h3>{data[idx].title}</h3> {/* data[idx].title == element.title */}
                  <span>+</span>
                </div>
                {
                  /* 
                    &&: 그리고
                    true && true: true
                    true && false: false
                    false && true: false
                    false && false: false

                    &&: 앞에꺼 틀렸으면 어차피 false니까 뒤에꺼 검사안함
                    ||: 앞에꺼 맞았으면 어차피 true니까 뒤에꺼 검사안함
                  */
                  enableMultiSelection === true ? selectedList.indexOf(element.id) !== -1 && <div className="content">{element.content}</div> : selected === element.id && <div className="content">{element.content}</div>
                }

                {
                  // selected 값이 id와 같은 부분만 content 생성
                  //(selected === element.id && enableMultiSelection === false)? <div className="content">{element.content}</div> : null
                }

              </div>
            )
          })
        }
      </div>
    </div>
  )
}