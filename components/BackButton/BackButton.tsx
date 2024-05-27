"use client";

import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export const BackButton = () => {
  const router = useRouter();

  const onBack = () => {
    router.back();
  };

  return (
    <div className="mb-4">
      <Button onClick={onBack}>Go back</Button>
    </div>
  );
};
