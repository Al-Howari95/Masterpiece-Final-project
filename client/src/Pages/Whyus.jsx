import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import Button from "../Component/Button";

const Why = () => {



    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


  return (
    <div>
      <>
        {/* component */}
        <section className=" bg-blue-500ray-50">
          <div className="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
            <div className="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
              <div className=" absolute  top-0 -right-1/4 z-0  opacity-10 ">
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  className="w-96 z-0  h-full    object-fill fill-g text-g"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
                  />
                </svg>
              </div>
              <div className=" absolute -bottom-0 -left-1/4 z-0  opacity-10 ">

              </div>
              <div  className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
                <div className="max-w-xl mx-auto text-center">
                  <div className="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                    <p class="text-4xl font-semibold tracking-widest text-g uppercase text-center">
                      Why You Should Choose <span className="text-blue-500">CleanWave</span>®
                    </p>
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white"></p>
                </div>
                <div id="why_us" className="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
                  <Link 
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]"
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2   "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Professional and Trained Cleaners
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white  ">
                        Our staff is highly trained, professional and
                        experienced in providing first class cleaning services.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF] "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Reliable Scheduling
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Our booking system is easy to use and provides reliable
                        scheduling options for customers, allowing them to
                        choose convenient cleaning times.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF] "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Blue Cleaning Products
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We use environmentally friendly, non-toxic cleaning
                        products.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Quality Assurance Guarantee{" "}
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        we are unwavering in our commitment to delivering
                        exceptional cleaning services, and we stand behind the
                        quality of our work with a satisfaction guarantee.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Transparent Pricing
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        we prioritize transparency and honesty in all our. Our
                        commitment to transparency means there are no hidden
                        fees or surprise charges – what you see is what you get.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Advanced Cleaning Equipment
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We use the latest cleaning equipment and techniques to
                        ensure comprehensive and effective cleaning results.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]"
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Customer Reviews
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Provide positive feedback on existing services from
                        satisfied customers to build credibility and trust in
                        your cleaning services.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000 hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF] "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Secure Online Payments
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Our online payment system is secure and convenient for
                        you, making the entire booking and payment process
                        hassle-free.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Pet-Friendly Cleaning
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We emphasize our commitment to pet-friendly cleaning
                        practices, ensuring the safety and well-being of our
                        customers' furry friends.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Timely Arrival and Completion{" "}
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        Assure customers that your cleaning professionals are
                        punctual and adhere to scheduled appointment times,
                        respecting their time and commitments.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Quality Control Inspections
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We carry out regular quality control inspections to
                        ensure we deliver consistently high quality cleaning
                        services and address any potential issues promptly.
                      </p>
                    </div>
                  </Link>
                  <Link
                    to="/BookNow"
                    className="transition-all  duration-1000  hover:bg-blue-400  hover:shadow-xl m-2 p-4 relative z-40 group border shadow-lg bg-[#F8F8FF]  "
                  >
                    <div className=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                    <div className="py-2 px-9 relative  ">
                      <h3 className="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                        Post-Service Follow-Up
                      </h3>
                      <p className="mt-4 text-base text-gray-600 group-hover:text-white">
                        We are committed to customer satisfaction by conducting
                        post-service follow-ups to collect feedback and address
                        any concerns or areas for improvement.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
      <Button/>

    </div>
  );
};

export default Why;