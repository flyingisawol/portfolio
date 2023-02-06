import { motion } from "framer-motion"

const About = () => {
    return (
        <motion.div className="container"
        initial={{opactity: 0, width: 0}}
        animate={{opactiy: 1, width: "85vw", transition: {duration: 0.2}}}
        exit={{opacity: 0, x: window.innerWidth, transition: {duration: 0.2}}}
        >
            <p>Our ability to transmit information has, and will continue to transform our us and the way in which we orient ourselves in the world. I'm continuously inspired to explore life. To learn, grow & to iterate toward the best version of my self.</p>
            <br />
            <p>Hi, I'm AK. My journey with technology began back in the early 90's as a young kid connecting to bulletin boards and IRC chats via a 4.4kbps modem from the school library. I remain obsessed and in awe of the power of technology to this day. </p>
            <br />
            <p>I've tread an unusual path in life which has led me to explore many things including owning and operating my own business managing teams of upto 450 people, to travelling the world as a skydiving and body-flight coach, and most recently to explore a career in software engineering.</p>
            <br />
            <p>I hope you'll take a minute or two to look around, and reach out if you feel the call to adventure !</p>
        
        </motion.div>
    )
}

export default About