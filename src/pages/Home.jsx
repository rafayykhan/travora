import Hero from "../components/Hero";

function Home() {
  return (
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
      url="/"
      urlText="Travel Plan"
    />
  );
}

export default Home;
