import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/Blessing.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#008000]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            As an agile project manager, my expertise lies in effectively
            managing cross-functional teams and creating an environment that
            fosters optimal productivity. I am well-versed in the various scrum
            events, including sprint planning, daily stand-ups, sprint reviews,
            and retrospectives. By facilitating these events, I ensure that the
            team remains focused, aligned, and continuously improves throughout
            the project lifecycle. When I’m not managing an agile team, I find
            joy in pursuing my other passions, such as cooking or writing code.
          </p>

          <p className="py-2 text-gray-600">
            With 5+ years of experience in project management, accounting, and
            product development in the tech industry, I possess a diverse skill
            set that enables me to deliver successful outcomes across multiple
            domains. My expertise in driving projects, managing finances, and
            overseeing product development lifecycles allows me to effectively
            navigate complex challenges and deliver results that align with
            business and customer objectives.
          </p>
          {/* <Link href="/#projects">
            <p className="py-2 text-green-600 underline cursor-pointer">
              A quick look at my latest projects.
            </p>
          </Link> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
