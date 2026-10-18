"use client";
import { motion } from "framer-motion";

export default function WordAnimation({ text }) {
    const words = text.split(" ");

    return (
        <div className="flex flex-wrap">
            {words.map((word, i) => (
                <motion.span
                    key={i}
                    className="mr-2"
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{
                        delay: i * 0.25,
                        duration: 0.6,
                        ease: "easeOut",
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
}