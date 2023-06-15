import { useController, useFieldArray } from "react-hook-form";

export default function useGetForms({ control }) {
  const { field: category } = useController({
    name: "category",
    control: control,
  });

  const { field: title } = useController({
    name: "title",
    control: control,
  });

  const { field: description } = useController({
    name: "description",
    control: control,
  });

  const {
    fields: curriculums,
    append: appendCurriculum,
    remove: removeCurriculum,
  } = useFieldArray({
    name: "curriculums",
    control: control,
    keyName: "curriclumnId",
  });

  return {
    category,
    title,
    description,
    curriculums,
    appendCurriculum,
    removeCurriculum,
  };
}
