"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CustomInput({
  type,
  value,
  placeholder,
  icon,
  onChange,
}) {
  return (
    <div className="relative">
      <input
        onChange={(e) => onChange(e.target.value)}
        value={value}
        type={type}
        className="border p-2 pl-10 rounded w-full"
        placeholder={placeholder}
      />
      <span className="absolute left-3 top-3 text-gray-500">
        <FontAwesomeIcon icon={icon} />
      </span>
    </div>
  );
}
