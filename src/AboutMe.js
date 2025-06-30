const AboutMe = () => {
  return (
    <section >
       <h2 className="text-2xl font-extrabold mb-8 text-center">About Me</h2>
      <div className="grid md:grid-cols-3 gap-2">
      <article className="aboutme p-5">
       
      <p className="text-xl font-bold pb-3 ">Brief Intro:</p>
       <p>
         Hello, I'm Hefsi Joseph Chiluka. Web Developer I build websites and
         apps that are easy to use and work well. I live in Arusha, Tanzania.
       </p>
       <p className="mt-2">
         I started making websites and apps because I was curious how things on
         the internet worked. Soon, I really loved coding and design. I enjoy
         fixing problems and using technology to make new things.
       </p>
     </article>
     <ul className="aboutme p-5">
     <p className="text-xl font-bold pb-3">Soft Skills:</p> 
       <li>
        Attention to
         details, Problem-Solving, Team Collaboration, Communication.
       </li>
       <p>
         I'm always eager to take on new challenges and contribute my skills to
         innovative projects where I can continue to learn and grow.
       </p>
     </ul>
     <ul className="aboutme p-5">
       <p className="text-xl font-bold pb-3">Technical Skills:</p>
       <ul>
         <li>
          <p>Frontend:</p>
          <p>  HTML/HTML5, CSS/CSS3, Javascript, Reactjs,</p>
          <p>CSS Framework: <span>Tailwind CSS,</span> <span>Bootstrap5</span></p>
           <p>Backend: <span>PHP ( Laravel )</span></p>
           <p>Database: <span>MYSQL</span></p>
      
            <p>Collaboration Tool: <span> Git, Github</span></p>
         </li>
         <li className="my-4">
           <span className="text-xl font-bold">Dev Tools: </span>VS Code
         </li>
       </ul>
     </ul>
      </div>
    
   
    </section>
  );
};

export default AboutMe;
