import { motion } from "framer-motion"

const Contact = () => {
  return (
    <>
    <div className="page-container">
      <motion.div
        initial={{ opactity: 0, width: 0 }}
        animate={{ opactiy: 1, width: "100vw" }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          transition: { duration: 0.3 },
        }}
      >
      <motion.div 
      className="contact-me"
      initial={{
        opacity: 0
       }}
       animate={{
        opacity: 1,
        transition: { delay: 1, duration: .5 }
       }}
      >
         Wow. You made it this far !!    
        <br />
        <br />
        <div className="profile-img">
        <a href="http://linkedin.com/in/andrewwallacekeir">
            <img src="/images/AK.png" alt="" />
          </a>
        </div>
        <br />
        If you would like to chat, you can reach me below 
        <br />
        or dm me via the nostriChat widget below
        <div className="contacts">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2 },
            }}
            whileHover={{
              scale: 1.4,
            }}
          >
            <a href="https://linkedin.com/in/andrewwallacekeir">
              <img src="/images/in.png" alt="find me on linkedin" />
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2 },
            }}
            whileHover={{
              scale: 1.4,
            }}
          >
            <a href="https://github.com/flyingisawol">
              <img src="/images/github-mark-white.png" alt="find me on github" />
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2 },
            }}
            whileHover={{
              scale: 1.4,
            }}
          >
            <a href="mailto:ak@andrewkeir.xyz">
              <img src="/images/mail.png" alt="email me" />
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2 },
            }}
            whileHover={{
              scale: 1.4,
            }}
          >
            <a href="http://discord.com/users/402312907209048064">
              <img src="/images/discord.png" alt="" />
            </a>
          </motion.div>
        </div>
      </motion.div>
      </motion.div>
      </div>
    </>
  )
}

export default Contact
