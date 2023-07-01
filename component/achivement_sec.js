import styles from '@/styles/achivement.module.css';

const Achivement = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.header}>Our Achivement</h1>
                <div className={styles.achivements}>
                    <div className={styles.num}>
                        <i className="fa-solid fa-graduation-cap fa-xl" style={{ color: "#ff6a00" }}></i>
                        <strong style={{marginTop : "20px"}}>12309</strong>
                    </div>
                    <div className={styles.num}>
                        <i className="fa-solid fa-book-open-reader fa-xl" style={{ color: "#ff6a00" }}></i>
                        <strong style={{marginTop : "20px"}}>12309</strong>
                    </div>
                    <div className={styles.num}>
                        <i className="fa-solid fa-book-open-reader fa-xl" style={{ color: "#ff6a00" }}></i>
                        <strong style={{marginTop : "20px"}}>12309</strong>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Achivement;