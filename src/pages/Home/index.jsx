import "./home.css";
import Carousel from "../../components/Carousel";
import Combos from "../../components/Combos";
import Events from "../Events";
import TextIntroduction from "../../components/TextIntroduction";
import Location from "../Location";
import Menu from "../Menu";
import Contacts from "../Contacts";
import Footer from "../../components/Footer";

import Aos from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <main>
      <Carousel />
      <Combos />
      <TextIntroduction />
      <div className="space"></div>
      <Menu />
      <div className="space"></div>
      <Events />
      <div className="space"></div>
      <Location />
      <div className="space"></div>
      <Contacts />
      <div className="space"></div>
      <Footer />
    </main>
  );
}
