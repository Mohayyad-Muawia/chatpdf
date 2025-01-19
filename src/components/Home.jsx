import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home min-h-screen flex flex-col justify-between">
      <div className="welcome font-bold text-white text-center">
        <h2 className="text-3xl md:text-6xl">Welcome to</h2>
        <h1 className="text-5xl md:text-8xl">ChatPDF</h1>
      </div>

      <div className="text-white flex flex-col gap-5 md:flex-row md:flex-wrap mt-10 mx-auto">
        <Link
          to="/upload"
          className="py-2 gap-3 px-5 md:text-lg flex border-double border-2 border-transparent active:ring active:ring-offset-1 hover:border-green-300 hover:text-green-200 items-center justify-center bg-green-950 hover:bg-green-900 active:bg-green-950 transition rounded-md font-semibold"
          style={{ flex: '1 0 calc(33.33% - 1rem)', textAlign: 'center' }}
        >
          <img src="/assets/upload.svg" alt="upload" className="w-5 h-5" />
          Upload File
        </Link>
        <Link
          to="/chat"
          className="py-2 gap-3 px-5 md:text-lg flex hover:border-double hover:border-2  items-center justify-center active:ring active:ring-offset-1 border-green-950 active:bg-green-950 hover:bg-green-900 hover:text-green-200 hover:border-green-300 transition border-2 rounded-md font-semibold"
          style={{ flex: '1 0 calc(33.33% - 1rem)', textAlign: 'center' }}
        >
          <img src="/assets/chat.svg" alt="upload" className="w-5 h-5" />
          Start Chatting
        </Link>
        <Link
          to="/about"
          className="py-2 gap-3 px-5 md:text-lg flex hover:border-double hover:border-2  items-center hover:text-green-200 active:ring active:ring-offset-1 justify-center border-green-950 active:bg-green-950 hover:bg-green-900 hover:border-green-300 transition border-2 rounded-md font-semibold"
          style={{ flex: '1 0 100%', textAlign: 'center' }}
        >
          About Us
        </Link>
      </div>
      <div className="container text-green-100 text-center font-mono animate-pulse content-center px-6 pt-10 mx-auto">
        ChatPDF is a powerful tool that allows you to easily upload
        PDF,TXT,DOCX,PPTX files and interact with their content through a chat
        interface. Whether you need to extract information, summarize text, or
        ask specific questions, ChatPDF makes it simple and efficient.
      </div>
      <footer className="text-center mt-10">
        <p className="text-green-200 font-bold text-sm ">
          &copy; {new Date().getFullYear()} ChatPDF. All rights reserved.
        </p>
      </footer>
    </div>
  )
}

export default Home
