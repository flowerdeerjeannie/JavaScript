//1. 돔에서 제어할 노드 가져오기
//2. 회문확인 버튼을 누르면
//3. 첫번째 텍스트 박스에 입력된 문자열을 배열로 인식 하고 -> let변수로 잡아줘야한다는뜻
//4. 그 배열을 거꾸로 했을때의 결과가
//5.일치하면 오른쪽 텍스트 박스에 회문이 맞습니다. 아니면 회문이 아닙니다 를 출력하기
//6. 입력된 문자열에서 숫자만 인식해서
//7. 숫자 합계를 더한 결과가 출력되게 sum= 

document.addEventListener("DOMContentLoaded", ()=>{

     const txt1=document.querySelector("#txt1");
     const txt2=document.querySelector("#txt2");
     const bts=document.querySelectorAll("button");

     // const bt1=document.querySelector("#bt1");
     // const bt2=document.querySelector("#bt2");
     // const bt3=document.querySelector("#bt3");

     bts[0].addEventListener('click', (e)=>{
          e.preventDefault();

          // let t1 = txt1.value.split('');

          // []안에 ...을 하면 밸류값을 풀어헤쳐준다는것 한글자씩. 위 아래 같은 결과 나오는 함수임
          // let t1 = [...txt1.value]; 
          // let t2 = []

          // for (let i= t1.length - 1, i>=0 ; i--) {
          //     t2.push(t1[i])
          // }

          //배열로 만들어서 비교하는 방법 - for탈출은 break, 함수탈출은 return
          //let t1 하면 변할수있는변수니까 txt1에 들어간값 일때 라고 말해주기

          // 
          
          // for(let i = 0; i< t1.length; i++) {
          //      if (t1[i] ! = t2[i]) {
          //           txt2.value = "회문이 아닙니다.";
          //           break;
          //      } else {
          //           txt2.value = "회문이 맞습니다."; 
          //      }
          // }

          //문자열을 비교하는 방법 by join이라는 함수를 써서!
          //모든공백제거를 위하여 replaceAll('스페이스','') 를 써준다. 공백'  '을 없는거''로 대체해준다는 함수지
          let t1 = txt1.value.replaceAll(' ','');
          let t2 = txt1.value.replaceAll(' ','').split('').reverse().join('');
          if (t1===t2) txt2.value = "회문이 맞습니다.";
          else txt2.value = "회문이 아닙니다.";
     });

          //문자열 숫자 확인//
     bts[1].addEventListener('click', (e)=>{
          e.preventDefault();

          
          // // for (let i =0; i< txt1.value.length; i++){
          // //      console.log(txt1.value[i])   
          // // } 

          //let c of!!! txt1.value의 문자를 하나하나씩 접근합니다. let c!
          
          let total = 0; 
          //내가 놓친 부분!! total 0 초기값을 for문 안이 아니고 밖에 줬어야됨!
          //for문 안에 주니까 다 못하게 됨


          //txt1.value를 하나하나 따져볼건데, 그 문자열 하나하나인 c가 숫자일 때 
          //parseInt(c) 라고 표현하는 표현법. 
          for(let c of txt1.value) {
               if ( c>= '0' && c <= '9') {
                    total = total + parseInt(c) ;
               }
          }

          txt2.value = total ; 



     });




});

