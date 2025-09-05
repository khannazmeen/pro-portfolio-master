import { Services } from "@/pages/api/services";
import { Typography } from "@mui/material";

type Props = {
  services: Services[];
};

const Services = ({ services }: Props) => {
  return (
    <div className="bg-[#1c456d]" id="services">
      <div className="pf-container py-[60px]">
        <div className="flex items-center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Services
          </Typography>
          <div className="border flex-1 ml-4"></div>
        </div>
        <div className="grid sm:gap-[35px] gap-4 mt-10 lg:grid-cols-3 sm:grid-cols-2">
          {services &&
            services.map((service, index) => (
              <div
                key={service.id}
                className="flex flex-col items-center justify-center text-center shadow-lg rounded-xl px-8 py-10 bg-gradient-to-br from-pf-dark-max to-gray-900"
                data-aos="fade-up"
                data-aos-delay={`${50 * index}`}
              >
                <i
                  className={`${service.icon} text-transparent text-7xl bg-clip-text bg-gradient-to-br from-purple-400 to-purple-800`}
                ></i>
                <Typography
                  variant="h5"
                  fontWeight={"bold"}
                  sx={{ paddingY: "15px" }}
                >
                  {service.name}
                </Typography>
                <Typography variant="body1">{service.desc}</Typography>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
