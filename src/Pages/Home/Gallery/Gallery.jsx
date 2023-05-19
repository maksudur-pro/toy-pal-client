import React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const toyVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const hoverVariants = {
  hover: { scale: 1.1 },
};

const dragConstraints = {
  top: -50,
  bottom: 50,
  left: -50,
  right: 50,
};

const images = [
  "https://i.ibb.co/7bd2GWK/17562718-cont-2-07.jpg",
  "https://i.ibb.co/0M3CBJF/7951318-3796664.jpg",
  "https://i.ibb.co/74LJbLM/81499-Jc66w-L-AC-SL1500.jpg",
  "https://i.ibb.co/jgCJ6tQ/71y-UM9-SJh-EL-AC-SL1500.jpg",
  "https://i.ibb.co/zmTNSL3/71-Bwj-Ur69-OL-AC-SL1500.jpg",
  "https://i.ibb.co/jksgDd1/19713200-pwiq-1kxd-170315.jpg",
];

const Gallery = () => {
  const x = useMotionValue(0);
  const rotateY = useTransform(x, [-200, 200], [-30, 30]);

  return (
    <div className="container mx-auto py-16">
      <div className="text-center mb-5">
        <h2 className="text-5xl text-center font-bold">We Love Trends</h2>
        <p className="text-center mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
          illo error tenetur expedita unde,
          <br /> doloremque animi cumque molestiae
        </p>
      </div>
      <motion.div className="w-full mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 rounded-lg p-4 h-full"
          style={{
            perspective: "1000px",
            border: "2px solid transparent",
            borderRadius: "20px",
            borderImageSlice: 1,
          }}>
          {images.map((image, i) => (
            <motion.div
              key={i}
              variants={toyVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="overflow-hidden rounded-lg shadow-md"
              drag="x"
              dragConstraints={dragConstraints}
              style={{ x, rotateY }}>
              <motion.img
                src={image}
                alt={`Toy ${i + 1}`}
                className="w-full h-auto"
                variants={hoverVariants}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Gallery;
