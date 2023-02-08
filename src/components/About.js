import { Link } from "react-router-dom"
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
          width: "100vw",
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
          I'm continuously inspired to learn, grow and to explore & iterate
          toward the best version of my self.
          <br />
          <br />
        </div>
         <div className="pop">
            I'm AK, and I am a software engineer.
            <br />
        </div>
        <motion.div 
        className="about1"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {delay: 6, duration: 2}
        }}
        >
          <br />
          My journey with technology began back in the early 90's as a young kid
          connecting to bulletin boards and IRC chats via a 4.4kbps modem from
          the school library. I remain obsessed and in awe at the power of
          technology to this day.
          <br />
          <br />
          I've walked an unusual path through life (so far) leading me to
          explore many things including; <br />
          <br />
        </motion.div>
        <motion.div 
        className="about2"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {delay: 14, duration: 2}
        }}
        >
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
        </motion.div>
        <motion.div 
        className="about3"
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {delay: 20, duration: 2}
        }}
        >
          I hope you'll take a minute or two to look around, and reach out if
          you feel the call to adventure !
        </motion.div>

        <motion.button
        className="thruButton"
        whileHover={{
          scale: 1.2
        }}  
        >
          <Link to="/proof-of-work">
            Portfolio
            </Link>
        </motion.button>
      </motion.div>
    </div>
  )
}

export default About
