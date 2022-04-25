import React, { useEffect } from "react";
import "./Features.css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import phoneFeatures from "../../assets/phone-features.png";
import Feature from "./Feature";
import { FeatureListTop, FeatureListBot } from "./data";

import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <div>
      <section id="features">
        <div className="container features">
          
          <div className="features-content">
            <div className="features-left1" data-aos="fade-right">
              <img src={phoneFeatures} alt="phone" />
            </div>
            <div className="features-right1" data-aos="fade-left">
              {FeatureListTop.map((feature) => (
                <Feature
                  key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="container features">
          
          <div className="features-content">
            <div className="features-left2" data-aos="fade-right">
              {FeatureListBot.map((feature) => (
                <Feature
                  // key={feature.id}
                  icon={feature.icon}
                  heading={feature.heading}
                  text={feature.text}
                />
              ))}
            </div>
            <div className="features-right2" data-aos="fade-left">
              <img src={phoneFeatures} alt="phone" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
