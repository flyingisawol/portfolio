import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Pow = () => {
  return (
    <motion.div
      className="page-container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.6 },
      }}
    >
      <div className="layout">
        <motion.div
          className="projects"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 1 },
          }}
        >
          <div className="project-heading">
            <h6>Lightning Merchant Finder</h6>
            <Link to="https://lightning-merchant-finder.fly.dev/">
              <motion.div
                className="project1 project"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "45%", "45%", "0%"],
                }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </Link>
            <motion.div
              className="tech"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              Node.js / Express / MongoDB / 
              Mongoose / Passport / Javascript / 
              EJS / Bootstrap
            </motion.div>
            <motion.div
              className="code"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
            <Link to="https://github.com/flyingisawol/CRUD-App">[View Code]</Link>
            </motion.div>
          </div>
          <div className="project-heading">
            <h6>Flicker - Dating App</h6>
            <Link to="https://github.com/flyingisawol/getReal">
              <motion.div
                className="project2 project"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "45%", "45%", "0%"],
                }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </Link>
            <motion.div
              className="tech"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              MongoDB / Express / React / Node.js / Javascript
            </motion.div>
            <motion.div
              className="code"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
            <Link to="https://github.com/flyingisawol/getReal">[View Code]</Link>
            </motion.div>
          </div>
          <div className="project-heading">
            <h6>Job Finder React App</h6>
            <Link to="https://github.com/flyingisawol/job-board">
              <motion.div
                className="project3 project"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "45%", "45%", "0%"],
                }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </Link>
            <motion.div
              className="tech"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              Python / React / Flask / PostgresQL / SQL Alchemy
            </motion.div>
            <motion.div
              className="code"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
            <Link to="https://github.com/flyingisawol/job-board">[View Code]</Link>
            </motion.div>
          </div>
          <div className="project-heading">
            <h6>Tic Tac Toe</h6>
            <Link to="https://flyingisawol.github.io/tic-tac-toe/">
              <motion.div
                className="project4 project"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, 0, 180, 180, 0],
                  borderRadius: ["0%", "0%", "45%", "45%", "0%"],
                }}
                onHoverStart={(e) => {}}
                onHoverEnd={(e) => {}}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
              ></motion.div>
            </Link>
            <motion.div
              className="tech"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              Javascript / CSS / HTML
            </motion.div>
            <motion.div
              className="code"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
            <Link to="https://github.com/flyingisawol/tic-tac-toe">[View Code]</Link>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="projects"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 1, delay: 1 },
          }}
        >
          <Link to="http://flyingisawol.com">
            <motion.div
              className="project5 project"
              whileHover={{
                scale: 1.2,
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "45%", "45%", "0%"],
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="tech"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="https://bitcoinmountain.info">
            <motion.div
              className="project6 project"
              whileHover={{
                scale: 1.2,
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "45%", "45%", "0%"],
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="tech"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="http://votecaroline.com">
            <motion.div
              className="project project7"
              whileHover={{
                scale: 1.2,
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "45%", "45%", "0%"],
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="tech"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              ></motion.div>
            </motion.div>
          </Link>
          <Link to="http://melbournebernese.com.au">
            <motion.div
              className="project project8"
              whileHover={{
                scale: 1.2,
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "45%", "45%", "0%"],
              }}
              onHoverStart={(e) => {}}
              onHoverEnd={(e) => {}}
              transition={{
                duration: 1,
                ease: "easeInOut",
              }}
            >
              <motion.div
                className="tech"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
              ></motion.div>
            </motion.div>
          </Link>
        </motion.div>
        <motion.button
          className="thruButton"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 2 },
          }}
          whileHover={{
            scale: 1.2,
            boxShadow: "0px 0px 8px rgb(255, 255, 255)",
          }}
        >
          <Link to="/skills">Technologies</Link>
        </motion.button>
      </div>
    </motion.div>
  )
}

export default Pow
