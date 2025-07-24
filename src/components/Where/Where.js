import React from 'react';
import { MapPin, School, Users, Heart, Phone, Instagram, Facebook } from 'lucide-react';
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
    },
    {
      icon: 'MapPin',
      text: 'תכנית מאושרת בגפ"ן'
    },
     {
      icon: 'MapPin',
      text: 'סטודיו השמש הפנימית, מושב לוזית – עמק האלה'
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
      case 'TreePalm':
        return <MapPin {...iconProps} />;
      default:
        return <MapPin {...iconProps} />;
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+972552288368";
    const message = "היי שיראל הגעתי מהדף, אני רוצה לשמוע ממך עוד על..";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/yoga.with.shirel/", "_blank");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/profile.php?id=61562495240912", "_blank");
  };

  const socialIcons = [
    { 
      icon: <Instagram className={styles.icon} size={24} strokeWidth={1} />, 
      name: 'instagram',
      onClick: handleInstagramClick
    },
    { 
      icon: <Facebook className={styles.icon} size={24} strokeWidth={1} />, 
      name: 'facebook',
      onClick: handleFacebookClick
    },
    { 
      icon: <Phone className={styles.icon} size={24} strokeWidth={1} />, 
      name: 'whatsapp',
      onClick: handleWhatsAppClick
    }
  ];

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
      
      <h2 className={styles.title}>וכמובן - גם כאן</h2>
      <div className={styles.socialContainer}>
        {socialIcons.map((social, index) => (
          <div 
            key={index} 
            className={styles.socialIcon}
            onClick={social.onClick}
            style={{ cursor: 'pointer' }}
          >
            {social.icon}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Where;