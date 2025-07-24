import React from 'react';
import styles from './Students.module.css';


import result1 from "../../images/שיראל זגורי סדנאות 1.png";
import result2 from "../../images/שיראל זגורי סדנאות 2.png";

import result6 from "../../images/שיראל זגורי סדנאות 6.png";
import result7 from "../../images/שיראל זגורי סדנאות 7.png";
import new1 from "../../images/שיראל זגורי תמונות חדשות 1.png"
import new2 from "../../images/שיראל זגורי תמונות חדשות 2.png"
import new3 from "../../images/שיראל זגורי תמונות חדשות 3.png"
import new4 from "../../images/שיראל זגורי תמונות חדשות 4.png"
import new5 from "../../images/שיראל זגורי תמונות חדשות 5.png"
import new6 from "../../images/שיראל זגורי תמונות חדשות 6.png"
import new7 from "../../images/שיראל זגורי תמונות חדשות 7.png"
const Students = () => {
  const images = [
   result2, 
   result6,result7,new1,new2,new3,new4,new5,new6,new7,
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