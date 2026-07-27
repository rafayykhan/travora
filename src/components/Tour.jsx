const Tour = ({ children }) => {
  return (
    <div className="mx-24 my-16 text-[#2a2a2a] max-[850px]:mx-8">
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-5xl font-bold">Recent Trips</h1>

        <p className="mt-2">
          You can discover unique destinations using Google Maps.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 flex justify-between items-start gap-8 max-[850px]:flex-col">
        {children}
      </div>
    </div>
  );
};

export default Tour;