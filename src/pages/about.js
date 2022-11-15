import { useState } from "react";
import Aboutbanner from "../components/aboutbanner";
import Aboutcomp from "../components/aboutcomp";
import member from "../images/member.jpg";
import member1 from "../images/member1.jpg";
import member2 from "../images/member2.jpg";
import member3 from "../images/member3.jpg";
import member4 from "../images/member4.jpg";
import member5 from "../images/member5.jpg";
import member6 from "../images/member6.jpg";

const About = () => {
  var data = [
    {
      question: "How To Fix a Problem?",
      answer:
        "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
    },
    {
      question: "How To Manage Your Website?",
      answer:
        "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
    },
    {
      question: "How To Grow Your Investiments Funds?",
      answer:
        "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
    },
    {
      question: "What Are Thos Requirements for Businness?",
      answer:
        "Far far away, behind the word mountains,Consonantia, there live the blind textsWhen she reached the first hills of the Italic Mountains Bookmarksgrove, the headline of Alphabet Village Separated they live in Bookmarksgrove right",
    },
  ];

  const [selected, setSelected] = useState(null);

  const openAnswer = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  return (
    <div className="about bg-white w-full   ">
      <Aboutbanner />
      <Aboutcomp />
      {/* Out Team */}
      <div className="ourteam ">
        <div className="bg-[#141b25] md:flex w-full pt-10 md:pr-40 md:pl-40">
          <div className="left md:w-1/3 pl-5 pr-5 md:pt-[20%]">
            <h5 className="text-white pb-3">TEAM & STAFF</h5>
            <h2 className="text-white text-4xl pb-4 font-bold ">Our Team </h2>
            <p className="text-gray-400 font-light">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country
            </p>
          </div>
          <div className="right p-10 md:w-2/3">
            <div className="cards grid gap-2 md:grid-cols-3">
              <div className="card1 hover:bg-white   rounded bg-gray-800">
                <img src={member} alt="..." className="rounded-t h-50"></img>
                <div className="details p-5">
                  <h3 className="text-xl text-white text-center">
                    Lloyd Wilson
                  </h3>
                  <h4 className="text-[14px] pt-2 text-[#6c63ff] text-center">
                    WEB DEVELOPER
                  </h4>
                  <div className="icons flex gap-3 pt-5 justify-center">
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card1 hover:bg-white   rounded bg-gray-800">
                <img src={member1} alt="..." className="rounded-t h-50"></img>
                <div className="details p-5">
                  <h3 className="text-xl text-white text-center">Lily Aline</h3>
                  <h4 className="text-[14px] pt-2 text-[#6c63ff] text-center">
                    WEB DEVELOPER
                  </h4>
                  <div className="icons flex gap-3 pt-5 justify-center">
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card1 hover:bg-white rounded bg-gray-800">
                <img src={member2} alt="..." className="rounded-t h-50"></img>
                <div className="details p-5">
                  <h3 className="text-xl text-white text-center">
                    Arthur Mark
                  </h3>
                  <h4 className="text-[14px] pt-2 text-[#6c63ff] text-center">
                    WEB DEVELOPER
                  </h4>
                  <div className="icons flex gap-3 pt-5 justify-center">
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card1 hover:bg-white   rounded bg-gray-800">
                <img src={member6} alt="..." className="rounded-t h-50"></img>
                <div className="details p-5">
                  <h3 className="text-xl text-white text-center">
                    Mellisa Shadia
                  </h3>
                  <h4 className="text-[14px] pt-2 text-[#6c63ff] text-center">
                    WEB DEVELOPER
                  </h4>
                  <div className="icons flex gap-3 pt-5 justify-center">
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card1 hover:bg-white   rounded bg-gray-800">
                <img src={member5} alt="..." className="rounded-t h-50"></img>
                <div className="details p-5">
                  <h3 className="text-xl text-white text-center">
                    Liliane Gogo
                  </h3>
                  <h4 className="text-[14px] pt-2 text-[#6c63ff] text-center">
                    WEB DEVELOPER
                  </h4>
                  <div className="icons flex gap-3 pt-5 justify-center">
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
              <div className="card1 hover:bg-white   rounded bg-gray-800">
                <img src={member4} alt="..." className="rounded-t h-50"></img>
                <div className="details p-5">
                  <h3 className="text-xl text-white text-center">Caddy Mary</h3>
                  <h4 className="text-[14px] pt-2 text-[#6c63ff] text-center">
                    WEB DEVELOPER
                  </h4>
                  <div className="icons flex gap-3 pt-5 justify-center">
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-facebook"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-twitter"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-google"></ion-icon>
                    </span>
                    <span className="text-white text-xl bg-[#6c63ff] justify-center pl-2 pr-2 pt-1 pb-0 rounded cursor-pointer">
                      <ion-icon name="logo-instagram"></ion-icon>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overview */}
      <div className="overview md:h-60">
        <div className="datas md:flex p-10 md:pl-40 md:pr-40">
          <div className="info1 md:w-1/4 flex p-5">
            <span className="bg-gray-100  p-2 text-5xl rounded-xl text-[#6c63ff]">
              <ion-icon name="newspaper-outline"></ion-icon>
            </span>
            <div className="content pl-3">
              <h1 className="text-white font-bold text-3xl pt-3">4,800</h1>
              <h4 className="uppercase text-white font-bold ">
                project completed
              </h4>
            </div>
          </div>
          <div className="info1 md:w-1/4 flex p-5">
            <span className="bg-gray-100  p-2 text-5xl rounded-xl text-[#6c63ff]">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <div className="content pl-3">
              <h1 className="text-white font-bold text-3xl pt-3">1,000</h1>
              <h4 className="uppercase text-white font-bold ">Our staff</h4>
            </div>
          </div>
          <div className="info1 md:w-1/4 flex p-5">
            <span className="bg-gray-100  p-2 text-5xl rounded-xl text-[#6c63ff]">
              <ion-icon name="desktop-outline"></ion-icon>
            </span>
            <div className="content pl-3">
              <h1 className="text-white font-bold text-3xl pt-3">300</h1>
              <h4 className="uppercase text-white font-bold ">
                services provide
              </h4>
            </div>
          </div>
          <div className="info1 md:w-1/4 flex p-5">
            <span className="bg-gray-100  p-2 text-5xl rounded-xl text-[#6c63ff]">
              <ion-icon name="call-outline"></ion-icon>
            </span>
            <div className="content pl-3">
              <h1 className="text-white font-bold text-3xl pt-3">7,300</h1>
              <h4 className="uppercase text-white font-bold ">
                happy customers
              </h4>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Question */}
      <div className="question">
        <div className="content md:pl-40 md:pr-40 p-10 md:flex">
          <div className="first md:w-1/2">
            <img src={member1} alt=".." className="rounded"></img>
            <h3 className="pt-5 pb-5 font-bold text-3xl">
              Why Choose Us for Your Next Project?
            </h3>
            <div className="cards">
              <div className="card2 shadow-lg p-5 mb-4">
                <h4 className="font-bold pb-2">Creative Ideas</h4>
                <p className="font-light text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
              <div className="card2 shadow-lg p-5 mb-4">
                <h4 className="font-bold pb-2">
                  Better Strategy with High Quality Business
                </h4>
                <p className="font-light text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
              </div>
            </div>
          </div>
          <div className="second pt-10 md:p-5 md:w-1/2">
            <h4 className="text-[#6c63ff] pb-5">FREEQUESNTLY ASK QUESTION </h4>
            <h4 className="text-2xl pb-10">Frequently Ask Question</h4>

            <div className="allquestions">
              <div className="qu1">
                {data.map((item, id) => (
                  <>
                    <button
                      key={id}
                      className="w-full bg-gray-100 p-3 mt-2 rounded text-gray-800"
                      onClick={() => openAnswer(id)}
                    >
                      <div className="justify-between w-full flex md:pr-5 md:pl-5">
                        {item.question}

                        <span className="font-bold text-xl ">
                          {selected === id ? "-" : "+"}
                        </span>
                      </div>
                    </button>
                    <div
                      className={
                        selected === id
                          ? "font-light text-gray-400 leading-8 p-3 md:pl-20"
                          : "hidden"
                      }
                    >
                      <ol>{item.answer}</ol>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testimony bg-gray-100">
        <div className="left bg-[#6c63ff] md:h-[35rem] p-5 md:w-1/2 md:pl-40 md:pt-10 md:pb-40">
          <h3 className="text-white pb-3">TESTIMONIAL</h3>
          <h1 className="text-white font-bold text-3xl">
            What Are Clients Says
          </h1>
        </div>
        <div className="right 2/3">
          <div className="cards md:flex md:gap-3 p-5 md:mt-[-25%] md:ml-40 md:absolute">
            <div className="card1 rounded shadow-lg p-5 pl-10 mb-5 md:w-80 bg-white">
              <span className="text-green-500 pb-5">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </span>
              <p className="pt-5 pb-5 leading-8 font-light text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="user flex">
                <div className="w-16 h-16 rounded-full bg-red-200">
                  <img
                    src={member}
                    alt=".."
                    className="rounded-full h-16 w-30"
                  ></img>
                </div>
                <div className="p-3">
                  <h4 className="">Lily Adam</h4>
                  <h4 className="text-[13px] uppercase text-green-500">
                    marketing manager
                  </h4>
                </div>
              </div>
            </div>
            <div className="card1 rounded shadow-lg p-5 pl-10 mb-5 md:w-80 bg-white">
              <span className="text-green-500 pb-5">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </span>
              <p className="pt-5 pb-5 leading-8 font-light text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="user flex">
                <div className="w-16 h-16 rounded-full bg-red-200">
                  <img
                    src={member2}
                    alt=".."
                    className="rounded-full h-16 w-30"
                  ></img>
                </div>
                <div className="p-3">
                  <h4 className="">Lily Adam</h4>
                  <h4 className="text-[13px] uppercase text-green-500">
                    marketing manager
                  </h4>
                </div>
              </div>
            </div>
            <div className="card1 rounded shadow-lg p-5 pl-10 mb-5 md:w-80 bg-white">
              <span className="text-green-500 pb-5">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </span>
              <p className="pt-5 pb-5 leading-8 font-light text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="user flex">
                <div className="w-16 h-16 rounded-full bg-red-200">
                  <img
                    src={member4}
                    alt=".."
                    className="rounded-full h-16 w-30"
                  ></img>
                </div>
                <div className="p-3">
                  <h4 className="">Lily Adam</h4>
                  <h4 className="text-[13px] uppercase text-green-500">
                    marketing manager
                  </h4>
                </div>
              </div>
            </div>
            <div className="card1 rounded shadow-lg p-5 pl-10 mb-5 md:w-80 bg-white">
              <span className="text-green-500 pb-5">
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star"></ion-icon>
                <ion-icon name="star-half"></ion-icon>
              </span>
              <p className="pt-5 pb-5 leading-8 font-light text-gray-500">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="user flex">
                <div className="w-16 h-16 rounded-full bg-red-200">
                  <img
                    src={member5}
                    alt=".."
                    className="rounded-full h-16 w-30"
                  ></img>
                </div>
                <div className="p-3">
                  <h4 className="">Lily Adam</h4>
                  <h4 className="text-[13px] uppercase text-green-500">
                    marketing manager
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
<>About</>;
