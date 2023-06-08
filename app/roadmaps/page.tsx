import Button from "@/components/Button";
import Link from "next/link";

const RoadMaps = () => {
  return (
    <div className="text-white">
      로드맵!
      <Link href="/roadmaps/post-roadmap">
        <Button>로드맵 생성</Button>
      </Link>
    </div>
  );
};
export default RoadMaps;
