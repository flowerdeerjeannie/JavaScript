function handleClick(n) {
     //document.querySelector('#msg').innerHTML = '<h1>안녕하세요!' +n + '</h1>'
     //이 아니라 html안에 있는 123번 버튼을 받을 수 있는 n을 매개변수로 설정해주고
     //밑에 달러 엔을 통해서 123을 대입한 값이 나올수있게 해줌 
     //handleClick ->하면 아래가 출력된다 하는것은 자스의 문법
     //뒤에는 ` 백틱 문자열을 사용함니다 
     document.querySelector('#msg').innerHTML = `<h1>안녕하세요! ${n} </h1>`;
}

document.addEventListener("DOMContentLoaded", () => {
     //document.getElementById('msg').innerHTML = '안녕하세요' ;
     //document.querySelector('#msg').innerHTML = '<h1>안녕하세요</h1>'
}) ; //#은 id를 의미, css에서도 동일하게 사용해준다 