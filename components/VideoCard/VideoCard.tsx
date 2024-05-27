import Video from "next-video";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CommentInput } from "@/components/CommentInput";
import { CommentType, VideoType } from "@/types/video";
import { getAllVideoComments } from "@/app/actions/video";

export const VideoCard = async ({ videoObj }: { videoObj: VideoType }) => {
  const data = await getAllVideoComments(videoObj.id);

  return (
    <Card
      key={videoObj.id}
      className="w-full md:w-[32%] min-h-full flex flex-col"
    >
      <CardHeader>
        <Video src={videoObj.video_url} className="rounded-lg w-full" />
      </CardHeader>
      <CardContent>
        <CardTitle className="mt-5 hover:underline text-green-500">
          <Link href={`/video/${videoObj.id}`}>{videoObj.title}</Link>
        </CardTitle>
        <CardDescription className="mt-4 mb-[-15px]">
          {videoObj.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="mt-auto justify-self-end">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Comments
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{videoObj.title}</DialogTitle>
              <CardDescription>
                Uploaded By :{" "}
                {videoObj.user_id
                  .split("_")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </CardDescription>
            </DialogHeader>
            <CommentInput videoId={videoObj.id} />
            <div>
              {data.comments.map((comment: CommentType) => (
                <div
                  key={comment.id}
                  className="border rounded-md border-dashed border-black p-3 mb-2"
                >
                  <p>{comment.content}</p>
                  <p className="text-slate-500 text-xs">
                    By :{" "}
                    {comment.user_id
                      .split("_")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </p>
                </div>
              ))}
            </div>
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
};
