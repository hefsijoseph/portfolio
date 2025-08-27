// home 
const Home = () => {
  return (
    <article className="home grid md:grid-cols-2 justify-items-center align-items-center">
      <div className="wrapper">
      <img src="asset/img1.jpg" alt="computer programming" className="w-3/4 rounded-md ml-7 img1" />
      <div className="appear-on-top-image w-3/4 rounded-md ml-7"></div>
      </div>
     <div className="mt-8">
        <h2 className="text-2xl mb-3 font-bold text-[#83b38f] ml-7">Introduction</h2>
        <p className="text-pretty">
          Creative Web Developer Building Impactful Experiences, Passionate
          about computer programming, and using knowledge and skills to provide
          solutions. Welcome to my professional portfolio! I'm Hefsi Joseph
          Chiluka, and this space showcases my journey, skills, and projects,
          reflecting my commitment to the field.Thank you for visiting; I invite
          you to explore my work and connect.
        </p>
      </div>
    </article>
  );
};

export default Home;
//end home
