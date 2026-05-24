import React, { useState } from "react";
import "./Gallery.css";

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { src: "/rasm1.jpg", title: "Welcome" },
     { src: "/rasm2.jpg", title: "Cat 😺" },
      { src: "/rasm3.jpg", title: "Strong 💪" },
       { src: "/rasm4.jpg", title: "SMILE シ" },
        { src: "/rasm5.jpg", title: "HEART ❤️‍🩹" },
         { src: "/rasm6.jpg", title: "DISCIPLINE 🥷" },
         { src: "/rasm7.jpg", title: "DISCIPLINE ❗" },
         { src: "/rasm8.jpg", title: "ACTION " },
          { src: "/rasm9.jpg", title: "FOCUS " },
          { src: "/rasm10.jpg", title: "NO ALONE " },
  ];

  return (
    <section id="gallery" className="gallery">

      <h2 className="gallery-title">
        Gallery
      </h2>

      <div className="gallery-container">

        {images.map((item, index) => (

          <div className="gallery-card" key={index}>

            <img src={item.src} alt={item.title} />

            <div
              className="gallery-overlay"
              onClick={() => setSelectedImage(item.src)}
            >

              <h3>{item.title}</h3>

              <button>
                View Project
              </button>

            </div>

          </div>

        ))}

      </div>

      {/* MODAL */}
      {selectedImage && (

        <div
          className="gallery-modal"
          onClick={() => setSelectedImage(null)}
        >

          <span className="gallery-close">
            &times;
          </span>

          <img
            className="gallery-modal-img"
            src={selectedImage}
            alt="Selected"
          />

        </div>

      )}

    </section>
  );
}

export default Gallery;