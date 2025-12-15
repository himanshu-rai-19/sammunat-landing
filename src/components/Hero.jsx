import { motion } from "framer-motion"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section className="hero-wrapper">
      {/* Animated background blobs */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <motion.div
        className="hero container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.span variants={item} className="badge">
          🚀 Trusted by modern startups
        </motion.span>

        <motion.h1 variants={item}>
          Build <span className="gradient-text">Smarter</span>.  
          <br />
          Launch <span className="gradient-text">Faster</span>.
        </motion.h1>

        <motion.p variants={item}>
          Sammunat is a next-generation platform that helps startups
          automate workflows, gain insights, and scale with confidence.
        </motion.p>

        <motion.div variants={item} className="hero-actions">
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="primary-btn"
          >
            Start Free Trial
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="secondary-btn"
          >
            Watch Demo
          </motion.button>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          className="hero-stats"
          variants={item}
        >
          <div>
            <h3>10k+</h3>
            <p>Users</p>
          </div>
          <div>
            <h3>99.9%</h3>
            <p>Uptime</p>
          </div>
          <div>
            <h3>50+</h3>
            <p>Integrations</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
