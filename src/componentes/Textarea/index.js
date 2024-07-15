import styles from "./TextareaFormulario.module.css";

function Textarea(
    {tipo, minLength, maxLength, placeholder, label, valor, obrigatorio = false, aoAlterado}
) {
    const placeholderModificada = `${placeholder}...`;

    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value);
    }

    return (
        <div className={styles.textarea}>
            <label>{label}</label>
            <textarea 
                type={tipo}
                minLength={minLength}
                maxLength={maxLength}
                value={valor}
                onChange={aoDigitado}
                required={obrigatorio}
                placeholder={placeholderModificada}
            />
        </div>
    )
}

export default Textarea;
