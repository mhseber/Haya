"use client";
import React from "react";
import { motion } from "framer-motion";

const Filter = () => {
  const categories = [
    "T-Shirt",
    "Polo T-Shirt",
    "Drop Shoulder",
    "Perfume",
    "Visor Cap",
    "Docker Cap",
    "Pants",
    "Panjabi",
    "Accessories",
    "Abayas",
    "Kifaya",
    "Omani Thobe",
  ];

  return (
    <section className="flex flex-col items-center justify-center p-5 px-4">
      <motion.div
        className=" bg-sky-400 w-full max-w-5xl p-6 rounded-3xl shadow-2xl shadow-blue-700 "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="text-3xl font-bold text-black mb-6 flex items-center justify-center gap-2"
          animate={{ color: ["#000", "#0369a1", "#000"] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          🛍️ Filter Categories
        </motion.h1>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((item, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-6 py-2 border-2  rounded-lg border-black text-black font-semibold hover:bg-black hover:text-blue-800 transition duration-300"
            >
              {item}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Filter;
