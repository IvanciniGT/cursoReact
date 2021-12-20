# ReactJS

Framework frontend de apps web, realizado en JS

## Otros frameworks equivalentes

- AngularJS 
- VueJS

## Qué me aporta

- Modularización - Webcomponents - Reutilizar código... componentes
- Simplicidad - Hay mucho codigo ya realizado por debajo
- Estandarización - Framework (Metodologia)

## Desarrollo web
### Backend
    JAVA
    C#
    php
    python... django
    
### Front End - Cliente... Navegador de Internet
    HTML5 + css3 (W3C) + js (ECMA)
    Genera el código de frontal
    Código que se ejecuta en el frontal
    
### Javascript
    Originalmente "mocha" - Netscape -> javascript
    Posteriormente cae en manos Sun Microsystems -> Oracle
    ES6 ES7
    
Python - Scripts = SysAdmins, Testers, DataAnalitycs
JS - Se comió a JAVA
    Google -> Android (JAVA)
    Sacar el interprete/motor de JS que habían desarrollado para el navegador Chrome: NodeJS < eq JVM
                                                                                        expressJS ~Tomcat

VisualStudio Code < Desarrollado en JS

Dentro de JS: AJAX
Hacer peticiones a un servidor para traer no un HTML completo, sino un trozo de HTML

## SPA: Single Page App 

Capacidad de tener una página web (HTML + css) y cambiar el contenido de la misma dinámicamente

## PWA: Progressive Web App

- Service Workers: Programa creado en Javascript: Proxy



Navegador
    
    HTML -> Accion -> Request -> ServiceWorker ->Web server
                                        V        < HTML, json
                                    BBDD Local
    
    Guardar datos en un navegador de internete puedo usar una cookie








## WebComponent

HTML app web de una empresa: 
    Cajita que muestre los datos de un empleado: Foto, nombre,  correo, departamento, telefono
    Nombre < Click quiero que salga por pantalla una cajita superpuesta con la info.
    <div class="datos_usuario">
        <div class="otros-datos" style="display: none;">
            <div class="email" >Ivan.Osuna@empresa.es </div>
        </div>
        <div class="nombre" onClick=" JS ">Ivan Osuna </div>
    </div>
    
    JS:
        otros-datos -> style: display:block;
    
    Qué problema le vemos a esto?
        Los datos ya se han mandado al cliente. A lo mejor ni los necesita... pero ya los tiene
        Lo quiero reutilizar: Copio, pego... 
                              Esta funcionalidad encapsularla en una función JS, Java , Css
                                -> Repo GIT
    
    <userpanel id="294857"/>      WEB COMPONENT <<<
    
    <a href="url" >TEXTO</a>
    
    Te hemos perdido Ivan
    
    
    # Para crar un proyecto REACT nuevo:
    $ npx create-react-app demo
    $ npm start, dentro de la carpeta del proyecto
    
    
    
    
    
# Ejercicio 1:
    
    # Queremos: Un proyecto nuevo: usuario
    Componente web: user
        nombre
        apellidos
    
    <div class="user">
        <div class="info">
            <div class="nombre"> nombre </div>
            <div class="apelidos"> apellidos </div>
        </div>
    </div>
    
    +css
    
    
    index.html:
        2 usuarios:
        
        
        
## Definición de clase en JS:
class Numerador extends Object{
    numero=1;
    doble(){return this.numero*2;}
}
numerador=new Numerador();
numerador.numero;

numerador={"numero"=1,"doble": ()=>this.numero*2}; //lambda
numerador.numero

# Qué es la programación funcional? Es un paradigma de programación: OO, imperativa, procedural
## Qué es un paradigma de programación? Una forma de estructurar mi código.

numero y multiplicarlo por 2 y sacarlo por pantalla

# imperativa
numero=2
doble=numero*2
print(doble)


# Procedural
function doblar(numero):
    return numero*2
print(doblar(2))
 
# OO 
class Numero{
    constructor(numero)->
    doblar():
        nreturn numero*2;
}
numero=new Numero(2);
print(numero.doblar());

# Programación funcional?
Puedo referenciar desde una variable, una función:

function doble(numero):
    return numero*2;

funcionAAplicar=doble;     <<<<  Puedo pasar funciones como argumentos a una función...
                           <<<<  Una función puede devolver otra función.
print(funcionAAplicar(2));

Consumer<String> variable=System.out::println; // referenciar a una funcion

-----
mostrarNumeroTransformado(numero, transformacion){
    print(transformacion(numero));
}

doble(numero){
    return numero*2;
}
triple(numero){
    return numero*3;
}



mostrarNumeroTransformado(18, doble);
mostrarNumeroTransformado(3, triple);
mostrarNumeroTransformado(20, (numero) => numero*4 );
---

Listen - Event


class: Sea capaz de registra listeners
    Cuando ocurre un evento dentro de la clase, notifico a los listeners

Swing


public class Cosa{
    
    private int numero;  // UNA DE LAS PEORES PRAXIS
    private Listener listener;
    
    public Cosa(int numero){
        this.numero=numero;
    }
    public void regitrarListener(Listener listener){
        this.listener=listener;
    }
    public doblar(){
        this.numero=numero;
        listener.notify("Numero doblado", this.numero);
    }
    
    public int getNumero(){  // ENCAPSULAMIENTO 
        return this.numero;
        listener.notify("Numero asignado", this.numero);
    }
}
/*
public interface Listener{
    void notify(String evento, int numero);
}
public class Logeador implements Listener{
    public Logeador(){}
    public void notify(String evento, int numero){
        System.out.println(evento+numero);
    }
}
*/
Cosa c=new Cosa(4);
Linstener unListener=new Logeador()
//c.registrarListener(unListener);
c.registrarListener((evento,numero) => System.out.println(evento+numero) );
c.doblar();

List<Integer> numeros=...;
numero.forEach(System.out::println);

for (int numero::numeros){
    System.out.println(numero);
}