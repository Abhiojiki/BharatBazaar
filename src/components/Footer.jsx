import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaCcPaypal,
  FaInstagramSquare,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiVisaFill } from "react-icons/ri";

const Footer = () => {
  const sections = [
    { title: "Company", items: ["About", "Careers", "Press", "Blog"] },
    { title: "Help", items: ["Support", "FAQ", "Contact", "Privacy"] },
    {
      title: "FAQ",
      items: ["Shipping", "Returns", "Order Status", "Payment Options"],
    },
    {
      title: "Resources",
      items: ["Documentation", "API", "Community", "Guides"],
    },
  ];

  return (
    <div className=" w-full pt-5 ">
      <div className=" mx-auto px-5  md:px-2 ">
       
          <div className="social mb-5 sm:mb-0">
            <div className="text-2xl font-extrabold uppercase mb-3">
              Bharat Bazzar
            </div>
            <div className="text-slate-500 mb-5">
              We have products for all your needs from dressing to makeup. All
              at reasonable rates.
            </div>
            <div className="flex gap-x-4 text-2xl ">
              <FaXTwitter />
              <FaFacebook />
              <FaInstagramSquare />
              <FaGithub />
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Solutions
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Marketing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Analytics
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Commerce
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Support
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      API Status
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Jobs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Press
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Partners
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Claim
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-gray-600 hover:text-gray-900"
                    >
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* <div className="flex flex-wrap justify-between w-full sm:w-auto">
            <div className="grid grid-cols-2 gap-5">
              {sections.map((section, index) => (
                <div key={index} className="mb-5 sm:mb-0 sm:ml-10 pb-5">
                  <div className="text-lg tracking-widest font-semibold uppercase mb-3">
                    {section.title}
                  </div>
                  <ul className="text-sm text-slate-800 space-y-2">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div> */}
       
        <div className="border-b-2 text-slate-500 w-full my-7"></div>
        <div className="flex flex-col items-center mb-3">
          <div className="mb-3">
            BharatBazzar@ 2002-2024. All Rights Reserved.
          </div>
          <div className="flex gap-x-3 text-4xl">
            <RiVisaFill />
            <FaCcPaypal />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
