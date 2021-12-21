class UserData {
    static USERS=[
            {
                id: "ivancini",
                firstName: "Ivan",
                lastName: "Osuna",
                email: "ivan.osuna@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
            {
                id: "erikini",
                firstName: "Erika",
                lastName: "Regueiro",
                email: "erika.regeiro@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
            {
                id: "juanini",
                firstName: "Juan Manuel",
                lastName: "Espinosa",
                email: "juan.manuel@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
            {
                id: "iniguigui",
                firstName: "Iñigo",
                lastName: "Martinez",
                email: "inigo.martinez@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
            {
                id: "ivancini",
                firstName: "Ivan",
                lastName: "Osuna",
                email: "ivan.osuna@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
            {
                id: "sergini",
                firstName: "Sergio Manuel",
                lastName: "Lopez",
                email: "sergio.manuel@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
            {
                id: "alessandrini",
                firstName: "Alessandra",
                lastName: "Dosil",
                email: "alessandra.dosil@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            },
        ];
        
    static usersInfo(){
        return UserData.USERS;
    }
    
    static userInfo(id){
        //function funcionBusqueda(usuario){
        //    return usuario.id === id;
        //}
        return UserData.USERS.find( (usuario) => usuario.id === id );
    }
}
export default UserData;