const name = document.getElementById("fname");
const email= document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("myform");
const errorElement = document.getElementById("error_msg");
const errorEle = document.getElementById("error");

form.addEventListener('submit', (e) => {
    let message = [];
    
    if(name.value === '' || name.value == null) {
        message.push('Name is required!')
    }

    if(email.value === '' || email.value == null) {
        message.push('Email is required!')
    }
   if(password.value.length <= 6) {
       message.push('Password must be longer then 6 characters');
   }
   if(password.value.length >= 20) {
    message.push('Password must be less then 20 characters');
}


    if(message.length > 0){
    e.preventDefault()
    errorElement.innerHTML = message.join('<br>');

}
})