import "./nav.scss"
import Sidebar from "../Sidebar/sidebar"
import { motion } from "framer-motion"

const Nav = () => {
    return (
        <div className="navbar">
            {/*sidebar*/}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}>Lama dev</motion.span>
                <div className="social">
                    <a href="https://github.com/Shankar0715"><img src="/github.svg" alt="" /></a>
                    <a href="https://www.instagram.com/mr_yuvanshankar?igsh=cDV1d2FtaXBndmlt"><img src="/instagram.svg" alt="" /></a>
                    <a href="https://in.linkedin.com/in/shankar-s-763005265?original_referer=https%3A%2F%2Fwww.google.com%2F"><img src="/linkedin.svg" alt="" /></a>
                  
                </div>
            </div>
        </div>
    )

}

export default Nav