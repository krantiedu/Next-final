import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const kidsImg =
  "https://img.freepik.com/premium-photo/kids-science-concept-cute-indian-little-kid-student-scientist-studying-science-experimenting-with-microscope-chemicals-with-diagrams-doodles-drawn-green-chalkboard_466689-17299.jpg";
// import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const token =  localStorage.getItem('token'); 
    if(!!token) {
      return setIsLoggedin(true)
    }else{
      setIsLoggedin(false)
    }
  }, []);

  return (
    <>
      <section className="home">
        <div className="overlay"></div>
        <div id="hero"></div>
        <div className="container2" data-aos="fade-up">
          <h1>Learning Today,</h1>
          <h1>Leading Tomorrow</h1>
          <p>On the way of making school and classes smart.</p>
          {/* <!-- <button>start</button> --> */}
          <Link href={isLoggedin ? "/dashboard" : "/login"}>
          <button className="bottom">
            get started
            <span className="bg"></span>
          </button>
          </Link>
          
        </div>
      </div>

      {/*Review Section */}
      <div className="review_section">
        <div className="review_card_wrap">
          <div className="review_card">
            <div className="review_card_img_wrap">
              <Image
                src={`https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="review_card_rev_wrap">
              <p className="review_card_rev">There are many variations of passages of Lorem Ipsum available</p>
              <div className="card_footer">
                <p>78 student</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="review_card">
            <div className="review_card_img_wrap">
              <Image
                src={`https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="review_card_rev_wrap">
              <p className="review_card_rev">There are many variations of passages of Lorem Ipsum available</p>
              <div className="card_footer">
                <p>78 student</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </section>
        <div className="why_us">
          <div className="whyus_container">
            <h3>Why Choose Kranti?</h3>
            <p>
              Kranti is a pioneering organization in the education sector that
              is dedicated to making classrooms smarter and more accessible.
              They believe in the transformative power of technology and are
              committed to providing equal educational opportunities to all
              students. {"Kranti's"} comprehensive training and support helps
              educational institutions create engaging and inclusive learning
              environments.
            </p>
            <div className="text-center">
              <Link href="/about" className="more-btn">
                Learn More <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
