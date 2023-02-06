import { motion } from "framer-motion"

const Experience = () => {
    return (
        <motion.div className="container"
        initial={{opactity: 0, width: 0}}
        animate={{opactiy: 1, width: "85vw"}}
        exit={{opacity: 0, x: window.innerWidth, transition: {duration: 0.3}}}
        >
            <p>Experience</p>
        </motion.div>
    )
}

export default Experience