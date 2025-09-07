// src/components/Contact.jsx
import React, { useRef, useState, useCallback } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Contact = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_zb180fd",       // Your Service ID
        "template_qocnbge",      // Your Template ID
        formRef.current,
        "OJEoEUSKZnkG3g6NB"      // Your Public Key
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
      })
      .catch(() => {
        setStatus("error");
      });
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="contact-section" id="contact">
      {/* Floating decorative particles */}
      <Particles
        id="tsparticles-contact"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          detectRetina: true,
          fpsLimit: 60,
          particles: {
            number: { value: 8 },
            move: { enable: true, speed: 1, direction: "none", outModes: { default: "out" } },
            opacity: { value: 0.15 },
            shape: { type: "circle" },
            size: { value: { min: 8, max: 20 }, random: true },
          },
        }}
        style={{ position: "absolute", inset: 0, pointerEvents: "none" }}
      />

      <motion.h2
        className="contact-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Let’s Build Something Together
      </motion.h2>

      <p className="contact-description">
        Have a project idea or just want to say hello? Fill out the form below, and I’ll get back to you soon!
      </p>

      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        className="contact-form"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          whileFocus={{ scale: 1.03 }}
        />
        <motion.input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          whileFocus={{ scale: 1.03 }}
        />
        <motion.textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          required
          whileFocus={{ scale: 1.03 }}
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {status === "sending" ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>

      {status === "success" && (
        <motion.p
          className="contact-status success"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ✅ Message sent successfully!
        </motion.p>
      )}
      {status === "error" && (
        <motion.p
          className="contact-status error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          ❌ Failed to send message. Please try again.
        </motion.p>
      )}
    </section>
  );
};

export default Contact;
