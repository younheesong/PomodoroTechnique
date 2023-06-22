import { useUserContext } from "@/contexts/userContext";
import { useState } from "react";

export default function usePostForms() {
  const { user } = useUserContext();
  const [modalOpen, setModalOpen] = useState(false);

  async function onSubmit(data) {
    console.log(data);
    try {
      await fetch("/api/roadmaps.add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          authorId: user?._id,
          category: data.category,
          title: data.title,
          description: data.description,
          curriculums: data.curriculums,
        }),
      });
    } catch (e) {
      console.log(e);
    }
    setModalOpen(true);
  }
  const onErrors = (errors) => {
    console.log(errors);
  };

  return { onSubmit, onErrors, modalOpen, setModalOpen };
}
