const database = firebase.database();
const auth = firebase.auth();

const name = document.getElementById('inputName');
const correo = document.getElementById('inputEmail');
const tel = document.getElementById('inputTel');

const password = document.getElementById('inputPassword');
const confirmPassword = document.getElementById('inputConfirmPassword');
const buttonSingUp = document.getElementById('buttonSingUp');

var isSignUp = false;

auth.onAuthStateChanged(

    (users) =>{

        if(users !== null){
            if(isSignUp){

                let userDb = {
                    id: users.uid,
                    nombre: name.value,
                    telefono: tel.value,
                    correo: correo.value,
                    password: password.value
                };
                database.ref('Lab14/users/'+userDb.id).set(userDb).then(
                    ()=>{
                        window.location.href = 'index.html';      

                     }

                );
    
            } else {

            }
        }
    }


);



sign =() =>{

    if(name.value === '' || correo.value === '' || tel.value === '' || password.value === '' || confirmPassword.value === ''){

        alert("Llenar todos los campos");
    } else{

        if(password.value === confirmPassword.value){

            isSignUp = true;
            auth.createUserWithEmailAndPassword(correo.value,password.value);
        } else{
            alert("Las contraseñas no coinciden");
        }
        
    }
}

buttonSingUp.addEventListener('click',sign);



