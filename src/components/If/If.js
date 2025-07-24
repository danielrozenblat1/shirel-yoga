import React from 'react';
import { Heart, Brain, Leaf, Sparkles, Smile, Star, School, Users, HomeIcon, Activity, Building, BookOpen } from 'lucide-react';
import styles from './If.module.css';
import Button from '../button/Button';

const BackgroundGlass = () => {
  const items = [
    {
      text: "מחפשים פעילות מרגיעה, מחזקת ומפתחת לילדים בגן או בצהרון",
      icon: <Heart className={styles.icon} />
    },
    {
      text: "רוצים לעזור לילדים להתמודד עם חוסר ריכוז וקושי בלמידה במסגרת החינוכית",
      icon: <Brain className={styles.icon} />
    },
    {
      text: "מנהלים מתנ\"ס או מרכז קהילתי ומחפשים דרך לעזור לילדים עם עודף אנרגיה",
      icon: <Leaf className={styles.icon} />
    },
    {
      text: "הורים או מחנכים שרוצים לחזק את הביטחון העצמי והחברתי של הילדים",
      icon: <Sparkles className={styles.icon} />
    },
    {
      text: "צוות בית ספר המחפש כלים להתמודדות עם לחץ וסטרס בגיל צעיר",
      icon: <Smile className={styles.icon} />
    },
    {
      text: "הורים ואנשי חינוך הרוצים להעצים ילדים בסביבה תומכת",
      icon: <Star className={styles.icon} />
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage} />
      
      <div className={styles.content}>
        <h1 className={styles.title}>אז אם אתם</h1>
        
        <div className={styles.cardsGrid}>
          {items.map((item, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardContent}>
                <span className={styles.cardText}>{item.text}</span>
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.buttonWrapper}>
        <Button text="תלחצו כאן ונדבר" />
      </div>
    </div>
  );
};

export default BackgroundGlass;