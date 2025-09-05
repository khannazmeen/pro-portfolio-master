import { Skills } from "@/pages/api/skills";
import { Typography } from "@mui/material";

type Props = {
  skills: Skills[];
};

const Skills = ({ skills }: Props) => {
  return (
    <div>
      <div className="pf-container py-[60px]" id="skills">
        <div className="flex items-center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Skills
          </Typography>
          <div className="border flex-1 ml-4"></div>
        </div>
        <div className="grid sm:gap-10 gap-4 mt-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 grid-cols-2">
          {skills &&
            skills.map((skill: Skills, index: number) => (
              <div
                key={skill?.id}
                className="w-full shadow-lg h-[100px] text-center flex items-center justify-center bg-gradient-to-br from-pf-dark-med to to-gray-800 rounded-xl flex-col"
                data-aos="fade-up"
                data-aos-delay={`${50 * index}`}
              >
                <Typography
                  fontWeight={"bold"}
                  className="text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600"
                  variant="h6"
                >
                  {skill?.name}
                </Typography>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
