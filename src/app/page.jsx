"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaHeart } from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2025-12-15T17:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      {/* Sección 1: Hero */}
      <section className={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ¡Bienvenido al Baby Shower de <span>Dante</span>!
        </motion.h1>
        <p className={styles.subtitle}>
          Un día para celebrar la llegada de un nuevo milagro 💙
        </p>

        {/* Contador */}
        <div className={styles.countdown}>
          <div>
            <span>{timeLeft.days}</span>
            <p>Días</p>
          </div>
          <div>
            <span>{timeLeft.hours}</span>
            <p>Horas</p>
          </div>
          <div>
            <span>{timeLeft.minutes}</span>
            <p>Minutos</p>
          </div>
          <div>
            <span>{timeLeft.seconds}</span>
            <p>Segundos</p>
          </div>
        </div>
      </section>

      {/* Sección 2: Detalles del Evento */}
      <section className={styles.details}>
        <h2>
          <FaCalendarAlt /> Detalles del evento
        </h2>
        <div className={styles.detailGrid}>
          <div>
            <FaCalendarAlt className={styles.icon} />
            <p><strong>Fecha:</strong> Domingo 15 de Diciembre</p>
          </div>
          <div>
            <FaClock className={styles.icon} />
            <p><strong>Horario:</strong> 17:00 hs</p>
          </div>
          <div>
            <FaMapMarkerAlt className={styles.icon} />
            <p><strong>Lugar:</strong> Casa Quinta "Los Aromos"</p>
          </div>
        </div>
      </section>

      {/* Sección 3: Ecografía y Canción */}
      <section className={styles.memory}>
        <h2>Una mirada al pequeño Dante 💞</h2>
        <div className={styles.memoryContent}>
          <motion.img
            src="/ecografia.jpg"
            alt="Ecografía de Dante"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
          />
          <div className={styles.songBox}>
            <p>Escuchá esta canción mientras celebramos este momento:</p>
            <iframe
              width="100%"
              height="80"
              src="https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Sección 4: Ubicación */}
      <section className={styles.mapSection}>
        <h2>Ubicación del evento 📍</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.358217087247!2d-58.38155998477071!3d-34.6036844804594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacd6cd8f2fd%3A0x9d84f37bba9c58e!2sCasa%20Quinta!5e0!3m2!1ses!2sar!4v1699630435650!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      {/* Sección 5: Frase Motivacional */}
      <section className={styles.quote}>
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          “Cada pequeño comienzo encierra una gran promesa.” <br />
          ¡Te esperamos con amor, Dante! <FaHeart className={styles.heartIcon} />
        </motion.blockquote>
      </section>
    </div>
  );
}
