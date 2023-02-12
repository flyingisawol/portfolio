import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Pow = () => {
  return (
    <div className="page-container">
      <motion.div
        className="pow"
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
        <div className="layout">
          <motion.div className="heading4">
            <h2>Recent Projects</h2>
          </motion.div>
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
            <Link to="https://github.com/flyingisawol/CRUD-App">
              <motion.div
                className="project"
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
                Lightning Merchant Finder
                <motion.div
                  className="tech"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                    transition: { duration: 0.2 },
                  }}
                >
                  Node.js / Express / MongoDB / Mongoose / Passport / Javascript
                  / EJS / Bootstrap
                </motion.div>
              </motion.div>
            </Link>
            <Link to="https://github.com/flyingisawol/getReal">
              <motion.div
                className="project"
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
                Dating App: <br />
                Team Project
                <motion.div
                  className="tech"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  MERN Stack: <br />
                  MongoDB / Express / React / Node.js / <br />+ Javascript
                </motion.div>
              </motion.div>
            </Link>
            <Link to="https://github.com/flyingisawol/job-board">
              <motion.div
                className="project"
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
                Job Search: <br />
                React App
                <motion.div
                  className="tech"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  Python / React / Flask / PostgresQL / SQL Alchemy
                </motion.div>
              </motion.div>
            </Link>
            <Link to="https://flyingisawol.github.io/tic-tac-toe/">
              <motion.div
                className="project"
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
                Tic Tac Toe
                <motion.div
                  className="tech"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  Javascript / CSS / HTML
                </motion.div>
                <motion.div
                  className="proj-img"
                  initial={{
                    opacity: 0,
                  }}
                  whileHover={{
                    opacity: 1,
                  }}
                >
                  <img src="/tictactoe.png" />
                </motion.div>
              </motion.div>
            </Link>
          </motion.div>
          <div className="layout">
            <motion.div
              className="heading4"
              initial={{
                opacity: 1,
                transition: { delay: 4, duration: 4 },
              }}
              animate={{
                opacity: 0,
                transition: { delay: 0, duration: 4 },
              }}
              exit={{
                opacity: 0,
              }}
            >
              <h2>Other Projects:</h2>
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
                  className="project"
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
                  AWOL
                  <motion.div
                    className="tech"
                    initial={{
                      opacity: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                  ></motion.div>
                </motion.div>
              </Link>
              <Link to="http://bitcoinmountain.info">
                <motion.div
                  className="project"
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
                  Bitcoin Mountain
                  <motion.div
                    className="tech"
                    initial={{
                      opacity: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                  ></motion.div>
                </motion.div>
              </Link>
              <Link to="http://votecaroline.com">
                <motion.div
                  className="project"
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
                  Caroline White: Political Campaign
                  <motion.div
                    className="tech"
                    initial={{
                      opacity: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                  ></motion.div>
                </motion.div>
              </Link>
              <Link to="http://melbournebernese.com.au">
                <motion.div
                  className="project"
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
                  Melbourne Bernese
                  <motion.div
                    className="tech"
                    initial={{
                      opacity: 0,
                    }}
                    whileHover={{
                      opacity: 1,
                    }}
                  ></motion.div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
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
            <Link to="/skills">Technologies</Link>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

export default Pow
