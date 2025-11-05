"use client";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaCalendarAlt,
  FaClock,
  FaMapMarkerAlt,
  FaHeart,
  FaPlay,
  FaPause,
} from "react-icons/fa";
import styles from "./page.module.css";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const remoteAudio =
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1c33a0f9b4.mp3?filename=soft-piano-ambient-110241.mp3";

  // 🎯 Fecha estimada de nacimiento — 9 de febrero de 2026
  useEffect(() => {
    const targetDate = new Date(2026, 1, 9, 0, 0, 0); // Mes 1 = febrero
    const timer = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      if (diff <= 0) {
        clearInterval(timer);
        return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleMusicToggle = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => {
        console.warn("No se pudo reproducir el audio:", err);
      });
    }
    setIsPlaying(!isPlaying);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const handleViewMap = () => {
    const mapsUrl =
      "https://www.google.com/maps/dir/?api=1&destination=Formosa+259,+General+Rodríguez,+Buenos+Aires";
    window.open(mapsUrl, "_blank");
  };

  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="hero" smooth duration={800}>Inicio</Link></li>
          <li><Link to="details" smooth duration={800}>Detalles</Link></li>
          <li><Link to="memory" smooth duration={800}>Ecografía</Link></li>
          <li><Link to="map" smooth duration={800}>Ubicación</Link></li>
          <li><Link to="quote" smooth duration={800}>Mensaje</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="hero" className={styles.hero}>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1 }}
        >
          ¡Contamos los días para conocer a <span>Dante</span>! 💚
        </motion.h1>
        <p className={styles.subtitle}>
          Faltan solo unos momentos para su llegada al mundo 🌿
        </p>

        {/* Contador de nacimiento */}
        <div className={styles.countdown}>
          <div><span>{timeLeft.days}</span><p>Días</p></div>
          <div><span>{timeLeft.hours}</span><p>Horas</p></div>
          <div><span>{timeLeft.minutes}</span><p>Minutos</p></div>
          <div><span>{timeLeft.seconds}</span><p>Segundos</p></div>
        </div>
      </section>

      {/* DETALLES */}
      <motion.section
        id="details"
        className={styles.details}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2><FaCalendarAlt /> Detalles del evento</h2>
        <div className={styles.detailGrid}>
          <div>
            <FaCalendarAlt className={styles.icon} />
            <p><strong>Fecha:</strong> Viernes 21 de Noviembre de 2025</p>
          </div>
          <div>
            <FaClock className={styles.icon} />
            <p><strong>Horario:</strong> de 13:00 a 17:00 hs</p>
          </div>
          <div>
            <FaMapMarkerAlt className={styles.icon} />
            <p><strong>Lugar:</strong> Formosa 259, General Rodríguez</p>
          </div>
        </div>
      </motion.section>

      {/* ECO */}
      <motion.section
        id="memory"
        className={styles.memory}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2>Una mirada al pequeño Dante 💞</h2>
        <div className={styles.memoryContent}>
          <motion.img
            src="./dante.png"
            alt="Ecografía de Dante"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
      </motion.section>

      {/* MAPA */}
      <motion.section
        id="map"
        className={styles.mapSection}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
      >
        <h2>Ubicación del evento 📍</h2>
        <iframe
          src="https://www.google.com/maps?q=Formosa+259,+General+Rodríguez,+Buenos+Aires&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <motion.button
          className={styles.mapButton}
          onClick={handleViewMap}
          whileTap={{ scale: 0.95 }}
        >
          Ver ubicación
        </motion.button>
      </motion.section>

      {/* MENSAJE FINAL */}
      <motion.section
        id="quote"
        className={styles.quote}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.blockquote transition={{ duration: 1 }}>
          “Festejamos juntos la llegada de un nuevo milagro llamado Dante.” <br />
          ¡Te esperamos con mucho amor! <FaHeart className={styles.heartIcon} />
        </motion.blockquote>
      </motion.section>

      {/* BOTÓN DE MÚSICA */}
      <motion.button
        className={styles.musicButton}
        onClick={handleMusicToggle}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isPlaying ? 360 : 0 }}
        transition={{
          repeat: isPlaying ? Infinity : 0,
          duration: 10,
          ease: "linear",
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </motion.button>

      {/* AUDIO */}
      <audio ref={audioRef} src={remoteAudio} loop preload="none" />
    </div>
  );
}
