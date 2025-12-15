import { motion } from "framer-motion"

export default function CTA() {
  return (
    <motion.section
      className="cta container"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2>Ready to grow your business?</h2>
      <p style={{ margin: "16px 0", color: "#555" }}>
        Join startups building faster with Sammunat.
      </p>
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started Today
      </motion.button>
    </motion.section>
  )
}
