import { useState } from "react";
import { FaGlobe } from "react-icons/fa6";
import RiotLogo from "../../assets/images/riot_logo.svg?react";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { GoArrowUpRight } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { SiValorant } from "react-icons/si";
import navData from "../../assets/data/nav.json";
import { IoMdClose } from "react-icons/io";
import RiotImage1 from "../../assets/images/riot_image1.jpeg";
import RiotImage2 from "../../assets/images/riot_image2.jpeg";
import { languages as lang } from "../../assets/data/constants.js";
import { IoMdCheckmark } from "react-icons/io";
import { FiMenu } from "react-icons/fi";

import { riotMenu } from "../../assets/data/riotmenu.js";
import { Link } from "react-router-dom";

function Navbar() {
  // States and functions
  const [showRiotMenu, setShowRiotMenu] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState(
    lang.find((l) => l.current === true).id
  );
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [mobileCurrentElementId, setMobileCurrentElementId] = useState(-1);
  const [mobileCurrentRiotId, setMobileCurrentRiotId] = useState(-1);
  const [searchValue, setSearchValue] = useState("");

  const handleMobileCurrentElementChange = (id) => {
    mobileCurrentElementId === id
      ? setMobileCurrentElementId(-1)
      : setMobileCurrentElementId(id);
  };

  const handleMobileCurrentRiotId = (id) => {
    mobileCurrentRiotId === id
      ? setMobileCurrentRiotId(-1)
      : setMobileCurrentRiotId(id);
  };
  const handleSearch = () => {
    setShowSearch(!showSearch);
  };

  const handleRiotMenu = () => {
    setShowRiotMenu(!showRiotMenu);
  };
  const handleLangMenu = () => {
    setShowLangMenu(!showLangMenu);
  };
  const handleCurrentLangChange = (l) => {
    setShowLangMenu(false);
    setCurrentLang(l);
  };

  const handleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  const handleSearchValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <nav className="w-full bg-black text-white sticky top-0 z-50">
      {/* Mobile Menu */}
      <div
        className={`min-h-screen w-[60%] ${
          showMobileMenu ? "flex right-0 " : "hidden right-[-999px]"
        } fixed h-full overflow-y-scroll top-0 z-50 bg-mobile-gray transition-all ease-in duration-300 flex-col justify-start items-center gap-4 p-4 `}
      >
        <div className="flex justify-between w-full">
          <SiValorant className="text-white text-xl" />
          <button
            onClick={handleMobileMenu}
            className="text-white p-1 bg-gray rounded-lg"
          >
            <IoMdClose />
          </button>
        </div>
        <div
          className={`bg-gray rounded-lg justify-between items-center gap-2 px-2 py-1 flex w-full `}
        >
          <FaSearch color="white" className="cursor-pointer" />
          <input
            type="text"
            className="bg-gray rounded-lg border-none outline-none flex-1"
            value={searchValue}
            onChange={(e) => handleSearchValueChange(e)}
          />
          <IoMdClose
            className="text-sec-gray cursor-pointer"
            onClick={() => setSearchValue("")}
          />
        </div>
        <div className="flex flex-col w-full ">
          <ul className="flex flex-col gap-1 items-start w-full relative">
            {navData.map(
              (data) =>
                data.mobileMenu !== false && (
                  <>
                    <li
                      key={data.id}
                      className="text-white uppercase hover:bg-gray w-full rounded-md px-2 py-1 flex justify-between items-center"
                      onClick={() => handleMobileCurrentElementChange(data.id)}
                    >
                      <p>{data.text}</p>
                      {data.hasDropdownArrow ? (
                        mobileCurrentElementId !== data.id ? (
                          <IoMdArrowDropdown className="text-sec-gray" />
                        ) : (
                          <IoMdArrowDropup className="text-sec-gray" />
                        )
                      ) : null}
                      {data.hasUpArrow && (
                        <GoArrowUpRight className="text-sec-gray" />
                      )}
                    </li>
                    {mobileCurrentElementId === data.id && (
                      <ul className="flex flex-col w-full gap-2 z-50">
                        {data.child.map((child) => (
                          <li
                            key={child.id}
                            className="text-sec-gray hover:text-white uppercase hover:bg-gray w-full rounded-md px-2 py-1 flex justify-between items-center"
                          >
                            {child.element}
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                )
            )}
          </ul>
        </div>
        <div className="w-full flex">
          <Link
            to={"/game"}
            className={`uppercase font-bold bg-gradient-to-r from-riot-red to-riot-orange text-black px-4 rounded-lg flex justify-center items-center w-full`}
          >
            Play Now
          </Link>
        </div>
      </div>
      {/* Riot Menu */}
      <div
        className={`${
          showRiotMenu ? "top-0" : "top-[-3000px]"
        } flex flex-col justify-center items-center w-full px-8 absolute bg-white z-50 min-h-screen ease-in duration-300`}
      >
        <div className="flex justify-between w-full">
          <button
            onClick={handleRiotMenu}
            className="flex items-center justify-center fill-black hover:fill-red text-sec-gray hover:text-red"
          >
            <RiotLogo className="w-16 " />
            <IoMdArrowDropup className="text-sm ml-[-0.5rem]" />
          </button>
          <button onClick={handleRiotMenu}>
            <IoMdClose className="text-black text-sm bg-riot-gray rounded" />
          </button>
        </div>
        {/* Flex layout */}
        <div className="flex md:flex-row flex-col gap-2 w-full">
          {/* Mobile Menu */}
          <div className="md:hidden flex flex-col gap-4 text-lg font-semibold">
            {riotMenu.map((item) => (
              <div key={item.id} className={`flex flex-col gap-4`}>
                <ul className="flex flex-col gap-2 z-50">
                  <li
                    className={`${
                      mobileCurrentRiotId === item.id
                        ? "bg-black text-white"
                        : "bg-riot-gray text-black"
                    }  rounded px-2 flex items-center justify-between uppercase`}
                    onClick={() => handleMobileCurrentRiotId(item.id)}
                  >
                    {item.name}
                    {item.id === mobileCurrentRiotId ? (
                      <IoMdArrowDropup className="text-sec-gray" />
                    ) : (
                      <IoMdArrowDropdown className="text-sec-gray" />
                    )}
                  </li>
                  {mobileCurrentRiotId === item.id &&
                    item.children.map((item) => (
                      <li
                        className="px-2 text-sec-gray uppercase hover:bg-riot-gray rounded font-light"
                        key={item.id}
                      >
                        {item.element}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
            {/* Riot images */}
            <div className="flex flex-col md:flex-row gap-4 text-black leading-4 text-lg md:text-sm mt-8 mb-16 md:my-0">
              <div className="flex flex-col gap-4">
                <img
                  src={RiotImage1}
                  alt="Legends of Runaterra"
                  className="rounded w-full"
                />
                <div className="flex flex-row md:flex-col gap-1">
                  <p>New Legends of Runaterra Expansion</p>
                  <p>- Dreamlit Paths</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <img
                  src={RiotImage2}
                  alt="VALORANT"
                  className="rounded w-full"
                />
                <div className="flex flex-row gap-1">
                  <p>Defy expectations, be the difference.</p>
                  <p>EPISODE 08 // ACT III is here</p>
                </div>
              </div>
            </div>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex flex-row gap-4 w-full">
            {/* Riot Lists */}
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                <li
                  className={`bg-riot-gray text-black rounded px-2 flex items-center justify-between uppercase`}
                >
                  {riotMenu[0].name}
                </li>
                {riotMenu[0].children.map((item) => (
                  <li
                    key={item.id}
                    className="px-2 text-sec-gray uppercase hover:bg-riot-gray rounded font-light"
                  >
                    {item.element}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                <li
                  className={`bg-riot-gray text-black rounded px-2 flex items-center justify-between uppercase`}
                >
                  {riotMenu[1].name}
                </li>
                {riotMenu[1].children.map((item) => (
                  <li
                    key={item.id}
                    className="px-2 text-sec-gray uppercase hover:bg-riot-gray rounded font-light"
                  >
                    {item.element}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                <li
                  className={`bg-riot-gray text-black rounded px-2 flex items-center justify-between uppercase`}
                >
                  {riotMenu[2].name}
                </li>
                {riotMenu[2].children.map((item) => (
                  <li
                    key={item.id}
                    className="px-2 text-sec-gray uppercase hover:bg-riot-gray rounded font-light"
                  >
                    {item.element}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-4">
              <ul className="flex flex-col gap-2">
                <li
                  className={`bg-riot-gray text-black rounded px-2 flex items-center justify-between uppercase`}
                >
                  {riotMenu[3].name}
                </li>
                {riotMenu[3].children.map((item) => (
                  <li
                    key={item.id}
                    className="px-2 text-sec-gray uppercase hover:bg-riot-gray rounded font-light"
                  >
                    {item.element}
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-2">
                <li
                  className={`bg-riot-gray text-black rounded px-2 flex items-center justify-between uppercase`}
                >
                  {riotMenu[4].name}
                </li>
                {riotMenu[4].children.map((item) => (
                  <li
                    key={item.id}
                    className="px-2 text-sec-gray uppercase hover:bg-riot-gray rounded font-light"
                  >
                    {item.element}
                  </li>
                ))}
              </ul>
            </div>

            {/* Riot images */}
            <div className="flex flex-row gap-4 text-black leading-4 text-sm">
              <div className="flex flex-col gap-4">
                <img
                  src={RiotImage1}
                  alt="Legends of Runaterra"
                  className="rounded w-64"
                />
                <div className="flex flex-col gap-1">
                  <p>New Legends of Runaterra Expansion</p>
                  <p>- Dreamlit Paths</p>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <img src={RiotImage2} alt="VALORANT" className="rounded w-64" />
                <div className="flex gap-1 flex-col">
                  <p>Defy expectations, be the difference.</p>
                  <p>EPISODE 08 // ACT III is here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NavBar for Large Screens*/}
      <div className="flex justify-between items-center px-4 py-2 mx-auto text-white">
        <div className="flex gap-2">
          <button
            onClick={handleRiotMenu}
            className="flex items-center justify-center fill-white hover:fill-red text-sec-gray hover:text-red"
          >
            <RiotLogo className="w-16 " />
            <IoMdArrowDropdown className="text-sm ml-[-0.5rem]" />
          </button>
          <button>
            <Link to={"/"}>
              <SiValorant className="text-white hover:text-red" />
            </Link>
          </button>
        </div>
        <div className="uppercase hidden sm:flex ">
          <ul className="flex gap-2 rounded-lg px-2 py-0 text-sm font-light hover:text-white">
            {navData.map((item) => (
              <li
                key={item.id}
                className={` ${
                  item.OnlyLargeScreen === true && showSearch === true
                    ? "hidden"
                    : item.OnlyLargeScreen === true
                    ? "hidden md:flex"
                    : item.noLargeScreen && showSearch === true
                    ? "flex"
                    : item.noLargeScreen
                    ? "flex md:hidden"
                    : "flex"
                } items-center justify-center
                 hover:bg-gray px-2 rounded-sm *:hover:text-white *:hover:opacity-100 relative group`}
              >
                {item.text}
                {item.hasDropdownArrow && (
                  <IoMdArrowDropdown className="text-[0.5rem] text-sec-gray" />
                )}
                {item.hasUpArrow && (
                  <GoArrowUpRight className="text-[0.5rem] text-sec-gray" />
                )}
                <div
                  className={`${
                    item.child && "w-[175%]"
                  } absolute left-0 right-0 top-8 z-50 rounded-lg h-[2px] bg-red opacity-0 group-hover:opacity-100 transition-opacity duration-100`}
                ></div>
                {item.child && (
                  <ul className="absolute left-0 right-0 top-10 bg-black py-2 px-2 z-50 w-[175%] flex-col justify-start items-start gap-2 invisible group-hover:visible flex opacity-0 group-hover:opacity-100 hover:flex duration-300">
                    {item.child.map((child) => (
                      <li
                        key={child.id}
                        className="flex justify-start rounded px-2 py-1 items-center gap-1 hover:bg-gray *:hover:text-white w-full text-[0.7rem]"
                      >
                        {child.element}
                        {child.hasUpArrow && (
                          <GoArrowUpRight className="text-[0.5rem] text-sec-gray" />
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div className={`flex gap-2  `}>
          <button
            className={`p-2 bg-gray rounded-lg relative ${
              showSearch ? "hidden" : "hidden sm:flex"
            }`}
          >
            <FaSearch color="white" onClick={handleSearch} className={``} />
          </button>
          <div
            className={` ${
              showSearch ? "flex" : "hidden"
            } bg-gray rounded-lg justify-between items-center gap-2 px-2 `}
          >
            <FaSearch color="white" className="cursor-pointer" />
            <input
              type="text"
              className="bg-gray rounded-lg border-none outline-none "
              value={searchValue}
              onChange={(e) => handleSearchValueChange(e)}
            />
            <IoMdClose
              className="text-sec-gray cursor-pointer"
              onClick={handleSearch}
            />
          </div>
          <button
            onClick={handleLangMenu}
            className="p-2 hover:bg-gray rounded-lg relative"
          >
            <FaGlobe color="white" />
            <div
              className={`${
                showLangMenu ? "flex" : "hidden"
              } bg-white absolute left-[-50%] translate-x-[-25%] right-0 top-10 w-[500%] rounded-sm max-h-[200px] overflow-y-scroll`}
            >
              <div className="relative">
                <ul className="flex flex-col py-2 relative">
                  {lang.map((item) => (
                    <li
                      onClick={() => handleCurrentLangChange(item.id)}
                      key={item.id}
                      className={`${
                        item.id === currentLang ? "text-red" : "text-sec-gray"
                      } px-2 py-1 hover:text-black uppercase flex gap-4 items-center`}
                    >
                      {item.nativeName}
                      {item.id === currentLang ? <IoMdCheckmark /> : null}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </button>
          <div className="flex sm:hidden">
            <button
              className="text-white bg-gray p-2 rounded-lg"
              onClick={handleMobileMenu}
            >
              <FiMenu />
            </button>
          </div>
          <Link
            to={"/game"}
            className={`uppercase font-bold bg-gradient-to-r from-riot-red to-riot-orange text-black px-4 rounded-lg hidden md:flex justify-center items-center `}
          >
            Play Now
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
