"use client"

import {motion} from 'framer-motion'
import {Button} from "@/components/ui/Button"
import {Container} from "@/components/ui/Container";
import {trackPixelEvent} from "@/lib/pixel";


export const Hero = () => {
  const handleLead = () => {
    trackPixelEvent("Lead")
    console.log("Pixel lead event sent")
  }

  return (
    <section className="relative bg-gray-50 py-20 lg:py-32 overflow-hidden">
      <Container className={"relative z-10 text-center"}>
        <motion.h1
          initial = {{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.8}}
          className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
        >
          Header
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Accusantium enim et eum excepturi fuga illo inventore libero magni
          odit pariatur quae saepe sed, sint vero voluptas! Facilis ipsam
          labore tempore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Button onClick={handleLead}>Button text</Button>
        </motion.div>
      </Container>
    </section>
  )
}