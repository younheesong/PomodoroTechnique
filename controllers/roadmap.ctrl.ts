import { createRoadmap } from "@/lib/roadmap.service";
import { NextApiRequest } from "next";
import { BadRequestError } from "./error/error";

async function add(req: NextApiRequest) {
  const { authorId, category, title, description, curriculums } = req.body;
  if (authorId === undefined || authorId === null) {
    throw new BadRequestError("authorId가 누락되었습니다.");
  }
  if (category === undefined || category === null) {
    throw new BadRequestError("category가 누락되었습니다.");
  }
  if (title === undefined || title === null) {
    throw new BadRequestError("title가 누락되었습니다.");
  }
  if (description === undefined || description === null) {
    throw new BadRequestError("desc가 누락되었습니다.");
  }
  if (curriculums === undefined || curriculums === null) {
    throw new BadRequestError("curriculums가 누락되었습니다.");
  }
  const addResult = await createRoadmap({
    authorId,
    category,
    title,
    description,
    curriculums,
  });

  return addResult;
}
const RoadmapCtrl = {
  add,
};
export default RoadmapCtrl;
