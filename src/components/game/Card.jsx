import PropTypes from "prop-types";

function Card({ name, role, country = "un", image, onClick }) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-4 justify-center items-center border-riot-red border-2 rounded-lg p-2 bg-darkBlue hover:shadow-2xl hover:drop-shadow-md shadow-black cursor-pointer hover:scale-105 transition-[scale] duration-300 ease-in-out"
    >
      <div className="flex justify-center items-center">
        <img src={image} alt={name} className="w-48 sm:w-56 md:w-64" />
      </div>
      <div>
        <img
          src={`https://flagcdn.com/${country.toLowerCase()}.svg`}
          className="w-12 sm:w-16"
          alt={country}
        />
      </div>
      <div>
        <p className="text-riot-red uppercase text-3xl sm:text-4xl md:text-5xl text-center font-bold">
          {name}
        </p>
        <p className="text-sec-gray text-xl sm:text-2xl md:text-3xl text-center uppercase font-bold">
          {role}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  country: PropTypes.string,
  image: PropTypes.string,
  onClick: PropTypes.func,
};

export default Card;
