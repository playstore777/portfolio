"use client";
import Image from "next/image";

import myBookImage from "@/shared/assets/images/my-book-cover-zoomed.png";
import memojiAvatar from "@/shared/assets/images/memoji-avatar-1.png";
import mapImage from "@/shared/assets/images/map.png";
import { TOOLBOX_ITEMS, HOBBIES } from "@/entities";
import { Hobbies, Toolbox } from "@/features";
import { Card, CardHeader, SectionHeader } from "@/shared";

const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className=" hover:after:outline-orange-300 h-[350px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books that shape my perspective."
              />
              <div className="w-60 mx-auto mt-2 md:mt-0">
                <Image src={myBookImage} alt="Book cover" />
              </div>
            </Card>
            <Card className=" hover:after:outline-orange-300 h-[350px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Discover the technologies and tools I leverage to build outstanding digital experiences."
                iconType="streching"
              />
              <Toolbox items={TOOLBOX_ITEMS} />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className=" hover:after:outline-orange-300 h-[350px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the code"
                description="Explore my interests and hobbies beyond the digital realm"
                className="px-6 py-6"
                iconType="scared"
              />
              <Hobbies hobbies={HOBBIES} />
            </Card>
            <Card className=" hover:after:outline-orange-300 h-[350px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 after:content[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 to-orange-400 -z-10"></div>
                <Image
                  src={memojiAvatar}
                  alt="smiling memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
