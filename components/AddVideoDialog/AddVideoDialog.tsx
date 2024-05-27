"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { createNewVideo } from "@/app/actions/video";
import revalidateHomePage from "@/app/actions/revalidate";

const AddVideoDialog = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handlePostVideo = async () => {
    try {
      await createNewVideo({ title, description, url });
      revalidateHomePage();
      setOpen(false);
    } catch (e) {
      console.error("post error: ", e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default" className="w-full md:w-32">
          Add new Video
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Video (by link)</DialogTitle>
          <DialogDescription>*every field is necessary</DialogDescription>
        </DialogHeader>
        <Input
          type="text"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <Input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <Input
          type="text"
          placeholder="URL"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        <p className="text-xs text-slate-500 italic">
          Testing URL :
          http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4
        </p>
        <DialogFooter>
          <Button
            className="w-full"
            disabled={title === "" || description === "" || url === ""}
            onClick={handlePostVideo}
          >
            {loading ? "Uploading..." : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AddVideoDialog;
