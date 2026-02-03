"use client";

import dynamic from "next/dynamic";
import { Maximize2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MapGeo = dynamic(() => import("@/components/map/MapGeo"), {
  ssr: false,
});

export const MapWrapper = () => {
  const pathname = usePathname();

  return (
    <div className="h-full w-full relative">
      <MapGeo />
      <div className="absolute top-0 right-0 z-20 p-2 sm:p-4 w-fit">
        <Link href={pathname.startsWith("/map") ? "/" : "/map"}>
          <Button className="cursor-pointer" variant={"outline"}>
            <Maximize2 />
          </Button>
        </Link>
      </div>
    </div>
  );
};
