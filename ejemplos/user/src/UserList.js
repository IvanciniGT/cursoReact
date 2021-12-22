import React from 'react';
import User from './User';
import UserData from './UserData';

/*
Scroll de carga dinámica:
evento JS-> window. scroll
Cuando se haga scroll y la posicion del scroll sea la del tamaño (alto) de la ventana... o casi
Vamos a pedir cargar más usuarios
window.addEventLinstener("scroll",   FUNCION  );
window.innerHeight + window.scrollY                 Alto de la Ventana + Posición del scroll vertical

document.body.offsetHeight                          Alto del documento HTML
Inicialmente cargo 2... y segun me acerque al final de la pagina voy cargando de 1 en 1
*/

class UserList extends React.Component{
    
    constructor(props){
        super(props);
        //this.state=this.generarState(UserData.usersInfo());
        this.numeroUsuariosActual=4;
        //this.numeroUsuariosTotal=this.state.users.length;
        this.numeroUsuariosTotal=0;
        this.state=this.generarState([],[]);
        this.seHaHechoScroll=this.seHaHechoScroll.bind(this);
        // METODO 1... REFERENCIAS:
        //this.filtro= React.createRef();
    }
    
    generarState(usuarios,favoritos=this.state.favoritos){
        usuarios=usuarios||this.state.users;
        return {"users": usuarios, "favoritos": favoritos};
    }
    toogleFavorito(userid,evento){
        evento.stopPropagation();
        var nuevos_favoritos;
        if ( this.state.favoritos.includes(userid)){
            // Eliminar el usuario de los favoritos
            nuevos_favoritos=this.state.favoritos.filter((usuario_id) => usuario_id !== userid);
        }else{
            this.state.favoritos.push(userid);
            nuevos_favoritos=this.state.favoritos;
        }
        this.setState(this.generarState(null,nuevos_favoritos));
    }
    static normalizarParaBusqueda(texto){
        texto=texto.toUpperCase();
        texto=texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return texto;
    } 
    
    filtrarUsuarios(){
        // :( var filtro=document.getElementById("MIIDGENIAL_QUE DEBOASEGURARQUESEAUNICO").value; //RUINA GIGANTE !!!!
        //var filtro=evento.target.value; // Para este caso cuela!
                                        // Esto no es REACT STYLE: referencias
                                        // Esto solo vale ya que el elemento que nos interessa es el que recibe el evento
        // METODO 1... REFERENCIAS:
        //var filtro=this.filtro.current.value;
        var filtro=this.filtro.value;
        
        var nuevos_usuarios=UserData.usersInfo().filter( (usuario) => {
            var sobreQueBuscar=usuario.firstName+" "+usuario.lastName+" "+usuario.department+" ";
            return UserList.normalizarParaBusqueda(sobreQueBuscar).includes(UserList.normalizarParaBusqueda(filtro));
        } );
        // Solo si cambia?
        if (nuevos_usuarios.length !== this.state.users.length){
            // Mostraré solo un determinado numero de usuarios
            // En los array de JS teneis la función slice(inicio, final)
            this.numeroUsuariosTotal=nuevos_usuarios.length;
            if (this.numeroUsuariosActual > this.numeroUsuariosTotal)
                this.numeroUsuariosActual=this.numeroUsuariosTotal;
            this.setState(this.generarState( nuevos_usuarios.slice(0,this.numeroUsuariosActual)));
        }
    }
    // METODO 1... REFERENCIAS:
    // <input type="text" ref={this.filtro} onChange={this.filtrarUsuarios.bind(this)}></input>
    /// Metodo 2
    // Si ponbemos una función dentro del ref, react llamará a esa función tras 
    //      asignar la nueva referencia que react va a crear
    //      Al llamar a la función, React envía como argumento la nueva referencia
    masUsuarios(){
        if (this.numeroUsuariosActual < this.numeroUsuariosTotal){
            this.numeroUsuariosActual+=1;
            this.filtrarUsuarios();
        }
    }
    seHaHechoScroll(evento){
        if ( (window.innerHeight + window.scrollY) > document.body.offsetHeight - 2 ){
            this.masUsuarios();
        }
    }
    
    componentDidMount(){
        //window.addEventListener("scroll", (event) => this.seHaHechoScroll(event)); 
        window.addEventListener("scroll", this.seHaHechoScroll); 
        this.filtrarUsuarios();
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.seHaHechoScroll);
    }

    render(){
        return (
            <div className={`userList ${this.props.mode}`}>
                <div className="filters">
                    Buscar:
                    <input type="text" ref={(referencia) => this.filtro=referencia } onChange={this.filtrarUsuarios.bind(this)}></input>
                </div>
                <div className="users">
                    { this.state.users.map( (usuario) => 
                    <User favorito={this.state.favoritos.includes(usuario.id)} onFavoritoChange={(evento)=>this.toogleFavorito(usuario.id,evento)} key={usuario.id} id={usuario.id} mode={this.props.mode}/> ) }
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
