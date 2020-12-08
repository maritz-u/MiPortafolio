import {primeraVista} from "./Vistas/Presentacion.js";
import {Proyecto} from "./Vistas/Proyecto.js";
import {Sobremi} from "./Vistas/Sobremi.js";
import {Contacto} from "./Vistas/Contacto.js";

export const initRouter = () => {
    window.addEventListener('load', changeRoute(window.location.hash));
    if('onhashchange' in window){
        window.onhashchange = () => {
            changeRoute(window.location.hash)
        }
    }
}

export const changeRoute = (hash) => {
    const router = hash.substring(1);
    console.log(router);
    const containerRoot = document.getElementById('root');
    containerRoot.innerHTML = '';

    switch (router) {
    case 'Presentacion':
        containerRoot.appendChild(primeraVista());
        break;
    case 'Proyecto':
        containerRoot.innerHTML= Proyecto;
        break;
    case 'Sobremi':
        containerRoot.innerHTML= Sobremi;
        break;
    case 'Contacto':
        containerRoot.innerHTML= Contacto;
        break;
   
    default:
        primeraVista();
    }
};
