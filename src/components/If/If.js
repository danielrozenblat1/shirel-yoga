import React from 'react';
import { Heart, Brain, Leaf, Sparkles, Smile, Star } from 'lucide-react';
import styles from './If.module.css';
import Button from '../button/Button';

const BackgroundGlass = () => {
  const items = [
    {
      text: "מחפשים פעילות מרגיעה, מחזקת ומפתחת לילד שלכם",
      icon: <Heart className={styles.icon} />
    },
    {
      text: "רוצים לעזור לילד שלכם להתמודד עם חוסר ריכוז וקושי בלמידה",
      icon: <Brain className={styles.icon} />
    },
    {
      text: "מחפשים דרך לעזור לילד עם עודף אנרגיה או חוסר איזון רגשי",
      icon: <Leaf className={styles.icon} />
    },
    {
      text: "רוצים לחזק את הביטחון העצמי והחברתי של הילד",
      icon: <Sparkles className={styles.icon} />
    },
    {
      text: "מחפשים כלים להתמודדות עם לחץ וסטרס בגיל צעיר",
      icon: <Smile className={styles.icon} />
    },
    {
      text: "רוצים לחזק את הבטחון העצמי של הילד ולהעצים אותו",
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