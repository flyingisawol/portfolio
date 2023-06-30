import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const About = () => {
  return (
    <motion.div 
    className="page-container"
    initial={{
      opacity: 0
    }}
    animate={{
      opacity: 1,
    }}
    >
      <motion.div
        className="about"
          initial={{
          opactity: 0,
        }}
        animate={{
          opactiy: 1,
        }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
        }}
      >
        <div className="about1">
          Our ability to transmit information has, and will continue to
          transform us and the way in which we orient ourselves in the world.
          I'm continuously inspired to learn, grow and to iterate toward the
          best version of my self.
          <br />
          <br />
        </div>
        <motion.div
          className="pop"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
        >
          I'm AK, and I'm a software engineer.
          <a href="http://linkedin.com/in/andrewwallacekeir">
            <img src="/images/AK.png" alt="" />
          </a>
        </motion.div>
        <motion.div
          className="about1"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1 },
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
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1 },
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
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1 },
          }}
        >
          I hope you'll take a minute or two to look around, and reach out if
          you feel the call to adventure !
        </motion.div>

        <motion.button
          className="thruButton"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 3, duration: 2 },
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          }}
        >
          <Link to="/proof-of-work">Portfolio</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default About
