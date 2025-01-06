import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="welcome">
        <h2 className="text-white text-center  pt-28 pb-5 text-5xl font-semibold ">
          Welcome to
        </h2>
        <h1 className="text-white text-center text-8xl font-bold  mb-8">
          CHAT PDF
        </h1>
      </div>

      <div className="text-white flex flex-wrap w-1/3 gap-5 justify-center items-center m-auto">
        <Link
          to="/upload"
          className="flex gap-4 items-center justify-center bg-green-950 hover:bg-green-900 active:bg-green-950 transition px-8 rounded-md py-4 font-semibold"
          style={{ flex: "1 0 calc(33.33% - 1rem)", textAlign: "center" }}
        >
          <img src="/assets/upload.svg" alt="upload" className="w-5 h-5" />
          Upload File
        </Link>
        <Link
          to="/chat"
          className="flex gap-4 items-center justify-center border-green-950 active:bg-green-950 hover:bg-green-900 hover:border-green-900 transition border-2 px-8 rounded-md py-4 font-semibold"
          style={{ flex: "1 0 calc(33.33% - 1rem)", textAlign: "center" }}
        >
          <img src="/assets/chat.svg" alt="upload" className="w-5 h-5" />
          Start Chatting
        </Link>
        <Link
          to="/about"
          className="flex gap-4 items-center justify-center border-green-950 active:bg-green-950 hover:bg-green-900 hover:border-green-900 transition border-2 px-8 rounded-md py-4 font-semibold"
          style={{ flex: "1 0 100%", textAlign: "center" }}
        >
          About Us
        </Link>
      </div>
      <div className="text-green-100 text-center font-mono max-w-6xl content-center px-6 pt-10 mx-auto">
        ChatPDF is a powerful tool that allows you to easily upload
        PDF,TXT,DOCX,PPTX files and interact with their content through a chat
        interface. Whether you need to extract information, summarize text, or
        ask specific questions, ChatPDF makes it simple and efficient.
      </div>
    </div>
  );
};

export default Home;
