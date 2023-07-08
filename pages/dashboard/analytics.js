import style from '@/styles/analytics.module.css'
import Image from 'next/image';
import { Progress } from '@/helper/constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Analytics = () => {
    return (
        <section className={style.main_container}>
            <div className={style.scores}>
                {
                    Progress.map((progress) => (
                        <div className={style.cards} key={progress.id} >
                            <div>
                                <strong style={{ "margin-bottom": "10px", display: "block" }}>{progress.subject}</strong>
                                <p>{progress.score}</p>
                            </div>
                            <div className={style.progress_bar}>
                                <progress value="23" min="0" max="100" style={{ visibility: "hidden", height: 0, width: 0 }}>23%</progress>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className={style.graph}>
                <Image className={style.image} src="/chart.png" alt="image" height={400} width={500} />
                <h2>your progress</h2>
            </div>
        </section>
    );
}

export default Analytics;