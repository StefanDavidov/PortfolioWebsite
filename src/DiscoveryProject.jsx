import Header from "./Header";
import Footer from "./Footer";
import SingularRow from "./SingleRow";
import Schematic from "../src/images/Schematic.png";
import ProjectPic1 from "../src/images/ProjectPic1.png";
import ProjectPic2 from "../src/images/ProjectPic2.png";
import ProjectWork from "../src/images/ProjectWork.png";
import Gear from "../src/images/Gear.png";

export default function DiscoveryProject() {
  
  return (
    <>
    {document.body.style.overflow = ""}
    <Header title="Sensor Based Platform"/>
    <InfoAboutProject />
    <Footer />
    </>
  );
}

function InfoAboutProject() {
  return (
    <div className="midSection">
      <SingularRow
        text="The first task I had for my project was to draw the schematics and 
        decide how large I wanted it to be. I began to draw the project up from 
        different angles to best understand where each part would go, and how the 
        parts would fit and interact with one another. The initial design and the 
        final design are not the same as I ended up making multiple design changes 
        throughout the production that would make implementation run smoother. Another 
        difference from the start and the end project is that I initially expected 
        there to be side walls on the platform but realized I would not be able to 
        implement that because of the extra weight it added. Too much weight coming 
        from the shoes and the platform was a problem due to the strength and number 
        of stepper motors I was using to raise the platform. "
        imgSource={Schematic}
        className="resume"
      />
      <SingularRow 
        text="Here you can see me soldering one of my boards and this was a first time 
        experience for me. I went to the senior design room and I asked Jacob for help
        and he was glad to assist me in soldering for the first time. I put on my 
        protective glasses and began to go to work. Looking back on it, soldering was much
        easier than it looked but it was very fun and exciting to try. Also it put some
        sort of pressure on me while doing it because the better I was able to solder
        he board, the easier it was going to be for me to connect it to the breadboard
        and wires later. Also another part of the pressure came from that if I messed
        up I was going to have to melt off the solder and desolder at a later time
        because I came in half an hour before close and did not want to have to make
        someone stay late to help me fix my own mistake."
        imgSource={ProjectWork}
        className="resume"
      />
      <SingularRow 
        text="Here you can see the project in its current stage. I have finished making
        all of the logic of the project and the motor functions the way I want it to.
        If the sensor senses something of a certain distance from it then it tells the
        motor to start spinning. This spinning will then cause the gears to turn and
        raise the platform to a certain distance, putting the shoes on the shelf. An
        extension to this project I am currently looking into is to see if it is possible
        to make the same motor power a pole that would push the shoes off of the platform
        and onto the shelf. Once the shoes are off this would trigger the motor to spin
        backwards, and the platform to go downwards to its original rest position."
        imgSource={ProjectPic1}
        className="resume"
      />
      <SingularRow 
        text="Finally here you can see a picture of what the cad currently looks like.
        I am attempting to make a gear and platform that can be 3d printed. Once I make
        it and print it I will attach it to the motor to see if the motor can raise
        the platform. I suspect that the motor will not be able to raise the platform.
        Because of this I already have a couple ideas. First idea to fix it would be to 
        add an additional motor. I would have to change my print up a little bit to be able 
        to have 2 platforms for the motor, but besides that this shouldn’t be a big problem. 
        The other idea would be to get a larger motor and then see if that would be able to 
        raise the platform."
        imgSource={Gear}
        className="gear"
      />
    </div>
    
  );
}