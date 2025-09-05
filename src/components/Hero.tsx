import { Illustration } from "@/assets/default.exports";
import { Hero } from "@/pages/api/hero";
import { Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

type Props = {
  data: Hero | undefined;
};

const Hero = ({ data }: Props) => {
  return (
    <div className="pf-container py-[60px] pb-[120px]" id="home">
      <div className="flex lg:flex-row flex-col-reverse justify-between items-center">
        <div className="w-full">
          {data ? (
            <>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                Hi, my name is
              </Typography>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Nazmeen khan
              </Typography>
              <Typography
                variant="body1"
                fontWeight="semibold"
                className="max-w-[460px]"
                gutterBottom
              >
                I have built many industry grade projects from scratch and am
                armed with many technological skills useful for tech projects.
                Check out my projects below. :)
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                sx={{ marginTop: "20px" }}
              >
                <Link href={"mailto:khannazmeen963@gmail.com"}>
                  khannazmeen963@gmail.com
                </Link>
              </Typography>
            </>
          ) : (
            <>
              <Typography
                className="animate-pulse bg-white bg-opacity-50 rounded-[10px] h-[32px] max-w-[150px]"
                variant="h5"
                fontWeight="bold"
                gutterBottom
              ></Typography>
              <Typography
                className="animate-pulse bg-white bg-opacity-50 rounded-[10px] h-[56px] max-w-[400px]"
                variant="h3"
                fontWeight="bold"
                gutterBottom
              ></Typography>
              <Typography
                variant="body1"
                fontWeight="semibold"
                className="max-w-[460px] animate-pulse bg-white bg-opacity-50 rounded-[10px] h-[72px]"
                gutterBottom
              ></Typography>
              <Typography
                className="animate-pulse bg-white bg-opacity-50 rounded-[10px] h-[22px] max-w-[180px]"
                variant="body1"
                fontWeight="bold"
                sx={{ marginTop: "20px" }}
              ></Typography>
            </>
          )}
          <div
            className={`mt-8 rounded-[15px] bg-gradient-to-br from-purple-500 to-purple-900 flex md:flex-row flex-col items-center md:w-fit shadow-lg ${!data ? "animate-pulse" : ""
              }`}
          >
            <div className="py-3 px-2 text-center md:min-w-[180px] h-[105px] md:border-r md:border-b-0 border-b w-full">
              {data && (
                <>
                  <Typography variant="h3" fontWeight="bold">
                    {data.verified_skills}
                  </Typography>
                  <Typography variant="caption" fontWeight="semibold">
                    VERIFIED SKILLS
                  </Typography>
                </>
              )}
            </div>
            <div className="py-3 px-2 text-center md:min-w-[180px] h-[105px] ">
              {data && (
                <>
                  <Typography variant="h3" fontWeight="bold">
                    {data.professional_projects}
                  </Typography>
                  <Typography variant="caption" fontWeight="semibold">
                    PROFESSIONAL PROJECTS
                  </Typography>
                </>
              )}
            </div>
            {/* <div className="py-3 px-2 text-center md:min-w-[180px] h-[105px]">
              {data && (
                <>
                  <Typography variant="h3" fontWeight="bold">
                    {data.personal_projects}
                  </Typography>
                  <Typography variant="caption" fontWeight="semibold">
                    PERSONAL PROJECTS
                  </Typography>
                </>
              )}
            </div> */}
          </div>
        </div>
        <div className="flex items-center justify-end mb-5 lg:mb-0">
          <Image
            src={Illustration}
            className="md:w-[500px] w-[380px]"
            style={{ objectFit: "cover" }}
            alt={""}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
