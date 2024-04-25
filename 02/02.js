// const btCreate = (bt, idTxt, captionNode, parentNode) => {}
//  bt1.setAttribute ('id', 'bt11');
//  bt1.appendChild (bt1Txt) ;
//  btDiv.append(bt1) ;

//const로 선언하게 되면 바꿀수없다! let을 쓰게 되면 바뀌는 값이 들어갈수있다. 

document.addEventListener("DOMContentLoaded", () =>{
  console.log("DOM 완성")
 //console창에 보여지는말 개발자도구 통해서!

  const msg=document.querySelector('#msg');
  const btDiv = document.getElementById('btDiv') ;

  const bt1 = document.createElement('button') ;
  const bt1Txt = document.createTextNode('버튼11');
  const bt2 = document.createElement('button') ;
  const bt2Txt = document.createTextNode('버튼21');

  bt1.setAttribute ('id', 'bt11');
  bt1.appendChild (bt1Txt) ;
  btDiv.append(bt1) ;
  bt2.setAttribute ('id', 'bt21');
  bt2.appendChild (bt2Txt) ;
  btDiv.append(bt2) ;
  
//   btCreate(bt1, "bt11", bt1Txt, btDiv);
//   btCreate(bt2, "bt21", bt2Txt, btDiv); 

  bt1.addEventListener("click", ()=>{
     msg.innerHTML = '<h1>안녕하세요</h1>';
     // if (msg.innerHTML == '')
     //  msg.innerHTML = '<h1>안녕하세요</h1>';
     // else
     //  msg.innerHTML = '' ; 
  });

  bt2.addEventListener("click", ()=>{
      msg.innerHTML = '';

  });

});

//add-메소드가 ""를 실행한다-*자스는 매개변수로 인수를 받는다*
//첫번째 매개변수: 돔컨텐트가 다 로드되고나면 이벤트를 읽어내라
//두번째 인수: 함수의 이름이 없는, 형태만 갖춰진 함수를 ()=>{ 자바의 대괄호와 같은의미} 넣어준다 
//console은 디버깅 함수

//btDiv 라는걸 id로 집어낸다
//button이라는 요소를 만들어내라는 함수, 그리고 bt1이라는 이름으로 만들었다. 상수const 버튼이름 bt1 선언.  
//bi1.setA~는 버튼에 속성 추가.
//버튼에 appendChild로 자식노드로 갖다붙여줌
//ineerHTML은 속성이므로 ()이 아니라 =를 쓴다. 