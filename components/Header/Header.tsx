import Image from "next/image";

import { AddVideoDialog } from "@/components/AddVideoDialog";
import { Badge } from "@/components/ui/badge";

export const Header = () => (
  <div className="flex w-full flex md:flex-row flex-col justify-between items-center">
    <div className="mb-5 relative">
      <Image
        src={"/assets/LogoColor.png"}
        alt="Picture of the author"
        width={160}
        height={40}
      />
      <p className="text-xs absolute hidden md:block md:top-[38px] md:left-[50px] text-slate-500 w-max">
        The first learning place for your kids
      </p>
    </div>
    <div className="flex gap-2">
      <AddVideoDialog />
      <Badge variant="outline" className="h-10 rounded-md flex gap-2">
        <Image
          src={"/assets/Profile.png"}
          alt="Picture of the author"
          width={16}
          height={16}
        />
        <p>Steve Lin</p>
      </Badge>
    </div>
  </div>
);
