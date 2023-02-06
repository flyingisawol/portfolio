import { motion } from "framer-motion"

const Skills = () => {
    return (
        <motion.div className="container"
        initial={{opactity: 0, width: 0}}
        animate={{opactiy: 1, width: "85vw"}}
        exit={{opacity: 0, x: window.innerWidth, transition: {duration: 0.3}}}
        >
            <p>Javascript, React, Python, MongoDB, PostgresQL, Express, NodeJS, </p>
        </motion.div>
    )
}

export default Skills