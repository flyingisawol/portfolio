import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Home = () => {
  return (
    <>
      <motion.div
        className="main"
        initial={{
          opacity: 0,
          transition: { duration: 0.5 },
        }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5 },
        }}
        exit={{
          opacity: 0,
          transition: { duration: 0.3 },
        }}
      >
        <motion.div
          className="headings"
          initial={{
            opactity: 0,
          }}
          animate={{
            opactiy: 1,
            scale: [0, 1],
            x: [-2000, 0],
            transition: { duration: 1, delay: 0.1 },
          }}
          exit={{
            scale: [1, 0.5, 0.5, 0],
            opacity: 0,
          }}
        >
          <div id="bootstrap-override" className="name">
            ANDREW KEIR
          </div>

          <div className="name-blur">
            ANDREW KEIR
          </div>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1.5, duration: 1.5 },
          }}
          exit={{
            opacity: 0,
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
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              rotate: [0, 0, 180, 180, 0],
              transition: { duration: 2, delay: 2.5 },
            }}
            whileHover={{
              scale: 1.2,
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
              transition: { duration: 2, delay: 2.5 },
            }}
            whileHover={{
              scale: 1.2,
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
              transition: { duration: 2, delay: 2.5 },
            }}
            whileHover={{
              scale: 1.2,
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
              transition: { duration: 2, delay: 2.5 },
            }}
            whileHover={{
              scale: 1.2,
            }}
          >
            <a href="http://discord.com/users/402312907209048064">
              <img src="/images/discord.png" alt="" />
            </a>
          </motion.div>
        </div>
        <div className="buttondiv">
          <motion.button
            className="exploreButton"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              transition: { delay: 3, duration: 2 },
            }}
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 8px rgb(255, 255, 255",
            }}
          >
            <Link to="/about">
              <span class="material-symbols-outlined">arrow_downward</span>
            </Link>
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}

export default Home
