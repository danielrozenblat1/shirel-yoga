import React from 'react';
import styles from './Me.module.css';
import shirel from "../../images/שיראל זגורי תדמית.png"
import Recommends from '../recommends/Recommends';
import Parents from '../recommends/Parents';

const AboutSection = () => {

  return <>
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <div className={styles.backgroundTitle}>About Me</div>
          <h1 className={styles.mainTitle}>בואו נכיר</h1>
        </div>
        <div className={styles.content}>
          {/* Image Section */}
          <div className={styles.imageContainer}>
            <div className={styles.imageBackground}></div>
            <img
              src={shirel}
              alt="Shiral Zaguri"
              className={styles.image}
            />
          </div>

          {/* Content Section */}
          <div className={styles.textContent}>
            <div className={styles.textWrapper}>
              <h2 className={styles.name}>
                שיראל זגורי
              </h2>
              
              <blockquote className={styles.quote}>
                "אני מאמינה שכל ילד הוא עולם שלם, והדרך שלו ליוגה צריכה להיות חווייתית, מרתקת ומלאת קסם"
              </blockquote>

              <div className={styles.description}>
                <p>
                  את המסע שלי ליוגה התחלתי דווקא מתוך קושי. כילדה, התמודדתי עם בעיות קשב וריכוז משמעותיות, והמערכת הציעה את מה שנראה אז כפתרון הברור - ריטלין ותרופות הרגעה אחרות. הייתי בטוחה שהקשיים שלי מוגבלים רק ללימודים, אבל בפועל הם השפיעו על כל תחומי החיים שלי.
                </p>
                
                <p>
                  אמא שלי, שהיא מורה ליוגה, הציעה לי להגיע לשיעור ניסיון. ההתנגדות הראשונית שלי התחלפה בהתאהבות מיידית. דרך היוגה גיליתי שאפשר להשיג רוגע ושליטה בדרך טבעית, בלי תלות בגורמים חיצוניים. זו הייתה נקודת המפנה בחיי.
                </p>

                <p>
                  היום, כמורה ליוגה מוסמכת, אני מביאה את הסיפור האישי שלי לעבודה עם ילדים. אני יודעת בדיוק איך הם מרגישים כשהם מתמודדים עם קשיי קשב, ריכוז או חוסר שקט פנימי. בשיטה הייחודית שפיתחתי, אני משלבת יוגה עם אלמנטים יצירתיים, סיפורים ודמיון מודרך - כלים שעוזרים לילדים למצוא את הכוח שלהם בדרך טבעית ומהנה.
                </p>

                <p>
                  במהלך השנים העברתי מאות סדנאות, כולל בפסטיגל היוגה ובמרכז חוסן לישראל. המשוב שאני מקבלת מחזק את מה שאני יודעת מניסיון אישי - יוגה היא לא רק תרגול פיזי, אלא דרך חיים שנותנת לילדים כלים אמיתיים להתמודדות עם אתגרי החיים. כלים שילוו אותם הרבה אחרי שיצאו מהשיעור.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Recommends/>
    <Parents/>

</>
};

export default AboutSection;