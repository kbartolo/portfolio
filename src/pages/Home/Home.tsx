import { ButtonHover } from "../../components/atoms";
const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="text-pink-600">Hi, my name is </div>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6] group">
          <span className="w-[12ch] inline-flex border-r-4 overflow-hidden animate-typing group-hover:animate-type-reverse whitespace-nowrap">
            Carlos Bartolo
          </span>
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          <p>I'm a Full Stack</p>
          <p>Developer.</p>
        </h2>
        <div className="text-[#8892b0] py-4 max-w-[700px]">
          <p className="pb-4">
            I'm a Full Stack Mobile Engineer specializing in building
            applications with exceptional digital experience.
          </p>
          <p>
            I'm focused in developing full-stack web applications using NextJS,
            ReactJS, React Native, Redux, Typescript, NextJS, Angular, Express,
            Graphql, Tailwind, etc.
          </p>
        </div>
        <div>
          <ButtonHover text={"View Work"} colorHover={"pink"} link="work" />
        </div>
      </div>
    </div>
  );
};

export default Home;
