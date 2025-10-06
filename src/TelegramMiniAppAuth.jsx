import React, { useEffect, useState } from "react";

const TelegramMiniAppAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (window.Telegram?.WebApp) {
      const initDataUnsafe = window.Telegram.WebApp.initDataUnsafe;
      console.log("Telegram init data:", initDataUnsafe);

      if (initDataUnsafe?.user) {
        setUser(initDataUnsafe.user);

        // например, сохраняем в localStorage
        localStorage.setItem("telegramUser", JSON.stringify(initDataUnsafe.user));
      }
    }
  }, []);

  if (!user) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h2>Привет, {user.first_name}!</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default TelegramMiniAppAuth;
