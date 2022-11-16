import { Wrapper, Status } from "@googlemaps/react-wrapper";

const Contact = () => {
  return (
    <div className="contact bg-white ">
      {/* Banner */}
      <div className="contactbanner h-24 md:h-36 pl-10 p-14 ">
        <h3 className="text-center text-gray-900  text-4xl font-bold uppercase ">
          Contact Us <span className="opacity-0 w-20">........</span>
        </h3>
      </div>
      <div className="content md:pr-60 md:pl-60">
        {/* Icons and Adderss */}
        <div className="address md:flex gap-3 p-5 md:pb-10 pt-10 md:pt-20">
          <div className="address1 rounded p-5 pt-10 md:w-1/4 shadow mb-3 md:shadow-none">
            <span className="text-center ml-28 md:ml-16 bg-[#6c63ff] p-5  rounded-full text-white text-xl ">
              <ion-icon name="location"></ion-icon>
            </span>
            <h3 className="text pt-8">
              <span className=" leading-7">Address:</span>
              <span className="text-gray-400 ">
                198 West 21th Street, Suite 721 New York NY 10016
              </span>
            </h3>
          </div>
          <div className="address1 rounded p-5 pt-10 md:w-1/4 shadow mb-3 md:shadow-none">
            <span className="text-center ml-28 md:ml-16 bg-[#6c63ff] p-5  rounded-full text-white text-xl ">
              <ion-icon name="call"></ion-icon>
            </span>
            <h3 className="text pt-8">
              <span className=" leading-7">Phone : </span>
              <span className="text-[#6c63ff] "> (+250) 787 654 212</span>
            </h3>
          </div>
          <div className="address1 rounded p-5 pt-10 md:w-1/4 shadow mb-3 md:shadow-none">
            <span className="text-center ml-28 md:ml-16 bg-[#6c63ff] p-5  rounded-full text-white text-xl ">
              <ion-icon name="send"></ion-icon>
            </span>
            <h3 className="text pt-8">
              <span className=" leading-7">Email : </span>
              <span className="text-[#6c63ff] "> richard@gmail.com</span>
            </h3>
          </div>
          <div className="address1 rounded p-5 pt-10 md:w-1/4 shadow mb-3 md:shadow-none">
            <span className="text-center ml-28 md:ml-16 bg-[#6c63ff] p-5 rounded-full text-white text-xl ">
              <ion-icon name="earth-sharp"></ion-icon>
            </span>
            <h3 className="text pt-8">
              <span className=" leading-7">Website : </span>
              <span className="text-[#6c63ff] "> proteck.com</span>
            </h3>
          </div>
        </div>

        {/* Form */}
        <div className="md:flex pb-5">
          <div className="form p-5 md:pr-10 md:h-[550px] md:pl-10  md:w-1/2 shadow-lg">
            <h1 className="pb-5 text-2xl">Contact Us</h1>
            <form>
              <div className="md:flex gap-4">
                <div className="inputgroup p-2">
                  <label className="text-[#6c69ff] uppercase text-[14px]">
                    full name <span className="text-red-500"> * </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                                      name="name"
                                      required
                    className="p-2 outline-none w-full border-b font-light mt-3 "
                  />
                </div>
                <div className="inputgroup p-2">
                  <label className="text-[#6c69ff] uppercase text-[14px]">
                    email address<span className="text-red-500"> * </span>
                  </label>
                  <input
                    type="email"
                                      placeholder="example@domain.com"
                                      required
                    name="name"
                    className="p-2 w-full outline-none border-b font-light mt-3 invalid:border-red-500"
                  />
                </div>
              </div>
              <div className="inputgroup p-2">
                <label className="text-[#6c69ff] uppercase text-[14px]">
                  subject
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="p-2 w-full outline-none border-b font-light mt-3 invalid:border-red-500"
                />
              </div>
              <div className="inputgroup p-2">
                <label className="text-[#6c69ff] uppercase text-[14px]">
                  Your Message <span className="text-red-500"> * </span>
                </label>
                <textarea
                                  placeholder="Message"
                                  required
                  name="message"
                  className="p-2 w-full border-b font-light mt-3 outline-0 "
                ></textarea>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="Send Message"
                  className="bg-[#6c69ff] text-white pb-2 cursor-pointer hover:bg-blue-600 pt-2 uppercase font-light pr-3 pl-4 rounded mt-5"
                ></input>
              </div>
            </form>
          </div>
          <div className=" map p-5 md:p-10">
            <iframe
              className="w-full md:w-[510px] md:h-[510px] h-80 shadow"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=Kigali%20-%20remera&t=&z=19&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
