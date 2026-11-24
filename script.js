const ROSTER_RAW = [
  ["Shelly", "C", "Destructor", "Inicial", 3700, 1500, 2880, "Normal", "Domina arbustos y usa la Súper a quemarropa para romper muros."],
  ["Nita", "B", "Destructor", "Especial", 4000, 960, 400, "Normal", "Usa a Bruce para presionar líneas y absorber disparos rivales."],
  ["Colt", "B", "Destructor", "Especial", 2800, 2160, 3840, "Normal", "Acompaña el movimiento del rival para encajar todas las balas."],
  ["Bull", "C", "Tanque", "Especial", 5000, 2200, 1600, "Rápida", "Avanza entre coberturas y usa la Súper para cerrar distancias."],
  ["Brock", "B", "Tirador", "Especial", 2400, 1160, 9360, "Normal", "Aprovecha la explosión final del cohete para golpear tras esquinas."],
  ["El Primo", "C", "Tanque", "Especial", 6000, 1520, 960, "Rápida", "Carga Súper recibiendo daño y salta sobre objetivos sin escape."],
  ["Barley", "B", "Artillería", "Especial", 2400, 1520, 3800, "Normal", "Corta pasos estrechos dejando charcos consecutivos."],
  ["Poco", "B", "Apoyo", "Especial", 3700, 760, 2100, "Normal", "Mantén vivos a tus tanques en modos de control como Balón Brawl."],
  ["Rosa", "C", "Tanque", "Especial", 5000, 1380, 0, "Rápida", "Activa tu escudo de 70% al entrar en combate directo en arbustos."],
  ["Jessie", "B", "Control", "Superespecial", 3000, 1060, 260, "Normal", "Coloca a Scrappy detrás de muros para apoyar con fuego cruzado."],
  ["Dynamike", "B", "Artillería", "Superespecial", 2800, 1600, 2200, "Normal", "Predice hacia dónde esquivará el enemigo antes de lanzar dinamita."],
  ["Tick", "A", "Artillería", "Superespecial", 2200, 1920, 2000, "Normal", "Controla zonas clave sembrando minas y guarda la cabeza contra asesinos."],
  ["8-Bit", "B", "Destructor", "Superespecial", 5000, 1920, 0, "Muy lenta", "Usa la torreta potenciadora a cubierto para multiplicar el daño del equipo."],
  ["Rico", "S", "Destructor", "Superespecial", 2800, 1600, 3840, "Normal", "Rebota disparos en paredes para atacar sin exponerte en mapas cerrados."],
  ["Darryl", "A", "Tanque", "Superespecial", 5300, 2400, 400, "Rápida", "Con doble carga de Súper puedes entrar, eliminar y salir rodando."],
  ["Penny", "B", "Artillería", "Superespecial", 3400, 980, 1200, "Normal", "Castiga enemigos agrupados con el salpicado de monedas."],
  ["Carl", "A", "Destructor", "Superespecial", 4400, 1480, 3000, "Normal", "Lanza el pico cerca de muros para que regrese más rápido."],
  ["Jacky", "B", "Tanque", "Superespecial", 5000, 1240, 0, "Rápida", "Atrae rivales con la Súper a través de esquinas sin necesidad de apuntar."],
  ["Gus", "S", "Apoyo", "Superespecial", 3200, 1120, 2600, "Normal", "Lanza el escudo sobre un aliado agresivo para asegurar el duelo."],
  ["Bo", "B", "Control", "Épico", 3600, 1920, 4320, "Normal", "Despliega minas en rutas obligatorias para frenar el avance enemigo."],
  ["Emz", "B", "Control", "Épico", 3600, 1560, 240, "Normal", "Mantén a los rivales a media distancia para maximizar ticks de daño."],
  ["Stu", "S", "Asesino", "Épico", 3200, 1080, 0, "Rápida", "Encadena disparos y dashes constantes para volverte difícil de acertar."],
  ["Piper", "A", "Tirador", "Épico", 2350, 1700, 3600, "Normal", "Dispara al límite de alcance y reserva la Súper para escapar."],
  ["Pam", "C", "Apoyo", "Épico", 4800, 2340, 480, "Normal", "Sostén la línea frontal con la torreta curativa tras cobertura."],
  ["Frank", "A", "Tanque", "Épico", 7000, 1160, 1160, "Rápida", "A menos salud atacas más rápido; aprovecha ese pico de presión."],
  ["Bibi", "B", "Tanque", "Épico", 4800, 1400, 900, "Muy rápida", "Usa el bate cargado para empujar rivales fuera de zona y rebotar chicles."],
  ["Bea", "A", "Tirador", "Épico", 2500, 800, 700, "Normal", "Alterna disparo normal y disparo supercargado de altísimo impacto."],
  ["Nani", "A", "Tirador", "Épico", 2400, 2220, 1800, "Normal", "Converge los tres orbes en el punto exacto donde está el objetivo."],
  ["Edgar", "B", "Asesino", "Épico", 3300, 1080, 0, "Muy rápida", "Espera a que los rivales gasten sus habilidades de escape antes de saltar."],
  ["Griff", "A", "Control", "Épico", 3400, 2520, 3600, "Normal", "Abre el mapa con el gadget y derrite tanques con la Súper de cerca."],
  ["Grom", "B", "Artillería", "Épico", 2700, 1060, 1600, "Normal", "Juega en diagonal porque tus proyectiles se dividen en cruz."],
  ["Bonnie", "B", "Tirador", "Épico", 4800, 1120, 1000, "Lenta", "Debilita desde el cañón y salta con Clyde solo para rematar."],
  ["Gale", "S", "Control", "Épico", 3800, 1680, 600, "Normal", "Frena composiciones agresivas empujando a todo el equipo enemigo."],
  ["Colette", "A", "Destructor", "Épico", 3400, 1000, 2000, "Normal", "Dos básicos más Súper eliminan a casi cualquier brawler sin importar su vida."],
  ["Belle", "S", "Tirador", "Épico", 2600, 1040, 500, "Normal", "Marca al tanque enemigo para que reciba daño extra todo el combate."],
  ["Ash", "B", "Tanque", "Épico", 5400, 1600, 1500, "Normal", "Llena tu barra de furia para ganar velocidad y daño explosivo."],
  ["Lola", "B", "Destructor", "Épico", 3800, 1560, 1560, "Normal", "Coloca el ego ligeramente separado para cubrir más ángulo de tiro."],
  ["Sam", "B", "Asesino", "Épico", 5400, 1600, 1200, "Rápida", "Lanza los nudillos contra muros cercanos para recogerlos y curarte rápido."],
  ["Mandy", "A", "Tirador", "Épico", 2800, 1300, 2500, "Normal", "Quédate quieto un instante para ganar alcance extra y barrer líneas."],
  ["Maisie", "B", "Tirador", "Épico", 3600, 1280, 1240, "Normal", "Combina el dash del gadget con la Súper para sorprender de cerca."],
  ["Hank", "C", "Tanque", "Épico", 5400, 2100, 5280, "Normal", "Carga la burbuja mirando hacia atrás y gírala al último segundo."],
  ["Pearl", "A", "Destructor", "Épico", 3900, 1560, 2200, "Normal", "Deja subir el medidor de calor antes de entrar a intercambiar disparos."],
  ["Larry y Lawrie", "S", "Artillería", "Épico", 3000, 1400, 1200, "Normal", "Invoca a Lawrie para cubrirte de asesinos mientras bombardeas."],
  ["Angelo", "S", "Tirador", "Épico", 3000, 2200, 1000, "Muy rápida", "Flota sobre el agua para tomar ángulos imposibles y dispara cargado."],
  ["Berry", "S", "Apoyo", "Épico", 2500, 760, 1520, "Normal", "Cura aliados con tus charcos de helado para recargar Súper sin parar."],
  ["Shade", "A", "Asesino", "Épico", 3500, 1600, 0, "Rápida", "Atraviesa paredes con la Súper para atacar desde ángulos ciegos."],
  ["Meeple", "A", "Control", "Épico", 3200, 1300, 0, "Normal", "Usa los muros temporales para encerrar enemigos o proteger objetivos."],
  ["Mortis", "A", "Asesino", "Mítico", 3800, 1000, 900, "Muy rápida", "Cuenta las municiones enemigas antes de entrar con dashes encadenados."],
  ["Tara", "A", "Destructor", "Mítico", 3100, 1440, 800, "Normal", "Guarda el agujero negro para atrapar a dos o más rivales juntos."],
  ["Genio", "S", "Control", "Mítico", 3600, 1000, 300, "Normal", "Atrae al portador de gemas con la mano mágica teniendo equipo cerca."],
  ["Max", "S", "Apoyo", "Mítico", 3300, 1280, 0, "Muy rápida", "Acelera a todo tu equipo para iniciar jugadas coordinadas."],
  ["Señor P", "B", "Control", "Mítico", 3400, 760, 350, "Normal", "Obliga a los francotiradores a gastar munición destruyendo botones."],
  ["Sprout", "A", "Artillería", "Mítico", 3000, 980, 0, "Normal", "Bloquea pasillos enteros con el seto en momentos decisivos."],
  ["Byron", "S", "Apoyo", "Mítico", 2400, 1140, 1500, "Normal", "Alterna dardos curativos a aliados y veneno continuo a rivales."],
  ["Squeak", "B", "Control", "Mítico", 3600, 1080, 3000, "Normal", "Pega bombas en esquinas para negar paso por área."],
  ["Lou", "A", "Control", "Mítico", 3400, 1320, 200, "Normal", "Congela enemigos en Zona Restringida para detener su progreso."],
  ["Ruffs", "A", "Apoyo", "Mítico", 2800, 1200, 1000, "Normal", "Entrega mejoras de Súper a tus compañeros y cubre con sacos."],
  ["Buzz", "A", "Asesino", "Mítico", 4400, 2100, 0, "Rápida", "Usa el anillo de carga para tener Súper lista sin exponerte."],
  ["Fang", "B", "Asesino", "Mítico", 4300, 1360, 1200, "Rápida", "Carga Súper a distancia con zapatillas antes de lanzarte."],
  ["Eve", "B", "Destructor", "Mítico", 2900, 1520, 0, "Normal", "Aprovecha mapas con mucha agua para mantener distancia segura."],
  ["Janet", "A", "Tirador", "Mítico", 3400, 1000, 800, "Normal", "Usa el jetpack para escapar con gemas o rematar tras cobertura."],
  ["Otis", "A", "Control", "Mítico", 3400, 1380, 1020, "Normal", "Silencia al asesino rival justo cuando intente iniciar."],
  ["Buster", "S", "Tanque", "Mítico", 5200, 1320, 0, "Rápida", "Avanza junto a tus aliados para cargar Súper pasivamente."],
  ["Gray", "S", "Apoyo", "Mítico", 3300, 1160, 0, "Normal", "Crea portales para rotar rápido o sorprender con el bastón."],
  ["R-T", "A", "Destructor", "Mítico", 3900, 700, 1200, "Normal", "Marca objetivos para que todo tu equipo les haga daño extra."],
  ["Willow", "B", "Artillería", "Mítico", 2800, 1200, 0, "Normal", "Controla al rival con más Súper cargada para voltear peleas."],
  ["Doug", "C", "Apoyo", "Mítico", 5000, 1200, 0, "Rápida", "Coloca el perrito caliente justo antes de recibir daño letal."],
  ["Chuck", "A", "Destructor", "Mítico", 4500, 1080, 1750, "Rápida", "Traza una ruta directa de postes hacia la caja en Atraco."],
  ["Charlie", "B", "Control", "Mítico", 3300, 800, 0, "Normal", "Encierra en el capullo al tanque enemigo para dejarlo fuera 5 segundos."],
  ["Mico", "B", "Asesino", "Mítico", 3000, 1090, 1190, "Muy rápida", "Esquiva ataques saltando encima de lanzadores y francotiradores."],
  ["Melodie", "S", "Asesino", "Mítico", 3600, 460, 920, "Rápida", "Orbita alrededor del objetivo para que tus notas golpeen sin parar."],
  ["Lily", "A", "Asesino", "Mítico", 4200, 1200, 1000, "Muy rápida", "Usa el reino de las sombras para entrar o salir sin recibir daño."],
  ["Clancy", "A", "Destructor", "Mítico", 3300, 800, 760, "Normal", "Sube de fase golpeando enemigos para desbloquear tu ráfaga final."],
  ["Moe", "S", "Destructor", "Mítico", 3400, 1080, 1600, "Normal", "Excava bajo los rivales para levantarlos y rematar con el taladro."],
  ["Juju", "S", "Artillería", "Mítico", 3000, 1000, 800, "Normal", "Cambia de terreno (tierra, hierba, agua) para potenciar tus ataques."],
  ["Ollie", "A", "Tanque", "Mítico", 5600, 1000, 0, "Rápida", "Usa el ritmo hipnótico para atraer rivales hacia el fuego aliado."],
  ["Finx", "A", "Control", "Mítico", 3400, 1100, 0, "Normal", "Ralentiza proyectiles enemigos dentro de tu zona temporal."],
  ["Lumi", "S", "Destructor", "Mítico", 3100, 1250, 1800, "Normal", "Lanza las mazas y recógelas en el momento justo para atrapar enemigos."],
  ["Jae-Yong", "A", "Apoyo", "Mítico", 3300, 950, 0, "Rápida", "Alterna entre modo fiesta (velocidad) y modo trabajo (curación)."],
  ["Alli", "A", "Asesino", "Mítico", 3700, 1300, 1500, "Muy rápida", "Aprovecha arbustos y agua para acechar con saltos sorpresa."],
  ["Trunk", "B", "Tanque", "Mítico", 5500, 1350, 1400, "Rápida", "Gira tu ataque para golpear con el borde exterior y hacer más daño."],
  ["Ziggy", "A", "Control", "Mítico", 3100, 1120, 1600, "Normal", "Controla áreas amplias con descargas eléctricas encadenadas."],
  ["Gigi", "A", "Asesino", "Mítico", 3400, 1150, 1450, "Muy rápida", "Carga tu Súper esquivando ataques cercanos y teletranspórtate."],
  ["Glowbert", "A", "Apoyo", "Mítico", 3500, 980, 1200, "Normal", "Mantén el rayo conectado para curar aliados o drenar enemigos."],
  ["Najia", "A", "Destructor", "Mítico", 3200, 1240, 1650, "Normal", "Combina veneno y ráfagas rápidas para desgastar líneas frontales."],
  ["Spike", "A", "Destructor", "Legendario", 2400, 1680, 400, "Normal", "Coloca el cactus frente a ti para absorber disparos lineales."],
  ["Crow", "A", "Asesino", "Legendario", 2400, 960, 1920, "Muy rápida", "Mantén envenenados a los rivales para cortar su regeneración y curas."],
  ["Leon", "A", "Asesino", "Legendario", 3400, 1920, 0, "Muy rápida", "Activa invisibilidad fuera de arbustos visibles para flanquear."],
  ["Sandy", "S", "Control", "Legendario", 4000, 900, 0, "Rápida", "Cubre todo el centro del mapa con la tormenta de arena."],
  ["Amber", "S", "Control", "Legendario", 3400, 210, 960, "Normal", "Controla el fuego continuo dosificando munición para no quedarte vacío."],
  ["Meg", "A", "Tanque", "Legendario", 3700, 1360, 1700, "Rápida", "Presiona con el meca y mantén distancia segura si vuelves a forma base."],
  ["Surge", "S", "Destructor", "Legendario", 3300, 1180, 1000, "Lenta", "Prioriza conseguir tu primera mejora de velocidad lo antes posible."],
  ["Chester", "A", "Destructor", "Legendario", 3700, 1920, 1800, "Rápida", "Adapta tu jugada según la Súper aleatoria que te haya tocado."],
  ["Cordelius", "S", "Asesino", "Legendario", 3200, 1460, 0, "Muy rápida", "Lleva al reino de las sombras al rival más peligroso del equipo enemigo."],
  ["Kit", "A", "Apoyo", "Legendario", 3000, 1000, 800, "Muy rápida", "Súbete a un tanque aliado para lanzar bombas seguras desde arriba."],
  ["Draco", "A", "Tanque", "Legendario", 5500, 1400, 1200, "Normal", "Golpea con la punta de la lanza para cargar el dragón rápido."],
  ["Kenji", "S", "Asesino", "Legendario", 3800, 1250, 1800, "Muy rápida", "Alterna corte rápido y estocada para moverte mientras esquivas."],
  ["Pierce", "A", "Tirador", "Legendario", 2700, 1550, 2100, "Normal", "Recoge los casquillos tras disparar para recargar al instante."],
  ["Kaze", "S", "Asesino", "Ultralegendario", 3900, 1350, 1900, "Muy rápida", "Alterna entre estilo Geisha y Ninja según necesites movilidad o ráfaga."],
  ["Sirius", "S", "Control", "Ultralegendario", 3600, 1200, 1750, "Normal", "Invoca sombras de brawlers capturados para desbordar el mapa."],
  ["Mina", "A", "Destructor", "Mítico", 3500, 1320, 1600, "Rápida", "Encadena sus tres combos de ataque para finalizar con impacto amplio."],
  ["Brawler 102", "B", "Control", "Épico", 3400, 1100, 1400, "Normal", "Espacio reservado editable para nuevos lanzamientos de temporada."],
  ["Brawler 103", "B", "Destructor", "Mítico", 3500, 1250, 1600, "Normal", "Espacio reservado editable para nuevos lanzamientos de temporada."],
  ["Brawler 104", "B", "Tanque", "Épico", 5200, 1300, 1200, "Rápida", "Espacio reservado editable para nuevos lanzamientos de temporada."],
  ["Brawler 105", "B", "Apoyo", "Superespecial", 3200, 950, 1300, "Normal", "Espacio reservado editable para nuevos lanzamientos de temporada."],
  ["Brawler 106", "B", "Tirador", "Mítico", 2700, 1500, 2000, "Normal", "Espacio reservado editable para nuevos lanzamientos de temporada."],
  ["Brawler 107", "B", "Artillería", "Épico", 2800, 1250, 1700, "Normal", "Espacio reservado editable para nuevos lanzamientos de temporada."],
  ["Brawler 108", "B", "Asesino", "Legendario", 3600, 1300, 1850, "Muy rápida", "Espacio reservado editable para nuevos lanzamientos de temporada."]
];

