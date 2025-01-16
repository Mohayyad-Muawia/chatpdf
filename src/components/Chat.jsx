import { useContext, useEffect, useState } from 'react'
import './chat.css'
import Loading from './Loading'
import { marked } from 'marked'
import { DocumentProvidedContext } from '../context/UploadedContext'

const Chat = () => {
  const { noDoc, setNoDoc } = useContext(DocumentProvidedContext)
  const [mssg, setMssg] = useState('')
  const [replay, setReplay] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [msgSent, setMsgSent] = useState(false)

  // console.log(noDoc, location.state)

  // API logic
  const URL = 'https://chatpdf-9g4j.onrender.com/api/v1/send'

  const handle_change = (event) => {
    setMssg(event.target.value)
  }

  const send = async (event) => {
    event.preventDefault()
    setError(null)
    setReplay(null)
    setLoading(true)
    appendMsg(mssg)
    setMssg('')

    // hide features section
    document.querySelector('.features').style.display = 'none'
    document.querySelector('.mssgs-box').style.height = '100%'

    try {
      const response = await fetch(URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: mssg, noDoc }),
      })

      if (!response.ok) {
        const { error } = await response.json()
        console.error(error)
        if (error.includes('length as the number of dimensions'))
          throw new Error('Failed to respond. Try reuploading the document.')

        throw new Error('Failed to fetch response. Please try again.')
      }

      const json = await response.json()
      setReplay(json.answer)
      appendRep(json.answer)
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  // messages logic
  const appendMsg = (content) => {
    const mssgsBox = document.querySelector('.mssgs')
    let msg = document.createElement('div')
    msg.classList.add('msg')
    msg.textContent = content
    mssgsBox.appendChild(msg)
    setMsgSent(true)
  }

  const appendRep = (content) => {
    const mssgsBox = document.querySelector('.mssgs')
    let res = document.createElement('div')
    res.classList.add('rep')
    let markedText = marked(content)
    res.innerHTML = markedText
    mssgsBox.appendChild(res)
  }

  //scroll
  useEffect(() => {
    fetch('https://chatpdf-9g4j.onrender.com/z')
    chatScroll()
  }, [loading, replay])

  const chatScroll = () => {
    const container = document.querySelector('.mssgs-box')
    if (container) {
      container.scrollTop = container.scrollHeight
    }
  }
  return (
    <div className="chat flex flex-col container mx-auto">
      {error && (
        <div className="absolute text-center w-full left-0 top-28">
          <h2 className="text-red-600 w-fit mx-auto border-2 border-red-600 rounded-lg px-8 animate-pulse ">
            {error}
          </h2>
        </div>
      )}
      <div
        className="chat-box flex flex-col items-center justify-center"
      >
        <div className="features flex max-md:flex-col justify-between gap-7 items-center container mx-auto min-h-[72vh] py-5">
          <div className="flex gap-2 items-center flex-col">
            <img src="/assets/feat1.svg" alt="img" />
            <h3 className="font-bold">Clear and precise</h3>
            <p className=" text-center opacity-50">
              Pariatur sint laborum cillum aute consectetur irure.
            </p>
          </div>

          <div className="flex gap-2 items-center flex-col">
            <img src="/assets/feat2.svg" alt="img" />
            <h3 className="font-bold">Personalized answers</h3>
            <p className="text-center opacity-50">
              Pariatur sint laborum cillum aute consectetur irure.
            </p>
          </div>

          <div className="flex gap-2 items-center flex-col">
            <img src="/assets/feat3.svg" alt="img" />
            <h3 className="font-bold">Increased efficiency</h3>
            <p className="text-center opacity-50">
              Pariatur sint laborum cillum aute consectetur irure.
            </p>
          </div>
        </div>

        <div className={`mssgs-box container mx-auto py-2 ${msgSent ? 'flex' : 'hidden'}`}>
          <div className="mssgs min-h-[70vh] max-h-[70vh] overflow-y-auto">
            {loading && (
              <div className="rep">
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>

      <form className="input-box flex-1 relative" onSubmit={send}>
        <input
          style={{ background: '#FFFFFF0D', border: '2px solid #FFFFFF4D' }}
          type="text"
          className="outline-none rounded-lg py-3 px-5 w-full"
          required
          placeholder={
            !msgSent
              ? 'Example : “Explain quantum computing in simple terms”'
              : ''
          }
          value={mssg}
          onChange={handle_change}
        />
        <button
          style={{
            position: 'absolute',
            width: 35,
            height: 35,
            background: '#087C4C',
            right: 8,
            top: 8,
          }}
          type="submit"
          className="send rounded-md"
        >
          <img src="/assets/send.svg" className="p-2" alt="" />
        </button>
      </form>
    </div>
  )
}

export default Chat
