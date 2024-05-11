import PropTypes from "prop-types";
const BannerCard = ({ book }) => {
  const { image, name, author } = book;
  return (
    <div className="flex items-center h-[550px]">
      <div className="w-1/2 flex flex-col items-center space-y-4">
        <h1 className="text-6xl font-extrabold">{name}</h1>
        <p className="text-2xl">{author}</p>
        <button className="btn btn-lg text-xl text-white hover:text-black hover:bg-[#808080] bg-[#004d99]">
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
