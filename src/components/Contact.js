import { motion } from "framer-motion"

const Contact = () => {
    return (
        <motion.div className="container"
        initial={{opactity: 0, width: 0}}
        animate={{opactiy: 1, width: "85vw"}}
        exit={{opacity: 0, x: window.innerWidth, transition: {duration: 0.3}}}
        >
            <p>linkedin/in/andrewwallacekeir</p>
            <br />
            <p>github.com/flyingisawol</p>
            <br />
            <p>nostr: npub1xjfd6s75j63r0azyrlvqrag83d34gtp7zk8la2grevpq5xh5llws9lwuey</p>
        </motion.div>
    )
}

export default Contact