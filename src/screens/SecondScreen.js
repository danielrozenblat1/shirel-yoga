import IconTextComponent from "../components/can/Can"
import styles from "./SecondScreen.module.css"
import balance from "../images/יצירת שלווה פנימית וריכוז.png"
import focus from "../images/שילוב בין הפיזי לנפשי.png"
import ball from "../images/שילוב הפן הפיזי.png"
import Button from "../components/button/Button"
import phone from "../Icons/wired-lineal-1682-shake-phone-hover-pinch.json"
import dizzy from "../Icons/wired-lineal-529-boy-girl-children-hover-pinch (1).json"
import friends from "../Icons/wired-lineal-527-boy-young-men-hover-pinch.json"
import Experienced from "../components/experienced/Can"
const SecondScreen=()=>{


    return <>
<div className={styles.title}>אם הגעתם לכאן</div>
<div className={styles.description}>כבר נחשפתם לתחום הזה שנקרא "יוגה" וליתרונות שלו במיוחד עבור ילדים</div>


<div className={styles.row}>
      <IconTextComponent 
        text="יצירת איזון בין הגוף והנפש ופיתוח גמישות פיזית יחד עם שלווה נפשית" 
        imageSrc={focus}
      />
      
      <IconTextComponent 
        text="שיפור ריכוז וקשב - פיתוח מיקוד וריכוז טבעי ללא צורך בתרופות ועזרים חיצוניים"
        imageSrc={balance}
      />
      
      <IconTextComponent 
        text="פיתוח ביטחון עצמי - חיזוק הביטחון העצמי והחברתי דרך חיבור לגוף ולנפש בצורה חיובית"
        imageSrc={ball}
      />
    </div><div className={styles.title}>ואני בטוחה </div>
<div className={styles.description}>שחוויתם את אחד מהדברים הבאים</div>
<div className={styles.row}>
<Experienced 
          text="הילד שקוע במסכים ומתקשה למצוא עניין בפעילויות אחרות"
          icon={phone}
        />
        
        <Experienced 
          text="הילד נראה מוצף מגירויים ומתקשה למצוא רגעי שקט"
          icon={dizzy}
        />
        
        <Experienced 
          text="הילד מתקשה ביצירת קשרים חברתיים ובביטחון העצמי"
          icon={friends}
        />
</div>

<div className={styles.description}>המציאות שלנו היום מורכבת מאינסוף גירויים והסחות דעת: מסכים בכל פינה, לחץ חברתי מוגבר, ועומס בלתי פוסק במערכת החינוך. יותר ויותר ילדים מתמודדים עם קשיי קשב וריכוז בכיתה, מתקשים להתרכז בשיעורים, ומרגישים מוצפים רגשית. מחקרים מראים שללא כלים מתאימים להתמודדות, הקשיים האלה רק מתעצמים עם הזמן ומשפיעים על הביטחון העצמי, היכולות החברתיות והיכולת ללמוד. אבל אפשר גם אחרת...</div>
    </>
}
export default SecondScreen