"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Globe, MessageCircle } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center text-[#A31115]"
        >
          Contact
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <MapPin className="w-6 h-6 text-[#A31115] mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Adresse</h3>
                <p className="text-gray-600">
                  9 RUE DES MUGUETS<br />
                  67530 Boersch, France
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="w-6 h-6 text-[#A31115] mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Email</h3>
                <a href="mailto:haussmann67@gmail.com" className="text-gray-600 hover:text-[#A31115]">
                  haussmann67@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Globe className="w-6 h-6 text-[#A31115] mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Site Web</h3>
                <a href="http://www.haussmann67.fr" className="text-gray-600 hover:text-[#A31115]">
                  www.haussmann67.fr
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="w-6 h-6 text-[#A31115] mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Téléphone</h3>
                <div className="flex items-center space-x-4">
                  <a href="tel:0649933645" className="text-gray-600 hover:text-[#A31115]">
                    06 49 93 36 45
                  </a>
                  <a 
                    href="https://wa.me/33649933645"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-500 hover:text-green-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.4761757444447!2d7.4663!3d48.4834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c8b5d0c0c0a9%3A0x7c7d4a3a8c9c9c9c!2s9%20Rue%20des%20Muguets%2C%2067530%20Boersch!5e0!3m2!1sfr!2sfr!4v1620000000000!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}