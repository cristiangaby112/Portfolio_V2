import { BsGithub } from "react-icons/bs";
// import { useTranslation } from "react-i18next";



// const { t } = useTranslation("translation");
const dataProyectos = [
  {
    id: 1,
    video: 'https://www.youtube.com/embed/Bpkp3N2XEVU',
    // texto: `${useTranslation("translation").t('Container_Proyectos.Proyectos')}`,
    linkGithub: 'https://github.com/cristiangaby112/PI-Countries-main',
    iconGithub: <BsGithub />,
    linkWeb: 'https://pi-countries-main.vercel.app/'
  },
  {
    id: 2,
    video: 'https://www.youtube.com/embed/DApvqOVXzkA',
    texto: `Desarrollo de un clon de Netflix utilizando React JS, Redux, CSS
    Module para la maquetacion, la obtencion de datos atraves de una
    API externa.`,
    linkGithub: 'https://github.com/cristiangaby112/Chanllenge_MoviesNexflix',
    iconGithub: <BsGithub />,
    linkWeb: 'https://nettflix-movies-app.herokuapp.com/'
  },
  {
    id: 3,
    video: 'https://www.youtube.com/embed/2hALPb1sGXM',
    texto: `Desarrollo de una App móvil para Android, "Event In", donde podrás
    consultar eventos cultutales, sociales y de interés general. Se
    puede buscar cualquier evento por nombre, filtrar por eventos u
    ordenarlos por categoria de evento, Loguarse y crear su propio
    evento pagando una tarifa por dia mediante mercado pago.
    Desarrollado con: React Native JS, Express JS, Firebase.`,
    linkGithub: 'https://github.com/cristiangaby112/EventIn',
    iconGithub: <BsGithub />,
  }
];

export default dataProyectos;