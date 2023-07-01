import styles from '@/styles/achivement.module.css';
import Image from 'next/image';

const School = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.school_sec}>
                <h1 className={styles.header2}>School Partners</h1>
                <div className={styles.school_partners}>
                    <div className={styles.item1}>
                        <Image src='/favicon.ico' style={{"margin-bottom":"10px"}} alt="icon" width={90} height={90} />
                        <p>D.P. School</p>
                    </div>
                    <div className={styles.item1}>
                        <Image src='/favicon.ico' style={{"margin-bottom":"10px"}} alt="icon" width={90} height={90} />
                        <p>D.P. School</p>
                    </div>
                    <div className={styles.item1}>
                        <Image src='/favicon.ico' style={{"margin-bottom":"10px"}} alt="icon" width={90} height={90} />
                        <p>D.P. School</p>
                    </div>
                    <div className={styles.item1}>
                        <Image src='/favicon.ico' style={{"margin-bottom":"10px"}} alt="icon" width={90} height={90} />
                        <p>D.P. School</p>
                    </div>
                    <div className={styles.item1}>
                        <Image src='/favicon.ico' style={{"margin-bottom":"10px"}} alt="icon" width={90} height={90} />
                        <p>D.P. School</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default School;