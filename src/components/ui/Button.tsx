import {motion, HTMLMotionProps} from 'framer-motion';
import {ReactNode} from "react";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: ReactNode
}

export const Button =
  ({children, variant = 'primary', ...props}: ButtonProps) => {
    const baseStyles = "px-8 py-3 rounded-full font-semibold " +
      "transition-all duration-300";

    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg",
      outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
    }


    return (
      <motion.button
        whileHover={{scale: 1.05}}
        whileTap={{scale: 0.95}}
        className={`${baseStyles} ${variants[variant]} ${props.className || ''}`}
        {...props}
      >
        {children}
      </motion.button>
    )
  }