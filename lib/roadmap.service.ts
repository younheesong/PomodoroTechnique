import { client } from "@/sanity/utils/client";
import { getUser } from "./user.service";

export async function createRoadmap({
  authorId,
  category,
  title,
  description,
  curriculums,
}: {
  authorId: string;
  category: string;
  title: string;
  description: string;
  curriculums: Array<{
    subject: string;
    detail: string;
    requiredTimeHour: number;
    requiredTimeMin: number;
  }>;
}) {
  const resp = await getUser({ _id: authorId });
  console.log(resp);
  if (resp?.result?.length == 0) return { status: 1 };

  const addData = {
    author: {
      _ref: authorId,
      _type: "reference",
    },
    category: category,
    title: title,
    desc: description,
    curriculums: curriculums,
  };

  await client
    .create({ ...addData, _type: "roadmap" })
    .then((res) => console.log(res));

  return {
    status: 0,
    message: addData,
  };
}
