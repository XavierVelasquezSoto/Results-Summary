import styles from "./Card-flex"

const CardFlex = ({children}) => {
    return <div className={styles.flex} >{children}</div>
}

export default CardFlex