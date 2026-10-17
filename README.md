- Descripció
  PlayMate és una aplicació per connectar músics i organitzadors d'actuacions que permet consultar músics disponibles i actuacions (Super Plays) les quals es troben guardades a Firestore, des d'on es llegeixen directament les dades.
  Aquesta aplicació és útil per aquells grups de música on un dels músics cancel·la l'assistència a últim moment.

- Instal·lació, execució, producció i desplegament
  npm install - Instal·la totes les dependències necessàries perquè l'aplicació funcioni correctament.

  npm run dev - Executa l'aplicació en local i crea un servidor de desenvolupament.
  La web s'obrirà normalment a: http://localhost:5173

  npm run build - Genera el build de producció de l'aplicació.
  Crea la carpeta dist que conté la versió final preparada per publicar.

  firebase login - Connecta Firebase amb el compte de Google utilitzat per gestionar el projecte.

  npm run build - Actualitza la carpeta dist amb l'última versió de l'aplicació.

  firebase deploy - Publica l'aplicació a Firebase Hosting.

  Firebase publica la carpeta dist ja que és la carpeta on es troba el build de producció generat amb npm run build.

- Components propis i funció
  Header.vue - Mostra el logo de PlayMate i els enllaços de navegació.
  Footer.vue - Mostra el peu de pàgina de l'aplicació.
  MusicianCard.vue - Mostra la informació d'un músic.
  SuperPlayCard.vue - Mostra la informació d'una actuació.
  App.vue - És la mare de tota l'aplicació.
  Conté:
  - Header
  - RouterView - Mostra la vista corresponent a la ruta activa.
  - Footer

- Exemple de comunicació amb props
  La comunicació de pares a fills es fa mitjançant props.
  - Comunicació 1:
    Component pare: MusiciansView.vue
    Component fill: MusicianCard.vue
    Prop: player
    Les dades del músic es llegeixen de Firestore a MusiciansView i es passen al component MusicianCard.
    Línia de codi de MusicianCard:
    defineProps({
    player: {
    type: Object,
    required: true,
    },
    })
  - Comunicació 2:
    Component pare: SuperPlaysView.vue
    Component fill: SuperPlayCard.vue
    Prop: superplay
    Les dades de les actuacions es llegeixen de Firestore a SuperPlaysView i es passen al component SuperPlayCard.

- Rutes i contingut
  / - Mostra la pàgina principal de PlayMate.
  Vista: HomeView.vue
  /musicians - Mostra el llistat de músics disponibles.
  Vista: MusiciansView.vue
  /superplays - Mostra el llistat d'actuacions disponibles.
  Vista: SuperPlaysView.vue

- Col·leccions de Firestore
  - Col·lecció players
    Camps: nom, instrument, nivell, zona, valoracio
    S'envia a: MusicianCard.vue a través de MusiciansView.vue
    Línia de codi de MusiciansView:
    getDocs(collection(db, 'players')) - Llegeix tots els documents de la col·lecció players.
  - Col·lecció superplays
    Camps: instrument, lloc, data, preu
    S'envia a: SuperPlayCard.vue a través de SuperPlaysView.vue
    Línia de codi de SuperPlaysView:
    getDocs(collection(db, 'superplays')) - Llegeix tots els documents de la col·lecció superplays.

- Firebase i Firebase Hosting
  src/firebase.js - Conté la configuració que connecta Vue amb Firebase i Firestore.
  Web: https://playmate-700ee.web.app
