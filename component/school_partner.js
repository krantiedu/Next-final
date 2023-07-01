import styles from "@/styles/achivement.module.css";
import Image from "next/image";

const School = () => {
  return (
    <div className={styles.school_section}>
      <h1>School Partners</h1>
      <div className={styles.school_card_wrap}>
        <div className={styles.school_card}>
          <div className={styles.school_logo_wrap}>
            <Image
              src="https://img.freepik.com/premium-vector/campus-collage-university-education-logo-design-template_7492-61.jpg?w=740"
              alt="icon"
              width={200}
              height={200}
            />
          </div>
          <p>D.P. School</p>
        </div>
        <div className={styles.school_card}>
          <div className={styles.school_logo_wrap}>
            <Image
              src="https://img.freepik.com/free-vector/gradient-school-logo-design-template_23-2149664332.jpg?size=626&ext=jpg"
              alt="icon"
              width={200}
              height={200}
            />
          </div>
          <p>D.P. School</p>
        </div>
        <div className={styles.school_card}>
          <div className={styles.school_logo_wrap}>
            <Image
              src="https://img.freepik.com/free-vector/gradient-elementary-school-logo-design_23-2149626923.jpg?size=626&ext=jpg"
              alt="icon"
              width={200}
              height={200}
            />
          </div>
          <p>D.P. School</p>
        </div>
        <div className={styles.school_card}>
          <div className={styles.school_logo_wrap}>
            <Image
              src="https://img.freepik.com/premium-vector/luxury-university-logo-design_139869-120.jpg?size=626&ext=jpg"
              alt="icon"
              width={200}
              height={200}
            />
          </div>
          <p>D.P. School</p>
        </div>
      </div>
    </div>
  );
};

export default School;
