function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img src={props.HeroImg} alt="HeroImg" className={props.imgClass} />
      </div>

      <div className={props.textClass}>
        <h1 className={props.titleClass}>{props.title}</h1>

        <p className={props.paraClass}>{props.text}</p>

        <a href={props.url} className={props.buttonClass}>
          {props.urlText}
        </a>
      </div>
    </>
  );
}

export default Hero;
