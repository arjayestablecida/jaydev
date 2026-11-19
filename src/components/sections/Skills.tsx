import {
  Code2,
  Database,
  Globe,
  Wrench,
  Server,
  Layers,
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code2,
    skills: ["PHP", "Java", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: ["Laravel", "Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Database Management",
    icon: Database,
    skills: ["MySQL", "Oracle Database", "SQL"],
  },
  {
    title: "Web Development",
    icon: Globe,
    skills: ["Responsive Design", "REST APIs", "Full-Stack Development"],
  },
  {
    title: "Development Tools",
    icon: Wrench,
    skills: ["VS Code", "Git", "GitHub", "XAMPP", "Composer"],
  },
  {
    title: "Backend Development",
    icon: Server,
    skills: ["PHP Backend", "Database Integration", "Authentication"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0b1220] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Technical Expertise
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Technologies and tools I use to build functional, responsive, and
            user-friendly applications.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <div
                key={category.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex items-center gap-3">
                  <div className="rounded-lg bg-cyan-400/10 p-3 text-cyan-400">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
