import { TextUnderline } from "../../components/atoms";
const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/2f936aea-1d3b-47de-891c-2a3370d6a4e2"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <TextUnderline text="Contact" />
          <p className="py-4">
            Submit the form below or shoot me an email -
            <span className="font-bold">carls940@gmail.com</span>
          </p>
        </div>
        <input
          type="text"
          className="bg-[#ccd6f6] p-2 text-black"
          placeholder="Name"
          name="name"
        />
        <input
          type="email"
          className="bg-[#ccd6f6] p-2 my-4 text-black"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black"
          placeholder="Message"
          rows={10}
          name="message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto ">
          Let's talk
        </button>
      </form>
    </div>
  );
};

export default Contact;