function generarSlugImagen(nombre) {
  return (
    "img/" +
    nombre
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, "-") +
    ".png"
  );
}

const brawlers = ROSTER_RAW.map(([nombre, tier, rol, rareza, hpBase, atkBase, supBase, velocidad, nota]) => ({
  nombre,
  tier,
  rol,
  rareza,
  hpBase,
  atkBase,
  supBase,
  velocidad,
  nota,
  imagen: generarSlugImagen(nombre)
}));

function calcularStatPorNivel(valorBase, nivel) {
  if (!valorBase || valorBase === 0) return "Utilidad";
  const multiplicador = 1 + 0.1 * (nivel - 1);
  return Math.round(valorBase * multiplicador).toLocaleString("es-ES");
}

let rolActual = "todos";
let tierActual = "todos";
let rarezaActual = "todos";
let textoBusqueda = "";
let brawlerSeleccionado = null;
let nivelSeleccionado = 11;

const botonesRol = document.querySelectorAll(".rol-btn");
const selectTier = document.getElementById("filtro-tier");
const selectRareza = document.getElementById("filtro-rareza");
const inputBuscador = document.getElementById("buscador");
const contadorBrawlers = document.getElementById("contador-brawlers");
const wikiPanel = document.getElementById("wiki-panel");

const wikiVacio = document.getElementById("wiki-vacio");
const wikiDetalle = document.getElementById("wiki-detalle");
const wikiImg = document.getElementById("wiki-img");
const wikiNombre = document.getElementById("wiki-nombre");
const wikiRareza = document.getElementById("wiki-rareza");
const wikiRol = document.getElementById("wiki-rol");
const wikiTier = document.getElementById("wiki-tier");
const wikiNota = document.getElementById("wiki-nota");

