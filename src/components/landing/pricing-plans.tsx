"use client";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const pricingPlans = [
  {
    name: "Estudiante",
    description: "Acceso para estudiantes a su información académica.",
    monthlyPrice: 200.99,
    annualPrice: 999.99,
    features: [
      "Ver calificaciones y progreso académico",
      "Consultar horarios y calendarios",
      "Acceder a tareas y materiales de curso",
      "Recibir notificaciones y anuncios",
    ],
  },
  {
    name: "Profesor",
    description:
      "Herramientas para la gestión eficiente de cursos y calificaciones.",
    monthlyPrice: 400.99,
    annualPrice: 1199.99,
    features: [
      "Registro y seguimiento de calificaciones",
      "Creación y asignación de tareas",
      "Gestión de listas de clase",
      "Informes y análisis de rendimiento estudiantil",
      "Comunicación con estudiantes y padres",
    ],
  },
  {
    name: "Institucional",
    description: "Solución integral para la administración académica.",
    monthlyPrice: 1000.99,
    annualPrice: 4499.99,
    features: [
      "Gestión de usuarios y roles",
      "Configuración de períodos académicos y calendarios",
      "Generación de reportes y estadísticas",
      "Integración con sistemas de terceros",
      "Soporte técnico prioritario",
    ],
  },
];

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<"M" | "A">("M");

  const Heading = () => (
    <div className="relative z-10 my-12 flex flex-col items-center justify-center gap-4">
      <div className="flex w-full flex-col items-start justify-center space-y-4 md:items-center">
        <div className="mb-2 inline-block rounded-full bg-neutral-100 px-2 py-[0.20rem] text-xs font-medium uppercase text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
          Planes
        </div>
        <p className="mt-2 text-3xl font-bold tracking-tight text-neutral-800 dark:text-white sm:text-4xl">
          Precios a la medida de tus necesidades.
        </p>
        <p className="text-md max-w-2xl text-neutral-700 dark:text-neutral-200 md:text-center">
          Adquiere Kindranet y haz un impacto significativo en la educacion de
          tus alumnos.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setBillingCycle("M")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            billingCycle === "M"
              ? "relative bg-neutral-700  text-white"
              : "text-neutral-700 hover:bg-neutral-100"
          }`}
        >
          Mensual
          {billingCycle === "M" && <BackgroundShift shiftKey="monthly" />}
        </button>
        <button
          onClick={() => setBillingCycle("A")}
          className={`rounded-lg px-4 py-2 text-sm font-medium ${
            billingCycle === "A"
              ? "relative bg-neutral-700  text-white"
              : "text-neutral-700 hover:bg-neutral-100"
          }`}
        >
          Anual
          {billingCycle === "A" && <BackgroundShift shiftKey="annual" />}
        </button>
      </div>
    </div>
  );

  const PricingCards = () => (
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-8 lg:flex-row lg:gap-4">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full rounded-xl border-[1px] border-neutral-300 bg-white p-6 text-left dark:border-neutral-700 dark:bg-neutral-800"
        >
          <p className="mb-1 mt-0 text-sm font-medium uppercase text-neutral-500 dark:text-neutral-100">
            {plan.name}
          </p>
          <p className="my-0 mb-6 text-sm text-neutral-600 dark:text-neutral-400">
            {plan.description}
          </p>
          <div className="mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={billingCycle === "M" ? "monthly" : "annual"}
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="my-0 text-3xl font-semibold text-neutral-900 dark:text-neutral-100"
              >
                <span>
                  {billingCycle === "M" ? plan.monthlyPrice : plan.annualPrice}
                </span>
                <span className="text-sm font-medium">
                  /{billingCycle === "M" ? "mensual" : "anual"}
                </span>
              </motion.p>
            </AnimatePresence>
            <motion.button
              whileTap={{ scale: 0.985 }}
              className="mt-8 w-full rounded-lg bg-neutral-800 py-2 text-sm font-medium text-white hover:bg-neutral-800/90 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-200/90"
            >
              Adquirir
            </motion.button>
          </div>
          {plan.features.map((feature, idx) => (
            <div key={idx} className="mb-3 flex items-center gap-2">
              <Check
                className="text-neutral-500 dark:text-neutral-400"
                size={18}
              />
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {feature}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-white py-12 text-black dark:bg-neutral-900 lg:px-2 lg:py-12">
      <Heading />
      <PricingCards />
    </section>
  );
};

const BackgroundShift = ({ shiftKey }: { shiftKey: string }) => (
  <motion.span
    key={shiftKey}
    layoutId="bg-shift"
    className="absolute inset-0 -z-10 rounded-lg bg-neutral-500 dark:bg-neutral-800"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.8 }}
    transition={{ type: "spring", stiffness: 200, damping: 20 }}
  />
);

export default function PricingPage() {
  return <Pricing />;
}
