import React from 'react';
import { MapPin, School, Users, Heart, Phone } from 'lucide-react';
import styles from './Where.module.css';

const Where = () => {
  const locations = [
    {
      icon: 'map',
      text: 'גנים וצהרונים'
    },
    {
      icon: 'school',
      text: 'בתי ספר ומוסדות חינוך'
    },
    {
      icon: 'users',
      text: 'מתנ"סים'
    },
    {
      icon: 'heart',
      text: 'קהילות, מושבים וכפרים'
    },
    {
      icon: 'heart',
      text: 'מרכזי חוסן קהילתיים'
    }
  ];

  const renderIcon = (iconType) => {
    const iconProps = {
      strokeWidth: 1,
      className: styles.icon,
      size: 24
    };

    switch (iconType) {
      case 'map':
        return <MapPin {...iconProps} />;
      case 'school':
        return <School {...iconProps} />;
      case 'users':
        return <Users {...iconProps} />;
      case 'heart':
        return <Heart {...iconProps} />;
      case 'phone':
        return <Phone {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>איפה תוכלו למצוא אותי?</h2>
      <div className={styles.locationsGrid}>
        {locations.map((location, index) => (
          <div key={index} className={styles.locationItem}>
            {renderIcon(location.icon)}
            <p className={styles.locationText}>{location.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Where;