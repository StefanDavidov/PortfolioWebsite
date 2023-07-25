import StefanLink from "./StefanLink";

export default function LinksExtended({ style }) {
  return (
    <ul className={style}>
      {/*
        Possibly add a transition time where link fades out
        and description fades in
        */}
      <StefanLink
        title="Home"
        link="/"
        content="On this page you can learn more about
        who I am and what I like to do. You can also see
        me with my family and what their hobbies are."
      />

      <StefanLink
        title="Coding Journey"
        link="/CodingJourney"
        content="Here, I talk about what languages I know,
        how I learned them, and any other activities involving
        how I got to where I am now in my coding journey"
      />

      <StefanLink
        title="Projects"
        link="/ProjectsPage"
        content="Here, I showcase some of my more advanced
        coding skills through. I talk about the languages and frameworks
        I used as well as link to the project."
      />

      <StefanLink
        title="Game"
        link="/GameSectionPage"
        content="Play a short guessing where you will be 
        prompted with a map and your goal is to guess 
        my location."
      />
    </ul>
  );
}
