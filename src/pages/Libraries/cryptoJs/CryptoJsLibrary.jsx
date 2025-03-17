import React from "react";
import CryptoJS from "crypto-js";

export default function CryptoJsLibrary() {
  const secretKey = "mySecretKey123"; // Keep this key safe!

  // Example object to hash
  const exampleObject = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
  };

  const encryptAndStoreObject = (obj) => {
    try {
      // Convert object to JSON string
      const jsonString = JSON.stringify(obj);

      // Encrypt the JSON string
      const encryptedData = CryptoJS.AES.encrypt(
        jsonString,
        secretKey
      ).toString();

      // Store encrypted data & hash in localStorage
      localStorage.setItem("encryptedObject", encryptedData);

      console.log("Encrypted Data Stored:", encryptedData);
      // console.log("Hashed Data Stored:", hash);
    } catch (error) {
      console.error("Error encrypting the object:", error);
    }
  };

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">Encrypt & Store Object</h2>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => encryptAndStoreObject(exampleObject)}
      >
        Encrypt & Store in LocalStorage
      </button>
    </div>
  );
}
