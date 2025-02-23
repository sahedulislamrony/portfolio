import skillCategories from "./SkillsData";
import type { SkillCategory } from "./SkillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 pb-30 bg-transparent overflow-hidden spaceX"
    >
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 font-logo font-[400]">
          <h2 className="text-6xl font-bold text-white mb-4">Skills</h2>
          <p className="text-lg text-gray-300 font-mono font-[600]">
            Technologies and tools I use to build amazing things.
          </p>
        </div>

        <div className="absolute top-20 left-0 h-96 w-96 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full blur-3xl opacity-20 animate-spin"></div>
        <div className="absolute bottom-0 right-0 h-96 w-96 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full blur-3xl opacity-20 animate-spin"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type SkillCardProps = SkillCategory;

function SkillCard({ title, skills, icon }: SkillCardProps) {
  return (
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:ring-1 ring-gray-800">
      <div className="relative bg-gray-900/20 hover:bg-gray-900/40 backdrop-blur-xl rounded-xl p-6 h-full transition-all duration-300">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-sky-500/20">
            {icon}
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-sky-400 bg-clip-text text-transparent">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center px-3 py-1.5 rounded-full bg-gray-800/50 text-gray-300 text-sm font-medium hover:bg-gray-700/50 transition-all duration-200 border border-white/5 hover:border-purple-400/30 cursor-pointer"
            >
              {skill.icon}
              <span className="ml-2">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
