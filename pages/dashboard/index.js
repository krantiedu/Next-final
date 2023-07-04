import styles from "@/styles/dashboard.module.css";
import Image from "next/image";
// import { Courses } from '@/helper/constants';
import Link from "next/link";
import useAuth from "../useAuth";
import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  useAuth();

  const [products, setProducts] = useState([]);
  const [activeClass, setActiveClass] = useState();
  const [activeLanguage,setActiveLanguage] = useState();
  const [activeCourses, setActiveCourses] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post(
          `https://krantieducation.onrender.com/sendproduct`
        );
        setProducts(response.data);
        setActiveCourses(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProducts();
  }, []);

  const handleSelectChange = (event) => {
    const selectedClass = event.target.value;
    setActiveClass(selectedClass);
  };
  const handleSelectChangeLang = (event) => {
    const selectedLang = event.target.value;
    setActiveLanguage(selectedLang);
  };

  useEffect(() => {
    const courseSelctor = () => {
      if (activeClass === "0" && activeLanguage === "0"){
        setActiveCourses(products);
        console.log(activeCourses);
      }else if(activeClass !== "0" && activeLanguage === "0"){
        const temp = products.filter((obj) => obj.class === activeClass);
        console.log(temp);
        setActiveCourses(temp);
      }else if(activeClass === "0" && activeLanguage !== "0"){
        const temp = products.filter((obj) => obj.language === activeLanguage);
        console.log(temp);
        setActiveCourses(temp);
      }else if(activeClass !== "0" && activeLanguage !== "0"){
        const temp = products.filter((obj) => (obj.class === activeClass && obj.language === activeLanguage));
        console.log(temp);
        setActiveCourses(temp);
      }
      
    };
    courseSelctor();
  }, [activeClass,activeLanguage]);

  return (
    <div className={styles.dashboard_container}>
      <div className={styles.courses_section}>
        <div className={styles.courses_header}>
          <h2>My Courses</h2>
          <div className={styles.course_seletor_wrap}>
            <label htmlFor="classSelect">{"Class :"}</label>
            <select
              id="classSelect"
              value={activeClass}
              onChange={handleSelectChange}
            >
              <option value="0">All</option>
              <option value="1">Class 1</option>
              <option value="2">Class 2</option>
              <option value="3">Class 3</option>
              <option value="4">Class 4</option>
              <option value="5">Class 5</option>
              <option value="6">Class 6</option>
            </select>
            <label htmlFor="classSelect">{"Language :"}</label>
            <select
              id="langSelect"
              value={activeLanguage}
              onChange={handleSelectChangeLang}
            >
              <option value="0">All</option>
              <option value="hindi">Hindi</option>
              <option value="english">English</option>
            </select>
          </div>
        </div>
        <div className={styles.courses}>
          {activeCourses.map((course) => (
            <div key={course._id} className={styles.card}>
              {/* <iframe width="200" height="100" src="https://www.youtube.com/embed/xNRJwmlRBNU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
              <Image
                className={styles.image}
                src={course.image}
                alt="image"
                width="200"
                height="100"
              />
              <div className={styles.card_content}>
                <strong>Subject : {course.subject}</strong>
                <p>Title : {course.title.substring(0, 18)}</p>
                <p>Description : {course.description.substring(0, 50)}...</p>
                <Link
                  className={styles.course_button}
                  href={`/dashboard/${course._id}`}
                >
                  <div>Open Course</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
