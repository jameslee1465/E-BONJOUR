var orderBtn = document.getElementById("orderBtn");
var inputNum1 = document.getElementById("input-num");
var inputNum2 = document.getElementById("input-num2");
var inputNum3 = document.getElementById("input-num3");
var inputNum4 = document.getElementById("input-num4");
var inputNum5 = document.getElementById("input-num5");
var inputNum6 = document.getElementById("input-num6");
var inputNum7 = document.getElementById("input-num7");
var inputNum8 = document.getElementById("input-num8");
var inputNum9 = document.getElementById("input-num9");
var inputNum10 = document.getElementById("input-num10");
var inputNum11 = document.getElementById("input-num11");
var inputNum12 = document.getElementById("input-num12");
let db = firebase.firestore();
let usersRef = db.collection("Users");
orderBtn.addEventListener("click", function(e){
    e.preventDefault();
    var user = firebase.auth().currentUser;
    if(user){
        usersRef.add({
            "email": user.email,
            "cake": {
                "cake1": Number(inputNum1.value),
                "cake2": Number(inputNum2.value),
                "cake3": Number(inputNum3.value),
                "cake4": Number(inputNum4.value),
                "cake5": Number(inputNum5.value),
                "cake6": Number(inputNum6.value),
                "cake7": Number(inputNum7.value),
                "cake8": Number(inputNum8.value),
                "cake9": Number(inputNum9.value),
                "cake10": Number(inputNum10.value),
                "cake11": Number(inputNum11.value),
                "cake12": Number(inputNum12.value)
            }
        })
        alert('預定成功!');
    }else{
        alert('請先登入!');
    }
})