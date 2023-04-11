import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible
};

export function Home() {
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible
        }}
        style={
          {
            "--base-width": "24vw",
            top: "-18vw",
            letterSpacing: "-1.4vw",
            x: "-50%"
          } as any
        }
      >
        Galleries
      </motion.h1>
      <ul>
        <motion.li variants={itemVariants}>
          <Link to="/amsterdam">Amsterdam Zuid nightwalk</Link>
        </motion.li>
        <motion.li variants={itemVariants}>
          <Link to="/london">White lines of Canary Wharf</Link>
        </motion.li>
      </ul>
    </motion.article>
  );
}
