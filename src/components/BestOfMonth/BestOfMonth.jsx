const BestOfMonth = () => {
  return (
    <div className="mt-14">
      <div className="text-center space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#004d99]">
          Literary Highlights
        </h2>
        <p className="w-[60%] mx-auto text-xs md:text-md lg:text-lg">
          This Month's Top Author and Must-Read Books: Delve into the latest
          literary gems and the captivating works of our featured author.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex items-center gap-10 bg-[#d6d8cd] h-[350px] p-6">
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-xs md:text-sm text-[#004d99]">
              Featured Author Spotlight
            </h4>
            <h2 className="text-xl md:text-2xl lg:text-3xl">Margaret Atwood</h2>
            <p className="text-center text-[8px] lg:text-sm lg:w-[70%] mx-auto">
              Gabriel García Márquez is a landmark work of magical realism that
              chronicles the Buendía family over seven generations in the
              fictional town of Macondo.
            </p>
          </div>
          <div className="transition-transform duration-300 transform hover:scale-110">
            <img
              className="w-full"
              src="https://i.ibb.co/31SM3LX/Margaret-Atwood.png"
            />
          </div>
        </div>
        <div className="flex items-center gap-10 bg-[#6ca1b9] h-[350px] p-6">
          <div className="flex flex-col items-center space-y-3">
            <h4 className="text-xs md:text-sm text-[#004d99]">
              Featured Book Spotlight
            </h4>
            <h2 className="text-xl md:text-2xl lg:text-3xl">
              One Hundred Years..
            </h2>
            <p className="text-center text-[8px] lg:text-sm lg:w-[70%] mx-auto">
              Margaret Atwood, born on November 18, 1939, is a Canadian poet,
              novelist, literary critic, essayist, inventor, teacher, and
              environmental activist.
            </p>
          </div>
          <div className="transition-transform duration-300 transform hover:scale-110">
            <img
              className="w-full"
              src="https://i.ibb.co/VNKNS3Q/one-hundred.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestOfMonth;
