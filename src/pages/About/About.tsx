import { TextUnderline } from "../../components/atoms";
const About = () => {
  return (
    <div id="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <TextUnderline text="About" />
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi, I'm Carlos. Nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className="mb-4">
              I'm passionate about building excellent software analyzing
              client's requirements in depth to deliver high quality
              applications. <br />I love to work on web, back end and mobile
              applications using technologies like NextJS, ReactJS, Angular,
              React Native, Node, Express, GraphQL among others.
            </p>
            <p>
              Always open to face new challenges which allow me to growth in
              this journey. <br />
              Accustomed to working as a team to provide fast and effective
              solutions to any problem that arises during the development
              process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
