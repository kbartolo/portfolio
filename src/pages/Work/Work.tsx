import realState from "../../assets/images/projects/realestate.jpg";
import workImg from "../../assets/images/projects/workImg.jpeg";
import { GridItem, TextUnderline } from "../../components/atoms";

const Work = () => {
  return (
    <div id="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <TextUnderline text="Works" />
          <p className="py-6">Check out some of my recent work.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <GridItem title="React Application 1" image={workImg} />
          <GridItem title="React Application 2" image={realState} />
          <GridItem title="React Application 3" image={workImg} />
          <GridItem title="GRAPHQL CRUD" image={realState} />
          <GridItem title="Tic Tac Toe" image={workImg} />
          <GridItem
            title="React Native - Mobile Application"
            image={realState}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
