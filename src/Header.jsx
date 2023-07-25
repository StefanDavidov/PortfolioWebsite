import Links from "./Links";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";

export default function Header({ title }) {
    return (
     <AnimatePresence initial={false}>
        <motion.div className="container"
        initial={{ y: "-80%", opacity: 0}}
        whileInView={{ y: 0, opacity: 1 }}
        
        >
            {/*
            Maybe add a picture to the background
            */}
            <Links style="header-nav"/>
            <header className="">
            {/*
            Try to use Path on framer motion to
            animate the S in stefan
            Also try to animate that hover on stefan
            moves stefan to the side and shows soical
            buttons to click and navigate to those 
            pages
            */}
            <h1>{title}</h1>
            </header>
            
        </motion.div>
      </AnimatePresence>
    );
  }