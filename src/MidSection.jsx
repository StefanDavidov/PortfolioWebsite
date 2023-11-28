import batmanHill from "../src/images/batmanHill.png";
import basketballPhoto from "../src/images/basketballPhoto.png";
import familyPicture from "../src/images/familyPicture.png";
import PicWTesla from "../src/images/PicWTesla.png";
import SingularRow from "./SingleRow";
{
  /*
Change the images to the right to be new images and
make the text be benefical to the website
*/
}
export default function MidSection() {
  return (
    <div className="midSection">
      <SingularRow
        text="I am Stefan Davidov. Currently I am a freshman at Georgia 
        Tech majoring in Computer Engineering with a specialization in 
        Distributed Systems & Software Design and Information Internetworks.
        My professional interests outside of computer engineering are Machine Learning
        and CyberSecurity.
        In my free time I enjoy playing basketball, working on outside 
        projects, and hanging out with friends. I hang out a lot with my 
        family and travel. Together we have traveled to Spain, Serbia, 
        Austria, France, and a couple more places."
        imgSource={batmanHill}
      />
      <SingularRow
        text="In highschool I played basketball for the varsity team for 3 years.
        I made very close friends and I loved spending my time with them.
        My position was mainly as the shooting guard as I had a good three point shot.
        My senior year I shot 44% from 3 and averaged 17.4 points per game.
        Because of this, I was honored with being picked on the all region team
        my senior and junior year. I am very grateful for these years and I plan
        to continue being around basketball in whatever form I can."
        imgSource={basketballPhoto}
      />
      <SingularRow
        text="My family is composed of me, my mom, and my dad. Most of our time 
        is spent in the yard, either chilling or gardening. We have done lots of
        projects around the house from installing drywall in our basement to 
        planting trees. We also like going to parks and mountains to walk and hike.
        My mom enjoys playing the violin and viola and she can perform many 
        difficult pieces. My dad enjoys following tennis and basketball. His
        favorite tennis play is Novak Djokovic and his basketball team is the 
        Denver Nuggets."
        imgSource={familyPicture}
      />
      <SingularRow
        text="With this website I am attempting to showcase my CS and ECE experiences
        through projects and classwork. These experiences showcase my interest in Machine
        Learning as well as computer hardware and signal processing. The site provides visitors
        with a detailed description of who I am and what I am passionate about. This ePortfolio 
        is a professional networking tool, allowing me to connect with others who share a passion
        for advancing and devloping computer and alogrithims necissary for machine learning."
        imgSource={PicWTesla}
      />
    </div>
    
  );
}


