import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        {/* left side */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "ease-in",
              }}
            >
             Real estate 
              <br />
              tokenisation <br />
              
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des">
            <span>
            Real estate tokenisation is the process of representing ownership of real-world properties as digital tokens on a blockchain. These tokens can represent full or fractional ownership, allowing investors to buy, sell, or trade property interests much like stocks or cryptocurrencies.
            </span>
            <span>
              
            </span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>$
                <CountUp start={8800} end={326} duration={4} /> <span>B+</span>
              </span>
              <span className="secondaryText">global PropTech
              market by 2030 </span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={45} duration={4} /> <span>%</span>
              </span>
              <span className="secondaryText">Growing At CAGR</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp end={80} /> <span>%</span>
              </span>
              <span className="secondaryText">  STOs were compliant with SEC or EU regulations.</span>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            className="image-container"
          >
            <img src="./r5.jpg" alt="houses" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
