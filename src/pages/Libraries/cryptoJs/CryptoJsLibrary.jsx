import React, { useState } from "react";
import CryptoJS from "crypto-js";

export default function CryptoJsLibrary() {
  const [hashedValue, setHashedValue] = useState(null);

  // Example object to hash
  const exampleObject = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  };

  const hashAndStoreObject = (obj) => {
    try {
      // Convert object to JSON string
      const jsonString = JSON.stringify(obj);

      // Hash the string using SHA-256
      const hash = CryptoJS.SHA256(jsonString).toString();

      // Store the hash in localStorage
      localStorage.setItem("hashedObject", hash);

      // Update state with hashed string (not an object)
      setHashedValue(hash);

      console.log("Hashed Object Stored in LocalStorage:", hash);
    } catch (error) {
      console.error("Error hashing the object:", error);
    }
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">Hash & Store Object</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => hashAndStoreObject(exampleObject)}
      >
        Hash Object & Store in LocalStorage
      </button>
      {hashedValue && (
        <p className="mt-2 text-gray-700 break-all">
          <strong>Hashed Value:</strong> {hashedValue}
        </p>
      )}
    </div>
  );
}
