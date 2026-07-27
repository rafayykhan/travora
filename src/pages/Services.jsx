import Hero from "../components/Hero";
import AboutImg from "../assets/c.jpg";
import Tourcard from "../components/TourCard";
import Footer from "../components/Footer";
import Tour from "../components/Tour";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
function Services() {
  return (
    <>
      <Hero
        cName="relative w-full h-[70vh]"
        imgClass="w-full h-full object-cover"
        textClass="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        titleClass="text-[3rem] font-extrabold text-white "
        paraClass="hidden"
        buttonClass="hidden"
        HeroImg={AboutImg}
        title="Services"
      />

       <Tour>
      
        <Tourcard
          image={Trip1}
          heading="Trip in Indonesia"
          text="Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea."
        />

        <Tourcard
          image={Trip2}
          heading="Trip in Malaysia"
          text="Malaysia is a Southeast Asian country occupying parts of the Malay Peninsula and the island of Borneo. It's known for its beaches, rainforests and mix of Malay, Chinese, Indian and European cultural influences."
        />

        <Tourcard
          image={Trip3}
          heading="Trip in France"
          text="France, in Western Europe, encompasses medieval cities, alpine villages and Mediterranean beaches. Paris, its capital, is famed for its fashion houses, classical art museums including the Louvre and monuments like the Eiffel Tower."
        />
      </Tour>
      <Footer />
    </>
  );
}

export default Services;
