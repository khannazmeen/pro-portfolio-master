import { ProjectImage } from "@/assets/default.exports";
import { Projects } from "@/pages/api/projects";
import {
  ExpandLess,
  ExpandMore,
  Link,
  VisibilityOutlined
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

type Props = {
  data: Projects;
};

const Project = ({ data }: Props) => {
  const [expand, setExpand] = React.useState(true);

  const handleExpandMore = () => {
    setExpand(!expand);
  };

  return (
    <div
      className="rounded-[15px] sm:p-10 p-5 bg-[darkblue] shadow-lg flex lg:flex-row flex-col-reverse justify-between gap-4"
      data-aos="fade-up"
    >
      <div className="lg:max-w-[660px]">
        <Typography
          variant="h4"
          fontWeight={"bold"}
          className="text-transparent bg-clip-text bg-gradient-to-br from-purple-300 to-purple-700"
          gutterBottom
        >
          {data?.project_name}
        </Typography>
        <Typography variant="h6" gutterBottom>
          {data?.project_date}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data?.project_description}
        </Typography>
        <Typography variant="body1" gutterBottom>
          During the course of this project.
        </Typography>
        <ul className="list-disc pl-5 mb-4">
          {data?.project_tasks.map((task) => (
            <li key={task.id}>{task.task}</li>
          ))}
        </ul>
        <div className="pb-4 flex gap-3 flex-wrap">
          <Button
            color="inherit"
            startIcon={<VisibilityOutlined />}
            endIcon={expand ? <ExpandLess /> : <ExpandMore />}
            onClick={handleExpandMore}
            variant={"outlined"}
          >
            {expand ? "less" : "more"}
          </Button>
          {/* <Button
            color="inherit"
            startIcon={<Link />}
            LinkComponent="a"
            href={data?.project_link}
            target="_blank"
            variant={"outlined"}
          >
            Website
          </Button> */}
        </div>
        {expand && (
          <>
            <Typography variant="body1">Skills utilized</Typography>
            <div className="flex mt-2 mb-4 gap-2 flex-wrap">
              {data?.skills_utilized.map((skill: any) => (
                <span
                  className="px-3 py-2 rounded-lg bg-gradient-to-br from-purple-400 to-purple-800 text-sm"
                  key={skill.id}
                >
                  {skill.name}
                </span>
              ))}
            </div>
            <Typography variant="body1">Organization</Typography>
            <div className="flex mt-2 gap-2 flex-wrap">
              {data?.organization.map((organization: any) => (
                <span
                  className="px-3 py-2 rounded-lg bg-gradient-to-br from-purple-400 to-purple-800 text-sm cursor-pointer"
                  key={organization.id}
                  onClick={() => {
                    window.open(organization?.website);
                  }}
                >
                  {organization.name}
                </span>
              ))}
            </div>
          </>
        )}
      </div>
      <div>
        <Image
          src={ProjectImage}
          blurDataURL={"/assets/images/project.png"}
          alt={data?.project_name}
          width={360}
        />
      </div>
    </div>
  );
};

export default Project;
