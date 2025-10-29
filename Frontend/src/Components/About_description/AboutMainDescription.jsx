import React from "react";
import About_description from "./About_description";
import { assets } from "../../assets/frontend_assets/assets";

const AboutMainDescription = () => {
  return (
    <div>
      <div className="d-flex mt-4">
        <h3>About MonoX </h3>
        <div className="bg-dark mt-3" style={{width:"40px", height:"2px"}}></div>
      </div>
      <About_description
        image1={assets.p_img16}
        image2={assets.p_img23}
        txt1={
          "MonoX is not just a clothing brand — it’s a lifestyle statement. Built on the idea of bold minimalism, MonoX brings together modern designs, high-quality fabrics, and timeless appeal. Every piece in our collection is crafted to reflect individuality, confidence, and effortless style."
        }
        txt2={
          "We believe fashion should be simple yet striking. That’s why every MonoX product — from casual streetwear to sophisticated fits — combines comfort with creativity. Whether you’re dressing for work, weekends, or your next adventure, MonoX helps you express your personality through every look."
        }
      />
      <About_description
        image1={assets.p_img37}
        image2={assets.p_img40}
        txt1={
          "At MonoX, we’re committed to giving you more than just clothes. Our online platform makes shopping easy, safe, and enjoyable. With smooth browsing, secure payments, and fast delivery, we make sure your experience is as stylish as your outfit."
        }
        txt2={
          "Our mission is to empower everyone to wear confidence. By blending elegance with edge, MonoX continues to push boundaries in modern clothing while staying true to quality and sustainability."
        }
      />
    </div>
  );
};

export default AboutMainDescription;
