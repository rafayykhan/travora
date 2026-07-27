function Hero(props) {
  return (
    <>
      <div className={props.cName}>
        <img
          src={props.HeroImg}
          alt="HeroImg"
        />
      </div>

      <div className = "hero-text">
        <h1>
            {props.title}
        </h1>
        <p>
            {props.text}
        </p>
        <a href="/"> Travel Plan</a>
      </div>
    </>
  );
}

export default Hero;
