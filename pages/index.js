import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
const kidsImg =
  "https://img.freepik.com/premium-photo/kids-science-concept-cute-indian-little-kid-student-scientist-studying-science-experimenting-with-microscope-chemicals-with-diagrams-doodles-drawn-green-chalkboard_466689-17299.jpg";
// import styles from '@/styles/Home.module.css'
import Link from "next/link";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Pop_Courses from "@/component/top_courses";
import Achivement from "@/component/achivement_sec";
import School from "@/component/school_partner";
import GoToTop from "@/partials/gototop";
import TutorCard from "@/component/TutorCard";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!!token) {
      return setIsLoggedin(true);
    } else {
      setIsLoggedin(false);
    }
  }, []);

  return (
    <div className="home_wrap">
      {/*Main Section */}
      <div className="main_section">
        <div className="main_content_wrap">
          <p className="main_content_eyeCatcher">
            <span>START</span>LEARNING FROM TODAY
          </p>
          <h1>The Best Way For Your Learning</h1>
          <div className="main_content_descript">
            <p>
              Welcome to KRANTI - an exceptional and empowering realm that paves
              the way for unparalleled learning, seamlessly blending ease and
              delight.
            </p>
          </div>
          <div className="main_content_btn_wrap">
            <Link href={isLoggedin ? `/dashboard` : `/login`}>
              <div className="get_started_button">
                <FontAwesomeIcon icon={faArrowRight} />
                Get Started
              </div>
            </Link>
            <div className="demo_button">
              <FontAwesomeIcon icon={faCirclePlay} />
              Watch Demo
            </div>
          </div>
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
              <p className="review_card_rev">
                There are many variations of passages of Lorem Ipsum available
              </p>
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
              <p className="review_card_rev">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="card_footer">
                <p>78 student</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
          <div className="review_card">
            <div className="review_card_img_wrap">
              <Image
                src={`https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVzZXIlMjBwcm9maWxlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60`}
                alt=""
                width={500}
                height={500}
              />
            </div>
            <div className="review_card_rev_wrap">
              <p className="review_card_rev">
                There are many variations of passages of Lorem Ipsum available
              </p>
              <div className="card_footer">
                <p>78 student</p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Pop_Courses />
      {/* Top Tutors */}
      <div className="tutor_section">
        <h1 className="section_heading">Our Teachers</h1>
        <div className="tutor_card_wrap">
          <TutorCard
            imgSrc={`https://images.unsplash.com/photo-1569779213435-ba3167dde7cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFuJTIwZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60`}
            tutName={`John Doe`}
            tutField={`Software Developer`}
            tutDet={`t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',`}
          />
          <TutorCard 
            imgSrc={`https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80`}
            tutName={`John Doe`}
            tutField={`Software Developer`}
            tutDet={`t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',`}
          />
          <TutorCard 
            imgSrc={`https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYWNoZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60`}
            tutName={`John Doe`}
            tutField={`Software Developer`}
            tutDet={`t is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using 'Content here, content here',`}
          />
        </div>
      </div>
      <Achivement />
      <School />
    </div>
  );
}
