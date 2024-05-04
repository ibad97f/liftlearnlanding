import "../App.css";

import header from "../assets/banner.png";
import logo from "../assets/logo.png";
import React from "react";


function Home() {
  return (
    <>
      <div class="main-container">
        <section class="main body-font">
          <div class=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center justify-center">
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#ffffff]">
                Lift & Learn
              </h1>
              <p class="mb-8 leading-relaxed text-[#ffffff]">
                Welcome to Lift and Learn Fitness, your go-to app for building
                muscle and achieving your fitness dreams. With a variety of
                tailored workout plans, detailed exercise tutorials, and
                progress tracking features, you'll have everything you need to
                sculpt your ideal physique. Join our vibrant community of
                fitness enthusiasts, and let's embark on this journey to
                strength and vitality together. Download Lift and Learn Fitness
                now and unleash the power within you!
              </p>

              <div class="flex lg:flex-row md:flex-col">
                <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 512 512"
                  >
                    <path d="M99.617 8.057a50.191 50.191 0 00-38.815-6.713l230.932 230.933 74.846-74.846L99.617 8.057zM32.139 20.116c-6.441 8.563-10.148 19.077-10.148 30.199v411.358c0 11.123 3.708 21.636 10.148 30.199l235.877-235.877L32.139 20.116zM464.261 212.087l-67.266-37.637-81.544 81.544 81.548 81.548 67.273-37.64c16.117-9.03 25.738-25.442 25.738-43.908s-9.621-34.877-25.749-43.907zM291.733 279.711L60.815 510.629c3.786.891 7.639 1.371 11.492 1.371a50.275 50.275 0 0027.31-8.07l266.965-149.372-74.849-74.847z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-600 mb-1">GET IT ON</span>
                    <span class="title-font font-medium">Google Play</span>
                  </span>
                </button>
                <button class="bg-gray-100 inline-flex py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    class="w-6 h-6"
                    viewBox="0 0 305 305"
                  >
                    <path d="M40.74 112.12c-25.79 44.74-9.4 112.65 19.12 153.82C74.09 286.52 88.5 305 108.24 305c.37 0 .74 0 1.13-.02 9.27-.37 15.97-3.23 22.45-5.99 7.27-3.1 14.8-6.3 26.6-6.3 11.22 0 18.39 3.1 25.31 6.1 6.83 2.95 13.87 6 24.26 5.81 22.23-.41 35.88-20.35 47.92-37.94a168.18 168.18 0 0021-43l.09-.28a2.5 2.5 0 00-1.33-3.06l-.18-.08c-3.92-1.6-38.26-16.84-38.62-58.36-.34-33.74 25.76-51.6 31-54.84l.24-.15a2.5 2.5 0 00.7-3.51c-18-26.37-45.62-30.34-56.73-30.82a50.04 50.04 0 00-4.95-.24c-13.06 0-25.56 4.93-35.61 8.9-6.94 2.73-12.93 5.09-17.06 5.09-4.64 0-10.67-2.4-17.65-5.16-9.33-3.7-19.9-7.9-31.1-7.9l-.79.01c-26.03.38-50.62 15.27-64.18 38.86z"></path>
                    <path d="M212.1 0c-15.76.64-34.67 10.35-45.97 23.58-9.6 11.13-19 29.68-16.52 48.38a2.5 2.5 0 002.29 2.17c1.06.08 2.15.12 3.23.12 15.41 0 32.04-8.52 43.4-22.25 11.94-14.5 17.99-33.1 16.16-49.77A2.52 2.52 0 00212.1 0z"></path>
                  </svg>
                  <span class="ml-4 flex items-start flex-col leading-none">
                    <span class="text-xs text-gray-600 mb-1">
                      Download on the
                    </span>
                    <span class="title-font font-medium">App Store</span>
                  </span>
                </button>
              </div>
              <div class="flex gap-4 mt-4">
                <i class="fa-brands fa-facebook text-[#ffffff] text-[20px]"></i>
                <i class="fa-brands fa-instagram text-[#ffffff] text-[20px]"></i>
                <i class="fa-brands fa-github text-[#ffffff] text-[20px]"></i>
                <i class="fa-brands fa-linkedin text-[#ffffff] text-[20px]"></i>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img class="object-cover object-center rounded" src={header} />
            </div>
          </div>
        </section>
        <section class="body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2AA7DF]">
                Get usefull Recipies
              </h1>
              <ul class="sec-1-list my-8 text-[#393939]">
                <li>
                  Offer a variety of recipes for breakfast, lunch, dinner, and
                  snacks that are balanced in macronutrients (protein,
                  carbohydrates, and fats) and rich in micronutrients (vitamins
                  and minerals).
                </li>
                <li>
                  Provide nutritional information for each recipe, including
                  calories, protein, carbohydrates, fats, fiber, vitamins, and
                  minerals. This empowers users to make informed decisions about
                  their food choices and track their daily intake.
                </li>
                <li>
                  Curate meal plans based on specific fitness goals such as
                  weight loss, muscle gain, or maintenance.
                </li>
              </ul>
            </div>

            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded w-full h-auto md:h-full md:w-auto"
                src="https://images.unsplash.com/photo-1483721310020-03333e577078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zml0bmVzcyUyMGNlbnRlciUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
          </div>
        </section>
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img
                class="object-cover object-center rounded"
                src="https://plus.unsplash.com/premium_photo-1685202713512-5442057c5e77?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zml0bmVzcyUyMGNlbnRlciUyMHBuZ3xlbnwwfHwwfHx8MA%3D%3D"
              />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#2AA7DF]">
                Get your daily routine <br class="hidden lg:inline-block" />
                and fitness plans
              </h1>
              <ul class="sec-1-list my-8 text-[#393939]">
                <li>
                  Engage in a morning workout routine such as a brisk walk,
                  yoga, or a quick gym session
                </li>
                <li>
                  Plan and enjoy balanced meals throughout the day to sustain
                  energy levels and support overall health.
                </li>
                <li>
                  Take short breaks during work or study sessions to stretch and
                  move, promoting circulation and reducing sedentary behavior.
                </li>
                <li>
                  Wind down in the evening with relaxation techniques to
                  facilitate restful sleep and stress management.
                </li>
                <li>
                  Structure workouts to gradually increase intensity and
                  challenge,{" "}
                </li>
                <li>
                  Incorporate a mix of cardio, strength training, flexibility,
                  and balance{" "}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="bg-[#393939]">
          <div class="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-[#2AA7DF]">
              <img src={logo} class="w-[40px]" alt="" />
              <span class="ml-3 text-xl">Lift & Learn</span>
            </a>
            <p class="text-sm text-[#ffffff] sm:ml-6 sm:mt-0 mt-4">
              © 2022 Lift & Learn
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a class="text-[#FFFFFF]">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-[#FFFFFF]">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-[#FFFFFF]">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-[#FFFFFF]">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
