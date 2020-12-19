import {primeraVista} from "./Vistas/Presentacion.js";
import {Proyecto} from "./Vistas/Proyecto.js";
import {Sobremi} from "./Vistas/Sobremi.js";
import {Contacto} from "./Vistas/Contacto.js";
import {Menu} from "./Vistas/Menu.js";

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
    const containerMenu = document.getElementById('navegacion');
    containerRoot.innerHTML = '';
    containerMenu.innerHTML = '';

    switch (router) {
    case 'Proyecto':
        containerRoot.innerHTML = Proyecto;
        containerMenu.innerHTML = Menu;
        break;
    case 'Sobremi':
        containerRoot.innerHTML= Sobremi;
        containerMenu.innerHTML = Menu;
        break;
    case 'Contacto':
        containerRoot.innerHTML= Contacto;
        containerMenu.innerHTML = Menu;
        break;
    case 'Presentacion':
    default:
       containerRoot.innerHTML = primeraVista;
    }
};
