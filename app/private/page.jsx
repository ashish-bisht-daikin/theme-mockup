"use client"
import { useRouter } from "next/navigation";
import CommonButton from "../components/ui/CommonButton";
import { useState } from "react";
import { getCookie } from "../helpers";

export default function Private () {
  const router = useRouter()
  const [mode, setMode] = useState("light");
  const toggleTheme = async() => {
    setMode(mode==="light" ?"dark":"light")
    const localCompany = await getCookie("company")
    const company = JSON.parse(localCompany);
    const { textColor, backgroundColor } = company[mode==="light" ?"dark":"light"];
    const r = document.querySelector(":root");
    r.style.setProperty("--text-color", textColor);
    r.style.setProperty("--background-color", backgroundColor);
  }

  const handleBack = () => {
    const r = document.querySelector(":root");
    r.style.setProperty("--text-color", "#fff");
    r.style.setProperty("--background-color", "#333");
    router.push("/")
  }
  return <div className="main-container min-h-screen">
    <header className="bg-gray-800 text-white h-[80px] flex justify-between w-full p-4">
      <CommonButton className="mr-2" text={"Back"} onClick={handleBack}/>
      <CommonButton text={mode==="light" ?"Dark":"Light"} onClick={toggleTheme} />
    </header>
    <section>
      <p className="p-2 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cumque iste eligendi praesentium libero necessitatibus repudiandae reprehenderit quibusdam corrupti, error rerum dolorem quaerat maxime velit? Harum itaque in molestias? Corrupti!</p>
      <p className="p-2 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cumque iste eligendi praesentium libero necessitatibus repudiandae reprehenderit quibusdam corrupti, error rerum dolorem quaerat maxime velit? Harum itaque in molestias? Corrupti!</p>
      <p className="p-2 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cumque iste eligendi praesentium libero necessitatibus repudiandae reprehenderit quibusdam corrupti, error rerum dolorem quaerat maxime velit? Harum itaque in molestias? Corrupti!</p>
      <p className="p-2 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cumque iste eligendi praesentium libero necessitatibus repudiandae reprehenderit quibusdam corrupti, error rerum dolorem quaerat maxime velit? Harum itaque in molestias? Corrupti!</p>
      <p className="p-2 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cumque iste eligendi praesentium libero necessitatibus repudiandae reprehenderit quibusdam corrupti, error rerum dolorem quaerat maxime velit? Harum itaque in molestias? Corrupti!</p>
      <p className="p-2 text-lg">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, cumque iste eligendi praesentium libero necessitatibus repudiandae reprehenderit quibusdam corrupti, error rerum dolorem quaerat maxime velit? Harum itaque in molestias? Corrupti!</p>
    </section>
  </div>
}
