import Image from "next/image";
// import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaIcicles, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";
import NavLogo from "../public/assets/BlessIknowLogo.png";
import { Link, animateScroll } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [navImg, setNavImg] = useState(NavLogo);
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [position, setPosition] = useState("fixed");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netflix" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
      setNavImg();
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
      setNavImg(NavLogo);
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={navImg}
            alt="/"
            width="125"
            height="50"
            className="cursor-pointer"
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="home"
                smooth={true}
                offset={50}
                duration={500}
                // delay={1000}
              >
                Home
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="about"
                smooth={true}
                offset={-50}
                duration={500}
                // delay={1000}
              >
                About
              </Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="skills"
                smooth={true}
                offset={-50}
                duration={500}
                // delay={1000}
              >
                Skills
              </Link>
            </li>
            {/* <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="projects"
                smooth={true}
                offset={-50}
                duration={500}
                // delay={1000}
              >
                Projects
              </Link>
            </li> */}
            <li className="ml-10 text-sm uppercase hover:border-b">
              <a
                href="https://drive.google.com/file/d/14BoVMc1E5PrJKXyP1yv6dYaSHLzHLF45/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link
                to="contact"
                smooth={true}
                offset={-50}
                duration={500}
                // delay={1000}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/">
                <Image src={NavLogo} width="87" height="35" alt="/" />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let&#39;s build something Unique together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link
                  to="home"
                  smooth={true}
                  // offset={50}
                  // duration={500}
                  // delay={1000}
                >
                  Home
                </Link>
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link to="about" smooth={true} offset={-100} duration={500}>
                  About
                </Link>{" "}
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link to="skills" smooth={true} offset={-150} duration={500}>
                  Skills
                </Link>{" "}
              </li>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link
                  to="projects"
                  smooth={true}
                  // offset={-150}
                  // duration={500}
                  // delay={1000}
                >
                  Projects
                </Link>{" "}
              </li>

              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>
              </Link>

              <li onClick={() => setNav(false)} className="py-4 text-sm">
                <Link
                  to="contact"
                  smooth={true}
                  // offset={-500}
                  // duration={500}
                  // delay={5000}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[green]">
                Let&#39;s Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/blessvic/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/BlessIknow"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
