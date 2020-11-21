const database = firebase.database();
const auth = firebase.auth();
let idINDEX;


const name = document.getElementById('inputNombre');
const tel = document.getElementById('inputTelefono');
const buttonAdd = document.getElementById('buttonAdd');
const volver = document.getElementById('volver');

auth.onAuthStateChanged(

    (user) =>{

        if(user !== null){
            database.ref('Lab14/users/'+user.uid).once(

                'value',
    
                (data) =>{
                    let userDb = data.val();
                    idINDEX = userDb.id;

                    
                }
                
        )
            }else {
                window.location.href = 'login.html';
            }
    }


);

agregar = () =>{

    if(name.value == '' || tel.value == ''){

        alert("Llene todos los campos");

    }else {
        let reference = database.ref('Lab14/contactos/'+idINDEX).push()

    let contact = {

        id: reference.key,
        idpush: idINDEX,
        nombre: name.value,
        telefono: tel.value,

    };

    reference.set(contact);

    window.location.href = 'index.html';

    }
    

}

buttonAdd.addEventListener('click',agregar);


