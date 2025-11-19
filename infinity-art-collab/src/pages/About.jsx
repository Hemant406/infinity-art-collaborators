import React from "react";
import { Link } from "react-router-dom";
import { Folder, MapPinHouse, Phone } from "lucide-react";

const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-20 py-10 space-y-6">

      {/* Categories */}
      <div>
        <h1 className="text-3xl sm:text-4xl">Categories :</h1>

        <p className="text-lg sm:text-xl text-gray-700 font-semibold mt-2 flex items-center gap-2">
          <Folder className="w-6 h-6" />
          Performing Arts
        </p>
      </div>

      {/* Contact Info */}
      <div>
        <h1 className="text-3xl sm:text-4xl">Contact Info :</h1>

        <div className="flex items-start gap-3 mt-3 flex-wrap">
          <MapPinHouse className="w-6 h-6 mt-1" />

          <div className="max-w-2xl">
            <h4 className="text-lg sm:text-xl text-gray-700 font-bold">
              Address :
            </h4>
            <p className="text-gray-700 font-medium text-base sm:text-lg leading-relaxed">
              70-H Geetmala Building, Central Avenue Road, Above Geeta Bhavan
              Restaurant, near Dr. Ambedkar Garden, Chembur, Mumbai, India,
              400071
            </p>
          </div>
        </div>

        {/* Mobile */}
        <p className="text-lg sm:text-xl text-gray-700 mt-4 flex items-center gap-2">
          <Phone className="w-5 h-5" />
          <span className="font-bold">Mobile No. :</span>
          <span className="font-medium">7977216460</span>
        </p>
      </div>

      {/* Social Links */}
      <div>
        <h1 className="text-3xl sm:text-4xl mt-3">Websites and social links :</h1>

        <p className="flex items-center gap-3 mt-3 text-lg sm:text-xl">
          <i className="ri-whatsapp-line text-2xl text-green-600"></i>

          <Link
            to="https://wa.me/917977216460"
            target="_blank"
            className="text-gray-700 font-semibold hover:underline"
          >
            WhatsApp
          </Link>
        </p>
      </div>

    </div>
  );
};

export default About;
