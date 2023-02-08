import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const Header = () => {
  return (
    <>
      <div className="header">
        <ul>
          <motion.li
          whileHover={{
            scale: 1.3,
          }}
          transition={{
            type: 'spring', 
            stiffness: 300
          }}
          >
            <Link to="/">// Home</Link>
          </motion.li>
          <motion.li
          whileHover={{
            scale: 1.3,
          }}
          transition={{
            type: 'spring', 
            stiffness: 300
          }}
          >
            <Link to="/about">// About</Link>
          </motion.li>
          <motion.li
          whileHover={{
            scale: 1.3,
          }}
          transition={{
            type: 'spring', 
            stiffness: 300
          }}
          >
            <Link to="/proof-of-work">// Proof of Work</Link>
          </motion.li>
          <motion.li
          whileHover={{
            scale: 1.3,
          }}
          transition={{
            type: 'spring', 
            stiffness: 300
          }}
          >
            <Link to="/skills">// Skills</Link>
          </motion.li>
          {/* <motion.li>
            <Link to="/experience">// Experience</Link>
          </motion.li> */}
          <motion.li
          whileHover={{
            scale: 1.3,
          }}
          transition={{
            type: 'spring', 
            stiffness: 300
          }}
          >
            <Link to="contact">// Contact</Link>
          </motion.li>
        </ul>
      </div>
    </>
  )
}

export default Header
