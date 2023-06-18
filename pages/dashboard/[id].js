"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/courses.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faBook,
  faTicket,
  faAngleLeft,
  faAngleRight,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";

//this are course details pass this as props from previous page

/******* Note All the styling is done, except fonts add more styling if you need, page is
  robust, and responsive except code, which you can make more redundant if you need
*/
export default function Home() {
  const [courseContent, setCourseContent] = useState(true); //to view course details or mudule details
  const [activeModuleId, setActiveModuleId] = useState(-1); //to choose module index from module array
  const [activeModule, setActiveModule] = useState(); //to choose object from module array
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [modules, setModules] = useState([]);
  const [course, setCourse] = useState({
    id: "0",
    url: "https://previews.123rf.com/images/amisb/amisb1704/amisb170400138/76394955-design-concept-of-word-science-website-banner.jpg",
    subject: "Science",
    desctiption:
      "Science is a study of the natural world. It depends on observation, documentation and experimentation. Every event has a logical scientific explanation. Word “Science “has derived from a Latin word “Scientia” meaning 'Knowledge'",
  });

  const router = useRouter();
  const id = router.query.id;
  console.log("course id", id); //to choose mobile drawer is open or not

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.post(
          `https://kranti-back.onrender.com/sendmodule`,
          { productid: id }
        );

        const data = await response.data;
        console.log("data response", data);
        console.log("data length", data.length);
        if (data.length !== 0) {
          setModules(data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchProfile();
  }, [id]);

  console.log(modules);

  //when course details are open moudle details will be closed
  const courseClickHandler = () => {
    setCourseContent(true);
    setActiveModuleId(-1);
    setMobileDrawerOpen(false);
  };

  //handle previous and next buttons on modlues pages
  const prevClickHandler = () => {
    if (activeModuleId === 0) return;
    const prevId = activeModuleId - 1;
    setActiveModule(modules[prevId]);
    setActiveModuleId(prevId);
  };

  const nextClickHandler = () => {
    if (activeModuleId === modules.length - 1) return;
    const nextId = activeModuleId + 1;
    setActiveModule(modules[nextId]);
    setActiveModuleId(nextId);
  };

  //handles mobile drawer opening and closing
  const mobileDrawerHandler = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <>
      {/* copy all the code from module_container leave main */}
      <div className={styles.module_container}>
        {/* This is side drawer only gets active when we are on mobile devices close and opens*/}
        {mobileDrawerOpen && (
          <div className={styles.module_container_side_drawer_mobile}>
            <div>
              {/*Drawer Closing button */}
              <div
                className={styles.moblie_drawer_closer}
                onClick={mobileDrawerHandler}
              >
                <FontAwesomeIcon icon={faXmark} />
                <p>close</p>
              </div>
              {/*Back to Dashboard button wrap this button in Link tag and add route url */}
              <Link href={"/dashboard"}>
                <div className={styles.back_button}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                  <p>back to Dashboard</p>
                </div>
              </Link>
              {/*Course Details Button*/}
              <div
                className={
                  courseContent
                    ? styles.course_button + " " + styles.active
                    : styles.course_button
                }
                onClick={courseClickHandler}
              >
                <FontAwesomeIcon icon={faBook} />
                <p>Course Details</p>
              </div>
            </div>
            {/* Mapping modules and all the logic*/}
            {modules.map((item, index) => {
              return (
                //Module button
                <div
                  className={
                    activeModuleId === index
                      ? styles.module_button + " " + styles.active
                      : styles.module_button
                  }
                  key={item._id}
                  id={index}
                  onClick={() => {
                    //on clicking it will turn of course details
                    setCourseContent(false);
                    //set module details which was clicked to active module state
                    setActiveModule(modules[index]);
                    //set index of module which was clicked to activeModuleId state
                    setActiveModuleId(index);
                    //turn of mobile drawer if open
                    setMobileDrawerOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={faTicket} />
                  <p>Module {index + 1}</p>
                </div>
              );
            })}
          </div>
        )}
        {/* This is side drawer for laptop and tablets */}
        <div className={styles.module_container_side_drawer}>
          <div>
            {/*Back to Dashboard button wrap this button in Link tag and add route url */}

            <Link href={"/dashboard"}>
              <div className={styles.back_button}>
                <FontAwesomeIcon icon={faArrowLeft} />
                <p>back to Dashboard</p>
              </div>
            </Link>
            {/*Course Details Button*/}
            <div
              className={
                courseContent
                  ? styles.course_button + " " + styles.active
                  : styles.course_button
              }
              onClick={courseClickHandler}
            >
              <FontAwesomeIcon icon={faBook} />
              <p>Course Details</p>
            </div>
          </div>
          {/* Mapping modules and all the logic*/}
          {modules.map((item, index) => {
            return (
              <div
                className={
                  activeModuleId === index
                    ? styles.module_button + " " + styles.active
                    : styles.module_button
                }
                key={item._id}
                id={index}
                onClick={() => {
                  //on clicking it will turn of course details
                  setCourseContent(false);
                  //set module details which was clicked to active module state
                  setActiveModule(modules[index]);
                  //set index of module which was clicked to activeModuleId state
                  setActiveModuleId(index);
                }}
              >
                <FontAwesomeIcon icon={faTicket} />
                <p>Module {index + 1}</p>
              </div>
            );
          })}
        </div>
        <div className={styles.module_content_wrap}>
          {/*Mobile drawer opener button visible only on mobile devices */}
          {!mobileDrawerOpen && (
            <div
              className={styles.moblie_drawer_opener}
              onClick={mobileDrawerHandler}
            >
              <p>Open</p>
              <FontAwesomeIcon icon={faAngleRight} />
            </div>
          )}

          {courseContent ? (
            //Couse details if course content is true else module will be visible
            //MaKe neceesary change accordingly or if you want to add more details about course
            <div className={styles.course_detail_wrap}>
              <h1>Course: {course.subject}</h1>
              <Image width={500} height={400} src={course.url} alt={course.subject + " image"} />
              <p>{course.desctiption}</p>
            </div>
          ) : (
            //Moudle Page the module stored in active modlue will be visible here
            <div className={styles.module_detail_wrap}>
              {/*Module page nav bar*/}
              <div className={styles.module_page_nav}>
                {/* Prev button take you to prev module in list*/}
                <div
                  className={styles.module_nav_button}
                  onClick={prevClickHandler}
                >
                  <FontAwesomeIcon icon={faAngleLeft} />
                  <p>prev</p>
                </div>
                {/* Module title changes accroding to active module*/}
                <h1>{activeModule.title}</h1>
                {/* Next button takes you to next module in list*/}
                <div
                  className={styles.module_nav_button}
                  onClick={nextClickHandler}
                >
                  <p>next</p>
                  <FontAwesomeIcon icon={faAngleRight} />
                </div>
              </div>
              {/* Active module topic*/}
              <h3>{activeModule.topic}</h3>
              {/* Active module video , thubnail of video will be Module Image*/}
              <video width={"100%"} poster={activeModule.image} controls>
                {/* Set source of video to active module link */}
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                  // src={activeModule.link}
                  type="video/mp4"
                />
                <p>
                  Your browser doesn&apos;t support HTML video. Here is a
                  <a href="myVideo.mp4">link to the video</a> instead.
                </p>
              </video>
              {/*active module description */}
              <p>{activeModule.description}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
