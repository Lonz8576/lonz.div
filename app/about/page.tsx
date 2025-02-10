
import React from "react";
import { Timeline } from "../components/Timeline";
import Image from "next/image";
import gir from '../../public/gir.jpeg'
import kid from '../../public/new-design-1.jpeg'
import nft from '../../public/NFT.jpeg'
import night from '../../public/new-design0 (1).jpeg'
import rhino from '../../public/rhino.jpeg'
import bug from '../../public/bug.jpeg'
import Link from "next/link";


export  default function AboutPage() {
  const data = [
    {
      title: "First Steps.",
      content: (
        <div>
          <p className="text-white-100 lg:text-[18px] md:text-md font-normal mb-5">
            I have been coding for 5 years, after an injury left me with physical limitations in 2021. I realised it was a creative feild mixed with problem-solving and it was ever-evolving! I decided to enroll in <span className="text-blue-100 tracking-wider font-semibold underline"><a href="https://www.shecodes.io/graduates/126818-nichole-alonso" >SheCodes Frontend development</a></span> program to get a proper foundation and dedicate 100% of my time<span className="text-blue-100  text-3xl ps-1">.</span>
          </p>
        
        </div>
      ),
    },
    {
      title: "My Journey.",
      content: (
        <div>
          <p className="text-white-100  lg:text-[18px] md:text-md font-normal mb-5">
          With over a decade of diverse experience, I have developed a strong foundation in business management, customer service, operations, and team leadership. My career began in the fitness industry, where I served as a personal trainer and later founded and operated my own fitness studio for 10 years. In this role, I honed my skills in social media marketing, event planning, and collaboration with local businesses, while overseeing all aspects of business operations, including budgeting, invoicing, inventory management, promotional campaigns, and customer service<span className="text-blue-100  text-3xl ps-1">.</span>

          Transitioning to the role of Warehouse Parts Manager, I brought my management expertise to a new industry, where I was responsible for inventory control, cost management, and overseeing field technicians. My duties included maintaining stock levels, managing technician schedules, handling repairs and truck maintenance, and ensuring smooth communication between our office, factory, dealers, and customers. I also trained new employees, handled customer service and complaint resolution, and maintained service equipment for remote workers<span className="text-blue-100  text-3xl ps-1">.</span>
         </p>
          <p className="text-white-100 lg:text-[18px] md:text-md font-normal mb-5">
          Throughout my career, I have consistently demonstrated a strong ability to adapt, lead teams, and drive efficiency and profitability in fast-paced environments<span className="text-blue-100">.</span>
          </p>
          <div className="grid grid-cols-1 text-blue-100 gap-1 font-semibold lg:text-[18px] md:text-lg">
           I transitioned into the technology field because my previous experiences—spanning health and wellness, parts management, and appliance field technician roles revealed a common thread: they all lacked the power of better technology to truly make an impact. In each of those roles, I found myself seeking more creativity, more problem-solving, and more ways to help people. Web developement became the natural next step for me, where I could merge my diverse background with my passion for innovation and real-world problem solving. It&apos;s not just about technology for me; it&apos;s about using it to create solutions that make a tangible difference in people&apos;s lives.
          </div>
        </div>
      ),
    },
    {
      title: "My Experience.",
      content: (
        <div>
          <p className="text-white-100  lg:text-[18px] md:text-md font-normal mb-5"> While I may not have decades of experience in web development, I do have a solid foundation, having worked as a freelance web developer on various projects for private clients and small businesses. These experiences have allowed me to hone my skills in real-world settings and apply my passion for problem-solving to create tailored solutions. I stay deeply committed to learning, always staying up to date with the latest technologies and trends in the industry<span className="text-blue-100  text-3xl ps-1">.</span>
          </p>
          <p className="text-white-100  lg:text-[18px] md:text-md  font-normal mb-5">
          My mindset is one of persistence—I won&apos;t stop until I get it right. I&apos;m always ready to put in the work, even if it means learning new tools or techniques to ensure success. What I need now is for someone to take a chance on me, because I know I can deliver exceptional results for any company willing to invest in my potential<span className="text-blue-100 text-3xl ps-1">.</span>
          </p>
        </div>
      ),
    },
    {
      title: "Art.",
      content: (
        <div>
          <p className="text-white-100  text-xs md:text-sm font-normal mb-4">
          Art and creativity have always been a core part of my life. I have cultivated a deep appreciation for expression, aesthetics, and visual storytelling. This creative foundation has seamlessly translated into my web development work, where I use my artistic skills in various ways<span className="text-blue-100">:</span>
          </p>
          <div className="mb-8 grid grid-cols-2  gap-2">
            <div className="flex gap-2 items-center text-white-100 text-xs md:text-sm ">
              <Image src={gir} width={100} height={200} alt="Giraffe Nft" />
            </div> 
            <div className="flex gap-2 items-center text-white-100 text-xs md:text-sm">
            <Image src={kid} width={100} height={200} alt="Creep Creep" />
            </div>
            <div className="flex gap-2 items-center text-white-100 text-xs md:text-sm">
            <Image src={nft} width={100} height={200} alt="Transform" />
            </div>
            <div className="flex gap-2 items-center text-white-100 text-xs md:text-sm">
            <Image src={night} width={100} height={200} alt="Night brfore Halloween" />
            </div>
            <div className="flex gap-2 items-center text-white-100 text-xs md:text-sm">
            <Image src={rhino} width={100} height={200} alt="rhino" />
            </div>
            <div className="flex gap-2 items-center text-white-100 text-xs md:text-sm">
            <Image src={bug} width={100} height={200} alt="rhino" />
            </div>
           
          </div>
          <div className="flex">
           
          <p className="text-white-100">
            My creativity gives you a unique edge in web development, allowing me to blend technical skills with artistic vision to produce websites that are not just functional, but also visually compelling<span className="text-blue-100">.</span>
            </p>
          </div>
          <div className=" text-blue-100 font bold flex mt-3 justify-evenly text-lg ">
              <Link href='https://portfolio.metamask.io/explore/nfts' >
              Explore my art 😊
              </Link>
            </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full ">
      <Timeline data={data} />
    </div>
  );
}
