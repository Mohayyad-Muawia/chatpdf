import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  const ButtonLink = ({ to, children, icon, flexBasis }) => (
    <Link
      to={to}
      className={`py-2 gap-3 px-5 md:text-lg flex items-center justify-center
        border-2 border-double border-green-950 hover:border-green-300
        active:ring active:ring-offset-1 transition rounded-md font-semibold
        hover:bg-green-900 hover:text-green-200 active:bg-green-950
        ${to === '/upload' ? 'bg-green-950' : 'bg-transparent'}`}
      style={{ flex: flexBasis }}
    >
      {icon && <img src={icon} alt="" className="w-5 h-5" />}
      {children}
    </Link>
  )

  return (
    <div className="home min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <header className="welcome font-bold text-white text-center space-y-4">
        <h2 className="text-3xl md:text-6xl leading-tight">Welcome to</h2>
        <h1 className="text-5xl md:text-8xl leading-tight">ChatPDF</h1>
      </header>

      {/* Main Action Buttons */}
      <main className="max-w-4xl w-full mx-auto px-4">
        <div className="text-white flex flex-col gap-5 md:flex-row md:flex-wrap">
          <ButtonLink
            to="/upload"
            icon="/assets/upload.svg"
            flexBasis="1 0 calc(33.33% - 1rem)"
          >
            Upload File
          </ButtonLink>

          <ButtonLink
            to="/chat"
            icon="/assets/chat.svg"
            flexBasis="1 0 calc(33.33% - 1rem)"
          >
            Start Chatting
          </ButtonLink>

          <ButtonLink to="/about" flexBasis="1 0 100%">
            About Us
          </ButtonLink>
        </div>
      </main>

      {/* Description Text */}
      <section className="max-w-2xl px-6 pt-10 mx-auto text-center">
        <p className="text-green-100 font-mono animate-pulse leading-relaxed">
          ChatPDF is a powerful tool that allows you to easily upload PDF, TXT,
          DOCX, PPTX files and interact with their content through a chat
          interface. Whether you need to extract information, summarize text, or
          ask specific questions, ChatPDF makes it simple and efficient.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-8 text-center text-green-200 font-bold text-sm">
        <p>
          &copy; {new Date().getFullYear()} ChatPDF. All rights reserved.
        </p>
        <p>Made with ❤️ from Sudan 🇸🇩</p>
      </footer>
    </div>
  )
}

export default Home
