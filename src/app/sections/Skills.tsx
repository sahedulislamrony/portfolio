import skillCategories from "./SkillsData";
import type { SkillCategory } from "./SkillsData";
import { cn } from "@/lib/utils"; // Assuming you have a cn utility function

export default function Skills() {
  return (
    <section
      id="skills"
      className={cn("py-20 pb-30 bg-transparent overflow-hidden", {
        spaceX: true,
      })}
    >
      <div
        className={cn("container mx-auto px-4 relative", {
          //  responsiveness
        })}
      >
        {/* Section Title */}
        <div
          className={cn("text-center mb-16", {
            "font-logo font-[400]": true,
          })}
        >
          <h2
            className={cn("text-6xl font-bold mb-4", {
              "text-white": true,
            })}
          >
            Skills
          </h2>
          <p
            className={cn("text-lg font-mono font-[600]", {
              "text-gray-300": true, // Design
            })}
          >
            Technologies and tools I use to build amazing things.
          </p>
        </div>

        {/* Animated Gradients */}
        <div
          className={cn(
            "absolute top-20 left-0 h-96 w-96 rounded-full blur-3xl opacity-20 animate-spin",
            {
              "bg-gradient-to-r from-purple-500 to-sky-500": true, // Design
            }
          )}
        ></div>
        <div
          className={cn(
            "absolute bottom-0 right-0 h-96 w-96 rounded-full blur-3xl opacity-20 animate-spin",
            {
              "bg-gradient-to-r from-purple-500 to-sky-500": true, // Design
            }
          )}
        ></div>

        {/* Skills Grid */}
        <div
          className={cn("grid gap-8", {
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": true, // Responsiveness
          })}
        >
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
    <div
      className={cn(
        "group relative rounded-2xl overflow-hidden transition-all duration-300",
        {
          "shadow-2xl hover:shadow-purple-400/15 hover:scale-[1.02] hover:ring-1 ring-gray-800":
            true, // Design and interaction
        }
      )}
    >
      <div
        className={cn(
          "relative backdrop-blur-xl rounded-xl p-6 h-full transition-all duration-300",
          {
            "bg-white/5": true, // Design
          }
        )}
      >
        {/* Card Header */}
        <div
          className={cn("flex items-center gap-3 mb-6", {
            // Structure
          })}
        >
          <div
            className={cn("p-2 rounded-lg", {
              "bg-gradient-to-r from-purple-500/20 to-sky-500/20": true, // Design
            })}
          >
            {icon}
          </div>
          <h3
            className={cn(
              "text-2xl font-noto font-[900] bg-clip-text text-transparent",
              {
                "bg-gradient-to-r from-purple-400 to-sky-400": true, // Design
              }
            )}
          >
            {title}
          </h3>
        </div>

        {/* Skills List */}
        <div
          className={cn("flex flex-wrap gap-2", {
            // Structure
          })}
        >
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className={cn(
                "flex items-center px-3 py-1.5 rounded-full text-sm font-noto font-[600] transition-all duration-200 cursor-pointer",
                {
                  "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-white/5 hover:border-purple-400/30":
                    true, // Design and interaction
                }
              )}
            >
              {skill.icon}
              <span
                className={cn("ml-2", {
                  // Structure
                })}
              >
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
