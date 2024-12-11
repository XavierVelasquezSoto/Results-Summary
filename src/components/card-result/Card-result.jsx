import styles from "./card-result.module.css"

const CardResult = ({titleResult,numberResult,numberResultPercent,subtitle,textResultPercent}) => {
    return <div className={styles.container}>
        <h1 className={styles.title}>{titleResult}</h1>
        <div className={styles.circle}>
        <p className={styles.numberResult}>{numberResult}</p>
        <p className={styles.numberResultPercent}>{numberResultPercent}</p>
        </div>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <p className={styles.textResultPercent}>{textResultPercent}</p>
    </div>
}

export default CardResult