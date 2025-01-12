const About = () => {
  return (
    <div className="about" style={{ height: 'calc(100vh - 64px)' }}>
      <div className="flex h-full items-center">
        <div className="flex-1 px-16">
          <h1 className="font-bold text-4xl">About ChatPDF</h1>
          <p className="opacity-50 my-5">
            ChatPDF is your intelligent document assistant. Upload PDF, TXT,
            DOCX, or PPTX files and let the power of AI transform the way you
            read, analyze, and interact with your content. From quick summaries
            to in-depth answers, ChatPDF has you covered.
          </p>
          <h1 className="font-bold text-4xl mt-8">Why ChatPDF</h1>
          <p className="opacity-50 mt-5">
            The inspiration behind our project, a chat PDF AI companion for
            managing and interacting with PDF documents, stemmed from a
            recognition of the challenges many individuals face when dealing
            with digital documents. We observed that conventional methods of
            organizing and navigating PDFs often lack efficiency and
            user-friendliness.
          </p>
        </div>

        <div className="flex-1 border-l px-16">
          <h1 className="font-bold text-4xl">How it works</h1>
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
          <h1 className="font-bold text-4xl mt-8">Our Goal</h1>
          <p className="opacity-50 mt-5">
            our goal is to empower individuals to effortlessly navigate, search,
            annotate, and collaborate on PDF documents, revolutionizing the way
            they interact with digital content. Through innovative technology
            and a user-centric approach, we aspire to make PDF management more
            accessible, efficient, and enjoyable for everyone.
          </p>
        </div>
      </div>

      <div className="team mt-20 px-40">
        <h1 className="font-bold text-4xl mb-5 text-center">The Team</h1>

        <div className="members py-12 flex gap-12 flex-wrap">
          <div className="card flex-1 min-w-60 rounded-2xl">
            <img
              className="max-w-full rounded-2xl"
              src="/assets/t1.jpg"
              alt=""
            />
            <h3 className="font-bold text-2xl my-3">Hassan Abdelwahid</h3>
            <p>
              Student at Alneelen University, majoring in ALX Software
              Engineering within the Computer Science Department. Alongside my
              technical studies, I'm also skilled in logo design, blending
              creativity with software expertise.
            </p>
            <div className="links pt-6 flex justify-evenly -0">
              <a href="http://" target="_blank">
                <img
                  src="/assets/x.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
              <a href="http://" target="_blank">
                <img
                  src="/assets/linkedin.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
              <a href="http://" target="_blank">
                <img
                  src="/assets/github.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
            </div>
          </div>

          <div className="card flex-1 min-w-60">
            <img
              className="max-w-full rounded-2xl"
              src="/assets/mna.jpg"
              alt=""
            />
            <h3 className="font-bold text-2xl my-3">Omar Abdulrahim</h3>
            <p>
              ALX SE alumnus, ALX SE Africa student. 🌟 Mastermind behind the
              creation of intricate structures, chains, and bot functionalities.
              🔗💡 full-stack dev with an insatiable hunger for tech and
              AI
            </p>
            <div className="links pt-6 flex justify-evenly -0">
              <a href="http://" target="_blank">
                <img
                  src="/assets/x.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
              <a href="http://" target="_blank">
                <img
                  src="/assets/linkedin.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
              <a href="http://" target="_blank">
                <img
                  src="/assets/github.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
            </div>
          </div>

          <div className="card flex-1 min-w-60">
            <img
              className="max-w-full rounded-2xl"
              src="/assets/t3.jpg"
              alt=""
            />
            <h3 className="font-bold text-2xl my-3">Mohayyad Muawia</h3>
            <p>
              A passionate web developer who loves crafting websites. When I’m
              not coding, you’ll find me exploring new techs, tackling
              challenges, and bringing innovative projects to life :)
            </p>
            <div className="links pt-6 flex justify-evenly -0">
              <a href="http://" target="_blank">
                <img
                  src="/assets/x.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
              <a href="http://" target="_blank">
                <img
                  src="/assets/linkedin.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
              <a href="http://" target="_blank">
                <img
                  src="/assets/github.svg"
                  className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
                  style={{ padding: 10 }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
