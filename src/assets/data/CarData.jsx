import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img05 from "../all-images/cars-img/offer-toyota.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/toyota-offer-2.png";
import { TbSettingsAutomation } from "react-icons/tb";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { MdOutlineBrandingWatermark } from "react-icons/md";
import { MdLocationPin } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { SlSpeedometer } from "react-icons/sl";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    auto: <TbSettingsAutomation />,
    mod: <IoLogoModelS />,
    mph: <SlSpeedometer />,
    location: <MdLocationPin />,
    seat: <MdAirlineSeatReclineExtra />,
    bra: <MdOutlineBrandingWatermark />,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model",
    price: 50,
    speed: "20kmpl",
    gps: "Navigation",
    seatType: "Seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    auto: <TbSettingsAutomation />,
    mod: <IoLogoModelS />,
    mph: <SlSpeedometer />,
    location: <MdLocationPin />,
    seat: <MdAirlineSeatReclineExtra />,
    bra: <MdOutlineBrandingWatermark />,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model",
    price: 50,
    speed: "20kmpl",
    gps: "Navigation",
    seatType: "Seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    auto: <TbSettingsAutomation />,
    mod: <IoLogoModelS />,
    mph: <SlSpeedometer />,
    location: <MdLocationPin />,
    seat: <MdAirlineSeatReclineExtra />,
    bra: <MdOutlineBrandingWatermark />,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model",
    price: 65,
    speed: "20kmpl",
    gps: "Navigation",
    seatType: "Seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 4,
    brand: "Ferrari",
    rating: 94,
    auto: <TbSettingsAutomation />,
    mod: <IoLogoModelS />,
    mph: <SlSpeedometer />,
    location: <MdLocationPin />,
    seat: <MdAirlineSeatReclineExtra />,
    bra: <MdOutlineBrandingWatermark />,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model",
    price: 45,
    speed: "20kmpl",
    gps: "Navigation",
    seatType: "Seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 5,
    brand: "Mercedes",
    rating: 119,
    auto: <TbSettingsAutomation />,
    mod: <IoLogoModelS />,
    mph: <SlSpeedometer />,
    location: <MdLocationPin />,
    seat: <MdAirlineSeatReclineExtra />,
    bra: <MdOutlineBrandingWatermark />,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model",
    price: 85,
    speed: "20kmpl",
    gps: "Navigation",
    seatType: "Seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },

  {
    id: 6,
    brand: "Audi",
    rating: 82,
    auto: <TbSettingsAutomation />,
    mod: <IoLogoModelS />,
    mph: <SlSpeedometer />,
    location: <MdLocationPin />,
    seat: <MdAirlineSeatReclineExtra />,
    bra: <MdOutlineBrandingWatermark />,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model",
    price: 50,
    speed: "20kmpl",
    gps: "Navigation",
    seatType: "Seats",
    automatic: "Automatic",
    description:
      " Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam. Dolor labore lorem no accusam sit justo sadipscing labore invidunt voluptua, amet duo et gubergren vero gubergren dolor. At diam.",
  },
];

export default carData;
