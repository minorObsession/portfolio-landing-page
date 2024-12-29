function Landing() {
  return (
    <section id="landing" className="p-4 lg:p-8 text-center flex items-center ">
      <div className="flex-shrink-0 mx-2 ">
        <img
          src="../public/boci-slika.png"
          alt="Bogdan's Avatar"
          className="w-24 h-24 md:w-32 md:h-32 lg:w-48 lg:h-48 rounded-full"
        />
      </div>
      <div className="flex-1 ml-4 sm:ml-12 lg:ml-20 text-left">
        <h1 className=" text-xl md:text-2xl lg:text-4xl">Bogdan Terzic</h1>
        <p className="text-sm md:text-lg lg:text-2xl mt-1 lg:mt-3">
          Web developer passionate about creating amazing UIs
        </p>
      </div>
    </section>
  );
}

export default Landing;
