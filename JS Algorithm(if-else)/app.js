let userName = prompt("What is your Username?");
        
if(userName == 'Admin'){
    let password = prompt('Password')
    if (password == 'Hello'){
    alert("Welcome Sir!");
    }
    else if(password == '' || password == null){
    alert("Canceled");
    }
    else{
    alert("Wrong Password");
    }        
}
else if(userName == '' || userName == null){
alert("You should have write a username");
}
else{
alert("Wrong Username");
}