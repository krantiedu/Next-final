import styles from '@/styles/pop_courses.module.css';
import Image from 'next/image';

const Pop_Courses = () => {
    return (
        <section className={styles.main_container}>
            <div className={styles.courses}>
                <h1 className={styles.heading}>Top Courses</h1>
                <hr style={{color : "rgba(0, 0, 0, 0.2)" , "margin-top" : "10px"}}></hr>
                <div className={styles.card_container}>
                    <div className={styles.card}>
                        <Image className={styles.thumbnail} src="/nat.jpg" alt="image" height={100} width={100} />
                        <h1 className={styles.course_heading}>HTML For Beginners</h1>
                        <span>4.1 ⭐ ⭐ ⭐ ⭐</span>
                        <p>lrem as;lkjdf jsldfkj jsldfkj  j;lskdjeijas sdl;fask asldkf</p>
                    </div>
                    <div className={styles.card}>
                        <Image className={styles.thumbnail} src="/nat.jpg" alt="image" height={100} width={100} />
                        <h1 className={styles.course_heading}>HTML For Beginners</h1>
                        <span>4.2 ⭐ ⭐ ⭐ ⭐</span>
                        <p>lrem as;lkjdf jsldfkj jsldfkj  j;lskdjeijas sdl;fask asldkf</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Pop_Courses;