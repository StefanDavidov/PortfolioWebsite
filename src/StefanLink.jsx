import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function StefanLink({ title, content='', link='' }) {
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
    setIsHovering(true);
    };
    const handleMouseOut = () => {
    setIsHovering(false)
    };
    
    const navigate = useNavigate();


    if (content === ""){  
        return (
            <li onClick={() => {
                navigate(link);
            }}>
                <Link to={link} className="noStyleLink"> { title }</Link>
            </li>
        );      
    } else {
        return (
            
                <li onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}
                onClick={() => {
                    navigate(link);
                }}>
                    <AnimatePresence>
                        {!isHovering && (<motion.a
                        initial={{scale:0, opacity:0}}
                        animate={{scale:1.1, opacity: 1}}>
                            { title }
                        </motion.a>)}
                    </AnimatePresence>
                    <AnimatePresence>
                        {isHovering && 
                        (<motion.p className="footer-nav-background-color"
                        initial={{scale:0}}
                        animate={{scale:1}}
                        exit={{scale: 0}}>
                            <span > { title }</span>
                            <br></br>
                            { content }
                        </motion.p>)}
                    </AnimatePresence>
                </li>
        );

    }
}

{/*
import { useLocation } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

    const [goToLink, setGoToLink] = useState(false);
    const location = useLocation();

        if (goToLink) {
        return <Navigate to={link}/>
    }

    onClick {
        () => {
            setGoToLink(true);
        }
    }
*/}