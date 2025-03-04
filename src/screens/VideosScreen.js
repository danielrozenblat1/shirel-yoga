
import Button from "../components/button/Button"

import styles from "./VideosScreen.module.css"
import VideoGallery from "../components/studioVideos/StudioVideos"
import video1 from "../videos/שיראל יוגה סדנאות.mp4"
import video2 from "../videos/שיראל יוגה 2.mp4"
import video3 from "../videos/שיראל יוגה 3.mp4"
const VideosScreen=()=>{


  
    const videos=[{src:video1}]
    return <>
    

<div className={styles.description}>הרבה מתבלבלים בין יוגה למבוגרים לבין יוגה לילדים - הההבדלים הם עצומים! יוגה לילדים מערבת יותר משחקים עם הילד ותעסוקה יחד עם מהלך השיעור ובאמת מותאמת לטווח הגילאים</div>

<VideoGallery videos={videos}/>
<Button text="שיראל, אני רוצה שנתאם שיעור" message="היי שיראל הגעתי מהדף, אני רוצה לשמוע עוד לגבי.. "/>

    </>
}
export default VideosScreen