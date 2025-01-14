import React from 'react'

const MemberCard = ({ name, image, description, links }) => {
  return (
    <div className="card flex-1 min-w-[250px] p-5 rounded-2xl shadow-lg">
      <img
        className="w-full h-80 object-cover rounded-2xl"
        src={image}
        alt={name}
      />
      <h3 className="font-bold text-2xl my-3">{name}</h3>
      <p>{description}</p>
      <div className="links pt-6 flex justify-evenly">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={link.icon}
              className="w-12 h-12 bg-white rounded-lg hover:-translate-y-2 transition"
              style={{ padding: 10 }}
              alt={`Link to ${link.href}`}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default MemberCard
