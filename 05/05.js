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

const showImg = (imgName) => {
     const img = document.querySelector('#gameimg')
     img.setAttribute('src', `./img/${imgName}.png`);
     img.setAttribute('alt', `${imgName}`);

}


document.addEventListener("DOMContentLoaded", ()=>{
     
     const input = document.querySelector('#input')
     const bt = document.querySelector('#bt')
     
     //랜덤수 여기다가 생성-클릭문 안에다가 실행하면 클릭할때마다 새로 생성되므로 전역변수로 생성
     //flag는 내가 생성해주는 변수, input에 입력된 숫자  
     let n ;
     let flag = true ;
     let imgName ; 


     //flag를 초기화 false라고 상정하고 시작하는것 

     //버튼이 눌러질때 랜덤수를 생성한다.
     //form태그에는 우리 눈에 안보이는 메소드 액션이 숨어있기때문에 자꾸 다시 호출이 되는데
     //자기 자신을 다시 불러오지 않도록 e를 변수로 잡고 preventDefault를 써준다 
     bt.addEventListener('click', (e)=> {
          e.preventDefault();

          //랜덤수 생성: flag가 true일때, 컴숫자랑 유저숫자 일치할때만 랜덤수 생성.
          if (flag) {
               flag = false
               n = Math.floor(Math.random() * 100) + 1;
               console.log('n=', n);
                    
               input.style.display = 'inline';
               bt.textContent= '확인';
               showImg('what');
          }

          if (input.value == ''){
               alert('값을 입력하세요.');
               input.focus();
               return ;
          }
          
          //입력값 1~100 안이 맞는지 체크
          const user = parseInt(input.value);
          console.log(user);

          if (user > 100 || user < 1 ) { //내가 한것처럼 input.value를 if문안에 바로써도되지만 
               alert('[입력오류] 1~100사이의 숫자를 입력하세요.');  //문자열->정수타입으로 변환할겸 paserInt쓰고 user로 잡아줌
               input.focus();
               return ;  
          }               //함수종료이므로 break(for)아니고 return 사용함

     // 3. input박스 값에 따른 이미지 송출
     //   *input박스 값이 컴퓨터의 랜덤수보다 작으면 up 이미지
     //   *input박스 값이 컴퓨터의 랜덤수보다 크면 down
     //   *input박스 값과 컴퓨터의 랜덤수가 같으면 good 
     //      -랜덤수와 같을 경우에는 input 박스가 보이지 않아야 함
     //      -버튼의 캡션을 "숫자를 생성해 주세요"로 변경해야함
         
// if문을 짧게 처리하기 위해 변수만들어줌 
          if (user < n) imgName = 'up';
          else if (user > n) imgName = 'down';
          else {
               imgName = 'good';
               input.style.display = 'none';
               bt.textContent = '숫자를 다시 생성해 주세요.';
               flag = true;
          }

          if (imgName == 'up'|| imgName==='down'){
                input.value='';
                input.focus();
               
          }
     
          input.value='' ;
          showImg(imgName)
     });
     
});