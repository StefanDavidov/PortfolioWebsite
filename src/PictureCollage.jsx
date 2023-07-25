import PictureCollageValues from "./PictureCollageValues";
import { motion } from "framer-motion";
import PictureCollageComponent from "./PictureCollageComponent";

export default function PictureCollage() {
  {
    /*return (
        <PictureCollageComponent imgSrc={PictureCollageValues[0].src} imgClassName='img1'>
            Loren Esplium
        </PictureCollageComponent>
    ); */
  }

  /*return (
    <div className="center">
      <div className="collageContainer" style={{gridTemplateColumns: 'repeat(8, 1fr)'}}>
        
        {PictureCollageValues.map((element) => {
          return <img src={element.src} className="collageImage" style={{gridColumn: (element.count / element.count + 2)}}/>;
        })}
      </div>
    </div>
    );*/

  return (
    <PictureCollageComponent imgSrcs={PictureCollageValues} >
      Hover over each picture to zoom in and read a little more
    </PictureCollageComponent>
    /*<div className="center">
      <div className="practice">
        <motion.img
          whileHover={{ scale: 2 }}
          src={PictureCollageValues[0].src}
          className="img1"
        />
        <motion.img
          whileHover={{ scale: 2 }}
          src={PictureCollageValues[1].src}
          className="img2"
        />
        <motion.img
          whileHover={{ scale: 2 }}
          src={PictureCollageValues[2].src}
          className="img3"
        />
        <motion.img
          whileHover={{ scale: 2 }}
          src={PictureCollageValues[3].src}
          className="img4"
        />
      </div>
    </div>*/
  );
}
