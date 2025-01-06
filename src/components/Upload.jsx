import { useState } from 'react'

const Upload = () => {
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    // Handle the dropped files
    console.log(files)
  }

  return (
    <div className="upload flex justify-center">
      <div
        className={`border-4 p-8 rounded-md w-full max-w-4xl flex transition justify-center items-center ${
          isDragging
            ? 'border-gray-800 bg-green-100/20 '
            : 'border-gray-500/20 bg-white/10 backdrop-blur-sm'
        }`}
        style={{ minHeight: '80vh' }}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <input type="file" className="hidden" id="fileUpload" />
        <label
          htmlFor="fileUpload"
          className="bg-transparent animate-bounce cursor-pointer text-gray-400/90 text-lg text-center"
        >
          {isDragging
            ? 'Drop files here'
            : 'Drag & drop files here or click to upload'}
        </label>
      </div>
    </div>
  )
}

export default Upload
