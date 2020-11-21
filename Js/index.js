const database = firebase.database();
const auth = firebase.auth();

const buttonLogOut = document.getElementById('buttonLogOut');
const nameUsuario = document.getElementById('name');
const component = document.getElementById('componentContact');
const buttonAdd = document.getElementById('addContact');

let idUser;
auth.onAuthStateChanged(

    (user) =>{

        if(user !== null){
            database.ref('Lab14/users/'+user.uid).once(

                'value',
    
                (data) =>{
                    let userDb = data.val();
                    idUser = userDb.id;
                    nameUsuario.innerHTML = userDb.nombre;
                }
        )

        database.ref('Lab14/contactos/'+user.uid).on('value', function(data){
            component.innerHTML = '';
            data.forEach(
        
                contacts =>{
        
                    let get = contacts.val();
                    let filaContacts = new contact(get);
                    component.appendChild(filaContacts.render());
                }
        
        
        
            );
        
        });

        

        
            }else {
                window.location.href = 'login.html';
            }
    }

    

    


);





exit = () =>{

    auth.signOut().then(

        () =>{

            window.location.href = 'login.html';
        }



    ).catch(

        (error)=>{
            console.log(error.message);
        }
    )
}

addContact = () =>{

    window.location.href = 'addContact.html';

}





buttonLogOut.addEventListener('click',exit);
buttonAdd.addEventListener('click',addContact);
