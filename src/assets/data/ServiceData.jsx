// import "remixicon/fonts/remixicon.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaCity } from "react-icons/fa";
import { RiPoliceCarFill } from "react-icons/ri";
import { PiBookmarksSimpleBold } from "react-icons/pi";
import { MdMyLocation } from "react-icons/md";
import { MdConnectingAirports } from "react-icons/md";




const serviceData = [
  {
    id: 1,
    title: "City Transfer",
    icon: <FaLocationDot />,
    desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  },

  {
    id: 2,
    title: "Whole  City Tour",
    icon: <FaCity />,
    desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  },

  {
    id: 3,
    title: "Unlimited Miles Car Rental",
    icon: <RiPoliceCarFill />,
    desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  },

  {
    id: 4,
    title: "Fast & Easy Booking",
    icon: <PiBookmarksSimpleBold />,
    desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  },

  {
    id: 5,
    title: "Many Pickup Locations",
    icon: <MdMyLocation />,
    desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  },

  {
    id: 6,
    title: "Airport Transfer",
    icon: <MdConnectingAirports />,
    desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  },
];

export default serviceData;
