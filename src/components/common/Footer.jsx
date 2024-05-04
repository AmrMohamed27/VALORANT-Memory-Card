import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import RiotLogo from "../../assets/images/riot_logo.svg?react";
import { SiValorant } from "react-icons/si";
import { footer } from "../../assets/data/constants.js";

function Footer() {
  return (
    <footer className="bg-black text-white w-full min-h-screen">
      <div className="w-full ">
        <div className="w-full flex flex-col gap-4 p-8 items-center">
          {/* Socials */}
          <div className="flex flex-row gap-2 *:bg-gray *:rounded-md *:p-1 *:cursor-pointer">
            <div>
              <FaTwitter className="" />
            </div>
            <div>
              <FaYoutube />
            </div>
            <div>
              <FaInstagram />
            </div>
            <div>
              <FaTiktok />
            </div>
            <div>
              <FaFacebook />
            </div>
            <div>
              <FaDiscord />
            </div>
          </div>
          {/* Logos */}
          <div className="flex flex-row gap-3">
            <RiotLogo className="w-24 fill-sec-gray hover:fill-white cursor-pointer" />
            <div className="flex flex-col gap-1 justify-center items-center">
              <SiValorant className="w-auto h-8 text-riot-white" />
              <p className="text-riot-white font-['Valorant'] text-sm">
                valorant
              </p>
            </div>
          </div>
          {/* Copyright */}
          <div className="w-full flex justify-center items-center">
            <p className="text-sec-gray uppercase text-center w-[60%]">
              &copy; 2020-2024 Riot Games, Inc. Riot Games, Valorant and any
              associated logos are trademarks, service marks, and/or registered
              trademarks of Riot Games, Inc.
            </p>
          </div>
          {/* ToS */}
          <div className="w-full flex justify-center items-center">
            <ul className="flex flex-row gap-0">
              {footer.map((item) => (
                <li
                  key={item.id}
                  className="text-white hover:bg-gray duration-400 ease-in-out cursor-pointer rounded px-4"
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