const sliderNivel = document.getElementById("slider-nivel");
const textoNivel = document.getElementById("texto-nivel");
const statSalud = document.getElementById("stat-salud");
const statAtaque = document.getElementById("stat-ataque");
const statSuper = document.getElementById("stat-super");
const statVelocidad = document.getElementById("stat-velocidad");

const COLORES_RAREZA_HEX = {
  Inicial: "#94d2ff",
  Especial: "#68fd58",
  Superespecial: "#5ab3ff",
  Épico: "#d850ff",
  Mítico: "#fe3e4b",
  Legendario: "#fff11e",
  Ultralegendario: "#ff77e9"
};

function crearAvatarRespaldo(nombre, rareza) {
  const inicial = encodeURIComponent(nombre.slice(0, 2).toUpperCase());
  const color = encodeURIComponent(COLORES_RAREZA_HEX[rareza] || "#ffc800");
  return `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='96' height='96'><rect width='100%25' height='100%25' fill='%230d204d'/><circle cx='48' cy='48' r='36' fill='${color}' stroke='%23090d16' stroke-width='4'/><text x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='%23090d16' font-family='sans-serif' font-size='28' font-weight='900'>${inicial}</text></svg>`;
}

function cargarImagenSegura(imgEl, ruta, nombre, rareza) {
  imgEl.src = ruta;
  imgEl.alt = nombre;
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = crearAvatarRespaldo(nombre, rareza);
  };
}

