import styles from '@/styles/pop_courses.module.css';
import Image from 'next/image';

const Pop_Courses = () => {
    return (
        <section className={styles.main_container}>
            <div className={styles.courses}>
                <h1 className={styles.heading}>Our Top Courses</h1>
                <hr style={{color: "rgba(0, 0, 0, 0.2)", marginTop: "10px" }}></hr>
                <div className={styles.card_container}>
                    <div className={styles.card}>
                        <Image className={styles.thumbnail} src="/nat.jpg" alt="image" height={100} width={100} />
                        <h1 className={styles.course_heading}>HTML For Beginners</h1>
                        <span style={{marginLeft: "10px"}}>4.1 ⭐ ⭐ ⭐ ⭐</span>
                        <div className={styles.info}>
                            <Image className={styles.inst_image} src="/instructor.png" alt="image" height={24} width={24} />
                            <p>By xyz instructor</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.thumbnail} src="/nat.jpg" alt="image" height={100} width={100} />
                        <h1 className={styles.course_heading}>HTML For Beginners</h1>
                        <span style={{marginLeft: "10px"}}>4.2 ⭐ ⭐ ⭐ ⭐</span>
                        <div className={styles.info}>
                            <Image className={styles.inst_image} src="/instructor.png" alt="image" height={24} width={24} />
                            <p>By xyz instructor</p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.thumbnail} src="/nat.jpg" alt="image" height={100} width={100} />
                        <h1 className={styles.course_heading}>HTML For Beginners</h1>
                        <span style={{marginLeft: "10px"}}>4.2 ⭐ ⭐ ⭐ ⭐</span>
                        <div className={styles.info}>
                            <Image className={styles.inst_image} src="/instructor.png" alt="image" height={24} width={24} />
                            <p>By xyz instructor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pop_Courses;