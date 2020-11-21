const database = firebase.database();
const auth = firebase.auth();

const email = document.getElementById('inputEmail');
const password = document.getElementById('inputPassword');
const button = document.getElementById('buttonLogin');


auth.onAuthStateChanged(

    (users) =>{

        if(users !== null){
            
            window.location.href = 'index.html';      

        }
    }


);

login =() =>{

    if(email.value === '' || password.value === ''){

        alert("Llene todos los campos");
        
    } else {

    auth.signInWithEmailAndPassword(email.value,password.value).then(

        (data)=>{

            window.location.href = 'index.html';

        }
    ).catch(
        (error)=>{

            alert("Verifique el correo o la contraseña");

        }

    );
    
    }

}


button.addEventListener('click',login);