function actualizarStatsNivel() {
  if (!brawlerSeleccionado) return;
  textoNivel.textContent = `FUERZA ${nivelSeleccionado}`;
  statSalud.textContent = calcularStatPorNivel(brawlerSeleccionado.hpBase, nivelSeleccionado);
  statAtaque.textContent = calcularStatPorNivel(brawlerSeleccionado.atkBase, nivelSeleccionado);
  statSuper.textContent = calcularStatPorNivel(brawlerSeleccionado.supBase, nivelSeleccionado);
  statVelocidad.textContent = brawlerSeleccionado.velocidad;
}

function abrirFichaBrawler(brawler) {
  brawlerSeleccionado = brawler;
  wikiVacio.classList.add("oculto");
  wikiDetalle.classList.remove("oculto");

  cargarImagenSegura(wikiImg, brawler.imagen, brawler.nombre, brawler.rareza);
  wikiNombre.textContent = brawler.nombre.toUpperCase();
  wikiRareza.textContent = brawler.rareza;
  wikiRareza.style.background = COLORES_RAREZA_HEX[brawler.rareza] || "#ffc800";
  wikiRol.textContent = `ROL: ${brawler.rol.toUpperCase()}`;
  wikiTier.textContent = brawler.tier;
  wikiNota.textContent = brawler.nota;

  actualizarStatsNivel();

  if (window.innerWidth <= 960) {
    wikiPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function renderizarTablero() {
  document.querySelectorAll(".tier-slots").forEach((slot) => {
    slot.innerHTML = "";
  });

  const filtrados = brawlers.filter((b) => {
    const okRol = rolActual === "todos" || b.rol === rolActual;
    const okTier = tierActual === "todos" || b.tier === tierActual;
    const okRareza = rarezaActual === "todos" || b.rareza === rarezaActual;
    const okNombre = b.nombre.toLowerCase().includes(textoBusqueda.trim().toLowerCase());
    return okRol && okTier && okRareza && okNombre;
  });

  contadorBrawlers.textContent = `${filtrados.length} / ${brawlers.length}`;

  filtrados.forEach((brawler) => {
    const contenedorTier = document.querySelector(`.tier-slots[data-tier="${brawler.tier}"]`);
    if (!contenedorTier) return;

    const card = document.createElement("button");
    card.type = "button";
    card.className = "brawler-card";

    const franja = document.createElement("div");
    franja.className = `card-rareza-franja rar-${brawler.rareza}`;

    const img = document.createElement("img");
    img.className = "brawler-avatar";
    cargarImagenSegura(img, brawler.imagen, brawler.nombre, brawler.rareza);

    const label = document.createElement("span");
    label.className = "brawler-card-nombre";
    label.textContent = brawler.nombre;

    card.appendChild(franja);
    card.appendChild(img);
    card.appendChild(label);

    card.addEventListener("click", () => abrirFichaBrawler(brawler));
    contenedorTier.appendChild(card);
  });
}

botonesRol.forEach((btn) => {
  btn.addEventListener("click", () => {
    botonesRol.forEach((b) => b.classList.remove("activo"));
    btn.classList.add("activo");
    rolActual = btn.dataset.rol;
    renderizarTablero();
  });
});

selectTier.addEventListener("change", (e) => {
  tierActual = e.target.value;
  renderizarTablero();
});

selectRareza.addEventListener("change", (e) => {
  rarezaActual = e.target.value;
  renderizarTablero();
});

inputBuscador.addEventListener("input", (e) => {
  textoBusqueda = e.target.value;
  renderizarTablero();
});

sliderNivel.addEventListener("input", (e) => {
  nivelSeleccionado = Number(e.target.value);
  actualizarStatsNivel();
});

renderizarTablero();