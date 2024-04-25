// 주사위게임 만들기-
// 1.DOM에서 이미지와 버튼을 가져오기
// 2.버튼 CLICK 이벤트를 만들기
// 3. 랜덤수 생성 (1~6) =>Math.floor(Math.random() * 6) + 1
// 4. 랜덤수에 해당하는 이미지를 src 속성에 넣기

//기본. 돔만들어지고나면 아래와 같이 실행하라 
document.addEventListener("DOMContentLoaded", () => {
     // 1.html로 만들어진 DOM에서 이미지와 버튼을 가져오기
     const img = document.querySelector('#btDiv > img') ;
     //()안은 셀렉터하는 위치
     const bt = document.querySelector("#btDiv> button") ;

     // 2.버튼 CLICK 이벤트를 만들기
     bt.addEventListener("click", ()=>{
      // 3. n 변수를 가져올 메소드 호출하여 랜덤수 생성 (1~6)
          const n = Math.floor(Math.random() * 6) + 1 ; 
     //이미지와 n변수의 연결을 만들어주기 위하여 이미지 속성을 정한다-setAttribute
     //src 적고 경로 알려줌.
          img.setAttribute('src',`./img/${n}.png`) ;
          //n 변수값이므로 `백틱 ${}`안에 적어줘서 변수값을 인식하도록
          img.setAttribute('alt',`${n}`) ;
     });
});