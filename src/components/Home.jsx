import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='welcome'>
        <h2 className='text-white text-center  pt-28 pb-5 text-5xl font-semibold '>
          Welcome to
        </h2>
        <h1 className='text-white text-center text-8xl font-bold  mb-8'>
          CHAT PDF
        </h1>
      </div>

      <div className='text-white flex gap-20 px-4 justify-center'>
        <Link
          to='/upload'
          className='border-green-700 active:bg-green-950  hover:bg-green-900 transition border-2 px-12 rounded-md py-4 text-lg font-semibold'
        >
          Upload File
        </Link>
        <Link
          to='/chat'
          className='bg-green-950 hover:bg-green-900 active:bg-green-950 transition px-12 rounded-md py-4 text-lg font-semibold'
        >
          Start Chatting
        </Link>
      </div>
      <Link to='/team'>
        <div className='text-white active:bg-green-950 text-center font-semibold  mt-4 transition hover:bg-green-800 mx-auto w-1/2 rounded-md content-center text-lg max-w-lg py-5 bg-green-950 '>
          About
        </div>
      </Link>
      <div className='text-green-100 text-center text-2xl font-mono max-w-6xl content-center px-6 pt-10 mx-auto'>
        ChatPDF is a powerful tool that allows you to easily upload
        PDF,TXT,DOCX,PPTX files and interact with their content through a chat
        interface. Whether you need to extract information, summarize text, or
        ask specific questions, ChatPDF makes it simple and efficient.
      </div>
    </div>
  )
}

export default Home
