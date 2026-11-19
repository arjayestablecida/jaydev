import { Code2, GraduationCap, BriefcaseBusiness } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Development",
    description: "Building functional and user-friendly software applications.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Polytechnic University of the Philippines – Calauan Campus.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Experience",
    description: "Experience in ICT education and hospital billing operations.",
  },
];

export default function About() {
  return (
    <section id="about" className="bg-[#0c1424] px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold tracking-widest text-cyan-400">
            GET TO KNOW ME
          </p>

          <h2 className="text-4xl font-bold text-white">
            About Me
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">

          <div>
            <h3 className="mb-5 text-2xl font-semibold text-white">
              Passionate About Technology and Software Development
            </h3>

            <p className="mb-5 leading-relaxed text-gray-400">
              I am an aspiring software developer with experience in
              programming, web development, and database management.
              I enjoy developing systems that address practical needs
              and improve everyday processes.
            </p>

            <p className="leading-relaxed text-gray-400">
              My background in ICT education has strengthened my
              technical knowledge, communication skills, and ability
              to explain complex concepts. I continuously explore
              new technologies to improve my development skills.
            </p>
          </div>

          <div className="grid gap-5">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="flex gap-5 rounded-xl border border-white/10 bg-[#080d1a] p-6 transition hover:border-cyan-400/40"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-cyan-400/10 text-cyan-400">
                    <Icon size={25} />
                  </div>

                  <div>
                    <h4 className="mb-2 font-semibold text-white">
                      {item.title}
                    </h4>

                    <p className="text-sm leading-relaxed text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}