"use client";

import { useState } from "react";

import revalidateHomePage, {
  revalidateVideoPath,
} from "@/app/actions/revalidate";
import { addComment } from "@/app/actions/video";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CommentInput = ({ videoId }: { videoId: string }) => {
  const [comment, setComment] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await addComment({ comment, videoId });
      revalidateHomePage();
      revalidateVideoPath(videoId);
      setComment("");
    } catch (e) {
      console.error("add comment error: ", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex gap-2 w-full items-center">
      <Input
        type="text"
        placeholder="Your comment here"
        onChange={(e) => setComment(e.target.value)}
        value={comment}
      />
      <Button
        type="submit"
        disabled={comment === "" || loading}
        onClick={handleSubmit}
      >
        Comment
      </Button>
    </div>
  );
};
