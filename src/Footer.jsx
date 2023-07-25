import ContactForm from "./ContactForm";
import LinksExtended from "./LinksExtended";
import LinkedinBadge from "./linkedin";
import { motion } from "framer-motion";


export default function Footer() {
  {/* Make it so that each title is underlined nicey
 connect with me works just uncomment the code under 
.badge h3. The other 2 are bugged 
Might work with text-decoration: underline
in css*/}
    return (
    <motion.footer className="footer"
    initial={{ y: "80%", opacity: 0, }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ type: "tween", duration: 1}}>
      <section className="container-footer">
      <div className="badge">
        <h3>Connect With Me!</h3>
          <LinkedinBadge /> 
          
        </div>
        <div className="quickLinks">
          <h3>Quick Links</h3>  
          
          
          <LinksExtended style="footer-nav" />
        </div>
        <div className="contactMe">
          <h3>Contact me</h3>
          <ContactForm />
          {/* try to make the submite be more clean */}
        </div>
        </section>
    </motion.footer>
    
    );
  }