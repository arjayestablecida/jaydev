
import {
  BookOpen,
  GraduationCap,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Library Management System",
    category: "Library Management",
    description:
      "A web-based library management application designed to organize library operations and resources, including the Instructional Media Center (IMC).",
    features: [
      "Library resource management",
      "Instructional Media Center integration",
    ],
    icon: BookOpen,
  },
  {
    number: "02",
    title: "School Management System",
    category: "School Administration",
    description:
      "A web-based school management application that helps manage student enrollment and fee collection.",
    features: [
      "Student enrollment management",
      "School fee collection",
    ],
    icon: GraduationCap,
  },
  {
    number: "03",
    title: "Water Refilling Station POS",
    category: "Point of Sale",
    description:
      "A web-based Point of Sale system developed to support sales transactions and daily operations of a water refilling station.",
    features: [
      "Point of Sale functionality",
      "Sales transaction management",
    ],
    icon: ShoppingCart,
  },
];

const technologies = [
  "PHP",
  "Laravel",
  "JavaScript",
  "MySQL",
  "Bootstrap",
  "HTML",
  "CSS",
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#080d1a] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Work
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            A selection of software applications I have developed,
            focusing on practical solutions for real-world needs.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.number}
                className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b1220] p-7 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-7 flex items-center justify-between">
                  <span className="text-sm font-semibold tracking-widest text-cyan-400">
                    PROJECT {project.number}
                  </span>

                  <div className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400">
                    <Icon size={25} />
                  </div>
                </div>

                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-gray-500">
                  {project.category}
                </p>

                <h3 className="mb-4 text-xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                <div className="mb-7">
                  <h4 className="mb-3 text-sm font-semibold text-gray-200">
                    Key Features
                  </h4>

                  <ul className="space-y-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-gray-400"
                      >
                        <span className="mt-1 text-cyan-400">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto border-t border-white/10 pt-5">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-500">
                    Technologies Used
                  </span>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs text-gray-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-2 text-sm font-medium text-cyan-400">
                    Project Showcase
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
