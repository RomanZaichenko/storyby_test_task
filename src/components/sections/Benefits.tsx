"use client"
import { motion } from "framer-motion";
import { Container } from "../ui/Container";
import { Zap, Shield, BarChart } from "lucide-react";

const benefits = [
  {title: "Benefit 1", desc: "The Benefit 1 is making for something!",
    icon: <Zap/> },
  {title: "Benefit 2", desc: "The Benefit 2 is making for something!",
    icon: <Shield/> },
  {title: "Benefit 3", desc: "The Benefit 3 is making for something!",
    icon: <BarChart/> },
];

export const Benefits = () => {
  return (
    <section className="py-20 bg-white">
      <Container>
        <motion.h2
          initial={{opacity: 0, y: 0}}
          whileInView={{opacity: 1, y: 20}}
          viewport={{once: true}}
          >
          Benefits
        </motion.h2>

        <div className={"grid grid-cols-1 md:grid-cols-3 gap-8"}>
          {benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 30}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{delay: index * 0.2}}
              className={"p-6 border rounded-xl hover:shadow-xl " +
                "transition-shadow bg-gray-50"}
            >
              <div className="text-blue-600 mb-4 w-12 h-12">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}