"use server";

import axiosInstance from "@/lib/axios";
import {
  CommentPayload,
  CommentType,
  VideoPayload,
  VideoType,
} from "@/types/video";

const userId = process.env.NEXT_PUBLIC_USER;

export async function getAllVideos() {
  const res = await axiosInstance.get<{ videos: VideoType[] }>("/videos", {
    params: {
      user_id: userId,
    },
  });

  return res.data;
}

export async function getSingleVideo(videoId: string) {
  const res = await axiosInstance.get<{ video: VideoType }>("/videos/single", {
    params: {
      video_id: videoId,
    },
  });

  return res.data;
}

export async function getAllVideoComments(videoId: string) {
  const res = await axiosInstance.get<{ comments: CommentType[] }>(
    "/videos/comments",
    {
      params: {
        video_id: videoId,
      },
    }
  );

  return res.data;
}

export async function addComment(data: CommentPayload) {
  const res = await axiosInstance.post("/videos/comments", {
    video_id: data.videoId,
    content: data.comment,
    user_id: userId,
  });

  return res.data;
}

export async function createNewVideo(data: VideoPayload) {
  const res = await axiosInstance.post("/videos", {
    user_id: userId,
    description: data.description,
    video_url: data.url,
    title: data.title,
  });

  return res.data;
}
