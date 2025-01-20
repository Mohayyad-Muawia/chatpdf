import { IoAlertCircleSharp } from 'react-icons/io5'

const Error = ({ error, setError }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-sm relative">
        <IoAlertCircleSharp
          style={{ outline: '16px solid #f871713a' }}
          className="text-4xl mx-auto mb-8 mt-4 bg-red-500 w-24 h-24 p-6 rounded-full"
        />
        <h1 className="text-2xl font-semibold text-red-500 mb-5">Oops!</h1>
        <p className="text-gray-600 font-medium mb-6">
          {error}. If this happens repeatedly, please contact us for help
        </p>
        <button
          className="inline-block px-4 py-2 bg-red-500 text-white font-medium rounded-md shadow hover:bg-red-700 active:bg-green-950 transition duration-300"
          onClick={() => {
            setError(false)
          }}
        >
          Try again
        </button>
        <a
          href="mailto:chatpdf.feedback@gmail.com?subject=Need%20Help%20with%20Your%20Service&body=Hello,%0D%0A%0D%0AI%20am%20experiencing%20an%20issue%20and%20need%20assistance.%20Could%20you%20please%20help?"
          className="inline-block px-6 py-2 mx-5 bg-gray-300 text-gray-800 font-medium rounded-md shadow hover:bg-gray-400 active:bg-gray-400 transition duration-300"
        >
          Get Help
        </a>
      </div>
    </div>
  )
}

export default Error
