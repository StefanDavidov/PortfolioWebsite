import StefanLink from './StefanLink';

export default function Links( { style }) {
    return (
      <ul className={style}>
        
      <StefanLink title='Home' link="/"/>
      
      <StefanLink title='Coding Journey' link='/CodingJourney'/>
  
      <StefanLink title='Projects' link="/ProjectsPage"/>
  
      <StefanLink title='Game' link='/GameSectionPage'/>
    </ul>
    );
  }