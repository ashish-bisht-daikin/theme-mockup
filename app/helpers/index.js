"use server";
import { cookies } from "next/headers";

export const setCookie = (key, value) => {
  cookies().set(key, value);
  return value;
};

export const getCookie = async (key) => {
  return await cookies().get(key)?.value;
};
