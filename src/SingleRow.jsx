import { motion } from "framer-motion";

export default function SingularRow({ text, imgSource, className='batmanHill' }) {
    return (
      <motion.div
        className="singularRow"
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <section>
          <p> {text} </p>
        </section>
        <motion.img src={imgSource} className={className} />
      </motion.div>
    );
  }