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
            transition: { duration: 2, delay: .3 },
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
            transition: { duration: 2, delay: .6 },
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
            transition: { duration: 2, delay: .9 },
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
    </motion.div>
  )
}

export default Skills
