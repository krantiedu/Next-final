import styles from '@/styles/footer.module.css';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

const GoToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const gotobtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }

    const listenToScroll = () => {
        let height = 260;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > height) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }


    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, [])
    return (
        <>
            {isVisible && (
                <div className={styles.topbtn} onClick={gotobtn}>
                    <FontAwesomeIcon icon={faArrowUp}/>
                </div>
            )}
        </>
    );
}

export default GoToTop;