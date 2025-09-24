import Image from "next/image";
import React from "react";
import Headshot from "@/public/avatar.png";

export default function Hero() {
  return (
    <section className="relative flex justify-center z-10">
      <div className="flex max-w-200 w-full my-12 flex-col">
        <div className="flex w-full content-center align-bottom gap-8">
          <Image
            className="size-20"
            src={Headshot}
            alt="avatar"
            height={200}
            width={200}
          />
          <div>
            <h1 className="text-3xl mb-2 font-juni">Hey, I'm Maruf Hasan</h1>
            <p>Web Developer</p>
          </div>
        </div>
        <div>
          I'm a creative software developer with five years of experience. I
          specialize in UI design and crafting engaging user experiences with
          great attention to detail.
        </div>
      </div>
    </section>
  );
}
