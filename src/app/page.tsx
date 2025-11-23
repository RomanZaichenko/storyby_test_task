"use client"

import Link from "next/link";
import {motion} from "framer-motion";
import {ArrowRight, LayoutTemplate, Sparkles, Code2} from "lucide-react";

const projects = [
  {
    id: "1",
    title: 'Test task landing',
    description: "Some description",
    path: "/landings/demo-1",
    tags: ["Active", "Lead"],
    color: "bg-blue-50 text-blue-700 border-blue-200"
  }
]

const containerVariants = {
  hidden: {opacity: 0},
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className={"max-w-5xl mx-auto"}>
        <motion.div
          initial={{opacity: 0, y: -20}}
          animate={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          className={"text-center mb-16"}
        >
          <div className={"inline-flex items-center justify-center p-2 bg-white" +
                          "rounded-full shadow-sm mb-6"}>
            <span className="px-3 py-1 text-xs font-medium bg-indigo-100
                              text-indigo-700 rounded-full">
              Test Assignment
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900
                          tracking-tight mb-4"
          >
            Landing Page
            <span className="text-transparent bg-clip-text
                                          bg-gradient-to-r from-indigo-600
                                          to-blue-500"
            > Generator
            </span>
          </h1>
          <p className={"text-xl text-slate-600 max-w-2xl mx-auto"}>
            lorem ipsum dolor sit amet
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link href={project.path} className="group block h-full">
                <div className="relative h-full bg-white p-8 rounded-2xl border
                                border-slate-200 shadow-sm transition-all
                                duration-300 hover:shadow-xl
                                hover:border-indigo-300 hover:-translate-y-1">


                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-xl ${project.color}`}>
                      <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="text-slate-300 group-hover:text-indigo-600
                                 transition-colors"
                    >
                      <ArrowRight className="w-6 h-6" />
                    </motion.div>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2
                                 group-hover:text-indigo-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 mb-6">
                    {project.description}
                  </p>

                  <div className="flex gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 text-xs font-medium
                                                 bg-slate-100 text-slate-600
                                                 rounded-md border
                                                 border-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

          <motion.div variants={itemVariants} className="md:col-span-2 mt-8">
            <div className="bg-slate-900 rounded-2xl p-8 text-slate-300
                            flex flex-col md:flex-row items-center
                            justify-between">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="p-3 bg-slate-800 rounded-xl">
                  <Code2 className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Technical Stack</h4>
                  <p className="text-sm text-slate-400">Next.js 14 •
                    TypeScript • Tailwind • Framer Motion</p>
                </div>
              </div>
              <div className="flex gap-4 text-sm font-mono">
                <div className="px-4 py-2 bg-slate-800 rounded-lg border
                                border-slate-700">
                  SSG: Enabled
                </div>
                <div className="px-4 py-2 bg-slate-800 rounded-lg
                                border border-slate-700">
                  Pixel: Active
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}