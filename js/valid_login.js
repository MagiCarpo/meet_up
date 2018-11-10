function TestLogin1(login){

if(/^[a-zA-Z1-9]+$/.test(login) === false)
    {alert('В логине должны быть только латинские буквы'); return false;}
if(login.length < 4 || login.length > 20)
    { alert('В логине должен быть от 4 до 20 символов'); return false;}
if(parseInt(login.substr(0, 1)))
    {alert('Логине должен начинаться с буквы'); return false;}

 return true;
}

function TestPassword1(password) {

        if (password.length < 6 || password.length > 20) 
        {
           { alert('В пароле должено быть от 6 до 20 символов'); return false;}
        }
        
        if (/^[a-zA-Z1-9]+$/.test(password) === false) 
        {
           {alert('В пароле должны быть только латинские буквы'); return false;}
        }
}