import Header from "./Header";
import Footer from "./Footer";
import TimeLine from "./Timeline";
import PictureCollage from "./PictureCollage";

export default function MostPopularRecipies() {
  return (
    <>
      {document.body.style.overflow = ""}
      <Header title="Coding Journey" />
      <PictureCollage />
      <TimeLine />
      <Footer />
    </>
  );
}
