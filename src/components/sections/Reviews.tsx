"use client"

import { motion } from "framer-motion";
import { Container } from "../ui/Container";

export const Reviews = () => {
  return (
    <section className={"py-20 bg-blue-900 text-white"}>
      <Container>
        <h2 className={"text-3xl font-bold text-center mb-12"}>Reviews</h2>

        <div className={"grid grid-cols-1 md:grid-cols-2 gap-8"}>
          {[1,2].map((index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50}}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className= "bg-blue-800 p-8 rounded-lg"
            >
              <p className={"italic mb-4"}>
                "Some text in review"
              </p>
              <div className={"font-bold"}>Client {index}</div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}