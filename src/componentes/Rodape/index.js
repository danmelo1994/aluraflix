import styles from "./Rodape.module.css";
import {IoLogoInstagram, IoLogoGithub, IoLogoLinkedin} from "react-icons/io";
import logo from "./logoRodape.png";
import { Link } from "react-router-dom";

function Rodape() {
    return (
        <footer className={styles.rodape}>
            <Link to="./" className={styles.logo}>
                <img src={logo} alt="LogoAluraFlix" />
            </Link>
            <h2 className={styles.texto}>Desenvolvido por Danilo Sales</h2>
            <div className={styles.redes_sociais}>
                <a href="https://github.com/danmelo1994" target="_blank" rel="noopener noreferrer">
                    <IoLogoGithub className={styles.icone} alt="imagem github" />
                </a>
                <a href="https://www.linkedin.com/in/danilo-melo-comp" target="_blank" rel="noopener noreferrer">
                    <IoLogoLinkedin className={styles.icone} alt="imagem linkedin" />
                </a>
                <a href="https://www.instagram.com/melodanilo94" target="_blank" rel="noopener noreferrer">
                    <IoLogoInstagram className={styles.icone} alt="imagem instagram" />
                </a>
            </div>
        </footer>
    )
}

export default Rodape;
