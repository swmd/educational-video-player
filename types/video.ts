export type VideoType = {
  created_at: string;
  video_url: string;
  user_id: string;
  description: string;
  title: string;
  num_comments: number;
  id: string;
};

export type CommentType = {
  created_at: string;
  content: string;
  user_id: string;
  video_id: string;
  id: string;
};

export type VideoPayload = {
  title: string;
  description: string;
  url: string;
};

export type CommentPayload = {
  comment: string;
  videoId: string;
};
