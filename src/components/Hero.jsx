import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef = useRef(); // 這個可以對有設定ref={videoRef}的tag有更多的調整

  useEffect(() => {
    // 如果videoRef has been attached to any element,調整影片撥放速度快1倍(速度*2)
    if (videoRef.current) videoRef.current.playbackRate = 2;
  }, []);

  return (
    <section id="hero">
      <div>
        <h1>MacBook Pro</h1>
        <img src="/title.png" alt="MacBook Title" />
      </div>

      <video ref={videoRef} src="/videos/hero.mp4" autoPlay muted playsInline />

      <button>Buy</button>

      <p>From $1599 or $133/mo for 12 months</p>
    </section>
  );
};

export default Hero;
