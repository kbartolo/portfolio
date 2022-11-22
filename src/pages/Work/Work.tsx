import portfolio from "../../assets/images/projects/work-portfolio.jpg";
import randomuser from "../../assets/images/projects/work-randomuser.jpg";
import swagger from "../../assets/images/projects/work-swagger.jpg";
import todoapp from "../../assets/images/projects/work-todo-app.jpg";
import delivery from "../../assets/images/projects/work-delivery-mobile.jpg";
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
          <GridItem
            linkDemo={""}
            linkCode={"https://github.com/kbartolo/delivery-mobile-app"}
            title="Delivery Mobile App - React Native, Typescript, Tailwind"
            image={delivery}
          />
          <GridItem
            linkDemo={"https://kbartolo.github.io/portfolio/"}
            linkCode={"https://github.com/kbartolo/portfolio"}
            title="Portfolio Website - ReactJS, TS, Atomic Design Structure"
            image={portfolio}
          />
          <GridItem
            linkDemo={
              "https://node-express-restful-api.herokuapp.com/v1/users/doc/"
            }
            linkCode={"https://github.com/kbartolo/user_yt_managment_node_app"}
            title="User Restful Api - Node, Express and Swagger"
            image={swagger}
          />
          <GridItem
            linkDemo={"https://stackblitz.com/edit/react-ts-mrgunv"}
            linkCode={"https://github.com/kbartolo/randomuser-api-app-react"}
            title="RandomUser Api - ReactJS, Typescript"
            image={randomuser}
          />
          <GridItem
            linkDemo={"https://kbartolo.github.io/todo-app-react-bootstrap/"}
            linkCode={"https://github.com/kbartolo/todo-app-react-bootstrap"}
            title="TODO List - ReactJS, Typescript"
            image={todoapp}
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
