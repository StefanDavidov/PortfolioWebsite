import { motion } from "framer-motion";
import StefanDavidovResume from "../src/images/StefanDavidovResume.png"

export default function Resume() {
    return (
        <motion.div
        className="singularRow"
        initial={{ scale: 0.7 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "tween", duration: 1 }}
      >
        <div style={{position: 'absolute'}} ><motion.img src={StefanDavidovResume} className="resume" /></div>
        <div style={{position: 'absolute'}}>
            <a href='https://docs.google.com/document/d/1wZ6A2-xpNX6tDlVfG3A2miFQeh4xE3vpRGXYG3LCEPg/edit?usp=sharing' className="noStyleLink" style={{color:'black'}}>
                Click here to learn more
            </a>
        </div>
      </motion.div>
    );
    }