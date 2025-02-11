"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Stéphanie B.",
    text: "L'entreprise Haussmann est très professionnelle tant dans les conseils, que dans l'accompagnement tout au long du projet. Les délais et devis sont très bien respectés. Le résultat est juste bluffant.",
    rating: 5,
  },
  {
    name: "Adem D.",
    text: "La Société HAUSSMANN est vraiment très professionnelle, aussi bien en termes de qualité que de prix! Ils ont réalisé un travail très rapide et d'une qualité remarquable !",
    rating: 5,
  },
  {
    name: "Jean-Luc M.",
    text: "Un grand merci pour la qualité exceptionnelle des travaux réalisés. La résine au sol est vraiment magnifique, et l'accompagnement dans toutes les étapes du projet a été parfait !",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-[#A31115]"
        >
          Témoignages
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <p className="font-semibold text-[#A31115]">{testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}