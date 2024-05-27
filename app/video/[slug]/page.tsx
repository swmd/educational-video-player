import Video from "next-video";

import { CardDescription, CardTitle } from "@/components/ui/card";
import { CommentInput } from "@/components/CommentInput";
import { getAllVideoComments, getSingleVideo } from "@/app/actions/video";
import { CommentType } from "@/types/video";
import { BackButton } from "@/components/BackButton";

const Page = async ({ params }: { params: { slug: string } }) => {
  const { video } = await getSingleVideo(params.slug);
  const { comments } = await getAllVideoComments(video.id);

  return (
    <div className="p-10 w-full flex flex-col gap-5 m-auto self-center">
      <BackButton />
      <div className="flex flex-col gap-2">
        <CardTitle>{video.title}</CardTitle>
        <CardDescription>{video.description}</CardDescription>
        <CardDescription className="mt-[-5px] text-slate-700 font-semibold">
          Uploaded By :{" "}
          {video.user_id
            .split("_")
            .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")}
        </CardDescription>
      </div>
      <Video src={video.video_url} />
      <div className="flex flex-col gap-2">
        <CommentInput videoId={video.id} />
        <div>
          {comments.map((comment: CommentType) => (
            <div className="border rounded-md border-dashed border-black p-3 mb-2">
              <p>{comment.content}</p>
              <p className="text-slate-500 text-xs">
                By :{" "}
                {comment.user_id
                  .split("_")
                  .map(
                    (word: string) =>
                      word.charAt(0).toUpperCase() + word.slice(1)
                  )
                  .join(" ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
