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
import usePostForms from "./hooks/usePostForms";
import Selectbox from "@/components/Selectbox";
import { roadmapCategories } from "@/data/roadmapCategories";
import Modal from "@/components/Modal";
import { useRouter } from "next/navigation";

type RoadMap = {
  category: string;
  title: string;
  description: string;
  curriculums: Array<{
    subject: string;
    detail: string;
    requiredTimeHour: number;
    requiredTimeMin: number;
  }>;
};

const PostRoadmap = () => {
  const router = useRouter();

  const defaultFormValues = {
    category: roadmapCategories[0].value,
    title: "",
    description: "",
    curriculums: [
      { subject: "", detail: "", requiredTimeHour: 1, requiredTimeMin: 30 },
      { subject: "", detail: "", requiredTimeHour: 1, requiredTimeMin: 30 },
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
    insertCurriculum,
    removeCurriculum,
  } = useGetForms({
    control,
  });
  const { onSubmit, onErrors, modalOpen, setModalOpen } = usePostForms();

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit, onErrors)}
        className="text-white mx-3 grid grid-cols-6 gap-x-6 gap-y-8"
      >
        <LabelWrapper>
          <Label htmlFor="category">카테고리</Label>
          <Selectbox
            value={category.value}
            onChange={category.onChange}
            options={roadmapCategories}
          />
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
                    addItem={() => {
                      insertCurriculum(idx + 1, {
                        subject: "",
                        detail: "",
                        requiredTimeHour: 1,
                        requiredTimeMin: 30,
                      });
                    }}
                    removeItem={() => removeCurriculum(idx)}
                  >
                    <TextInput {...register(`curriculums.${idx}.subject`)} />
                    <div className="ml-4 mt-4">
                      <TextareaInput
                        {...register(`curriculums.${idx}.detail`)}
                      />
                    </div>
                    <div className="flex items-center w-[200px]">
                      <NumberInput
                        {...register(`curriculums.${idx}.requiredTimeHour`)}
                      />
                      H
                      <NumberInput
                        {...register(`curriculums.${idx}.requiredTimeMin`)}
                      />
                      M
                    </div>
                  </PostFeedItem>
                </div>
              ))}
            </ul>
          </div>
        </LabelWrapper>
        <div className="col-start-6">
          <Button
            type="submit"
            bgColor="bg-indigo-600"
            borderRound="rounded-md"
          >
            등록
          </Button>
        </div>
      </form>
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          router.push("/roadmaps");
        }}
        closeText="구경하러 가기"
      >
        <Modal.Title>로드맵 생성 완료!</Modal.Title>
        <Modal.Body>
          로드맵이 생성되었습니다. <br />
          다른 로드맵을 구경하러 가실까요?
          <img
            src="/assets/icon/smile_icon.png"
            width={100}
            className="mx-auto animate-bounce mt-10"
          ></img>
        </Modal.Body>
      </Modal>
    </>
  );
};
export default PostRoadmap;
