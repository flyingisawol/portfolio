import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Skills = () => {
  return (
    <motion.div
      className="container"
      initial={{
        opactity: 0,
        width: 0,
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
      <div className="tech-stack">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.2, 1.2, 1],
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2 },
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
          <img src="/react.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            scale: [1, 1.2, 1.2, 1],
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 0.3 },
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
          <img src="/ts.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 0.6 },
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
          <img src="/js.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 0.9 },
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
          <img src="/python.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 1.2 },
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
          <img src="/postgres.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 1.5 },
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
          <img src="/node.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 1.8 },
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
          <img src="/mongo.png" alt="" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            rotate: [0, 0, 180, 180, 0],
            transition: { duration: 2, delay: 2.1 },
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
          <img src="/flask.png" alt="" />
        </motion.div>
      </div>
      <motion.div
        className="skills"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: { delay: 1, duration: 1 },
        }}
      >
        Beyond the logos and the languages, I have a willingness and eagerness
        to learn, contribute & improve. <br />
        <br />
        This is in my opinion my primary competency and value-add as technology continues to
        evolve, and we improve how we can integrate it to add value to our
        lives.
        <motion.button
          className="thruButton"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 4, duration: 2 },
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          }}
        >
          <Link to="/contact">Reach out</Link>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Skills
