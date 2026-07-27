const Destination = (props) => {
  return (
    <div className={props.containerClass}>
      <h1 className={props.titleClass}>{props.title}</h1>

      <p className={props.subtitleClass}>{props.subtitle}</p>

      <div className={props.contentClass}>
        {/* Text */}
        <div className={props.textContainerClass}>
          <h2 className={props.destinationTitleClass}>
            {props.destinationTitle}
          </h2>

          <p className={props.descriptionClass}>{props.description}</p>
        </div>

        {/* Images */}
        <div className={props.imageContainerClass}>
          <img
            src={props.image1}
            alt="Destination"
            className={props.image1Class}
          />

          <img
            src={props.image2}
            alt="Destination"
            className={props.image2Class}
          />
        </div>
      </div>
    </div>
  );
};

export default Destination;
