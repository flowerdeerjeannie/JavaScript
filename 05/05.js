// 1. DOM에서 제어할 노드 먼저 가져오기
// 2. 플레이어가 임의의 숫자를 입력하고 버튼이 눌러지면
// [버튼이 확인 버튼일때]
//   * 컴퓨터는 랜덤으로 숫자를 정한다.* 랜덤수는 다시 실행하기 전까지는 변경되면 안됨 =>
//   * input 박스 값이 없으면 '값을 입력하세요' 메세지 출력
//   * input 박스 값이 1에서 100사이 숫자가 아니면 '입력오류' 메세지 출력
// 3. input박스 값에 따른 이미지 송출
//   *input박스 값이 컴퓨터의 랜덤수보다 작으면 up 이미지
//   *input박스 값이 컴퓨터의 랜덤수보다 크면 down
//   *input박스 값과 컴퓨터의 랜덤수가 같으면 good 
//      -랜덤수와 같을 경우에는 input 박스가 보이지 않아야 함
//      -버튼의 캡션을 "숫자를 생성해 주세요"로 변경해야함
// [버튼이 숫자를 생성해 주세요 버튼일때]
//   - 초기화 되어야 하는 것: 랜덤수 새로 생성, input박스 보이기..

document.addEventListener("DOMContentLoaded", ()=>{
     const img = document.querySelector('#game')
     const input = document.querySelector('#number')
     const bt = document.querySelector('#bt')
     
     //랜덤수 여기다가 생성-클릭문 안에다가 실행하면 클릭할때마다 새로 생성되므로 전역변수로 생성
     //flag는 내가 생성해주는 변수, input에 입력된 숫자  
     let n ;
     let flag = false ;
     //flag를 초기화 false라고 상정하고 시작하는것 

     //버튼이 눌러질때 랜덤수를 생성한다.
     //form태그에는 우리 눈에 안보이는 메소드 액션이 숨어있기때문에 자꾸 다시 호출이 되는데
     //자기 자신을 다시 불러오지 않도록 e를 변수로 잡고 preventDefault를 써준다 
     bt.addEventListener('click', (e)=> {
          e.preventDefault();

          //랜덤수 생성: flag가 true일때, 컴숫자랑 유저숫자 일치할때만 랜덤수 생성.
          if (!flag) {
               flag = true
               n = Math.floor(Math.random() * 100) + 1;
               console.log('n=', n);
          }

          if (input.value == ''){
               alert('값을 입력하세요.');
               input.focus();
               return ;
          }

          if (input.value > 100 || input.value <0 )
               alert('입력오류');
       
          console.log(n);
     });









})