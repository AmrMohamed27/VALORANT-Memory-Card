import { Link } from "react-router-dom";
import { HiOutlineArrowLongRight as RightArrow } from "react-icons/hi2";
import { articles } from "../../assets/data/constants";

function Latest() {
  return (
    <section className="w-[80%] mx-auto min-h-[75vh] relative flex flex-col justify-center items-center pb-16 pt-4 ">
      <div className="w-full flex justify-between items-center">
        <header>
          <h2 className="uppercase text-5xl md:text-8xl font-bold text-riot-red">
            The Latest
          </h2>
        </header>
        <Link
          to={"/news"}
          className="grid-cols-2  items-center group gap-2 grid absolute md:right-0 md:top-16 md:left-auto md:bottom-auto left-0 bottom-8"
        >
          <p className="uppercase text-riot-red">Go To News Page.</p>
          <RightArrow className="text-riot-red group-hover:ml-2 transition-all duration-300 ease-in-out" />
        </Link>
      </div>
      <div className="w-full">
        <ul
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8
        "
        >
          {articles.map((article) => (
            <li
              key={article.id}
              className="grid grid-cols-1 gap-4 cursor-pointer group"
            >
              <div className="items-center overflow-hidden -z-50 relative w-full">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full"
                />
                <span className=" bg-red mix-blend-multiply bottom-0 group-hover:translate-x-0 left-[-15%] -translate-x-full skew-x-[-15deg] absolute transition-[transform] duration-500 ease-out w-[125%] h-full z-1"></span>
              </div>
              <div className="flex gap-2 justify-start items-center">
                <p className="text-sec-gray">{article.date}</p>
                <span>.</span>
                <p className="uppercase text-riot-red">{article.category}</p>
              </div>
              <div className="w-full flex justify-start items-start h-14">
                <h3 className="text-xl uppercase text-gray">{article.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Latest;
