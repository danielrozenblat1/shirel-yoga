// ThirdScreen.jsx
import { useState } from "react";
import styles from "./ThirdScreen.module.css";
import help1 from "../images/יוגה 1.png"
import help2 from "../images/יוגה 2.png"
import help3 from "../images/יוגה עוזרת 4.png"
import help4 from "../images/יוגה 4.png"
import help5 from "../images/יוגה 5.png"
import Button from "../components/button/Button";
const ThirdScreen = () => {
    const [hoveredImage, setHoveredImage] = useState(null);

    return <>
        <div className={styles.background} itemScope itemType="https://schema.org/MedicalOrganization">
            <div className={styles.title} itemProp="name">
                אז איך דווקא יוגה תעזור לילד/ה שלי?
            </div>
            
            <div className={styles.bigWrapper}>
                <div className={styles.step} itemScope itemType="https://schema.org/MedicalProcedure">
                    <div className={styles.imageContainer}>
                        <div 
                            className={`${styles.imageWrapper} ${styles.imageWrapperLeft} ${
                                hoveredImage === 1 ? styles.hovered : ''
                            }`}
                            onMouseEnter={() => setHoveredImage(1)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img 
                                src={help5}
                                alt="ביטחון עצמי"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemProp="name">
                            ביטחון עצמי ודימוי גוף חיובי
                        </div>
                        <div className={styles.section} itemProp="description">
                            יוגה מחזקת את הביטחון העצמי של ילדים בצורה עמוקה ומשמעותית. דרך התרגול, הם לומדים להכיר ולקבל את הגוף שלהם, מפתחים יכולות חדשות ומרגישים גאווה בהתקדמות שלהם.
                        </div>
                    </div>
                </div>

                <div className={`${styles.step} ${styles.reversed}`} itemScope itemType="https://schema.org/MedicalProcedure">
                    <div className={styles.imageContainer}>
                        <div 
                            className={`${styles.imageWrapper} ${styles.imageWrapperRight} ${
                                hoveredImage === 2 ? styles.hovered : ''
                            }`}
                            onMouseEnter={() => setHoveredImage(2)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img 
                                src={help1} 
                                alt="ויסות רגשי"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemProp="name">
                            ויסות רגשי וריכוז
                        </div>
                        <div className={styles.section} itemProp="description">
                            במחקרים נמצא שיוגה משפרת משמעותית את יכולת הריכוז והוויסות הרגשי אצל ילדים. הם לומדים טכניקות נשימה ותנועה שעוזרות להם להירגע במצבי לחץ.
                        </div>
                    </div>
                </div>

                <div className={styles.step} itemScope itemType="https://schema.org/MedicalProcedure">
                    <div className={styles.imageContainer}>
                        <div 
                            className={`${styles.imageWrapper} ${styles.imageWrapperLeft} ${
                                hoveredImage === 3 ? styles.hovered : ''
                            }`}
                            onMouseEnter={() => setHoveredImage(3)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img 
                                src={help2}
                                alt="כלים להתמודדות"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemProp="name">
                            כלים להתמודדות יומיומית
                        </div>
                        <div className={styles.section} itemProp="description">
                            היוגה מעניקה לילדים כלים מעשיים להתמודדות עם אתגרי היומיום. הם לומדים איך להרגיע את עצמם כשהם חשים מוצפים ואיך לשמור על קשב.
                        </div>
                    </div>
                </div>

                <div className={`${styles.step} ${styles.reversed}`} itemScope itemType="https://schema.org/MedicalProcedure">
                    <div className={styles.imageContainer}>
                        <div 
                            className={`${styles.imageWrapper} ${styles.imageWrapperRight} ${
                                hoveredImage === 4 ? styles.hovered : ''
                            }`}
                            onMouseEnter={() => setHoveredImage(4)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img 
                                src={help3}
                                alt="חיבור לגוף"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemProp="name">
                            חיבור לגוף ולנפש
                        </div>
                        <div className={styles.section} itemProp="description">
                            בעידן המסכים והגירויים האינסופיים, יוגה מספקת לילדים הזדמנות יקרה להתחבר מחדש לגופם ולרגשותיהם. הם לומדים להקשיב לעצמם.
                        </div>
                    </div>
                </div>

                <div className={styles.step} itemScope itemType="https://schema.org/MedicalProcedure">
                    <div className={styles.imageContainer}>
                        <div 
                            className={`${styles.imageWrapper} ${styles.imageWrapperLeft} ${
                                hoveredImage === 5 ? styles.hovered : ''
                            }`}
                            onMouseEnter={() => setHoveredImage(5)}
                            onMouseLeave={() => setHoveredImage(null)}
                        >
                            <img 
                                src={help4} 
                                alt="השקעה בעתיד"
                                className={styles.image}
                            />
                        </div>
                    </div>
                    <div className={styles.text}>
                        <div className={styles.stepHeader} itemProp="name">
                            השקעה בעתיד הילד
                        </div>
                        <div className={styles.section} itemProp="description">
                            יוגה היא לא רק פעילות גופנית - זו השקעה בבריאות הנפשית והפיזית של הילד לטווח ארוך. הכלים והמיומנויות שילדים רוכשים ביוגה ילוו אותם.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Button text="שיראל, בואי נתאם תאריך!" message="היי שיראל הגעתי מהדף, אשמח לשמוע ממך עוד על..."/>
   </>
};

export default ThirdScreen;