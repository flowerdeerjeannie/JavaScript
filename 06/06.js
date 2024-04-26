// 1. DOM에서 내가 제어하고 싶은 노드를 가져오기.
// 2. 셀렉트 박스 중 섭씨온도를 선택하면 

document.addEventListener("DOMContentLoaded",() => {

     const sel1=document.querySelector("#sel1");
     const sel2=document.querySelector("#sel2");

     const txt1=document.querySelector("#txt1");
     const txt2=document.querySelector("#txt2");

     const label1=document.querySelector("#label1");
     const label2=document.querySelector("#label2");

     const show = (s1, s2, l1, l2) => {
          if (s1.value == '℃') s2.value = '℉';
          else s2.value ='℃';

          l1.textContent = s1.value;
          l2.textContent = s2.value;
     }


     sel1.addEventListener('change',()=>{
          show(sel1, sel2, label1, label2);
     });

     sel2.addEventListener('change',()=>{
          show(sel2, sel1, label2, label1);
     });

     // sel1.addEventListener('change', ()=> {
     //      if (sel1.value == '℃') {
     //           sel2.value = '℉';
     //           label1.innerHTML = '℃';
     //           label2.innerHTML = '℉';
     //      } else {
     //           sel2.value = '℃';
     //           label1.innerHTML = '℉';
     //           label2.innerHTML = '℃';
     //      }
     // });

     // sel2.addEventListener('change', ()=> {
     //      if (sel2.value == '℃') {
     //           sel1.value = '℉';
     //           label1.innerHTML = '℉';
     //           label2.innerHTML = '℃';
     //      } else {
     //           sel1.value = '℃';
     //           label1.innerHTML = '℃';
     //           label2.innerHTML = '℉';
     //      }
     // });

});