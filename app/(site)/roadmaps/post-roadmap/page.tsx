"use client";
import Label from "@/components/Label";
import LabelWrapper from "@/components/LabelWrapper";
import TextInput from "@/components/TextInput";
import TextareaInput from "@/components/TextareaInput";
import { useForm } from "react-hook-form";
import { CheckIcon } from "@heroicons/react/24/outline";
import Button from "@/components/Button";
import PostFeedItem from "./components/PostFeedItem";
import { useEffect } from "react";
type RoadMap = {
  title: string;
  desc: string;
  todos: Array<{ title: string; desc: string }>;
};

const PostRoadmap = () => {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RoadMap>({ mode: "onChange" });

  const onSubmit = () => {
    alert("afa");
    console.log("adfa");
    console.log(watch().title);
    console.log(watch().todos);
  };
  const timeline = [
    {
      id: 3,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      href: "#",
      date: "Sep 28",
      datetime: "2020-09-28",
      icon: CheckIcon,
      iconBackground: "bg-gray-500",
    },
    {
      id: 4,
      content: "Completed phone screening with",
      target: "Martha Gardner",
      href: "#",
      date: "Sep 28",
      datetime: "2020-09-28",
      icon: CheckIcon,
      iconBackground: "bg-gray-500",
    },
  ];

  return (
    <form
      onSubmit={() => onSubmit()}
      className="text-white mx-3 grid grid-cols-6 gap-x-6 gap-y-8"
    >
      <LabelWrapper>
        <Label htmlFor="title">제목</Label>
        <TextInput
          {...register("title", {
            required: "제목은 필수입니다.",
          })}
        />
      </LabelWrapper>
      <LabelWrapper>
        <Label htmlFor="desc">설명</Label>
        <TextareaInput
          {...register("desc", {
            required: "설명은 필수입니다.",
          })}
          rows={3}
        />
      </LabelWrapper>
      <LabelWrapper>
        <Label htmlFor="desc">로드맵 과정</Label>

        <div className="flow-root">
          <ul role="list" className="-mb-8">
            {timeline.map((event, eventIdx) => (
              <PostFeedItem
                key={event.id}
                idx={eventIdx}
                event={event}
                isLast={eventIdx === timeline.length - 1}
                register={register}
              />
            ))}
          </ul>
        </div>
      </LabelWrapper>
      <div className="col-start-6">
        <Button
          onClick={handleSubmit(onSubmit)}
          bgColor="bg-indigo-600"
          borderRound="rounded-md"
        >
          등록
        </Button>
      </div>
    </form>
  );
};
export default PostRoadmap;
