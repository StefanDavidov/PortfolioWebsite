import Header from "./Header";
import Footer from "./Footer";
import TimeLine from "./TimeLine";
import PictureCollage from "./PictureCollage";
import Resume from "./Resume";
import TimelineValues from "./TimelineValues";

export default function MostPopularRecipies() {
  return (
    <>
      {(document.body.style.overflow = "")}
      <Header title="Coding Journey" />
      <PictureCollage />
      <TimeLine values={TimelineValues}/>
      <Resume />
      <Footer />
    </>
  );
}
