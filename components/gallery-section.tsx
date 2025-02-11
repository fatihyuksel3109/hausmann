"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const galleryImages = [
  {
    src: "/assets/photo-1511747813271-99d6710c197d.avif",
    alt: "Sol en résine intérieur",
  },
  {
    src: "/assets/PHOTO-2021-08-15-12-44-28-7.jpg",
    alt: "Tapis de pierre extérieur",
  },
  {
    src: "/assets/722e7a_0130687ea8ea47518377418bb48e704c~mv2.avif",
    alt: "Finition résine décorative",
  },
  {
    src: "/assets/AcP_ral7016-anthrazitgrau-epodex-gießharz-industrieboden.jpg",
    alt: "Application résine industrielle",
  },
  {
    src: "/assets/flake-epoxy-garages-elevate-your-flooring-business-887298.webp",
    alt: "Revêtement résine garage",
  },
  {
    src: "/assets/Stone14.webp",
    alt: "Sol décoratif résine",
  },
];

export function GallerySection() {
  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-[#A31115]"
        >
          Notre Galerie
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative h-64 group overflow-hidden rounded-lg"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}