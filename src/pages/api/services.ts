// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "@/assets/data/db";
import type { NextApiRequest, NextApiResponse } from "next";

export type Services = {
  id: number;
  name: string;
  icon: string;
  desc: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Services[]>
) {
  const services = data.services;
  res.status(200).json(services);
}
