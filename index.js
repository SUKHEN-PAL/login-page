var btnLogin = document.querySelector('.btn-login');

btnLogin.addEventListener('click', showModel);





function showModel(){
   const press = document.querySelector('.loginform').classList;
   press.add('showloginform');

  
}

var closeModel = document.querySelector('span');
closeModel.addEventListener('click' , close)


function close(){
   const off = document.querySelector('.loginform').classList;

   off.remove('showloginform')
}

var formBody = document.querySelector('form');

var namec = formBody.querySelector('div #name ')

var password = formBody.querySelector('div #pass');
var para = formBody.querySelector('#para');



formBody.addEventListener('submit' , formSubmit)

function formSubmit(e){

    e.preventDefault();

    const userInfo = {
         namec : namec.value,
         password : password.value
    }

    console.log(userInfo);
   //  console.log('submit')


    
    namec.value = '';
    password.value = '';

    para.innerHTML = 'login successfully';

    setTimeout(empty , 1000)

    function empty(){
      para.innerHTML = ''

    }

   

}

