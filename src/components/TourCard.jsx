const Tourcard = ({ image, heading, text }) => {
  return (
    <div
      className="
        basis-[32%]
        flex
        flex-col
        text-left
        shadow-[0_5px_25px_2px_rgba(0,0,0,0.11)]
        rounded-[7px]
        cursor-pointer
        p-[1rem_.8rem]
        max-[850px]:basis-full
        max-[850px]:w-full
        max-[850px]:mb-6
      "
    >
      <div className="h-[200px] overflow-hidden rounded-[7px]">
        <img
          src={image}
          alt={heading}
          className="
            w-full
            h-full
            object-cover
            rounded-[7px]
            transition-transform
            duration-300
            ease-in-out
            hover:scale-125
          "
        />
      </div>

      <h4 className="text-[1.3rem] font-bold pt-4 pb-2">
        {heading}
      </h4>

      <p className="text-[0.95rem] leading-8 text-gray-600">
        {text}
      </p>
    </div>
  );
};

export default Tourcard;