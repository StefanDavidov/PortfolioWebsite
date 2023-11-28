import TimeLine from "./TimeLine";
import FutureTimelineValues from "./FutureTimelineValues"
import Header from "./Header";
import Footer from "./Footer";


export default function FutureTimeline() {
    return (
        <div>
      <Header title="Possible Journy for the Future" />
      <TimeLine values={FutureTimelineValues} />
      <Footer />
      </div>
    );
}