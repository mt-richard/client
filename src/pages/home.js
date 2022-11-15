import img1 from '../images/img1.webp';
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpg";
import Aboutcomp from '../components/aboutcomp';
const Home = () => {
  return (
    <div>
      <div className="home w-full p-5 md:pl-10 ">
        {/* <img src={img3} alt="..." className='w-full fixed'></img> */}
        <div className="content md:w-1/2 pb-24 md:p-10">
          <h6 className="uppercase text-xl pt-5 text-gray-200">
            welcome to protech
          </h6>
          <h1 className="uppercase text-4xl md:text-6xl pt-10 font-bold text-white">
            we create website the way you want with protech
          </h1>
          <p className="font-light text-gray-50 leading-9 pt-10">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonamtia, there live the blind texts.
          </p>

          <div className="pt-10 flex">
            <button className="uppercase p-2 bg-[#6c63ff] text-white  pl-5 pr-5  rounded">
              learn more
            </button>
            <button className="uppercase ml-5 p-2 bg-gray-50 text-gray-900 pl-5 pr-5  rounded">
              view Portfolio
            </button>
          </div>
        </div>
        {/* Service page */}
      </div>
      <div className="md:h-[345px] bg-gray-100 w-full">
        <div className="services w-full md:flex justify-between md:fixed md:absolute md:mt-[-4rem]">
          <div className="w-1/4 hidden md:block"> hello</div>
          <div className="card-container  w-full p-5 md:flex">
            <div className="card1 bg-gray-50 p-3 pt-6 rounded mb-3 md:w-1/4 md:ml-4 shadow-2xl">
              <div className="icon">
                <span className="text-5xl p-4 text-[#6c63ff]">
                  <ion-icon name="desktop-outline"></ion-icon>
                </span>
              </div>
              <div className="content p-3">
                <h3 className="font-bold p-2">UX/UI Design</h3>
                <p className="font-light p-2 text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>

            <div className="ccard1 bg-gray-50 p-3 pt-6 rounded mb-3 md:w-1/4 md:ml-4 shadow-2xl">
              <div className="icon">
                <span className="text-5xl p-4 text-[#6c63ff]">
                  <ion-icon name="code-slash-outline"></ion-icon>
                </span>
              </div>
              <div className="content p-3">
                <h3 className="font-bold p-2">Development</h3>
                <p className="font-light p-2 text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>

            <div className="card1 bg-gray-50 p-3 pt-6 rounded mb-3 md:w-1/4 md:ml-4 shadow-2xl">
              <div className="icon">
                <span className="text-5xl p-4 text-[#6c63ff]">
                  <ion-icon name="logo-react"></ion-icon>
                </span>
              </div>
              <div className="content p-3">
                <h3 className="font-bold p-2">Branding</h3>
                <p className="font-light p-2 text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>

            <div className="card1 bg-gray-50 p-3 pt-6 rounded mb-3 md:w-1/4 md:ml-4 shadow-2xl">
              <div className="icon">
                <span className="text-5xl p-4 text-[#6c63ff]">
                  <ion-icon name="card-outline"></ion-icon>
                </span>
              </div>
              <div className="content p-3">
                <h3 className="font-bold p-2">Search Optimization</h3>
                <p className="font-light p-2 text-gray-500">
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Aboutcomp />
    </div>
  );
}
 
export default Home;