import { FC } from "react";
import NavBar from "../../components/organisms";
import { Home, About, Skills, Work, Contact } from "..";

const Main: FC = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Main;
