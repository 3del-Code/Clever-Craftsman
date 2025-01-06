let nameEl = document.getElementById("name")
let email = document.getElementById("email")
let number = document.getElementById("number")
let Ms = document.getElementById("ms")
let message1 = document.getElementById("message1")
let message2 = document.getElementById("message2")
let message3= document.getElementById("message3")
let message4= document.getElementById("message4")

let btn = document.getElementById("btn")
btn.addEventListener("click" , ()=>{
    if(nameEl.value === "" || email.value === "" || number.value === "" || Ms.value ===""){
    //    messages1
    message1.innerHTML = "Please Enter Your Name"
    message1.style.color = "red"
    message1.style.fontSize = "20px"
    //    messages2
    message2.innerHTML = "Please Enter Correct 11 Number"
    message2.style.color = "red"
    message2.style.fontSize = "20px"
    //    messages3
    message3.innerHTML = "Please Enter Correct Email"
    message3.style.color = "red"
    message3.style.fontSize = "20px"
    //    messages4
    message4.innerHTML = "Please Enter Correct Email"
    message4.style.color = "red"
    message4.style.fontSize = "20px"
        // Borders Of Inputs
        nameEl.style.border= "2px solid red"
        email.style.border= "2px solid red"
        number.style.border= "2px solid red"
    }else{
        alert("The Form Has Been Filled successfully")
    }
})