"use client";

import { useRouter } from "next/router";

const ClientComponent = () => {
  const router = useRouter();

  const themeHandler = (company) => {
    const { textcolor, backgroundcolor } = company.light;
    const r = document.querySelector(":root");
    r.style.setProperty("--text-color", textcolor);
    r.style.setProperty("--background-color", backgroundcolor);
    router.push("/private");
  };
  return (
    <div className="h-screen flex align-center justify-center">
      <button onClick={themeHandler}>Press me</button>
    </div>
  );
};

export default ClientComponent;
