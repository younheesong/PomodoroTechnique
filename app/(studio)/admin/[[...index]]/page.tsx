"use client";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

const admin = () => {
  return <NextStudio config={config} />;
};
export default admin;
