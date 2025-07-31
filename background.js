

function toggleMenu() {
      document.getElementById('navLinks').classList.toggle('active');
      document.getElementById('navButtons').classList.toggle('active');
    }


  const testimonials = [
    {
      text: "This service was extremely helpful and professional.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkmqZ4esW1ZlUrLAAkHkC_Td4Ff4UBagmbkQ&s"
    },
    {
      text: "Amazing support and timely delivery!",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDUkqWYroqPM8N0p_uvsI8zVzhqE33KSPpUA&s"
    },
    {
      text: "Would recommend it to anyone looking for quality work.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0_sy5dSQ_44g7lnT3Cp2lS34AEEM-m5oKw&s"
    }
  ];

  let currentIndex = 0;

  function changeSlide(direction) {
    currentIndex = (currentIndex + direction + testimonials.length) % testimonials.length;
    document.getElementById("testimonial-text").innerText = `"${testimonials[currentIndex].text}"`;
    document.querySelector(".client-photo img").src = testimonials[currentIndex].img;
  }
