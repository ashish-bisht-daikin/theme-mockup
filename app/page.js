"use client";
import { techCompanies } from "@/app/constants";
import { useRouter } from "next/navigation";
import CommonButton from "./components/ui/CommonButton";
import { setCookie } from "./helpers";

export default function Home() {
  const router = useRouter();
  const themeHandler = (company) => {
    const colors = company.light;
    const { textColor, backgroundColor } = colors;
    const r = document.querySelector(":root");
    r.style.setProperty("--text-color", textColor);
    r.style.setProperty("--background-color", backgroundColor);
    setCookie("company", JSON.stringify(company));
    router.push("/private");
  };

  return (
    <main className="main-container min-h-screen flex items-center justify-around">
      {techCompanies?.map((company) => (
        <CommonButton
          key={company?.name}
          text={company?.name}
          onClick={() => themeHandler(company)}
          bgColor={company?.light?.backgroundColor}
          color={company?.light?.textColor}
        />
      ))}
    </main>
  );
}
