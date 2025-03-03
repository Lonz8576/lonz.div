"use client";
import { 
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 80%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full text-wrap bg-black-100 font-sans px-20 md:px-5 py-30 md:py-20"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="lg:text-4xl md:text-2xl mb-4 text-white-100 max-w-5xl">
          I am <span className="text-blue-100">Nic Alonso,</span> and I&apos;m a front-end developer based in the United States.   


        </h2>
        <p className="text-white-100 text-sm md:text-base max-w-sm">
        I am an avid learner and diligent developer who enjoys building sites where developement meets design. Here&apos;s a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-full md:flex-auto mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-lg md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white-100/[0.53] flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-white-100 border-2 border-blue-100 p-2" />
              </div>
              <h3 className="hidden md:block text-xl  md:pl-20 md:text-3xl lg:text-5xl font-bold text-white-100  ">
                {item.title}
              </h3>
            </div>

            <div className="relative lg:pl-12 pr-3 md:pl-8 w-full">
              <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-blue-100 ">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:hidden left-8 top-0 overflow-hidden   w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200  to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute md:hidden inset-x-0 top-0  w-[2px] bg-gradient-to-t from-blue-700 via-blue-100 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
