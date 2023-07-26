import StefanLink from './StefanLink';

export default function Links( { style }) {
    return (
      <ul className={style}>
        
      <StefanLink title='Home' link="/PortfolioWebsite/"/>
      
      <StefanLink title='Coding Journey' link='/PortfolioWebsite/CodingJourney'/>
  
      <StefanLink title='Projects' link="/PortfolioWebsite/ProjectsPage"/>
  
      <StefanLink title='Game' link='/PortfolioWebsite/GameSectionPage'/>
    </ul>
    );
  }