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
    if (!user) {
      alert("Авторизация не удалась");
      return;
    }
    console.log("Telegram user data:", user);
    localStorage.setItem("telegramUser", JSON.stringify(user));
    alert("Успешная авторизация: " + user.first_name);
  }
    );
  };

  return (
    <button
      onClick={handleTelegramAuth}
      style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        fontSize: "14px",
        width:"361px",
        height:"36px",
        background: "#3F6BE8",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      Авторизоваться через Telegram
    </button>
  );
};

export default TelegramLoginButton;
