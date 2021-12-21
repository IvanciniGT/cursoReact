var FIELDS={
        "minimal": {
            "info": ["firstName","lastName",], 
            "extended": ["email","phone","jobPosition","department"]
        },
        "normal": {
            "info": ["firstName","lastName","email"], 
            "extended": ["phone","jobPosition","department"]
        },
        "extended": {
            "info": ["firstName","lastName","email","phone","jobPosition","department"], 
            "extended": []
        }
};
var USER={
                id: "ivancini",
                firstName: "Ivan",
                lastName: "Osuna",
                email: "ivan.osuna@empresa.com",
                phone: "98798798",
                jobPosition: "Software developer",
                department: "IT",
            };
var mode="minimal";

var datos="";
for (const campo in FIELDS[mode].info){
    datos+=USER[FIELDS[mode].info[campo]]+", ";
}
console.log(datos);

var datos=FIELDS[mode].info.map( (campo) => USER[campo] )
console.log("--"+datos);

// array.forEach(funcion) => NADA
//    Aplica la funcion a cada uno de los elementos del array
//    Que tipo de funcion:  Arg:     elemento
//                          Return:  NADA  

// array.map(funcion) => [ALGOS]
//    Aplica la funcion a cada uno de los elementos del array y va campurando el resultado
//    Que tipo de funcion:  Arg:     elemento
//                          Return:  ALGO

// array.filter(funcion) => [algunos_elementos_array_original]
//    Aplica la funcion a cada uno de los elementos del array y decide si conserva o no el elemento
//    Que tipo de funcion:  Arg:     elemento
//                          Return:  True|False
