export const primeraVista = () => {
  const Presentacion = document.createElement("div");
  const vistaPresentacion = `
    <ul class="snip1459">
  <li><a href="#">Inicio</a></li>
  <li class="current"><a href="#">Sobre mí</a></li>
  <li><a href="#">Contacto</a></li>
  <li><a href="#">Proyectos</a>
</ul>
    
    <div class="contenedorPrincipal">
    <figure class="snip1584"><img src="./Imagen/Aa.jpg" alt="sample87"/>
    <figcaption>
      <h3>Developer</h3>
      <h5>Proyectos</h5>
    </figcaption><a href="/#Proyecto"></a>
    </figure>
  
    <figure class="snip1584"><img src="./Imagen/IMG_0898.JPG" alt="sample119"/>
    <figcaption>
      <h3>Maritzu Zúñiga</h3>
      <h5>Sobre mí</h5>
    </figcaption><a href="/#Sobremi"></a>
    </figure>
    
    <figure class="snip1584"><img src="./Imagen/coffee.png" alt="sample120"/>
    <figcaption>
      <h3>Trabajemos juntos</h3>
      <h5>Contacto</h5>
    </figcaption><a href="/#Contacto"></a>
    </figure>
    </div>
    `;

  Presentacion.innerHTML = vistaPresentacion;
  return Presentacion;
};

/* Demo purposes only */
const snippet = [].slice.call(document.querySelectorAll(".hover"));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener("mouseout", function (event) {
      if (event.target.parentNode.tagName === "figure") {
        event.target.parentNode.classList.remove("hover");
      } else {
        event.target.parentNode.classList.remove("hover");
      }
    });
  });
}
