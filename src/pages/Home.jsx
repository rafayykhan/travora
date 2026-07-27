import Destination from "../components/DestinationCard";
import Hero from "../components/Hero";
import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/5.jpg";
import Mountain4 from "../assets/8.jpg";
import Tour from "../components/Tour";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import Tourcard from "../components/TourCard";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <Hero
        cName="relative w-full h-screen"
        imgClass="w-full h-full object-cover"
        textClass="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        titleClass="text-[3rem] font-extrabold text-white"
        paraClass="text-[1.3rem] text-white pt-2 pb-8"
        buttonClass="bg-white px-8 py-4 rounded-md font-bold"
        HeroImg="https://images.unsplash.com/photo-1782199504547-aa10f961f097?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        url="/Contact"
        urlText="Travel Plan"
      />
      <Destination
        containerClass="mx-24 my-16 max-[850px]:mx-8 text-center"
        titleClass="text-5xl font-bold"
        title="Popular Destinations"
        subtitleClass="mt-2"
        subtitle="Tours give you the opportunity to see a lot, within a time frame."
        contentClass="flex items-center justify-between mt-[4.5rem] max-[850px]:flex-col-reverse max-[850px]:mt-10"
        textContainerClass="w-[45%] text-left text-[1.1rem] max-[850px]:w-full"
        destinationTitleClass="text-4xl font-bold pb-4"
        destinationTitle="Taal Volcano, Batangas"
        descriptionClass=""
        description="One of the most iconic views in Luzon, Mt. Taal boasts a volcano inside a lake inside an island. If you fancy a closer look, the hike up to the crater is a mere 45 minutes, and is easy enough for beginners. Guides will assist you most of the way, and you'll see the peculiar environment found on an active volcano, including volcanic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and then unwind with some bulalo before heading back home!"
        imageContainerClass="relative w-1/2 flex justify-between -z-10 max-[850px]:w-full max-[850px]:my-7"
        image1={Mountain1}
        image1Class="w-[49%] h-[350px] object-cover rounded-md shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] max-[850px]:h-[250px]"
        image2={Mountain2}
        image2Class="absolute right-0 top-[-10%] w-[49%] h-[350px] object-cover rounded-md shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] max-[850px]:h-[250px]"
      />

      <Destination
        containerClass="mx-24 mt-32 my-16 max-[850px]:mx-8 text-center"
        titleClass=""
        title=""
        subtitleClass=""
        subtitle=""
        contentClass="flex flex-row-reverse items-center justify-between mt-[4.5rem] max-[850px]:flex-col-reverse max-[850px]:mt-10"
        textContainerClass="w-[45%] text-left text-[1.1rem] max-[850px]:w-full"
        destinationTitleClass="text-4xl font-bold pb-4"
        destinationTitle="Mt. Daguldul, Batangas"
        descriptionClass=""
        description="If you're looking for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt. Daguldul in San Juan, Batangas. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trail where you can take a break and drink buko juice, and though the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing, well-deserved swim."
        imageContainerClass="relative w-1/2 flex justify-between -z-10 max-[850px]:w-full max-[850px]:my-7"
        image1={Mountain3}
        image1Class="w-[49%] h-[350px] object-cover rounded-md shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] max-[850px]:h-[250px]"
        image2={Mountain4}
        image2Class="absolute right-0 top-[-10%] w-[49%] h-[350px] object-cover rounded-md shadow-[-1px_1px_62px_-18px_rgba(0,0,0,0.19)] max-[850px]:h-[250px]"
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

export default Home;
