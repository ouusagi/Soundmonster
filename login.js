const loginForm = document.querySelector(".login-container");


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:8080/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ username, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        const token = data.data.jwt;
        const nickname = data.data.nickname;

        localStorage.setItem("jwtToken", token);
        alert(`${nickname}님, 환영합니다 🎉`);
        window.location.href = "index.html";
      } else {
        alert(`로그인 실패: ${data.message}`);
      }
    })
    .catch(err => {
      console.log("로그인 에러", err);
      alert("서버 연결 중 오류가 발생했습니다");
    });
});