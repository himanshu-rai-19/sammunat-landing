import { motion, useScroll, useTransform } from "framer-motion"

export default function Features() {
  // Parallax scroll effect
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  const items = [
    {
      title: "Fast Setup",
      desc: "Get up and running in minutes with minimal configuration.",
      icon: "⚡",
      color: "#6366f1",
    },
    {
      title: "Secure Platform",
      desc: "Enterprise-grade security built into every layer.",
      icon: "🔒",
      color: "#22c55e",
    },
    {
      title: "Smart Analytics",
      desc: "Track performance and make data-driven decisions.",
      icon: "📊",
      color: "#f59e0b",
    },
    {
      title: "Easy Integration",
      desc: "Seamlessly connects with your existing tools.",
      icon: "🔗",
      color: "#ec4899",
    },
  ]

  return (
    <motion.section className="features" style={{ y }}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          Why Choose Sammunat?
        </motion.h2>

        <div className="feature-grid">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              className="card feature-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06, rotateX: 6, rotateY: -6 }}
              transition={{
                delay: index * 0.12,
                type: "spring",
                stiffness: 220,
              }}
              viewport={{ once: true }}
            >
              <div
                className="icon"
                style={{ background: item.color }}
              >
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
