"use client";
import Image from "next/image";
import { ThemeContext } from "./context/ThemeContext";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useAuth } from "./context/AuthContext";

export default function Home() {
  const { dark } = useContext(ThemeContext);
  const { isLoggedIn } = useAuth();
  return (
    <div
      className={`relative min-h-screen w-screen px-20 py-10 text-sm max-[800px]:px-16 max-[500px]:px-10 ${
        dark ? `bg-black text-zinc-50` : `bg-zinc-50 text-black`
      }`}
    >
      <div className="w-[60%] flex flex-col gap-4 items-center ml-auto mr-auto text-center max-[1010px]:w-[80%] max-[925px]:w-[100%]">
        <Image
          className="mt-6"
          alt="Image"
          src={"/4868537.jpg"}
          height={300}
          width={300}
        />

        <h1 className="text-xl font-bold mt-8">
          Welcome to the Student Performance and Assessment Monitor (SPAM)!
        </h1>

        <p>
          Empowering facilitators with advanced tools to track, assess, and
          enhance student performance. Our platform provides real-time insights
          into student behavior and academic progress, enabling data-driven
          decisions for personalized learning experiences. Whether you're
          managing assessments, tracking class performance, or identifying areas
          for improvement, SPAM helps you streamline the process with ease and
          efficiency. We're here to support your mission in creating impactful
          learning journeys. Together, let's foster success in every student’s
          growth!
        </p>

        <Link
          href={isLoggedIn ? `/pages/dashboard` : `/pages/auth`}
          className={`py-2 px-4 rounded-2xl mt-6 flex gap-2 items-center ${
            dark
              ? "bg-zinc-50 text-black hover:bg-black/15 hover:text-zinc-50"
              : "bg-black text-zinc-50 hover:shadow-md hover:bg-zinc-50 hover:text-black"
          } transition-all`}
        >
          <FontAwesomeIcon icon={faPaperPlane} />
          Get Started
        </Link>
      </div>
    </div>
  );
}
