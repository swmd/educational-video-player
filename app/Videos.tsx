import { getAllVideos } from "./actions/video";
import { VideoType } from "@/types/video";
import { VideoCard } from "@/components/VideoCard";
import { Header } from "@/components/Header";

export default async function Videos() {
  const { videos } = await getAllVideos();

  return (
    <main className="p-10">
      <Header />
      <div className="flex flex-1 flex-wrap gap-10 py-10">
        {videos?.map((video: VideoType) => (
          <VideoCard key={video.id} videoObj={video} />
        ))}
      </div>
    </main>
  );
}
