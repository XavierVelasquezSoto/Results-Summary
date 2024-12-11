import styles from "./card-flex.module.css"

const CardFlex = ({children}) => {
    return <div className={styles.flex} >{children}</div>
}

export default CardFlex