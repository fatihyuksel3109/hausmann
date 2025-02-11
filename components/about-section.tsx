"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#A31115]">À propos de nous</h2>
            <p className="text-gray-600 mb-6">
              Depuis plus de 20 ans, Haussmann Sols Résine est votre expert en solutions de revêtement de sol innovantes. 
              Spécialisés dans les sols en résine et les tapis de pierre, nous transformons vos espaces avec des finitions 
              élégantes et durables.
            </p>
            <p className="text-gray-600">
              Notre engagement envers l&apos;excellence et notre expertise technique nous permettent de réaliser 
              des projets exceptionnels pour nos clients, qu&apos;ils soient particuliers ou professionnels.
            </p>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/assets/Resine-epoxy-sol-avantages-inconvenients-prix.jpeg"
              alt="Notre expertise"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}