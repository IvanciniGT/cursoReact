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
    static numeroUsuariosInicial=4;
    constructor(props){
        super(props);
        //this.state=this.generarState(UserData.usersInfo());
        this.numeroUsuariosActual=UserList.numeroUsuariosInicial;
        //this.numeroUsuariosTotal=this.state.users.length;
        this.numeroUsuariosTotal=0;
        this.favoritos=[];
        this.state=this.generarState([]);
        this.seHaHechoScroll=this.seHaHechoScroll.bind(this);
        // METODO 1... REFERENCIAS:
        //this.filtro= React.createRef();
    }
    
    generarState(usuarios,datosCargados=false){
        usuarios=usuarios||this.state.users;
        return {"users": usuarios,"datosCargados": datosCargados};
    }
    toogleFavorito(userid,evento){
        evento.stopPropagation();
        var nuevos_favoritos;
        if ( this.favoritos.includes(userid)){
            // Eliminar el usuario de los favoritos
            this.favoritos=this.favoritos.filter((usuario_id) => usuario_id !== userid);
        }else{
            this.favoritos.push(userid);
        }
        this.filtrarUsuarios();
    }
    static normalizarParaBusqueda(texto){
        texto=texto.toUpperCase();
        texto=texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return texto;
    } 
    
    recargarUsuarios(){
        this.setState(this.generarState(null, false));
        // Si quereis simular un retraso: 
        setTimeout(()=>this.filtrarUsuarios(),1000);
        // En estado normal:
        //this.filtrarUsuarios();
    }
    async filtrarUsuarios(){
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
//        if (nuevos_usuarios.length !== this.state.users.length){
            // Mostraré solo un determinado numero de usuarios
            // En los array de JS teneis la función slice(inicio, final)
            this.numeroUsuariosTotal=nuevos_usuarios.length;

            if (this.numeroUsuariosActual < UserList.numeroUsuariosInicial)
                this.numeroUsuariosActual=UserList.numeroUsuariosInicial;
 
            if (this.numeroUsuariosActual > this.numeroUsuariosTotal)
                this.numeroUsuariosActual=this.numeroUsuariosTotal;
            
            nuevos_usuarios=nuevos_usuarios.sort( (usuario1,usuario2) => {
                var usuario1Favorito=this.favoritos.includes(usuario1.id);
                var usuario2Favorito=this.favoritos.includes(usuario2.id);
                if( usuario1Favorito && usuario2Favorito) return 0;
                else if( usuario1Favorito ) return -1;
                else return 1;
            } );
            // negativo: elemnto 1 antes del 2
            // 0 los deja en el orden que estén
            // positivo: elemento 2 debe ir antes que el 1
            this.setState(this.generarState( nuevos_usuarios.slice(0,this.numeroUsuariosActual),true));
//        }
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
        // Si quereis simular un retraso: 
        setTimeout(()=>this.filtrarUsuarios(),1000);
        // En estado normal:
        //this.filtrarUsuarios();
    }
    componentWillUnmount(){
        window.removeEventListener("scroll", this.seHaHechoScroll);
    }

    render(){
        var cuerpo;
            if(this.state.datosCargados){
                cuerpo=<div className="users">
                    { this.state.users.map( (usuario) => 
                    <User favorito={this.favoritos.includes(usuario.id)} onFavoritoChange={(evento)=>this.toogleFavorito(usuario.id,evento)} key={usuario.id} id={usuario.id} mode={this.props.mode}/> ) }
                </div>;
            }else{
                cuerpo=<div>Cargando...</div>;
            }

        return (
            <div className={`userList ${this.props.mode}`}>
                <div className="filters">
                    Buscar:
                    <input type="text" ref={(referencia) => this.filtro=referencia } onChange={this.recargarUsuarios.bind(this)}></input>
                </div>
                {cuerpo}
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
