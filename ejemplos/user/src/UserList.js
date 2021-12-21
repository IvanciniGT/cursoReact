import React from 'react';
import User from './User';
import UserData from './UserData';

class UserList extends React.Component{
    
    constructor(props){
        super(props);
        this.state=this.generarState(UserData.usersInfo());
    }
    
    generarState(usuarios){
        return {"users": usuarios};
    }
    
    static normalizarParaBusqueda(texto){
        texto=texto.toUpperCase();
        texto=texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return texto;
    } 
    
    filtrarUsuarios(evento){
        // :( var filtro=document.getElementById("MIIDGENIAL_QUE DEBOASEGURARQUESEAUNICO").value; //RUINA GIGANTE !!!!
        var filtro=evento.target.value; // Para este caso cuela!
                                        // Esto no es REACT STYLE: referencias
        var nuevos_usuarios=UserData.usersInfo().filter( (usuario) => {
            var sobreQueBuscar=usuario.firstName+" "+usuario.lastName+" "+usuario.department+" ";
            return UserList.normalizarParaBusqueda(sobreQueBuscar).includes(UserList.normalizarParaBusqueda(filtro));
        } );
        // Solo si cambia?
        if (nuevos_usuarios.length !== this.state.users.length)
            this.setState(this.generarState(nuevos_usuarios));
    }
    render(){
        return (
            <div class={`userList ${this.props.mode}`}>
                <div class="filters">
                    Buscar:
                    <input type="text" onChange={this.filtrarUsuarios.bind(this)}></input>
                </div>
                <div class="users">
                    { this.state.users.map( (usuario) => <User key={usuario.id} id={usuario.id} mode={this.props.mode}/> ) }
                </div>
            </div>
        );
    }
}

UserList.defaultProps={
    mode: "minimal",
};

export default UserList;


// NOTA:
    // Quiero hacer algo interactivo. Segun vaya escribiendo se vaya filtrando
    // Cuando me interesa recalcular el render?
    // En el momento que el input cambie === Cuando escribes algo : NO 
    //          >Voy a guardar el valor del filtro en el state? NO
    // Cuando realmente quiero que rellamar al render?
    //      Cuando cambie lo que quiero representar... Si no cambia, para que quiero repintar?
    // FILTRO: Ivan _
        // Ivan Osuna
        // Ivan Raña
        // Ivan Martinez
        // Ivan Lopez
        // Ivan Sanz 
        // Erikini *****
    // Cuando se llama a render?
    //.  Cuando cambia el state
    // Cuando quiero que se llame a render?
    //.  Cuando cambia la lista de los resultados
    // => Qué tengo que meter en el state? Lista de resultados <<<<<< ESTE ES EL MOMENTO UNICO EN EL QUE ACTUALIZO EL STATE
