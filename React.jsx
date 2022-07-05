/*
*                   para crear un proyecto en yarn con vite----------------------
  yarn create vite
  entramos al proyecto y luego yarn en consola
  y code . para abrirlo en vsc

          !yarn instala dependencias de desarrollo antes del proyecto y crear el package.json de 
          !yarn dev para iniciar el proyecto en un local server
          !yarn build para sacarlo a produccion se crea la capeta dist y su contenido iria directo al hosting de la pagina
          !yarn test para testear
*--------------------------Extras----------------------
  null no se renderiza 
                  node backend
                  React Native
                  electron
              to do con el mismo codigo

                     !jsx   version de React 18 pa adelante
react trabaja en una sola via o en un solo elemento
*conponenetes=pieza de codigo encapsulada re-utilizable que puede tener estado o no
*estado= informacion del componente en un punto determinado ej. inputs
*-------------------Variables-----------------
  let variableJS="andy";   variableJS= es una expresion
  const nombre=<h1> mi nombre es {variableJS}</h1>
  const objeto={};
  !serialisamos los objetos 
  const nombre=<h1> mi nombre es {JSON.stringify(objeto.algo)}</h1>;
*                  ReactDon---------------------
  ReactDON.createRoot(nodo)
  ReactDON.render(contenido, elemento)
  nodo.render(<React.StrictMode> 
      <ComponeneteImportado/>
    </React.StrictMode>)
              
*--------------------Elementos en el componente fragment------------------------------
  <>
    h1 {
    <p className=""></p>
    ....
  </>

*importar solo los componentes dependientes------------------------------
*importar css a .jsx       import './styles.css';

  ReactDOM.createRoot(document.getElementById('root')).render(
*--------------------------props------podemos modificarlo en la herramienta de desarrollo-del navegador--
   es un objeto q sirver como parametro de comunicacion entre elementos o componentes
   <ComponeneteImportado  title="hola mundo"  num={18}/>    envia esas props o pripiedades con sus respectivos valores para recibirlos como parametro y  desfragmentarlos los mismos del padre al hijo

*-------------------------PropTypes-------------si se trabaja con typeScript no es necesario
  import PropTypes from 'prop-types';
  instalarlo si se trabaja con vin  "yarn add prop-types"

  componente.propTypes = {
    title: PropTypes.string.isRequired     el elemento title del objeto prop tiene que ser un string y es obligatorio o requerido
    subtitle: PropTypes.number.isRequired
    
  }

  componente.defaultProps ={
    title: 'no hay titulo',
    subtitle: -1  1
  }

*-------------------------Eventos------------------------
  onClick
  onChange
  onSubmit
      e.preventDefault();
  se puede enviar funciones tambien 

*-------------------------Hooks------------------------
  !no poner en condicionales los hooks
  *useState
      para cambiar el estado de un elemento en un componente
      const [counter, setCounter] = useState( valor )
      counter = valor
      setCounter(nuevo valor)
      para retornar un li o un componente tenemos q poner un key
  *useEffect
      no puede contener una funcion asyncrona


*                                       PRUEBAS UNITARIAS Y DE INTEGRACION                                                 
  !UNITARIAS= enfocadas en pequeñas funciones
  !INTEGRACION= enfocadas en como reaccionan varias piezas conjuntas entre si
        *A arange= 
        *A arc
        *A afirm
  TODO jest  para javascript
              ir a la documentacion y ver en get started
    yarn add --dev jest
    package.json  en scripts añadir "test":"jest"
    "yarn": "test --watchAll"
    si se trabaja con babel ir a la documentacion para instalarlo y crear el archivos babel.config.js
  !no se puede hacer pruebas de algo que no esta siendo exportado
    describe('test de algo', () => {
      test('test de algo', (aca puede ir el done para especificar cuando se termina el test con jest) => {
        !pueden ser:
          *expect().toBe()  es para comparar valores primitivos
          *expect().toEqual() es para comparar objetos
          *expect().toBeFalsy() se espera un retorno de tipo negativo(false,undefined,null)       
        promesa.them(
          e=>console.log(e);
          done()   aca se termina el test emcapsulado por la promesa
        !version node 16 no tiene peticiones fetch 
        !para hacer testing a peticiones fetch si trabajamos con vite tenemos q instalar dependencias de desarrollo
          1-crear un archivo jest.config.js
            module.exports = {
              setupFiles: ['./jest.setup.js'];
            }
          2-yarn add -D whatwg-fetch   o isomorphic-fetch
          3-crear un archivo jest.setup.js
            import 'whatwg-fetch'   o  import 'isomorphic-fetch';
        )
      }
    })

    expect(letras).toEqual( expect.any(String,Number) )   espera que reciba cualquier string o number
  !en la terminal filtrar si solo se quiere trabajar en un archivo y no es todos  
  TODO: para React ir a la documentacion de jest yarn add --dev @testing-library/react  
      !dependencias de desarrollo y ajustes
      1.ir a jest.config.js  y añadir testEnvironment: 'jest-environment-jsdom'
      2. instalar yarn add -D jest-environment-jsdom
      3.ir a babel.config.js  
        module.exports = {
          presets: [
            ['@babel/preset-env', {targets: { esmodules: true } }],
            ['@babel/preset-react', {targets: { runtime: 'automatic' } }]
          ]
        };
      4.instalar yarn add -D @babel/preset-react
      !pueden ser:
        *render   se importa de render library/react    renderiza en el dom
            container es el objeto render es como un object nodo o document q contiene codigo html
              const h1 =  container.querySelector('h1');
            getByText busca el texto en el nodo
            getAllByText busca todos los textos coincidentes
            getByTestId busca el valor de atributo de un elemento nodo
            toMatchSnapshot   crear una carpeta y un  archivo de copia toma una foto del componente
            getByRole('heading', {level:1})   muestra la etiqueta h1
        *screen.los mismos de arriba
              screen.debug();  muestra el estado del dom
        *fireEvent.eventos
              fireEvent.click( screen.getByRole( 'button', {name: 'btn-mas'} ))
              en el button html añadir el atributo arial-name='btn-mas'
                                                  *expect
            expect( container ).toMatchSnapshot()   si se cambio saldra un error o para actualizarlo fijate en el error
            expect( getByText( titulo ) ).not.toBeTruthy(); pa ver si  no encuentra o q no exista
            expect( h1.innerHTMl ).toContain( title )
            expect( getAllByText( subtitle ).length ).toBe(3)
            expect( getByTestId( 'valor de atributo' ).innerHTMl ).toContain(titulo)
            expect( screen.getByRole( 'heading', {level:1}) ).innerHTMl).toContain(titulo) 
            expect.any( String )
          !mocs  simular hocks y custom hocks 
            jest.mock(pathName)
            Customhock.mockReturnValue({
              elemento1: 'algo',
              elemento2
            })
*/
