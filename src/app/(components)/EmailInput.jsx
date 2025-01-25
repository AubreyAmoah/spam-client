"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function EmailInput({ value, onChange }) {
  return (
    <div className="relative">
      <input
        onChange={(e) => onChange(e.target.value)}
        type="email"
        className="border p-2 pl-10 rounded w-full"
        placeholder="Enter your email"
      />
      <span className="absolute left-3 top-3 text-gray-500">
        <FontAwesomeIcon icon={faEnvelope} />
      </span>
    </div>
  );
}
