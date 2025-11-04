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

  // 🎵 Variante del audio remoto (opción predeterminada)
  const remoteAudio =
    "https://cdn.pixabay.com/download/audio/2022/03/15/audio_1c33a0f9b4.mp3?filename=soft-piano-ambient-110241.mp3";

  // 🎵 Variante local (por si subís tu archivo a /public/music.mp3)
  const localAudio = "/music.mp3";

  useEffect(() => {
    const targetDate = new Date("2025-12-15T17:00:00");
    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;
      if (difference <= 0) {
        clearInterval(timer);
        return setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
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

  return (
    <div className={styles.container}>
      {/* NAVBAR */}
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="hero" smooth duration={800}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="details" smooth duration={800}>
              Detalles
            </Link>
          </li>
          <li>
            <Link to="memory" smooth duration={800}>
              Ecografía
            </Link>
          </li>
          <li>
            <Link to="map" smooth duration={800}>
              Ubicación
            </Link>
          </li>
          <li>
            <Link to="quote" smooth duration={800}>
              Mensaje
            </Link>
          </li>
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
        <h2>
          <FaCalendarAlt /> Detalles del evento
        </h2>
        <div className={styles.detailGrid}>
          <div>
            <FaCalendarAlt className={styles.icon} />
            <p>
              <strong>Fecha:</strong> Domingo 15 de Diciembre
            </p>
          </div>
          <div>
            <FaClock className={styles.icon} />
            <p>
              <strong>Horario:</strong> 17:00 hs
            </p>
          </div>
          <div>
            <FaMapMarkerAlt className={styles.icon} />
            <p>
              <strong>Lugar:</strong> Casa Quinta “Los Aromos”
            </p>
          </div>
        </div>
      </motion.section>

      {/* ECOSONOGRAMA */}
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.358217087247!2d-58.38155998477071!3d-34.6036844804594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccacd6cd8f2fd%3A0x9d84f37bba9c58e!2sCasa%20Quinta!5e0!3m2!1ses!2sar!4v1699630435650!5m2!1ses!2sar"
          width="100%"
          height="400"
          style={{ border: 0, borderRadius: "20px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.section>

      {/* FRASE FINAL */}
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
          “Cada pequeño comienzo encierra una gran promesa.” <br />
          ¡Te esperamos con amor, Dante!{" "}
          <FaHeart className={styles.heartIcon} />
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

      {/* AUDIO PLAYER — usa el remoto por defecto */}
      <audio ref={audioRef} src={remoteAudio} loop preload="none" />
    </div>
  );
}
