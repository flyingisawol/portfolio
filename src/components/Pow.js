import { motion } from "framer-motion"

const Pow = () => {
  return (
    <motion.div
      className="container"
      initial={{ opactity: 0, width: 0 }}
      animate={{ opactiy: 1, width: "85vw" }}
      exit={{ opacity: 0, x: window.innerWidth, transition: { duration: 0.3 } }}
    >
      <p>GA Projects:</p>
      <ul>
        <li>
          Lightning Merchant Finder [Node.js, Express, MongoDB, Mongoose,
          Passport, Javascript, EJS, Bootstrap]
        </li>
        <li>Job Search</li>
        <li>GetReal - Dating App [MERN: MongoDB, Express, React, Node]</li>
        <li>Tic-tac-toe</li>
      </ul>
      <br />
      <p>Projects:</p>
      <ul>
        <li>Lightning Store Finder</li>
        <li>GetReal - Dating App</li>
        <li>Tic-tac-toe</li>
      </ul>
    </motion.div>
  )
}

export default Pow
