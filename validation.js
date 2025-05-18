const regiUsername = document.getElementById('username').value;
const regiEmail = document.getElementById('email').value;
const regiPassword = document.getElementById('password').value;
const regiBtn = document.getElementById('regiBtn');
const logUsername = document.getElementById('username').value;
const logPassword = document.getElementById('password').value;
const logBtn = document.getElementById('logBtn');

regiBtn.addEventListener("click", (e)=>{
   e.preventDefault();
    fetch('https://6823e57d65ba0580339832db.mockapi.io/login', {
        method: 'POST',
        body: JSON.stringify({
          username: regiUsername,
          email: regiEmail,
          password: regiPassword,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      if(regiUsername.value<4){
        alert("username must be longer than 4 characters")
    }else if(regiPassword.value<6){
        alert("password must be longer than 6 characters")
    }
    localStorage.setItem("username", regiUsername, "password", regiPassword);
    window.location.href="./index.html"
})

logBtn.addEventListener("click", ()=>{
    if (!localStorage.getItem(username) === logUsername){
         alert("username is incorrect")
    }else if(!localStorage.getItem(password) === logPassword){
        alert("password is incorrect")
    }
    window.location.href="./home.html"
})

