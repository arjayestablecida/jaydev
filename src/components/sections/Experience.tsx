
import {
  GraduationCap,
  BriefcaseBusiness,
  Code2,
  Database,
} from "lucide-react";

const experiences = [
  {
    role: "ICT Teacher",
    type: "Education",
    icon: GraduationCap,
    description:
      "Teaching Information and Communications Technology subjects, helping students develop programming knowledge and practical technical skills.",
    responsibilities: [
      "Teach Java Programming concepts and practical coding activities.",
      "Teach Oracle Database and database management fundamentals.",
      "Prepare instructional materials, assessments, and programming exercises.",
      "Guide students in developing software projects and applying programming concepts.",
    ],
    skills: ["Java", "Oracle Database", "Programming", "Instructional Design"],
  },
  {
    role: "Hospital Billing Staff",
    type: "Healthcare Administration",
    icon: BriefcaseBusiness,
    description:
      "Handled hospital billing-related tasks, gaining experience in administrative processes, transaction handling, and professional communication.",
    responsibilities: [
      "Assist with hospital billing transactions and related documentation.",
      "Handle billing information with accuracy and attention to detail.",
      "Support administrative workflows and coordinate billing-related concerns.",
    ],
    skills: [
      "Billing Operations",
      "Data Accuracy",
      "Documentation",
      "Communication",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0b1220] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Professional Journey
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Work Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            My professional experiences have helped me develop technical,
            analytical, organizational, and communication skills.
          </p>
        </div>

        <div className="relative space-y-8">
          {experiences.map((experience) => {
            const Icon = experience.icon;

            return (
              <article
                key={experience.role}
                className="rounded-2xl border border-white/10 bg-[#080d1a] p-7 transition duration-300 hover:border-cyan-400/40 md:p-9"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                  <div className="w-fit rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                    <Icon size={28} />
                  </div>

                  <div className="flex-1">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-cyan-400">
                      {experience.type}
                    </p>

                    <h3 className="text-2xl font-bold text-white">
                      {experience.role}
                    </h3>

                    <p className="mt-3 leading-7 text-gray-400">
                      {experience.description}
                    </p>

                    <div className="mt-7">
                      <h4 className="mb-4 font-semibold text-white">
                        Key Responsibilities
                      </h4>

                      <ul className="space-y-3">
                        {experience.responsibilities.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                          >
                            <span className="mt-0.5 text-cyan-400">✓</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7">
                      <h4 className="mb-3 text-sm font-semibold text-gray-300">
                        Relevant Skills
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-gray-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
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
