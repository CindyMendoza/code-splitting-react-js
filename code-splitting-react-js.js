
// División de código en React js

// ¿Qué es la división de código en React js?
// La división de código en react js simplemente derramó su paquete generado por Wepack o Browserify en múltiples y los cargó dinámicamente.



// ¿Por qué es importante dividir?  Desarrollamos una aplicación de reacción. Nuestro código importa muchas bibliotecas de terceros. El paquete generado por el paquete web o Browserify también se vuelve más y más gordo. Este archivo fat budle.js tarda en descargarse en el navegador y el usuario siente la incomodidad con la aplicación web.



// Ventajas:  aunque no ha reducido la escritura de códigos, ha reducido el código necesario para descargar. Esta carga diferida puede mejorar drásticamente el rendimiento de su aplicación web.



// Formas de implementar la división de código:

// importar como una función :
// math.js
export function add(a, b) {
  return a + b;
}
import("./math").then(math => {
  console.log(math.add(16, 26));
});




// Cuando Webpack encuentra esta sintaxis, automáticamente comienza a dividir el código de su aplicación. Si está utilizando la aplicación Create React, esta ya está configurada para usted y puede  comenzar a usarla de  inmediato.

// Si está configurando Webpack usted mismo, probablemente querrá leer la guía de paquetes web sobre la división de código. Su configuración de Webpack debería verse vagamente así.



// React Loadable Library:  React Loadable  envuelve las importaciones dinámicas en una API agradable y amigable con React para introducir la división de código en su aplicación en un componente dado.
//without code splitting

import OtherComponent from './OtherComponent';

const MyComponent = () => (
  <OtherComponent/>
);


//with code splitiing

import Loadable from 'react-loadable';

const LoadableOtherComponent = Loadable({
  loader: () => import('./OtherComponent'),
  loading: () => <div>Loading...</div>,
});

const MyComponent = () => (
  <LoadableOtherComponent/>
);


// React Loadable lo ayuda a crear  estados de carga ,  estados de error ,  tiempos de espera ,  precarga y más. Incluso puede ayudarlo a  renderizar  una aplicación del lado del servidor con mucha división de código.

// División de código en React Router: aunque la idea de dividir el código parece increíble, dónde dividir el código es una decisión difícil. La ruta es el mejor lugar para cargar las cosas con pereza.

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => <div>Loading...</div>;

const Home = Loadable({
  loader: () => import('./routes/Home'),
  loading: Loading,
});

const About = Loadable({
  loader: () => import('./routes/About'),
  loading: Loading,
});

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </Switch>
  </Router>
);
