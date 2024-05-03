"use client";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    nombre: "Gestión Académica Integral",
    descripcion:
      "Solución escalable para la administración completa de instituciones educativas.",
    enfoque:
      "Gestión de usuarios, registro de calificaciones, asignación de tareas, calendarios, reportes y análisis, comunicación integrada.",
    escalabilidad:
      "Diseñado para crecer con la institución, permitiendo agregar nuevos usuarios, cursos y programas académicos sin interrupciones.",
    image: "https://ansubkhan.com/images/projects/syntaxUI.svg",
  },
  {
    id: 2,
    nombre: "Administración de Recursos Educativos",
    descripcion:
      "Plataforma centralizada para la gestión y distribución de materiales de aprendizaje.",
    enfoque:
      "Organización y acceso a recursos educativos, control de acceso, integración con sistemas de gestión de contenido.",
    escalabilidad:
      "Manejo de grandes volúmenes de datos y usuarios concurrentes a medida que se agregan más recursos.",
    image: "https://ansubkhan.com/images/projects/prettyfolio.png",
  },
  {
    id: 3,
    nombre: "Plataforma de Aprendizaje Virtual",
    descripcion:
      "Entorno en línea para impartir cursos y programas educativos de manera remota.",
    enfoque:
      "Creación y gestión de cursos en línea, herramientas de colaboración, evaluaciones y seguimiento del progreso.",
    escalabilidad:
      "Capacidad para escalar a medida que aumenta la demanda de cursos y estudiantes en línea.",
    image: "https://ansubkhan.com/images/projects/enchant.png",
  },
  {
    id: 4,
    nombre: "Analítica y Automatización Educativa",
    descripcion:
      "Soluciones de inteligencia artificial y automatización para optimizar procesos académicos.",
    enfoque:
      "Análisis de datos y generación de insights, automatización de tareas administrativas, asistentes virtuales para estudiantes y profesores.",
    escalabilidad:
      "Escalable para manejar grandes cantidades de datos y adaptar los modelos de IA según las necesidades de la institución.",
    image: "https://ansubkhan.com/images/projects/quote-vault.png",
  },
];

const Features = () => {
  return (
    <div className="w-2/3">
      <div className="grid w-full  grid-cols-1 md:grid-cols-3">
        {features.map((project) => {
          return (
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5 text-left"
            >
              <a target="_blank" rel="noopener noreferrer" href="#">
                <img
                  src={project.image}
                  width={30}
                  height={30}
                  className="mb-3 rounded-lg"
                  alt={project.nombre}
                />
                <div className="mb-1 text-sm font-medium text-neutral-900 dark:text-neutral-200">
                  {project.nombre}
                </div>
                <div className="max-w-[250px] text-sm font-normal text-neutral-500 dark:text-neutral-500">
                  {project.descripcion}
                </div>
              </a>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Features;
