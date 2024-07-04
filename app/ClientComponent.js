"use client";

const ClientComponent = () => {
  function getRandomHexColor() {
    const randomNum = Math.floor(Math.random() * 16777215);
    const hexString = randomNum.toString(16).padStart(6, "0");
    return `#${hexString}`;
  }
  const themeHandler = () => {
    const r = document.querySelector(":root");
    const textcolor = getRandomHexColor();
    const backgroundcolor = getRandomHexColor();
    r.style.setProperty("--text-color", textcolor);
    r.style.setProperty("--background-color", backgroundcolor);
  };
  return (
    <div className="h-screen flex align-center justify-center">
      <button onClick={themeHandler}>Press me</button>
    </div>
  );
};

export default ClientComponent;
