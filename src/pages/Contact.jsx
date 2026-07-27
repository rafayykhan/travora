import Hero from "../components/Hero";
import AboutImg from "../assets/2.jpg";

function Contact() {
  return (
    <Hero
      cName="relative w-full h-[70vh]"
      imgClass="w-full h-full object-cover"
      textClass="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
      titleClass="text-[3rem] font-extrabold text-white "
      paraClass="hidden"
      buttonClass="hidden"
      HeroImg={AboutImg}
      title="Contact"
    />
  );
}

export default Contact;
