// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@/assets/data/db";
import type { NextApiRequest, NextApiResponse } from "next";

export type Projects = {
  id: number;
  project_name: string;
  project_date: string;
  project_description: string;
  // project_link: string;
  project_tasks: {
    id: number;
    task: string;
  }[];
  skills_utilized: {
    id: number;
    name: string;
  }[];
  organization: {
    id: number;
    name: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Projects[]>
) {
  const projects = data.projects;
  res.status(200).json(projects);
}
