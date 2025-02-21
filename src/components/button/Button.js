import styles from "./Button.module.css"

const Button = (props) => {
    const handleButtonClick = () => {
        const phoneNumber = "+972552288368";
        const message = props.message ? props.message : "היי שיראל, אני רוצה לשמוע ממך עוד על..";
        const encodedMessage = encodeURIComponent(message);
        const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div className={styles.center}>
            <button className={styles.button} onClick={handleButtonClick}>
                <div className={styles.buttonContent}>{props.text}</div>
                <div className={styles.ripple}></div>
            </button>
        </div>
    );
}

export default Button