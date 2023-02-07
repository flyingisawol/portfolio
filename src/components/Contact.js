import { motion } from "framer-motion"

const Contact = () => {
  return (
    <>
    <div className="container">
      <motion.div
        initial={{ opactity: 0, width: 0 }}
        animate={{ opactiy: 1, width: "100vw" }}
        exit={{
          opacity: 0,
          x: window.innerWidth,
          width: 0,
          transition: { duration: 0.3 },
        }}
      >
      <motion.div className="contact-me">
        Wow, you made it this far 👊
        <br />
        <br />
        Thank you for taking the time to look around and explore my work. <br />
        <br />
        If you would like to chat, you can reach me at the below 🤙
        <div className="contacts">
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.2, 1.2, 1],
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2, delay: 2.5 },
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 3.5,
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.5 },
            }}
          >
            <a href="https://linkedin.com/in/andrewwallacekeir">
              <img src="/in.png" alt="find me on linkedin" />
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.2, 1.2, 1],
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2, delay: 2.5 },
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 3.5,
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
          >
            <a href="https://github.com/flyingisawol">
              <img src="/github-mark-white.png" alt="find me on github" />
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2, delay: 2.5 },
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 3.5,
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
          >
            <a href="mailto:ak@andrewkeir.xyz">
              <img src="/mail.png" alt="email me" />
            </a>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2, delay: 2.5 },
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 3.5,
            }}
            exit={{
              opacity: 0,
              transition: { delay: 0, duration: 0.5 },
            }}
          >
            <a href="http://discord.com/users/402312907209048064">
              <img src="/discord.png" alt="" />
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
