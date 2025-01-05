import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='home'>
      <div className='welcome'>
        <h2 className='text-white text-center py-28 text-5xl font-semibold'>
          Welcome to
        </h2>
        <h1 className='text-white text-center text-4xl -mt-20 mb-8'>
          CHAT PDF
        </h1>
      </div>

      <div className='text-white flex gap-20 px-4 justify-center'>
        <Link
          to='/upload'
          className='border-green-700  hover:bg-green-900 transition border-2 px-12 rounded-md py-4 text-lg font-semibold'
        >
          Upload File
        </Link>
        <Link
          to='/chat'
          className='bg-green-950 hover:bg-green-900 transition px-12 rounded-md py-4 text-lg font-semibold'
        >
          Start Chatting
        </Link>
      </div>
      <Link to='/team'>
        <div className='text-white text-center font-semibold  mt-4 transition hover:bg-green-800 mx-auto w-1/2 rounded-md content-center text-lg max-w-lg py-5 bg-green-950 '>
          About
        </div>
      </Link>
    </div>
  )
}

export default Home
