const form = document.querySelector('.form-tag'); 
const checkbox = document.getElementById('agree'); 
const ps = document.querySelector(".ps");
const usname = document.querySelector(".usname");


usname.addEventListener("input",function(){
  if(!/^[a-zA-Z0-9]+$/.test(usname.value)){
    alert("username은 영어와 숫자로 입력해주세요")
    usname.value = ''
    return;
  }
});


form.addEventListener('submit', function (e) {
  e.preventDefault(); // 새로고침 방지

  if(ps.value.length < 6){
    alert("패스워드는 6자리 이상 입력해주세요")
    return;
  }

  // 약관 동의 여부 확인
  if (!checkbox.checked) {
    alert(
      "You must agree to the Terms and Conditions to sign up.\n" +
      "登録するには利用規約に同意する必要があります。\n" +
      "가입하려면 이용약관에 동의해야 합니다."
    );
    return; // 약관에 동의하지 않으면 서버 요청 중단
  }

  // 입력값 가져오기
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const email = document.getElementById('email').value;
  const name = document.getElementById('name').value;
  const nickname = document.getElementById('nickname').value;

  // JSON으로 변환 후 서버에 전송
  fetch('http://localhost:8080/api/users/', {  //←submit의 이벤트 정보를 보내는 것이 아닌 ip주소와 임의로 정한 주소명
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password, email, name, nickname })
  })


    .then(res => res.json())
    .then(data => {
      console.log('서버 응답:', data);

      if(data.success){
        const usernickname = data.data.nickname;
        alert(`${usernickname}님, 회원가입을 축하합니다 !`);
        window.location.href = 'index2.html'
      } else{
        alert(`회원가입 실패:${data.message}`);
      }
    })
    .catch(err => {
      console.error('에러 발생:', err);
      alert('서버와 통신하는 도중 에러가 발생했습니다.');
    });
});
