import styles from "./BoxShadow.module.css";

function BoxShadow({categoria}) {
    return (
        <div className={styles.boxShandow} style={{color: categoria}}></div>
    )
}

export default BoxShadow;
