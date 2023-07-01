import React, { useState } from "react";
import Image from "next/image";
import styles from "@/styles/TutorCard.module.css";

const TutorCard = ({imgSrc, tutName, tutField, tutDet}) => {
  const [hoverOn, setHoverOn] = useState(false);
  return (
    <div
      className={!hoverOn 
      ? styles.tutor_card 
      : styles.tutor_card+ " " +styles.tutor_card_hover}
      onMouseEnter={() => setHoverOn(true)}
      onMouseLeave={() => setHoverOn(false)}
    >
      <div className={!hoverOn 
      ? styles.tutor_card_header 
      : styles.tutor_card_header+ " " +styles.tutor_card_header_hover}>
        <div
          className={
            !hoverOn
              ? styles.tutor_image_wrap
              : styles.tutor_image_wrap + " " + styles.tutor_image_wrap_hover
          }
        >
          <Image
            src={imgSrc}
            alt=""
            width={500}
            height={500}
          />
        </div>
        <div className={
            !hoverOn
              ? styles.tutor_name
              : styles.tutor_name + " " + styles.tutor_name_hover
        }>
          <p>{tutName}</p>
          <span>{tutField}</span>
        </div>
      </div>
      <p className={styles.tutor_info}>{tutDet}</p>
    </div>
  );
};

export default TutorCard;
