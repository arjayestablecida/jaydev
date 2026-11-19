import { GraduationCap, BookOpen, MapPin } from "lucide-react";

const education = [
  {
    institution: "Polytechnic University of the Philippines",
    campus: "Calauan, Laguna Campus",
    degree: "Bachelor of Science in Information Technology",
    description:
      "Completed a degree in Information Technology, developing foundational knowledge in programming, database management, software development, and information systems.",
  },
];

export default function Education() {
  return (
    <section id="education" className="bg-[#080d1a] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Academic Background
          </p>

          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            My educational journey has provided the foundation for my
            professional and technical development.
          </p>
        </div>

        <div className="space-y-6">
          {education.map((item) => (
            <article
              key={item.institution}
              className="rounded-2xl border border-white/10 bg-[#0b1220] p-7 transition duration-300 hover:border-cyan-400/40 md:p-9"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start">
                <div className="w-fit rounded-xl bg-cyan-400/10 p-4 text-cyan-400">
                  <GraduationCap size={32} />
                </div>

                <div className="flex-1">
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                    Educational Institution
                  </span>

                  <h3 className="mt-3 text-xl font-bold leading-snug text-white md:text-2xl">
                    {item.institution}
                  </h3>

                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-400">
                    <MapPin size={16} className="text-cyan-400" />
                    {item.campus}
                  </div>

                  <div className="mt-6 flex items-start gap-3">
                    <BookOpen
                      size={20}
                      className="mt-1 shrink-0 text-cyan-400"
                    />

                    <div>
                      <p className="font-medium text-gray-200">{item.degree}</p>

                      <p className="mt-2 text-sm leading-7 text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
