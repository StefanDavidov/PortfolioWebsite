import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
export default function PictureCollageComponent({
  imgSrcs /*array*/,
  children,
}) {
  const [isHovering, setIsHovering] = useState(0);

  const handleMouseOver = (count) => {
    setIsHovering(count);
  };
  const handleMouseOut = () => {
    setIsHovering(0);
  };
  {
    /*or is the best way to do it make the big
     box one div ocntainer and arage the pictures 
     so that they all stay on the left side of the 
     grid and the content on the right side? */
  }
  return (
    <div className="pictureCollageContainer">
      <div className="gridContainer">
        {imgSrcs.map((element) => {
          return (
            <motion.img
              src={element.src}
              className={element.style}
              onMouseOver={() => {
                handleMouseOver(element.count);
              }}
              onMouseOut={handleMouseOut}
              whileHover={{ scale: 1.5 }}
              initial={{ scale: 1 }}
            />
          );
        })}
      </div>
      <div style={{ width: "400px" }}>
        <comp >
          {isHovering === 0 && (
            <motion.p
            key={0}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          >
              {children}
            </motion.p>
          )}
          {imgSrcs.map((element) => {
            return (
              isHovering === element.count && (
                <motion.p
                  key={element.count}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  {element.pictureText}
                </motion.p>
              )
            );
          })}
        </comp>
        
      </div>
    </div>
  );
}

function comp({ isHovering, children }) {
  const x = useMotionValue(0);
  const [ref, animate] = useAnimate();
  useEffect(() => {
    if (x.isAnimating()) {
      x.jump(0);
      animate(x, 1);
    } else {
      const exitAnimation = animate(x, 0);
      exitAnimation.then(() => {
        animate(x, 1);
      });
    }
  }, [isHovering]);
  return <motion.p style={{ ref:{ref}, scale: x, opacity: x }}>{children}</motion.p>;
}
/* 
<div style={{ borderStyle: "solid", width: "400px" }}>
        <AnimatePresence mode="wait">
          {isHovering === 0 && (
            <motion.p
              key={0}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            >
              {children}
            </motion.p>
          )}
          {imgSrcs.map((element) => {
            return (
              isHovering === element.count && (
                <motion.p
                  key={element.count}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                >
                  is hovering value {isHovering} element.count value
                  {element.pictureText}
                </motion.p>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
*/