import React from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import Home from "../components/Home"
import About from "../components/About"
import Pow2 from "../components/Pow2"
import Skills from "../components/Skills"
import Experience from "../components/Experience"
import Contact from "../components/Contact"

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <>
      <AnimatePresence>
        <Routes location={location} key={location.pathname} mode={"wait"}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proof-of-work" element={<Pow2 />} />
          <Route path="/skills" element={<Skills />} />
          {/* <Route path="/experience" element={<Experience />} /> */}
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  )
}

export default AnimatedRoutes
