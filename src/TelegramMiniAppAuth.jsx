import React, { useEffect, useState } from "react";

const TelegramMiniAppAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram?.WebApp;

    if (!tg) {
      console.error("Telegram WebApp SDK не найден");
      return;
    }

    tg.ready(); // сообщаем Telegram, что приложение готово

    // Данные пользователя доступны в initDataUnsafe
    const userData = tg.initDataUnsafe?.user;

    if (userData) {
      console.log("Авторизованный юзер:", userData);
      localStorage.setItem("telegramUser", JSON.stringify(userData));
      setUser(userData);
    } else {
      console.warn("Нет данных о пользователе (запусти в Telegram)");
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Telegram Mini App</h2>
      {user ? (
        <div>
          <p>
            Привет, {user.first_name} {user.last_name || ""} 👋
          </p>
          <p>@{user.username}</p>
          <p>ID: {user.id}</p>
        </div>
      ) : (
        <p>Открой приложение внутри Telegram, чтобы увидеть данные.</p>
      )}
    </div>
  );
};

export default TelegramMiniAppAuth;
