import PropTypes from "prop-types";
const BannerCard = ({ book }) => {
  const { image, name, author } = book;
  return (
    <div className="flex items-center h-[250px] md:h-[400px] lg:h-[550px]">
      <div className="w-1/2 flex flex-col items-center space-y-4">
        <h1 className="text-xl md:text-3xl lg:text-6xl font-extrabold">
          {name}
        </h1>
        <p className=" text-sm md:text-xl lg:text-2xl">{author}</p>
        <button className="btn btn-sm md:btn-md lg:btn-lg text-xs md:text-md lg:text-xl text-white hover:text-black hover:bg-[#808080] bg-[#004d99]">
          Borrow Now
        </button>
      </div>
      <div className="w-1/2">
        <img className="w-[70%]" src={image} alt={name} />
      </div>
    </div>
  );
};

BannerCard.propTypes = {
  book: PropTypes.object,
};

export default BannerCard;
