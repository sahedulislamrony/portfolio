import skillCategories from "@/data/SkillsData";
import type { SkillCategory } from "@/data/SkillsData";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 pb-30 bg-transparent overflow-hidden space-v"
    >
      <div className="container mx-auto px-4 relative">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-poppins font-[900] mb-4 text-white">
            Skills
          </h2>
          <p className="text-sm md:text-lg font-mono font-[600] text-gray-300">
            Technologies and tools I use to build amazing things.
          </p>
        </div>

        {/* Animated Gradients */}
        <div className="absolute top-20 left-0 h-48 w-48 md:h-96 md:w-96 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-purple-500 to-sky-500"></div>
        <div className="absolute bottom-0 right-0 h-48 w-48 md:h-96 md:w-96 rounded-full blur-3xl opacity-20  bg-gradient-to-r from-purple-500 to-sky-500"></div>

        {/* Skills Grid */}
        <div className="grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    <div className="group relative rounded-2xl overflow-hidden transition-all duration-300 shadow-2xl hover:shadow-purple-400/15 hover:scale-[1.02] hover:ring-1 ring-gray-800">
      <div className="relative backdrop-blur-xl rounded-xl p-4 sm:p-6 h-full transition-all duration-300 bg-gray-900/15">
        {/* Card Header */}
        <div className="flex items-center gap-3 mb-4 sm:mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-sky-500/20">
            {icon}
          </div>
          <h3 className="text-xl sm:text-2xl font-poppins font-[700] bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-sky-400">
            {title}
          </h3>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-noto font-[600] transition-all duration-200 cursor-pointer bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-white/5 hover:border-purple-400/30"
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
