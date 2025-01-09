const Circle = () => {
  return (
    <div className="circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 489"
        preserveAspectRatio="none"
        style={{
          width: '100vw',
          height: '100vh',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        <rect
          x="-489"
          width="2777"
          height="2777"
          rx="1388.5"
          fill="url(#paint0_radial_1_27)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_1_27"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(899.5 1388.5) rotate(90) scale(1388.5)"
          >
            <stop stopColor="#38FF77" />
            <stop offset="1" stopColor="#317647" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  )
}

export default Circle
