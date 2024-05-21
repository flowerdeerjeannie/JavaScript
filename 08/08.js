document.addEventListener("DOMContentLoaded",()=>{

     const txt1=document.querySelector('#txt');
     const bt81=document.querySelectorAll('.bt81');
     const bt82=document.querySelectorAll('.bt82');
     const bt83=document.querySelectorAll('.bt83');


     //new 안쓰고 전역변수로 배열변수 만들어줌 
     let arr = [] ;

     //obj로 사전을 만들어줌으로서 if else 안쓰고 밑에 arr.push(obj[bt의텍스트내용]); 을 푸시하도록출력
     let obj = {
          '사과' : '🍎',
          '바나나' : '🍌',
          '오렌지' : '🍊',
          '레몬' : '🍋',
          '당근' :'🥕',
          '오이':'🥒',
          '아보카도':'🥑',
          '가지':'🍆',
     }

     //배열추가
     for (let bt of bt81){
          bt.addEventListener('click',(e)=>{
               e.preventDefault(); 
          
               // if(bt.textContent == '사과') arr.push('🍎');
               // else if(bt.textContent == '바나나') arr.push('🍌');
               // else if(bt.textContent == '오렌지') arr.push('🍊');
               // else if(bt.textContent == '레몬') arr.push('🍋');

               arr.push(obj[bt.textContent]);
               txt1.value=arr.join(' '); 


          });
     }
     //배열삭제
     for (let bt of bt82) {
          bt.addEventListener('click',(e)=>{
               e.preventDefault(); 
               //obj사전을 출력할때 삭제 를 없애고 출력합니다
               console.log(obj[bt.textContent.replace('삭제', '')])

          
               //배열 필터. arr이라는 배열에 필터거는데, 필터는 골라낸다는것임
               const k = obj[bt.textContent.replace('삭제', '')]
               arr = arr.filter((item) => {return item != k }); //k가 아닌 것을 리턴하라.
               //filter는 순회하면서 골라낸다는건데 item을 매개변수로 받는건데
               //과일 이름들을 변수로 받았는데, 그 이름이 아니라면
               //삭제가 아닌 ' ' 로 리턴한다. 

                              // return은 생략가능하나, 중괄호도 치워줘야함. 
                              // (item => item!=k); ㄱㄴ. 
               txt1.value=arr.join(' '); 
          });
     }

     for(let bt of bt83) {
          bt.addEventListener('click',(e)=>{
               e.preventDefault(); 
               
               let tm=bt.textContent.split('->');
               console.log(tm);
               //필터가 아닌 map 함수로 전체를 다돌게 
               //item은 obj를 비교하는것
               arr = arr.map(item=> item==obj[tm[0]] 
                                        ? obj[tm[1]] : item); 

                                   //같으면 obj[tm[1]] 아니면 item 출력
               txt1.value=arr.join(' '); 
               //join 이걸 해줘야 출력값이 맞게 나옴
          });
     }
});