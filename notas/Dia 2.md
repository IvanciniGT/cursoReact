CAMBIO 1:
    WC: User
        id < att
    
    JSON: Lista usuarios
    USUARIOS=[
        {
            id
            firstName: "",
            lastName: "",
            email
            phone
            jobPosition
            department
        },
        {},
        {}
    ]
    
CAMBIO 2
    Añadir un atributo nuevo al WC User < mode
    mode: Modo de visulaización del componente User:
        minimal         nombre y apellidos
        normal          nombre, apellidos e email
        extended        todo
    > Distintos css
    > Cambio en el render para determinar que informacion mostrar
    
CAMBIO 3
    En el modo normal, metemos un boton. 
        Al apretar el boton, mostramos un panel flotante con toda la info
    
    > Estado: extended: True<>False
    <div user>
        <div info-basica>
            <boton> -> Click -> cambiar el state
        <div info-extendida> 
    
Componente: User

COMPONENTE NUEVO: UserList
    prop: mode
    <div class="userList">
        <div class="users">
            <User id="" mode/>
            ...
        </div>
    <div>