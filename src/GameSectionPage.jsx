{
  /*
Make a 2d geoguesser game to guess the my location.
Add some animation and make it be the us map 
when the person clicks on the right state it zooms in
when its wrong it sends a message or something
also when state is right go to county

*/
}
import Header from "./Header";
import Footer from "./Footer";
import Game from "./Game";
export default function GameSectionPage() {
  return (
    <div>
      <Header title="Game" />

      <Game />

      <Footer />
    </div>
  );
}
