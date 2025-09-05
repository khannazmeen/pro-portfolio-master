// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@/assets/data/db";
import type { NextApiRequest, NextApiResponse } from "next";

export type Skills = {
  id: number;
  name: string;
  icon: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Skills[]>
) {
  const skills = data.skills;
  res.status(200).json(skills);
}
