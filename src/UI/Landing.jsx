function Landing() {
  return (
    <section id="landing" className="p-4 lg:p-8 text-center flex items-center ">
      <div className="flex-1 ml-4 sm:ml-12 lg:ml-20 text-left">
        <h1 className=" text-xl md:text-2xl lg:text-4xl">Bogdan Terzic</h1>
        <p className="text-sm md:text-xl lg:text-2xl mt-1 lg:mt-3">
          Web developer passionate about creating amazing UIs
        </p>
      </div>
      <div className="flex-shrink-0 mx-2 ">
        <img
          src="../public/boci-slika.png"
          alt="Bogdan's Avatar"
          className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full"
        />
      </div>
    </section>
  );
}

export default Landing;
