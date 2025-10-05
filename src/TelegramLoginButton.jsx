import React, { useEffect } from "react";

const TelegramLoginButton = () => {
//   useEffect(() => {
//     // Загружаем скрипт Telegram
//     const script = document.createElement("script");
//     script.src = "https://telegram.org/js/telegram-widget.js?22";
//     script.async = true;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

  const handleTelegramAuth = () => {
    if (!window.Telegram?.Login) {
      console.error("Telegram Login not loaded yet");
      return;
    }

    window.Telegram.Login.auth(
      { bot_id: 8299528121, request_access: true },
      function (user) {
        console.log("Telegram user data:", user);

        // Сохраняем в localStorage
        localStorage.setItem("telegramUser", JSON.stringify(user));

        // Можно проверить
        alert("Успешный вход: " + user.first_name);
      }
    );
  };

  return (
    <button
      onClick={handleTelegramAuth}
      style={{
        padding: "10px 20px",
        background: "#0088cc",
        color: "white",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      Войти через Telegram
    </button>
  );
};

export default TelegramLoginButton;
