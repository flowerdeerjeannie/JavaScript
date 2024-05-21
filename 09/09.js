document.addEventListener("DOMContentLoaded",()=>{

     const bt11=document.querySelector('#lotto');
     const div81 = document.querySelector('#numbers');

     bt11.addEventListener('click', (e)=>{
          e.preventDefault();
          let arr = []
          
          while(arr.length < 7) {
               let n = Math.floor(Math.random()*45)+1 ;  //0<n<45 니까 +1 해줘야 1<n<46 됨 
               //정해진 걸 쓸때는 for를 쓰지만, 언제끝날지 모를때는 while문 쓴다
               //중복되는 숫자 나오지 않게 하려고 아래 if를 또달아줌 
               if (!arr.includes(n)) arr.push(n)          //n이 arr에 포함되어 있지 않으면 push 한다             
          }
          //태그는 arr에서 map 함수를 통하여 새로 형성해낸 배열을 칭한다. 
          //item (arr의 배열 데이터) 가 span 클래스 이름인 
          let tags = arr.map(item=> 
               `<span class="nb${Math.floor(item/10)}">${item}</span>`
          );
          
          tags = tags.join(''); //join 붙여줌으로써 array가 tags가 되는것 

          //배열 중간 추가
          tags.splice(6, 0, '<span class="pluss">+</span>');

          div81.innerHTML = tags;
     }); 
   
});


