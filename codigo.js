/* 

*                   Operador condicional ternario
    const es=(expresion logica)? "true" : "false";
*                           imports
    export obj,{array,function,loqsea}       export{obj as default,array,function,loqsea} varios
    import {obj,array,function,loqsea} from '.data/heroes';
                o imp  shorthand 
    !por default
            export default obj;
            import obj from '../../../';

*              desestructuracion las funciones tambien pueden ser valores de arreglos o objetos 
    !de objetos
         *asignacion  desestructurante
    const {nombre,edad,clave} = persona;
    console.log(nombre, edad, clave);   aca se sobreentiende que nombre: nombre
    const {nombre:nuevo, edad , clave} = persona;
    console.log(nuevo);
    
    const {nombre, edad, clave, latlng:{lat,lng}} = persona;
    console.log(nombre,edad, clave, lat,lng); 
         *parametro desestructurante
    const nombrePersona = ({nombre})=>{
        console.log(nombre);
    }
    console.log(nombrePersona(persona));
    !de arreglos
        *asignacion desestructurante
        const numeros = [1,2,3,4,5,6,7,8,9,10,11];
    const [,,valor3] = numeros;
    console.log(valor3);
        *parametro desestructurante
        const retornarArreglo=()=>([123,()=>{"hola mundo"}])
    const [numeros,saludar] = retornarArreglo();
        console.log(numeros,saludar());
*              funcion flecha
    const getUser = () => ({
        id: '12312',
        usernames: "AnndyPc";        retorna el objeto 
    })

*               parametro rest 
    puede enviar arrays o objetos como parametro
    -document.write("hola vengo de JS")
    -alert();(print)
    -prompt("")sirver para almacenar datos de entrada en una variable del navegador 

*               Tipos de Datos
    -String     -number     -var     -const     -let

*              EXPRESIONES DE COMPARACION
    if(x == y) es el mismo valor?            if(x === y) es el mismo tipo y valor?

*                   COMILLAS GRAVES
    `codigo html... ${variable}`
*                        mapas
                 son como los json
*                   ARRAY ASOCIATIVO
    let pc={
        nombre:"AnndyPc",
        procesador:"Intel Core i59400f",
        ram:"16gb"
    }

*                   Array de Arrays
    let array=[["andy","fernandez"],["dalto","loqsea"],["diana","gonzales"]];
    array[1][2]= loqsea;

*                   FOR IN AND FOR OF AND FOR EACH 
    for(let indices in animales) almacenas los indices
    fot(let valor of animales) almacenas los valores
    nodeList.forEach(let aux => console.log(aux)) puede recorrer objetos y nodos lista
}

*                       NoSeUsa
    ventana.resizeBy(x,y); cambia el tamaño de una ventana si el servidor lo permite de manera relativa
    ventana.resizeTo(x,y); cambia el temaño de una ventana si el servideor lo permite de manera absoluta
    ventana.moveBy(x,y); mueve la ventana en una ubicacion relativa
    ventana.moveTo(x,y); mueve la ventana en una ubicación absoluta

*                       EXTRAS 
    let materiasHTML=´ se puede crear contenido html
        <div>
            <div>materia ${...}</div>
            <div>nota ${...}</div>    
        </div>
    se puede mandar como parametro funciones flecha
    se puede retornar una funcion tambien
    undefined 
    typeof valor:
    tipado dinamico suma="" + x + y (xy)
    parseInt()
    x %= 3  reciduo 2
    x**2=x`2
    
*                        JSON
    JSON=java script object notation
    cuando enviamos datos a un servidor o a otro lugar hay que serializar
    JSON.stringify(Serializar)
    JSON.parce(desSerializar)

*                  switch
    switch(variable){
        case valroV:
            break
            .....
        default:
            alert("no es ninguna")
    }

*                                                       FUNCIONES DE JAVASCRIPTS
*                        Objects
    Object.defineProperty(obj,`nombre`,{value:"pedro",writeable:"false"});   para definir una propiedad en un objeto
    Object.preventExtensions(obj); no permite extenciones o arñadir propiedades
    delete obj.propiedad /(se usa para eliminar propiedades de objetos)
    Object.values(obj)  devuelve un array del objeto
*                        cadenas
    cadena.startsWith()
    cadena.endsWith()
    cadena.includes()
    cadena.indexOf("palabra") -1
    cadena.lastIndexOf("palabra")
    cadena.toUpperCase()           
    cadena.toLowerCase() 
    cadena.repeat(veces)
    cadena.concat("texto",cadena2);
    cadena.slice(-3,-2)  desde el ultimo -1 
    cadena.substring(inicio,final)
    cadena.split("criterio para dividir") cadena=("hola,como,estas")  cadena[0]="hola"
    cadena.trim() elimina espacios
    cadena.trimStart() del inicio
    cadena.trimEnd() del final
    cadena.padStart(tamaño,"extraAlInicio")
    cadena.padEnd(tamaño,"extraAlFinal")
    String.fromCharCode(n1,n2,n3)  n=ascii
    cadena.charCodeAt(0) numero ascii

*                       Arrays
    let tamaño = nombres.push(); agregar al final del array 
    let ultimo = nombres.pop(); elimina el ultimo 
    nombres.unshift("alex","juan") agrega al inicio 
    let primero = nombres.shift(); elimina el primero
    nombres.includes("pedro");
    nombres.indexOf("pedro"); 
    nombres.lastIndexOf)("pedro") 
    nombres.reverse();
    nombres.sort();
    arreglo.map((date)=>{});
    nombres.splice(posicion,numero de elementos a eliminar, elementos a añadir)
    let cadena = nombres.join("loq sea" espacio entre elementos)
    let subArray= nombre.slice(inicio,final) es como el substring  o crea un clon si no se le manda parametros
    let nuevoArray = nombres.filter(variableLocal => expresionLogica)filtra elementos segun la expresion logica 
    nombres.forEach(numero =>{document.write(numero + "<br>")}
    every(e => expresion logica) devuelve un array de boleans 
    array.find(e => e.value === nombre); devuelve el primer elemento que cumple;

*                        Math
    Math.sqrt() raiz cuadrada
    Math.cbrt() cubica
    Math.max(a,c,b,1) mayor
    Math.min(a,c,e,s) menor
    Math.ramdon()
    Math.round() redondear
    Math.floor() devuelve la parte entera nada mas

*                       CONSOLA
    console.clear() limpia la consola
    console.log("manda imformacion") a la consola 
    console.table(array o objeto) muestra una tabla descriptiva del array o objeto
    console.dir(object) muestra de manera mas especifica el objeto o array
    console.count() cantidad de veces que se ejecuto la funcion
    console.countReset() resetea la cantidad  

    console.group("nombre de grupo") crea un grupo de codigo en consola
    console.groupEnd() sale del gurpo actual en que se encuentra

    console.time() inicia un cronometro algo asi como nanotime
    console.timelog() para mostrar dicho tiempo
    console.timeEnd() para mostrar el tiempo final

*                       DOM
    Es la raiz que enlaza todos los elementos

*                       NODOS
    -Document = es la raiz o el nodo raiz del cual derivan todos los elementos
    -Element= nodo definido en un tag  (cada elemento es unico al momento de crearse no puede haber 2 iguales o trabajar con el mismo elemento)
    -Text= nodo que es hijo directo de un element o puede estar entre elements
    -Attribute= es imformacion asociada al nodo element 
    -Comentarios y Otros= los comentarios y el doctype generan nodos

*                      DOCUMENT

*                   CREANDO ELEMENTOS
    const item=document.createElement("tag o elemento" siempre en mayuscula)
    const texto=document.createTextNode("este es un item de la lista") crear objeto texto
    const fragmento=document.createDocumentFragment();
    
*                SELECCIONANDO ELEMENTOS
    document.getElementById("id")
    document.getElementsByTagName("p,a,div")
    document.querySelector(.clase) 
    document.querySelectorAll(.clases)

*                       Atributos
    nodo.setAttribute("type","text") 
    nodo.getAttribute("type")
    nodo.removeAttribute("type")

*                   Atributos Globales 
    nodo.contentEditable = true
    nodo.className 

*                   Atributos multimedia
    multimedia.src = "http://url"
*                   ATRIBUTOS DE IMPUTS
    input.minlength="5" tamaño minimo de caracteres del input
    input.value valor del input
    input.type="color text number" modificar
    input.accept="img/png"  solo acepta archivos de tipo png cuanto el type="file"
    input.multiple="true" para file acepta multiples archivos 
    id="formulario"
    type="submit" form="formulario"  

*                        STYLE
    nodo.style.backgroundColor="red"  Camel Case "holaQueTal" para añadir elementos css

*                       CLASSLIST
    nodo.classList.add("clase a añadir")
    nodo.classList.remove("clase a remover")
    nodo.classList.item("indice")
    nodo.classList.contains("nombre de clase") 
    nodo.classList.toggle("nombre de clas") si tiene la clase la saca y sino la añade
    nodo.classList.replace("old","new")

*                 obtencion de elementos
    elemento.textContent=devuelve el texto de cualquier nodo y modo sin el html
    elemento.innerHTML= devuelve el contenido html dentro del nodo
    elemento.outerHTML= devuelve el contenido html completo junto con el nodo 
   
*                         CHILDS
    contenedor.appendChild(objeto texto,elemento,fragment) 
    contenedor.firstChild; primer hijo o nodo
    contenedor.lastChild; ultimo nodo
    contenedor.firstElementChild; primer nodo Element 
    contenedor.lastElementChild; ultimo nodo elemento
    const hijos= contenedor.childNodes; 
    const nodeList= contendedor.children; nodos Elementos en un nodeList los nodeList se pueden recorrer no son un array

*                     METODOS CHILDS
    contenedor.removeChild(nodo); 
    contenedor.hasChildNodes(); 
    contenedor.replaceChild(itemNuevo,itemViejo) reemplaza un nodo hijo

*                         Padres
    item.parentElement;
    item.parentNode;

*                        Hermanos
    item.nextSibling muestra el nodo hermano siguiente
    item.previousSibling muestra el nodo hermano anterior
    item.nextElementSibling; muestra el nodo elemento posterior
    item.previousElementSibling; muestra el nodo elemento anterior
                especial
    item.closest(".clase") busca al elemento padre mas cercano con el nombre de la calse



*                         WINDOW
    hereda las propiedades de eventTarget
    ventana.open(https://fasdfasdfasdfasfd.com) abre una ventana emergente
    ventana.close(); cerrar la ventana emergente
    ventana.closed,window.closed; 
    ventana.stop() detiene la ejecucion de una ventana
    ventana.print() config del navegador y inmprimir es igual
    let bandera=window.confirm("esta seguro de que desea salir de la pagina")

*                         SCREEN
    ventana.screen.width ancho total
    ventana.screen.height altura total
    ventana.screen.availwidth ancho total disponible o visible
    ventana.screen.availheight alto total disponible o visible
    ventana.screen.innerwidth ancho total o visible del viewport
    ventana.screen.innerheight alto total del vp
    ventana.screenLeft; distancia del borde de la ventana respecto a la pantalla del pc
    ventana.screenTop; distancia del borde de la ventana respecto a la pantalla del pc
    ventana.scrollY; distancia en px scroleado 
    ventana.scrollX; distancia en px scroleado
    ventana.scroll(x,y); cuanto se va a scrolear
    
*                       Location

    let ubicacion=ventana.location.href;
    let protocolo=ventana.location.protocol; 
    let dominio=ventana.location.hostname; 
    let origen= ventana.location.pathname; 
    ventana.location.assign("")

*                       EVENTOS
    nodo.addEventListener("evento",funcion);
    nodo.removerEventListener("evento", funcion);
                !Incluye a los hijos
    
*                       MOUSE
    click
    dblclick
    mouseover
    mouseout o mouseleave
    contextmenu
    mousemove
    mousedown
    mouseup

*                      TECLADO
    keydown
    keyup
    keypress

*               EVENTOS DE LA INTERFACE
    error=cunado ocurre un error multimedia o de un objeto
    load=cuando se ha cargado  un objeto
    beforeunload=antes de que se haya cargado el <a>
    unload=despues de que se haya ido a otro sitio <a>
    resize=cuando se cambia el tamaño de la ventana
    scroll=cuando se desplaza la barra de desplazamiento
    select=ocurre cuando se selecciona un texto de input o textarea<>
    
*              DRAG and DROP
    ?eventos del objeto
    dragstart  coger down
    drag sostener takeing
    dragend  soltar up
    draggable
    ?eventos de la zona a soltar
    dragenter cuando se introduce un elemento
    dragleave cuando se saca fuera el elemento
    dragover cuando se sostiene el elemento dentro de la zona a soltar
        ?para soltar el elemento 
        dragover e=>{e.preventDefault()}
    drop  ahora se puede soltar y se activa este evento
        ?para transferir el elemento a una zona (datos)
        dragstart e=>{e.dataTransfer.setData('text/plain',e.target.className)} o  dragstart e=>{e.dataTransfer.setData('clase',e.target)}
        drop e=>{e.dataTransfer.getData("clase")}


*                Propagacion de Eventos
        item.addEventListener("click",(e)=>{
                    alert("di click en el boton padre")
        },true)
        item.addEventListener("click",(e)=>{
                    alert("di click en el boton hijo")
                    e.stopPropagation(); para deteneer la propagacion
        },true)
        item.addEventListener("click",(e)=>{
                    alert("di click en el boton subhijo")
        })
        para para el evento e o click e.stopPropagation

    setTimeout(funcion o funcion flecha, tiempo)
    setInterval(funcion o funcion flecha,intervalo)
    clearTimeout()
    clearInterval()
    (consume muchos recursos)

*                   Extras
    success = cuando todo salio bien
    chance = para imput o select cuando cambia cualquiera de los 2
    
*              CONTROLAR ERRORES
    (no controla los errores de sintaxis)
    try{ error.....} 
    catch(e)=>{que hacer}
    finally{se ejecuta y sobreescribe a las anteriores}
      
*                   Promesas
    las promesas trabajan en tiempo real esperan a recibir la imformacion para ejecutarse
        const nuevaPromesa=new promise(resolve,reject)=>{
            if(){
                resolve(),reject()
            }else{
                reject(),reject()
            }
        }
        nuevaPromesa
        .then(respuesta=>{...})
        .catch(rejected=>{....}))

    !shorthand
        promesa
        .then(console.log)     imprime el primer elemento que recibe por parametro
        .catch(console.log)
        
*                async & await
    trabaja con promesas:por ejemplo si se hace una llamada a un servidor el servidor puede
    mandarme imformacion desordenada y con el await que solo se puede hacer en funciones 
    asincronnas puedo especificar el ordern
    await espera a q se termine de ejecutar una linea de codigo o funcion
   
*               Peticiones HTTP
    son las peticiones que hace la pagina web mediante el http                    
    noguarda la informacion
        !1=se creo la solicitud correctamente
        !2=la solicitud se envio correctamente
        !3=se esta procesando la peticion
        !4=todo listo nos dio una respuesta y el resuldato se puede mostrar
        
*                       AJAX
    trabaja en tiempo real con el servidor o trabaja en paralelo con la request sin intervenir a la peticion
    para enviar serializarlo para trabajarlo convertirlo a JSON

    let peticion;
    if(window.XMLHttpRequest) peticion= new XMLHttpRequest();
    else peticion= new ActiveXObject("Microsoft.XMLHTTP");
    ?GET
    let peticion = new XMLHttpRequest("GET", "http://url/peticiones");
    peticion.send();
    peticion.addEventListener("load",()=>{
        if(peticion.status==200 || peticion.status==201){
            console.log("peticion.response");
        }
    })
        ?POST
    peticion.open("POST", "url");
    peticion.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    peticion.send(JSON.stringify({
        "nombre": "mariano",
        "nombre": "mariano",
        "nombre": "mariano",
    }))

*                       FETCH   
    si se trabaja con pocas peticiones o peticiones especificas
    si sale undefined es por que necesitamos async await
    es una promesa pra acceder .then y para los callbacks Promise.resolve Promise.reject otro then para accerder al dato si se usa esto
    se accede como una primesa y para desencarpsular el contenido usamos otro then 
    res.ok verifica el status (false, true)
    text()
    json()
    blob()  
            ?GET
    let peticion = fetch("url")   
    peticion
        .then(res=>res.text())
        .then(res=>console.log(res))
            ?POST
    fetch("url",{
        method: "POST",
        body: JSON.stringify({"nombre": "mariano"})
        headers: {"Content-Type": "application/json"}}
        ).then(res=>res.json())         desencapsular y convertirlo
         .then(res=>console.log(res));
    !los archivos multimedia o imagenes son de tipo blob() 
    para crear una pagina de imagen
    img = objeto blob
    imagen.src=URL.createObjectURL(img)    crea una ruta temporal para almacenar el contenido multimedia

*           Libreria Axios
    si se trabaja con muchas peticiones
    no es necesario serializar los json 
        https://github.com/axios/axios
        Using jsDelivr CDN:
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
            ?GET
    axios("url")    por defecto tambien es GET
        .then(res=>console.log(res.data))
            ?POST
    axios.POST("url", String object json number)

*               PROTOTIPES
    existen como el __proto__object (principal o del que heredan todos)
    -__proto__:String
    -__proto__:Number
    -__proto__:Array
    -__proto__:Objetc
    para los objetos se heredan un subObject de las clases que tiene los metodos de la clase y se puede modificar muy a parte de heredar el __proto__:object
    cada ves que creamos una funcion se crea un prototipo nuevo igual se hereda el object pero al prototype nuevo creado  .prototype 
    los prototipos heredan sus metodos y estos metodos pueden ser modificados o redefinir el prototype de otro

*               MODO STRICTO
        !"use strict"; primera linea
    
*               Funcion Flecha
    si es de una sola linea retorna la linea sin escribir return 
    !no se usan para metodos ni para constructores
    !el this dentro de una funcion flexha hace referencia al window  

*           Parametro Rest
    (arg1,arg2...array) recibe cualquier cantidad de parametros y los almacena como array siempre tiene q ir ultimo
    array3=[...array1,...array2]
    array2.push(...array1);

*               Objeto Date
    const fecha = new Date("se puede mandar en ms empezara a contar el tiempo desde 1970");
    fecha.getDate() (devuelve la fecha del dia)
    fecha.getDay() (devuelve el indice del dia empieza en domingo 0)
    fecha.getMonth() (devuelve el indice del mes empieza en enero 0)
    (fecha.getYear()+1900) (devuelve el año actual)
    fecha.getHours() (devuelve la hora exacta)
    fecha.getMinutes() (devuelve los minutos actuales)
    fecha.getSeconds() (devuelve los segundos actuales)
    Date.now() tiempo que paso en ms desde el 1 de enero de 1970

*               Local Storage
    se guarda la imformacion aunque se cierre el navegador
    localStorage.setItem("nombre","pedro") para definir o modificar el item
    localStorage.getItem("nombre")  obtenemos el item
    localStorage.removeItem("nombre") eliminamos el item
    localStorage.clear()  limpia todo el almacenamiento

*               Session Storage
    se guarda la imformacion solo en la secion activa se cierra y se borra la imformacion
    sessionStorage.setItem("nombre","pedro")
    sessionStorage.getItem("nombre")
    sessionStorage.removeItem("nombre") eliminamos el item
    sessionStorage.clear() limpia todo el almacenamiento
    !el almacenamiento del localStoragey sessionStorage es de 5mbys


*              Geolocalizacion
    const geolocation = navigator.geolocation
    ?parametro para la ubicacion actual
    const posicion=pos=>{
        console.log(pos)   objeto geolocation   pos.coords.longitude   pos.coords.latitude
    }
    ?parametro para el error
    const err=e=>{console.log(e)}
    ?parametro para las options
    const options{
        maximumAge=0,
        timeout=5000,
        enableHighAccuracy: true   accuracy   precision
    }
    geolocation.getCurrentPosition(posicion)
    geolocation.getCurrentPosition(posicion,err,options)

    !watchPosition

*           Historial
    history
    history.back() para atras
    history.forward() para adelante
    history.go(indice relativo a la pagina actual 1)

*           FileReader 
    ?readAsText
    selecciona el file o archivos para accerderlos archivo.files o archivo.file[0]si solo es uno
    const reader = new FileReader();
    reader.readAsText(archivo a leer)
    reader.addEventListener("load", (e)=>{
        console.log(e.currentTarget.result);    podemos convertirlo a json o txt
    })
    ?readAsUrl
    contenido multimedia
    reader.readAsDataUrl(img[])
    reader.addEventListener("load", e=>{
        e.currentTarget.result 
    })

*               IndexedDB

    IDBRequest= indexedDB.open("database",1(version)) si existe la abrimos sino la crea se almacena como el localStorage
    ?IDBRequest = es la solicitud
    ?IDBRequest.result= la base de datos
    ?sino esta creadad se activa el evento upgradeneeded
    ?complete es un evento cuando se ha completado una solicitud
    IDBRequest.addEventListener("upgradeneeded",()=>{
        console.log("se creo correctamente");
    })
    para crear objectStore 
    IDBRequest.addEventListener("success",()=>{
        const db = IDBRequest.result;
        db.createObjectStore("nombres",{      (creando almacen de objetos algo asi como una relacion)
            autoIncrement:true;
        })
    })
    TODO para crear objects
    const addObjeto = objeto=>{
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres","readwrite");   solicitamos la transaction
        const objectStore = IDBtransaction.objectStore("nombres");     damos permiso para acceder 
        objectStore.add(objeto)
        IDBtransaction.addEventListener("complete",()=>{
            console.log("objeto agregado correctamente");
        })
    }
    TODO para leer objects
    ?cursor.result.key(pra leer la key del objeto)
    const leerObjestos=()=>{
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres","readonly");
        const objectStore= IDBtransaction.objectStore("nombres");
        const cursor= objectStore.openCursor();
        cursor.addEventListener("success",()=>{
            if(cursor.result){
                console.log(cursor.result.value);            para que lea un objeto
                cursor.result.continue();                    para que lea todos los objetos es como un while
            }else(console.log("todos los datos fueron leidos"))   en la ultima vuelta
        })
    }
    TODO para modificar objects
    const modificarObjeto=(key,objecto)=>{
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres","readwrite");
        const objectStore = IDBtransaction.objectStore("nombres");
        objectStore.put(objeto,key);
        IDBtransaction.addEventListener("complete",()=>{
            console.log("objeto modificado correctamente");
        })
    }
    TODO para eliminar objects
    const eliminarObjeto=key=>{
        const db = IDBRequest.result;
        const IDBtransaction = db.transaction("nombres","readwrite");
        const objectStore = IDBtransaction.objectStore("nombres");
        objectStore.delete(key);
        IDBtransaction.addEventListener("complete",()=>{
            console.log("objeto eliminado correctamente")
        })
    }
    TODO addObjeto({nombre: "andy"});
    TODO leerObjestos()
    TODO modificarObjeto(1,{nombre:"ramiro"})
    TODO eliminarObjeto(1);

*               matchMedia
    const mql= matchMedia("(max-width:500px)");  
    ?change se va ejecutar segun matches 2 estados
                propiedades
    TODO para ver sus propiedades consolo.log(mql)
        matches:true o false  (si se cumple)

*           Intersection ObServer
    const cajas= document.querySelectorAll(".cajas");
    const observer= new IntersectionObserver(verifyVisibility)
    const verifyVisibility = (entries) =>{         (siempre devuelve un array) 
        for(entry of entries){
            if(entry.isIntersecing)....console.log("se esta viendo la caja: ", entry.target.textContent)
        }
    }
    for(const caja of cajas){
        observer.observe(caja);
    }

*              VisibilityChange
    es un evento cunado se cambia de pestaña 
    ?e.target.visibilityState == "visible"   una propiedad que muestra dos estados hidden o visible

*               Notification
    if(!("Notification" in window)){
        console.log("las notificaciones no estan disponibles")
    }

    Notification.requestPermission(()=>{
        if(Notification.permission=="ganted"){
            console.log("permiso concedido")
            new Notification("Suscribete papu")   crea una notificacion al entrar a la pagina
        }
    })

*               Web Workers
    const worker = new Worker("script.js");

    ?para enviar parametros 
        desde el index: worker.postMessage(mensaje valor string num objeto)
        a el script con el evento "message"          puede ser viceversa o ambos pero crearia un bucle
    ?worker.terminate() para terminar el bucle o worker

    !same-origin   el script tiene que ser del mismo protocolo host y puerto  "http://localhost:80/codigo/script.js"

*               Objeto Navigator
para controlar el tiempo de ejecucion podemos usar Date   ej.  const date1 = new Date();  ........  new Date() - date1

*               Memoizer
    let cache=[];
    const memoizer = function =>{
        return e =>{
            const index = e.toString()
            if(cache[index] == undefined){
                cache[index] = func(e);
            }
            return cache[index];
        }
    }
    ?funcion hacerAlgo=......
    ?const memo = memoizer(hacerAlgo);
    ahora las tareas con memo

*               Caché
    caches.open("archivos-estaticos")   es como un object storage si existe la abrimos sino la crea
    ?trabaja como promesa
    caches.open("archivos-estaticos").then(cache=>{
        console.log("cache")  para ver al objeto cache
        metodos actuan como promesas resolve si salio todo bien y reject de lo contrario then y catch
        -cache.add("index.html")
        -cache.addAll(["index.html","style.css","script.js"])   añadir todos los archivos
        -cache.delete("index.html")
        -cache.match("index.html").then(resolver=>{
            consol.log(resolve)                         es como un querySelector y se resuelve como una promesa osea devuelve resolve o reject 
        })
        -cache.matchAll("index.html")  es como un querySelectorAll
        -cache.keys().then(resolve=>{consol.log(resolve)})    muestra en un array todos los archivos del object Storage en este caso archivos-estaticos
    })
 
*              Service Workers        comunicacion entre una pagina y otra
    es como un intermediario entre el servidor y la pagina web tanto de emision o recepcion es un script.js que tiene muchos eventos
    el service worker corre en el almacenamiento local del usuario se instala en su pc y corre aunque se cierre el navegador
    if(navigator.serviceWorker){    si es undefined es falso
        navigator.serviceWorker.register(sw.js);          para instalar el service worker que es un script.js
    }else{
        console.log("tu navegador no soporta service worker")
    }

    self.addEventListener("install",e=>{
        console.log("instalando service worker")   para verificar que se este instalando
    }

    self.addEventListener("activate",()=>{
        console.log("el service worker esta activo")   pra verificar que esta activo
    })

    error  es caso de que haya errores

    ?para enviar imformacion
    navigator.serviceWorker.ready.then(res=> res.active.postMessage("hola como estas"));   
                ready= verifica que ya haya cargado y esot devuelve una promesa
                acitve= es el service worker activo o registrado
    ?para recibir imformacion de la service worker o el main
    con el evento message y el parametro e.data

    ?para enviar imformacion desde el service worker con el evento message e.source.postMessage("respuesta") 
    ?para eliminar el chace de versiones anteriores
    self.addEventListener("active",()=>{
        caches.keys().then(key=>{
            return Promise.all(   retorna arreglo de chaces
                key.map(cache=>{
                    if(cache !== version){
                        console.log("cache antiguo eliminado")
                        return caches.delete(cache);
                    }
                })
            )                              
        })
    })
    ?para iniciar una pagina sin conexion osea guardada en el cache se usa el evento fetch

*              Cookies
    son datos o archivos que se guardan en el navegador del usuario
    COOKIES        clave=valor;atr;atr;atr;atr;atr
        let cookie= document.cookie = "user=andy"
    ?forma de una cookie
    "name=value;expires=Thu, 01 Jan 1970 00:00:00 UTC ; path=/;max-age=1000s";   
        dato                fecha a limite            ubicacion  duracion    
    !si no se expecifica expires expira al cerrar la sesion o cerrar la pagina
    !su limite es de 4kbytes son mas rapidas que el sessionStorage o localStorage
        crear cookie
        obtener cookie
        para modificarla simplemente sobreescribimos document.cookie = "valorAModificar=modificado"

*               CANVAS
    es como un elemento html q tiene graficos incluidos
*/
