import { useState } from 'react'
import MemberCard from './MemberCard'

const About = () => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText('chatpdf.feedback@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const teamMembers = [
    {
      name: 'Hassan Abdelwahid',
      image: '/assets/t1.jpg',
      description:
        "Student at Alneelen University, majoring in ALX Software Engineering within the Computer Science Department. Alongside my technical studies, I'm also skilled in logo design, blending creativity with software expertise.",
      links: [
        { href: 'http://', icon: '/assets/x.svg' },
        { href: 'http://', icon: '/assets/linkedin.svg' },
        { href: 'http://', icon: '/assets/github.svg' },
      ],
    },
    {
      name: 'Omar Abdulrahim',
      image: '/assets/mna.jpg',
      description:
        'ALX SE alumnus, Information Systems student. ⭐ Mastermind behind the creation of intricate structures, chains, and bot functionalities. Full-stack dev with an insatiable hunger for tech and AI.',
      links: [
        { href: 'https://x.com/Omarvx211', icon: '/assets/x.svg' },
        {
          href: 'https://www.linkedin.com/in/omar-abdulrahim-1o/',
          icon: '/assets/linkedin.svg',
        },
        {
          href: 'https://github.com/oovaa',
          icon: '/assets/github.svg',
        },
      ],
    },
    {
      name: 'Mohayyad Muawia',
      image: '/assets/t3.jpg',
      description:
        'A passionate web developer who loves crafting websites. When I’m not coding, you’ll find me exploring new techs, tackling challenges, and bringing innovative projects to life :)',
      links: [
        { href: 'http://', icon: '/assets/x.svg' },
        { href: 'http://', icon: '/assets/linkedin.svg' },
        { href: 'http://', icon: '/assets/github.svg' },
      ],
    },
    {
      name: 'Husam Mohamed',
      image: '/assets/husam.jpeg',
      description:
        'Web Developer with a focus on front-end development using React, Next.js, and TailwindCSS. Have experience with backend development and building APIs using Node.js and Express.',
      links: [
        { href: 'https://linkedin.com/in/husamXA1', icon: '/assets/linkedin.svg' },
        { href: 'https://github.com/husamXA1', icon: '/assets/github.svg' },
      ],
    },
  ]

  return (
    <div className="about px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-14 container mx-auto">
        <div>
          <h1 className="font-bold text-4xl mb-2">About ChatPDF</h1>
          <p className="opacity-50">
            ChatPDF is your intelligent document assistant. Upload PDF, TXT,
            DOCX, or PPTX files and let the power of AI transform the way you
            read, analyze, and interact with your content. From quick summaries
            to in-depth answers, ChatPDF has you covered.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-2">Why ChatPDF</h1>
          <p className="opacity-50">
            The inspiration behind our project, a chat PDF AI companion for
            managing and interacting with PDF documents, stemmed from a
            recognition of the challenges many individuals face when dealing
            with digital documents. We observed that conventional methods of
            organizing and navigating PDFs often lack efficiency and
            user-friendliness.
          </p>
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-2">How it works</h1>
          <ol className="opacity-50 flex flex-col">
            <li>
              1. Choose the document you want ChatPDF to help you with. It must
              be PDF, TXT, DOCX, or PPTX.
            </li>
            <li>2. Upload your document to ChatPDF from the upload page.</li>
            <li>
              3. Now you can enjoy and chat about your document and ask for
              anything.
            </li>
          </ol>
        </div>
        <div>
          <h1 className="font-bold text-4xl mb-2">Our Goal</h1>
          <p className="opacity-50">
            Our goal is to empower individuals to effortlessly navigate, search,
            annotate, and collaborate on PDF documents, revolutionizing the way
            they interact with digital content. Through innovative technology
            and a user-centric approach, we aspire to make PDF management more
            accessible, efficient, and enjoyable for everyone.
          </p>
        </div>
      </div>

      <div className="team my-10 container mx-auto">
        <h1 className="font-bold text-4xl text-center my-5">The Team</h1>

        <div className="members flex gap-10 flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <MemberCard
              key={index}
              name={member.name}
              image={member.image}
              description={member.description}
              links={member.links}
            />
          ))}
        </div>
      </div>

      <footer
        className=" p-6 text-xl text-center"
        style={{ background: '#00000022' }}
      >
        <div className="text-center mt-10">
          <p className="text-md opacity-50">Have questions or feedback?</p>
          <p className="text-lg font-baloo font-bold">
            Contact us at{' '}
            <span
              onClick={copyToClipboard}
              className={`cursor-pointer transition-colors duration-300 ease-in-out ${
                copied
                  ? 'text-green-600'
                  : 'text-blue-600 underline hover:text-blue-800'
              }`}
            >
              {copied
                ? 'Email copied to clipboard!'
                : 'chatpdf.feedback@gmail.com'}
            </span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default About
