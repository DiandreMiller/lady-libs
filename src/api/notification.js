// src/api/notifications.js
const getChristmasNotification = () => {
    const now = new Date();
  
    // Convert to Eastern Time
    const easternTime = new Date(
      now.toLocaleString("en-US", { timeZone: "America/New_York" })
    );
  
    const year = easternTime.getFullYear();
    const month = easternTime.getMonth(); 
    const date = easternTime.getDate();
  
    console.log(
      "Eastern Time Date:",
      `${year}-${month + 1}-${date}`
    );
  
    if (year !== 2025 || month !== 11 || date !== 17) {
      return {
        id: "Not today",
        title: "Wait til midnight",
        message: "nah",
      };
    }
  
    return {
      id: "Christmas Message",
      title: "One time Christmas special",
      message: "Merry Christmas 🎄✨",
    };
  };

  export default getChristmasNotification;