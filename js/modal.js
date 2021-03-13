var modal = document.getElementById("myModal");
var btn = document.getElementById("modalBtn");
var span = document.getElementsByClassName("close")[0];
firebase.auth().onAuthStateChanged(function(user){
    if(user){
        btn.innerHTML = user.email;
        console.log(user);
    }else{
        btn.innerHTML = "會員註冊/登入";
        console.log("not log in");
    }
})
btn.onclick = function() {

    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var email = document.getElementById("email");
var password = document.getElementById("password");
var loginBtn = document.getElementById("loginBtn");
var registerBtn = document.getElementById("registerBtn");
var logOutBtn = document.getElementById("logOutBtn");
var loginFail = document.getElementById("loginFail")
loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    if(user){
        alert('您已經登入過了');
        console.log("您已經登入過了");
    }else{
        firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(() => {
            user = firebase.auth().currentUser;
            if(user){
                console.log("登入成功");
                console.log(user);
                alert('登入成功');
                modal.style.display = "none";
            }
        })
        .catch((error) => {
            alert('登入失敗');
            console.log(error.message);
        });
    }
});
registerBtn.addEventListener("click", function (e) {
    e.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
    .then(() => {
        console.log("註冊成功");
        alert('註冊成功');
        modal.style.display = "none";
    })
    .catch((error) => {
        console.log(error.message);
        alert('註冊失敗');
    });
});
logOutBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var user = firebase.auth().currentUser;
    if(user){
        firebase.auth().signOut()
        .then(() => {
        alert('登出成功');
        console.log("登出成功");
        modal.style.display = "none";
    })
    }else{
        alert('請先登入');
        console.log("請先登入");
    }
});
// firebase.auth().onAuthStateChanged(function(data){
//     if(UserNow){
//         btn.innerHTML = "登出";
//         console.log(UserNow);
//     }else{
//         btn.innerHTML = "會員註冊/登入";
//         console.log("not log in");
//     }
// })
