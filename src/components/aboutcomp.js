import img1 from "../images/img1.webp";
import img5 from "../images/img5.jpg";
import about from "../images/about.jpg";
import about1 from "../images/about.svg";
import about2 from "../images/about2.jpg";

import team from "../images/team.svg";
import solution from "../images/solution.svg";

const Aboutcomp = () => {
  return (
    <div className="mycontent pb-14 pt-10 bg-white p-5  w-full md:flex md:pr-40 md:pl-40">
      <div className="photos  md:pl-10 md:pr-10 md:w-1/2">
        <img src={about1} alt=".." className="  rounded"></img>
        {/* <img
          src={solution}
          alt=".."
          className="absolute  ml-32 md:ml-60 rounded mt-[-41%] md:mt-[-12%] w-60 md:w-80"
        ></img> */}
        <div className="absolute bg-blue-400 w-36  pb-8 pt-8 justify-center  mt-[-105%] md:mt-[-41%] mr-20 text-white">
          <h1 className="text-white text-4xl text-center font-bold">42</h1>
          <h5 className="uppercase text-center font-thin text white">
            years of experienced
          </h5>
        </div>
      </div>
      <div className="content md:w-1/2 p-5 md:pl-10 pt-10 md:pt-20">
        <h3 className="text-[#6c63ff] pb-5 text-sm">WELCOME TO PORTECH</h3>
        <h4 className="font-bold pb-7 text-4xl">
          We Are Portech Creative Studio Agency{" "}
        </h4>
        <p className="font-light text-gray-500 pb-7 leading-7">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia.
        </p>
        <div className="mission justify-between pb-5 md:flex">
          <div className="mission1 flex">
            <img src={team} alt=".." className="w-24 "></img>
            <h3 className="p-5 font-thin">
              EXPERT <br></br>TEAM
            </h3>
          </div>
          <div className="mission1 flex">
            <img src={solution} alt=".." className="w-24"></img>
            <h3 className="p-5  font-thin">
              SOLUTION <br></br>FOR BUSINESS
            </h3>
          </div>
        </div>

        <button className="uppercase p-1 bg-[#6c63ff] text-white  pl-5 pr-5  rounded">
          GET IN TOUCH WITH US
        </button>
      </div>
    </div>
  );
};

export default Aboutcomp;
