"use client";
import { motion } from "framer-motion";

export default function ScrollReveal({ children }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }} // only animate once
        >
            {children}
        </motion.div>
    );
}