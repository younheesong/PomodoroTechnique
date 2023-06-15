"use client";
import Label from "@/components/Label";
import LabelWrapper from "@/components/LabelWrapper";
import TextInput from "@/components/TextInput";
import TextareaInput from "@/components/TextareaInput";
import { useForm } from "react-hook-form";
import Button from "@/components/Button";
import PostFeedItem from "./components/PostFeedItem";
import NumberInput from "@/components/NumberInput";
import useGetForms from "./hooks/useGetForms";
type RoadMap = {
  category: string;
  title: string;
  desc: string;
  curriculums: Array<{ subject: string; detail: string }>;
};

const PostRoadmap = () => {
  const defaultFormValues = {
    category: "hihi",
    title: "",
    desc: "",
    curriculums: [
      { subject: "11", detail: "22" },
      { subject: "33", detail: "44" },
    ],
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isSubmitting },
  } = useForm<RoadMap>({
    mode: "onSubmit",
    defaultValues: defaultFormValues as RoadMap,
  });

  const {
    category,
    title,
    description,
    curriculums,
    appendCurriculum,
    removeCurriculum,
  } = useGetForms({
    control,
  });
  const onSubmit = (data) => {
    console.log("adfa");
    console.log(data);
  };
  const onErrors = (errors) => {
    console.log(errors);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onErrors)}
      className="text-white mx-3 grid grid-cols-6 gap-x-6 gap-y-8"
    >
      <LabelWrapper>
        <Label htmlFor="category">카테고리</Label>
        <TextInput value={category.value} onChange={category.onChange} />
      </LabelWrapper>
      <LabelWrapper>
        <Label htmlFor="title">제목</Label>
        <TextInput value={title.value} onChange={title.onChange} />
      </LabelWrapper>
      <LabelWrapper>
        <Label htmlFor="desc">설명</Label>
        <TextareaInput
          value={description.value}
          onChange={description.onChange}
          rows={3}
        />
      </LabelWrapper>
      <LabelWrapper>
        <Label htmlFor="desc">로드맵 과정</Label>

        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {curriculums.map((curri, idx) => (
              <div key={curri.curriclumnId}>
                <PostFeedItem
                  isLast={idx === curriculums.length - 1}
                  // addItem={appendCurriculum}
                  addItem={() => {
                    console.log("1");
                  }}
                  removeItem={() => console.log(2)} //removeCurriculum(idx)}
                >
                  <TextInput {...register(`curriculums.${idx}.subject`)} />
                  <div className="ml-4 mt-4">
                    <TextareaInput {...register(`curriculums.${idx}.detail`)} />
                  </div>
                  <div className="flex items-center w-[200px]">
                    <NumberInput defaultValue={1} min={0} />H
                    <NumberInput defaultValue={30} min={0} max={60} />M
                  </div>
                </PostFeedItem>
              </div>
            ))}
          </ul>
        </div>
      </LabelWrapper>
      <div className="col-start-6">
        <Button type="submit" bgColor="bg-indigo-600" borderRound="rounded-md">
          등록
        </Button>
      </div>
    </form>
  );
};
export default PostRoadmap;
