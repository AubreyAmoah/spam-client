"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function UsernameInput({ value, onChange }) {
  return (
    <div className="relative">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type="text"
        className="border p-2 pl-10 rounded w-full"
        placeholder="Enter your username"
      />
      <span className="absolute left-3 top-3 text-gray-500">
        <FontAwesomeIcon icon={faUser} />
      </span>
    </div>
  );
}
