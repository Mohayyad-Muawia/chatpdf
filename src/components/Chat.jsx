import { useContext, useEffect, useRef, useState } from 'react'
import { marked } from 'marked'
import Loading from './Loading'
import Error from './Error'
import { DocumentProvidedContext } from '../context/UploadedContext'
import './chat.css'
import { SignedIn, SignedOut, SignInButton, useAuth } from '@clerk/clerk-react'

const Chat = () => {
  const { noDoc } = useContext(DocumentProvidedContext)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const messagesEndRef = useRef(null)
  const { getToken } = useAuth()

  const API_URL = 'https://chatpdf-9g4j.onrender.com/api/v1/send'

  const FeatureCard = ({ icon, title, text }) => (
    <div className="flex gap-2 items-center flex-col">
      <img src={icon} alt={title} />
      <h3 className="font-bold">{title}</h3>
      <p className="text-center opacity-50">{text}</p>
    </div>
  )

  const Message = ({ content, isResponse }) => (
    <div className={`${isResponse ? 'rep' : 'msg'}`}>
      {isResponse ? (
        <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
      ) : (
        content
      )}
    </div>
  )

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    setError(null)
    setLoading(true)
    const currentQuestion = input.trim()

    // Add user message
    setMessages((prev) => [
      ...prev,
      { content: currentQuestion, isResponse: false },
    ])
    setInput('')

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${await getToken()}`,
        },
        body: JSON.stringify({ question: currentQuestion, noDoc }),
      })

      if (!response.ok) {
        const { error } = await response.json()
        throw new Error(
          error?.includes('dimensions')
            ? 'Failed to respond. Try reuploading the document.'
            : 'Failed to fetch response. Please try again.'
        )
      }

      const { answer } = await response.json()
      setMessages((prev) => [...prev, { content: answer, isResponse: true }])
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="chat flex flex-col container mx-auto">
      <SignedOut>
        <p className="text-center mt-10">
          You need to be signed in to access this page.
        </p>
        <SignInButton forceRedirectUrl={"/"} className="border rounded px-2 py-1 hover:bg-white hover:text-[#087C4C] transition-colors font-bold block mx-auto my-5" />
      </SignedOut>
      <SignedIn>
        {error && <Error error={error} setError={setError} />}

        <div className="chat-box flex flex-col items-center justify-center">
          {messages.length === 0 ? (
            <div className="features flex max-md:flex-col justify-between gap-7 items-center container mx-auto min-h-[72vh] py-5">
              <FeatureCard
                icon="/assets/feat1.svg"
                title="Clear and precise"
                text="Pariatur sint laborum cillum aute consectetur irure."
              />
              <FeatureCard
                icon="/assets/feat2.svg"
                title="Personalized answers"
                text="Pariatur sint laborum cillum aute consectetur irure."
              />
              <FeatureCard
                icon="/assets/feat3.svg"
                title="Increased efficiency"
                text="Pariatur sint laborum cillum aute consectetur irure."
              />
            </div>
          ) : (
            <div className="mssgs-box py-2 flex w-full">
              <div className="mssgs h-[calc(100vh-150px)] overflow-y-auto w-full">
                {messages.map((msg, index) => (
                  <Message
                    key={index}
                    content={msg.content}
                    isResponse={msg.isResponse}
                  />
                ))}
                {loading && (
                  <div className="rep">
                    <Loading />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>
          )}
        </div>

        <form
          className="input-box flex-1 relative px-4 mb-4"
          onSubmit={handleSubmit}
        >
          <input
            style={{ background: '#FFFFFF0D', border: '2px solid #FFFFFF4D' }}
            type="text"
            className="outline-none rounded-lg py-3 px-5 w-full"
            required
            placeholder={
              messages.length === 0
                ? 'Example : “Explain quantum computing in simple terms”'
                : ''
            }
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            style={{
              position: 'absolute',
              width: 35,
              height: 35,
              background: '#087C4C',
              right: 20,
              top: 8,
            }}
            type="submit"
            className="send rounded-md"
            disabled={loading}
          >
            <img src="/assets/send.svg" className="p-2" alt="Send message" />
          </button>
        </form>
      </SignedIn>
    </div>
  )
}

export default Chat
