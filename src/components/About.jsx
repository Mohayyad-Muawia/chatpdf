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
  ]

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
              1. Choose the document you want ChatPDF to help you with. It must
              be PDF, TXT, DOCX, or PPTX.
            </li>
            <li>2. Upload your document to ChatPDF from the upload page.</li>
            <li>
              3. Now you can enjoy and chat about your document and ask for
              anything.
            </li>
          </ol>
          <h1 className="font-bold text-4xl mt-8">Our Goal</h1>
          <p className="opacity-50 mt-5">
            Our goal is to empower individuals to effortlessly navigate, search,
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
    </div>
  )
}

export default About
