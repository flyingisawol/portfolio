import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Swiper, SwiperSlide, Navigation } from "swiper/react"
import "swiper/css"

const Pow = () => {
  return (
    <motion.div
      className="page-container"
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
    >
      <div className="layout">
        <h1 className="">Currently working on...</h1>
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
            <h6>Eventstr - a nostr micro app</h6>
            <Link to="https://eventstr.xyz">
              <motion.div
                className="currently project"
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
              className=""
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              Typescript
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
              <Link to="https://github.com/flyingisawol/eventstr">
                [View Code]
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
      <h1 className="">Previously worked on...</h1>

      <Swiper spaceBetween={50} slidesPerView={3}>
        <SwiperSlide>
          <div className="project-heading">
            <h6>Eventstr - a nostr micro app</h6>
            <Link to="https://eventstr.xyz">
              <motion.div
                className="currently project"
                whileHover={{
                  scale: 1.05,
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
              className=""
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
                transition: { duration: 2 },
              }}
            >
              Typescript
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
              <Link to="https://github.com/flyingisawol/eventstr">
                [View Code]
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-heading">
            <h6>Lightning Merchant Finder</h6>
            <Link to="https://lightning-merchant-finder.fly.dev/">
              <motion.div
                className="project1 project"
                whileHover={{
                  scale: 1.05,
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
              Node.js / Express / MongoDB / Mongoose / Passport / Javascript /
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
              <Link to="https://github.com/flyingisawol/CRUD-App">
                [View Code]
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-heading">
            <h6>Flicker - Dating App app app app</h6>
            <Link to="https://github.com/flyingisawol/getReal">
              <motion.div
                className="project2 project"
                whileHover={{
                  scale: 1.05,
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
              Node.js / Express / React / Javascript / MongoDB
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
              <Link to="https://github.com/flyingisawol/getReal">
                [View Code]
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="project-heading">
            <h6>Job Finder React App</h6>
            <Link to="https://github.com/flyingisawol/job-board">
              <motion.div
                className="project3 project"
                whileHover={{
                  scale: 1.05,
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
            <div className="code">
              <Link to="https://github.com/flyingisawol/job-board">
                [View Code]
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <motion.div className="project-heading">
            <h6>Tic Tac Toe</h6>
            <Link to="https://flyingisawol.github.io/tic-tac-toe/">
              <motion.div
                className="project4 project"
                whileHover={{
                  scale: 1.05,
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
              <Link to="https://github.com/flyingisawol/tic-tac-toe">
                [View Code]
              </Link>
            </motion.div>
          </motion.div>
        </SwiperSlide>
      </Swiper>
    </motion.div>
  ) 
}

export default Pow
