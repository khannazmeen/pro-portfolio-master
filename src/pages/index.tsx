import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import { Rocket } from "@mui/icons-material";
import { Fab } from "@mui/material";
import React from "react";
import { Hero as HeroType } from "./api/hero";
import { Projects as ProjectsType } from "./api/projects";
import { Services as ServiceType } from "./api/services";
import { Skills as SkillsType } from "./api/skills";

export default function Home() {
  const [userData, setUserData] = React.useState<HeroType>();
  const [projects, setProjects] = React.useState<ProjectsType[]>([]);
  const [skills, setSkills] = React.useState<SkillsType[]>([]);
  const [services, setServices] = React.useState<ServiceType[]>([]);
  const [, setLoading] = React.useState(true);
  const scrollToTopRef = React.useRef<any>();

  const fetchHeroDataAsync = async () => {
    const fetchHeroData = await fetch(`api/hero`);
    const heroData = await fetchHeroData.json();
    setUserData(heroData);
  };

  const fetchProjectsAsync = async () => {
    const fetchProjects = await fetch(`api/projects`);
    const projects = await fetchProjects.json();
    setProjects(projects);
  };

  const fetchSkillsAsync = async () => {
    const fetchSkills = await fetch(`api/skills`);
    const skills = await fetchSkills.json();
    setSkills(skills);
  };

  const fetchServicesAsync = async () => {
    const fetchServices = await fetch(`api/services`);
    const services = await fetchServices.json();
    setServices(services);
  };

  const fetchAllData = async () => {
    await fetchHeroDataAsync();
    await fetchProjectsAsync();
    await fetchSkillsAsync();
    await fetchServicesAsync();
    setLoading(false);
  };

  React.useEffect(() => {
    fetchAllData();
  }, []);

  React.useEffect(() => {
    if (scrollToTopRef) {
      document.addEventListener("scroll", () => {
        if (window.scrollY > scrollToTopRef.current.offsetTop) {
          scrollToTopRef.current.style.visibility = "visible";
        } else {
          scrollToTopRef.current.style.visibility = "hidden";
        }

        console.log();
      });
    }
  }, []);

  return (
    <>
      <Header data-aos="fade-down" />
      <Hero data={userData} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Services services={services} />
      <Contact />
      <Footer />
      <div
        className="fixed bottom-[30px] right-[15px]"
        ref={scrollToTopRef}
        style={{ visibility: "hidden" }}
        onClick={() => {
          window.scrollTo({
            top: 0,
            left: 0
          });
        }}
      >
        <Fab
          size="medium"
          color="primary"
          variant="circular"
          className="text-white"
          aria-label="add"
        >
          <Rocket />
        </Fab>
      </div>
    </>
  );
}
