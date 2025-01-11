const About = () => {
  return (
    <div className="about" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="flex h-full items-center">
        <div className="flex-1 px-16">
          <h1 className="font-bold text-4xl mb-5">About ChatPDF</h1>
          <p className="opacity-50">
            ChatPDF is your intelligent document assistant. Upload PDF, TXT,
            DOCX, or PPTX files and let the power of AI transform the way you
            read, analyze, and interact with your content. From quick summaries
            to in-depth answers, ChatPDF has you covered.
          </p>
        </div>

        <div className="flex-1 border-l px-16">
          <h1 className="font-bold text-4xl mb-">How it works</h1>
          <ol className="mt-5 opacity-50 flex flex-col gap-3">
            <li>
              1. Chosoe the document you want ChatPDF to help you with, it must
              be PDF, TXT, DOCX, or PPTX.
            </li>
            <li>2. Upload your document to ChatPDF from the upload page.</li>
            <li>
              3. Now you can enjoy and Chat about your document and ask for
              anything.
            </li>
          </ol>
        </div>
      </div>

      <div className="team mt-20">
        <h1 className="font-bold text-4xl mb-5 text-center">The Team</h1>
      </div>
    </div>
  )
}

export default About
