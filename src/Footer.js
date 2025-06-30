import github from "./asset/github.svg";
import linkedin from "./asset/linkedin.svg";
import whatsap from "./asset/whatsapp.svg";
import mail from "./asset/mail.svg";

const Footer = () => {
     
  return (
    <article className="footer mt-36 flex  flex-col  justify-center  items-center p-5 ">
      <p className=" pb-3 text-xl font-extrabold">Social Networks</p>
     <div className="flex">
    <a href="https://github.com/hefsijoseph/">
    <img src={github} alt="github" className=" pr-3" />
    </a>
       <a href="/">
       <img src={linkedin} alt="linkedin" className=" pr-3" />
       </a>
       <a href="https://wa.me/255693322561" target="_blank"  rel="noreferrer">
        <img src={whatsap} alt="whatsap" className=" pr-3" />
       </a>
       <a href="/">
        <img src={mail} alt="mail" className=" pr-3" />
       </a>
        </div>
     </article>
  );
};

export default Footer;
