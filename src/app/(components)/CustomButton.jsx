"use client";

export default function Button({
  type = "button", // Default type is "button"
  onClick,
  disabled = false,
  children,
  icon,
  className = "",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex items-center justify-center gap-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-200 ease-in-out ${disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${className}`} // Apply custom styles if provided
    >
      {icon}{children}
    </button>
  );
}
