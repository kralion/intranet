import LightHero from "@/assets/images/light-hero.png";
import DarkHero from "@/assets/images/dark-hero.png";
const SkewedInfiniteScroll = () => {
  const items = [
    {
      id: "1",
      text: "Gestión de usuarios y roles",
      description:
        "Crea y administra cuentas de usuarios con diferentes roles (administrador, profesor, estudiante) y niveles de acceso.",
    },
    {
      id: "2",
      text: "Registro y seguimiento de calificaciones",
      description:
        "Permite a los profesores ingresar y mantener un registro de las calificaciones de los estudiantes a lo largo del período académico.",
    },
    {
      id: "3",
      text: "Asignación y entrega de tareas",
      description:
        "Los profesores pueden crear y asignar tareas, mientras que los estudiantes pueden enviar sus trabajos dentro del sistema.",
    },
    {
      id: "4",
      text: "Calendarios y horarios",
      description:
        "Gestiona calendarios académicos, horarios de clases y fechas importantes para toda la institución.",
    },
    {
      id: "5",
      text: "Reportes y análisis",
      description:
        "Genera reportes detallados y análisis de rendimiento académico tanto a nivel individual como institucional.",
    },
    {
      id: "6",
      text: "Comunicación integrada",
      description:
        "Facilita la comunicación entre profesores, estudiantes y padres a través de mensajería interna, anuncios y notificaciones.",
    },
    {
      id: "7",
      text: "Integración con sistemas externos",
      description:
        "Posibilidad de integrar el sistema con otras plataformas educativas o sistemas de gestión académica.",
    },
    {
      id: "8",
      text: "Soporte técnico y capacitación",
      description:
        "Ofrece soporte técnico y recursos de capacitación para garantizar el uso efectivo del sistema por parte de todos los usuarios.",
    },
  ];
  return (
    <>
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
        <div className="mb-2 inline-block rounded-full bg-neutral-100 px-2 py-[0.20rem] text-xs font-medium uppercase text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
          Contacto
        </div>
        <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-800 dark:text-white sm:text-4xl">
          Disponibilidad inmediata.
        </p>
        <p className="text-md max-w-2xl text-neutral-700 dark:text-neutral-200 md:text-center">
          Contacta con nosotros y háblanos de tus necesidades y objetivos.
        </p>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-screen-lg overflow-hidden">
            <div className="pointer-events-none absolute -top-1 z-10 h-20 w-full bg-gradient-to-b from-white dark:from-neutral-900"></div>
            <div className="pointer-events-none absolute -bottom-1 z-10 h-20 w-full bg-gradient-to-t from-white dark:from-neutral-900"></div>
            <div className="pointer-events-none absolute -left-1 z-10 h-full w-20 bg-gradient-to-r from-white dark:from-neutral-900"></div>
            <div className="pointer-events-none absolute -right-1 z-10 h-full w-20 bg-gradient-to-l from-white dark:from-neutral-900"></div>

            <div className="animate-skew-scroll mx-auto grid h-[250px] w-[300px] grid-cols-1 gap-5 sm:w-[600px] sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex cursor-pointer items-center space-x-2 rounded-md border border-neutral-100 px-5 shadow-md transition-all hover:-translate-y-1 hover:translate-x-1 hover:scale-[1.025] hover:shadow-xl dark:border-neutral-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 flex-none text-cyan-500"
                  >
                    <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                  <p className="text-neutral-600 dark:text-neutral-100">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          src={LightHero.src}
          alt="Light Hero"
          className="overflow-hidden dark:hidden"
        />
        <img
          src={DarkHero.src}
          alt="Dark Hero"
          className="hidden overflow-hidden dark:block"
        />
      </div>
    </>
  );
};

export default SkewedInfiniteScroll;
