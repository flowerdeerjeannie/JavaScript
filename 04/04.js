
// 1. DOM에서 내가 제어하고 싶은 노드를 가져오기.
// 2. 6개 버튼 클릭을 확인하고 3. 버튼 클릭이 되면
// -해당하는 버튼의 숫자를 추출하면 USER의 숫자가 되고->이미지 변경
// -랜덤수를 생성하면 COMPUTER의 숫자가 되고->이미지 변경
// -USER의 수와 COMPUTER의 수를 비교.
// 결과 출력

document.addEventListener("DOMContentLoaded", () => {
     const comimg = document.getElementById('com');
     const userimg = document.querySelector("#user");
     // 위아래 같은 기능함수, 아이디로 집어오면 # 안쓰고 쿼리셀렉터로 집어내려면 # 써야함
     // button이라는 이름을 가진 모든걸 가져오게끔하려면 쿼리셀렉터에 올붙여준다 
     // 수백개버튼중 집어오고싶은 버튼들만 있다면 그 버튼들만 class를 다 그룹으로 잡아준다 
     //그리고 querySelectiorAll('.(클래스)bt4')를 하면 클래스이름 bt4인 애들이 다 옴
     const msg = document.querySelector("#msg")
     const bts = document.querySelectorAll('.bt4')
     console.log(bts);

     // //반복문1
     //      for(let i = 0, i<bts.length, i++) {
     //           console.log(bts[i])
     //      }

     // //반복문2
     //      console.log('**반복문2**')
     //      for(let i in bts) {
     //           console.log(bts[i])
     //      }

     // //반복문3
     //      console.log('**반복문3**')
     //      bts.forEach(bt =>{
     //           console.log(bt)
     //      })

     // //반복문4
     //      for (let bt of bts) {
     //           console.log(bt)
     //      }
     //      for (let [i,bt] of bts.entries()){
     //           console.log(i, bt)
     //      }


     for (let bt of bts) {
          bt.addEventListener('click', () => {
          //user라고 변수로 저장해주어야 나중에 컴퓨터랑 비교가능함 

          const user = parseInt(bt.textContent.slice(-1));
          const com = Math.floor(Math.random() * 6) + 1; //1~6
          console.log(user,com)
          userimg.setAttribute('src', `./img/${user}.png`);
          userimg.setAttribute('alt', `user ${user}`);

          //slice 뒤에 마이너스를 쓰면 뒤에서부터 가져올 수 있음 
          //그냥 slice를 쓰면 (0,1) 이면 0부터 시작해서 1전까지 즉 0번째 인덱스만!
     
          comimg.setAttribute('src', `./img/${com}.png`);
          comimg.setAttribute('alt', `computer ${com}`);

          if (com==user) msg.innerHTML= '맞음';
               else msg.innerHTML = '틀림';

          });
     }

});