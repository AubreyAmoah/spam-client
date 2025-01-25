"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

export default function Hint({ message, shown = false, type }) {
  return (
    <div
      className={`${
        shown ? "flex items-start space-x-2" : "hidden"
      } bg-blue-50 border ${
        type === "error"
          ? "border-red-200 text-red-600"
          : type === "warning"
          ? " border-yellow-200 text-yellow-600"
          : "border-blue-200 text-blue-600"
      }  p-3 rounded-md mt-2`}
    >
      <FontAwesomeIcon icon={faInfoCircle} className="mt-1" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
