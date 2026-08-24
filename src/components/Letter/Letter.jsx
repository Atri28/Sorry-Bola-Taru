import { motion } from "framer-motion";
import "./Letter.css";

const Letter = () => {
  return (
    <section className="letter-section" id="letter" aria-label="Letter component">
      <div className="container">
        <motion.div
          className="letter-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          whileHover={{ scale: 1.01, y: -3 }}
        >
          <p className="letter-eyebrow">A letter I want you to read slowly</p>
          <h2 className="letter-title"></h2>
          <p className="letter-text"></p>


         

          <p className="letter-signoff"></p>
        </motion.div>
      </div>
    </section>
  );
};

export default Letter;
