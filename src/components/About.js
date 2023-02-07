import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="container">
      <motion.div
        className="about"
        layout
        initial={{
          opactity: 0,
        }}
        animate={{
          opactiy: 1,
          width: "100vw" 

        }}
        exit={{
          opacity: 0,
          x: window.innerWidth, 
          transition: { duration: 0.3 },
        }}
      >
        <div className="about1">
          Our ability to transmit information has, and will continue to
          transform us and the way in which we orient ourselves in the world.
          I'm continuously inspired to learn and grow, to explore & to iterate
          toward the best version of my self.
          <br />
          <br />
          I'm AK. <br />
          My journey with technology began back in the early 90's as a young kid
          connecting to bulletin boards and IRC chats via a 4.4kbps modem from
          the school library. I remain obsessed and in awe at the power of
          technology to this day.
          <br />
          <br />
          I've walked an unusual path through life (so far) leading me to
          explore many things including; <br />
          <br />
        </div>
        <div className="about2">
          <ul>
            <li>
              🟣 owning and operating my own business managing teams of upto 450
              people,
            </li>
            <li>
              🟣 travelling the world as a skydiving and body-flight coach,
            </li>
            <li>
              🟣 and most recently to explore a career in software engineering
              <br />
            </li>
          </ul>
        </div>
        <div className="about3">
          I hope you'll take a minute or two to look around, and reach out if
          you feel the call to adventure !
        </div>
      </motion.div>
    </div>
  )
}

export default About
