import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import { DocumentProvidedContext } from '../context/UploadedContext'
import { IoCheckmarkDoneSharp } from 'react-icons/io5'
import Error from './Error'

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [loading, setLoading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState(null) // null | 'success' | 'error'
  const { noDoc, setNoDoc } = useContext(DocumentProvidedContext)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = async (e) => {
    e.preventDefault()
    setIsDragging(false)
    await handleFileUpload(e.dataTransfer.files[0])
  }

  const handleFileSelect = async (e) => {
    await handleFileUpload(e.target.files[0])
  }

  const handleFileUpload = async (file) => {
    if (!file) return

    setLoading(true)
    setUploadStatus(null)

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch(
        'https://chatpdf-9g4j.onrender.com/api/v1/upload',
        {
          method: 'POST',
          body: formData,
        }
      )

      if (response.ok) {
        setUploadStatus('success')
        setNoDoc(false)
      } else {
        setUploadStatus('error')
      }
    } catch (error) {
      setUploadStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="upload my-5 flex justify-center relative container mx-auto">
      <div
        className={`border-4 p-8 rounded-md flex transition justify-center items-center w-full ${
          isDragging
            ? 'border-gray-800 bg-green-100/20'
            : 'border-gray-500/20 bg-white/10 backdrop-blur-3xl'
        }`}
        style={{ minHeight: '80vh' }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input
          type="file"
          className="hidden"
          id="fileUpload"
          onChange={handleFileSelect}
        />
        <label
          htmlFor="fileUpload"
          className="cursor-pointer animate-bounce text-gray-400/90 text-lg text-center"
        >
          {isDragging
            ? 'Drop files here'
            : loading
              ? 'Loading your file, please wait'
              : 'Drag & drop files here or click to upload'}
        </label>
      </div>

      {loading && (
        <div
          style={{
            position: 'absolute',
            top: '60%',
          }}
        >
          <Loading />
        </div>
      )}

      {uploadStatus === 'success' && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-11/12 max-w-sm relative">
            <IoCheckmarkDoneSharp
              style={{ outline: '16px solid #16a34a2a' }}
              className="text-4xl mx-auto mb-8 mt-4 bg-green-600 w-24 h-24 p-6 rounded-full"
            />
            <h1 className="text-2xl font-semibold text-green-600 mb-5">
              File Uploaded 🎉
            </h1>
            <p className="text-gray-600 font-medium mb-6">
              Your file is ready, and you can start chatting with ChatPDF right
              away!
            </p>
            <Link
              to="/chat"
              className="inline-block px-4 py-2 bg-green-600 text-white font-medium rounded-md shadow hover:bg-green-800 active:bg-green-950 transition duration-300"
            >
              Start Chat
            </Link>
            <button
              className="inline-block px-6 py-2 mx-5 bg-gray-300 text-gray-800 font-medium rounded-md shadow hover:bg-gray-400 active:bg-gray-400 transition duration-300"
              onClick={() => setUploadStatus(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {uploadStatus === 'error' && (
        <Error
          error="Error while uploading file, make sure it is (PDF, TXT, DOCX, PPTX)"
          setError={setUploadStatus}
        />
      )}
    </div>
  )
}

export default Upload
