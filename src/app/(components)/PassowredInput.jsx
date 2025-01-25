"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput({ placeholder, value, onChange }) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative">
      <input
        onChange={(e) => onChange(e.target.value)}
        type={showPassword ? "text" : "password"}
        className="border p-2 rounded w-full"
        placeholder={placeholder}
        value={value}
      />
      <span
        onClick={togglePasswordVisibility}
        className="absolute right-3 top-3 cursor-pointer"
      >
        {showPassword ? (
          <FontAwesomeIcon icon={faEyeSlash} />
        ) : (
          <FontAwesomeIcon icon={faEye} />
        )}
      </span>
    </div>
  );
}
