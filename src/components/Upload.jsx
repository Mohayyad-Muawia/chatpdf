import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from './Loading'

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false)
  const [loading, setIsLoading] = useState(false)
  const navigate = useNavigate()

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
    setIsLoading(true)
    const files = e.dataTransfer.files

    if (files.length > 0) {
      console.log(files[0])

      const formData = new FormData()
      formData.append('file', files[0])

      try {
        const response = await fetch(
          'https://chatpdf-9g4j.onrender.com/api/v1/upload',
          {
            method: 'POST',
            body: formData,
          }
        )

        if (response.ok) {
          console.log('File uploaded successfully')
          setIsLoading(false)
          navigate('/chat')
        } else {
          console.error('File upload failed')
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  const handleFileSelect = async (e) => {
    const files = e.target.files

    if (files.length > 0) {
      console.log(files[0])

      const formData = new FormData()
      formData.append('file', files[0])

      try {
        const response = await fetch(
          'https://chatpdf-9g4j.onrender.com/api/v1/upload',
          {
            method: 'POST',
            body: formData,
          }
        )

        if (response.ok) {
          console.log('File uploaded successfully')
          navigate('/chat')
        } else {
          console.error('File upload failed')
        }
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  return (
    <div className="upload flex justify-center relative">
      <div
        className={`border-4 p-8 rounded-md w-full max-w-4xl flex transition justify-center items-center ${
          isDragging
            ? 'border-gray-800 bg-green-100/20'
            : 'border-gray-500/20 bg-white/10 backdrop-blur-sm'
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
          accept="application/pdf, image/*"
        />
        <label
          htmlFor="fileUpload"
          className="bg-transparent cursor-pointer animate-bounce text-gray-400/90 text-lg text-center"
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
            top: '55%',
            left: '50%',
            transform: 'tranlate(-50%, -50%)',
            scale: 2,
          }}
        >
          <Loading />
        </div>
      )}
    </div>
  )
}
export default Upload
