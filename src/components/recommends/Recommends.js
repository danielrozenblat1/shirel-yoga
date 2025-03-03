import React from 'react';
import styles from './Students.module.css';


import result1 from "../../images/שיראל זגורי סדנאות 1.png";
import result2 from "../../images/שיראל זגורי סדנאות 2.png";
import result3 from "../../images/שיראל זגורי סדנאות 3.png";
import result4 from "../../images/שיראל זגורי סדנאות 4.png";
import result5 from "../../images/שיראל זגורי סדנאות 5.png";
import result6 from "../../images/שיראל זגורי סדנאות 6.png";
import result7 from "../../images/שיראל זגורי סדנאות 7.png";

const Students = () => {
  const images = [
    result1, result2, result3, result4,
    result5,result6,result7,
  ];

  return (
    <>
 
      <div className={styles.explain}>ואם תהיתם איך נראית האווירה בסדנא - ככה זה נראה</div>
      <div className={styles.container}>
        <div className={styles.scrollTrack}>
          {/* קבוצה ראשונה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`first-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`שיראל זגורי סדנאות ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
          {/* קבוצה שנייה זהה של תמונות */}
          <div className={styles.scrollContainer}>
            {images.map((img, index) => (
              <div key={`second-${index}`} className={styles.imageWrapper}>
                <img
                  src={img}
                  alt={`שיראל זגורי סדנאות ${index + 1}`}
                  className={styles.image}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
  
    </>
  );
};

export default Students;