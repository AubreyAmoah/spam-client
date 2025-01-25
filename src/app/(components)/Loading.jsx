"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <div className="text-center">
        <FontAwesomeIcon
          icon={faSpinner}
          spin
          className="text-blue-600 text-4xl mb-4"
        />
        <p className="text-gray-700 text-lg">{message}</p>
      </div>
    </div>
  );
}
