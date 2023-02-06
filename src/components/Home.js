import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <motion.div
        className="AK-SE"
        initial={{ opactity: 0 }}
        animate={{ opactiy: 1, height: 1, transition: { duration: .1 } }}
        exit={{ opacity: 0, height: 0, transition: { duration: 1 } }}
      >
        <motion.div
          className="headings"
          initial={{ 
            opactity: 0, 
          }}
          animate={{
            opactiy: 1,
            scale: [0, 1, 1.3, 1],
            x: [-2000, 0],
            transition: {duration: 1, delay: .2} 
          }}
          exit={{
            scale: [1, 1, 0.5, 0],
            rotate: [0, 360, 360, 0],
            transition: { duration: 0.6 },
          }}
        >
          <div className="name">
            <h2>ANDREW KEIR</h2>
          </div>

          <div className="name-blur">
            <h2>ANDREW KEIR</h2>
          </div>
        </motion.div>

        <motion.div
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {delay: 1.5, duration: 1.5}
        }}
        exit={{
          opacity: 0,
          transition: {delay: 1.5, duration: 1.5}
        }}

        >
          <div className="title">
            <h2>Software Engineer</h2>
          </div>

          <div className="title-blur">
            <h2>Software Engineer</h2>
          </div>
        </motion.div>

        <div className="contacts">
          <motion.div
            className="logo1"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              scale: [1, 1.2, 1.2, 1],
              rotate: [0, 0, 180, 180, 0],
              transition: {duration: 2, delay: 2.5} 
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
              transition: {delay: 0, duration: 1}
            }}
          >
            <a href="https://github.com/flyingisawol">
              <img src="/github-mark-white.png" alt="find me on github" />
            </a>
          </motion.div>
          <motion.div
            className="logo2"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: {duration: 2, delay: 2.5} 
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
              transition: {delay: 0, duration: 1}
            }}
          >
            <a href="mailto:ak@andrewkeir.xyz">
              <img src="/mail.png" alt="email me" />
            </a>
          </motion.div>
          <motion.div
            className="logo3"
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: {duration: 2, delay: 2.5} 
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
              transition: {delay: 0, duration: 1}
            }}
          >
            <img src="/discord.png" alt="" />
          </motion.div>
        </div>
      </motion.div>
    </>
  )
}

export default Home
