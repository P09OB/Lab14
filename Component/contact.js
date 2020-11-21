class contact{

    constructor(contactos){
        this.contactos = contactos;
    }

    render =() =>{

        let component = document.createElement('div');
        component.className = 'componentList';

        let name = document.createElement('div');
        let tel = document.createElement('div');

        let delateButton = document.createElement('button');
        delateButton.innerHTML = 'X';
        delateButton.className = 'buttonDelate';

        name.innerHTML = (

            "Nombre: "+this.contactos.nombre


        );

        tel.innerHTML = (

            "Teléfono: "+this.contactos.telefono
        )



        delateButton.addEventListener('click', () =>{
            const database = firebase.database();
            database.ref('Lab14/contactos/'+this.contactos.idpush /+this.contactos.id).set(null);
            console.log("entre"+this.contactos.idpush+" "+this.contactos.id);
        });
        component.appendChild(delateButton);
        component.appendChild(name);
        component.appendChild(tel);


        return component;
    }


} 

