import { Button } from "@/components/ui/button";
import { motion } from "motion/react";

export const HeroSection = () => {
  return (
    <section className="overflow-hidden bg-white dark:bg-transparent">
      <div className="relative mx-auto max-w-5xl px-6 py-28 lg:py-24">
        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <h1 className="text-balance text-4xl font-semibold md:text-5xl lg:text-6xl">
            <motion.span
              initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.1,
                ease: "easeInOut",
              }}
            >
              Lorem ipsum dolor sit amet
            </motion.span>
          </h1>
          <motion.p
            className="mx-auto my-8 max-w-2xl text-xl"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 0.5,
            }}
          >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
              delay: 1,
            }}
          >
            <Button
              asChild
              size="lg"
              className="w-60 text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href="#waitlist">
                <span className="btn-label">Hero Section</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="mx-auto -mt-16 max-w-7xl [mask-image:linear-gradient(to_bottom,black_50%,transparent_100%)]">
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="w-full overflow-hidden rounded-xl border border-gray-300 dark:border-gray-700">
            <img
              src="https://placehold.co/2910x1786"
              alt="Landing page preview"
              className="aspect-[16/9] h-auto w-full object-cover"
              height={1000}
              width={1000}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
