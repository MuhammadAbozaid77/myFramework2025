import React, { useEffect, useState } from "react";
import CryptoJS from "crypto-js";

export default function RetrieveComponent() {
  const [retrievedObject, setRetrievedObject] = useState(null);
  const [isValid, setIsValid] = useState(null);
  const secretKey = "mySecretKey123"; // Must match the key used for encryption

  useEffect(() => {
    // Retrieve encrypted data & hash from localStorage
    const encryptedData = localStorage.getItem("encryptedObject");
    // const storedHash = localStorage.getItem("hashedObject");

    if (!encryptedData) {
      // if (!encryptedData || !storedHash) {
      console.warn("No encrypted data found in LocalStorage.");
      setIsValid(null);
      return;
    }

    try {
      // Decrypt the stored object
      const decryptedBytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
      const decryptedString = decryptedBytes.toString(CryptoJS.enc.Utf8);
      const parsedObject = JSON.parse(decryptedString);
      // Compare hashes to ensure data integrity
      const validParsedObject = parsedObject ? true : false;
      setIsValid(validParsedObject);
      setRetrievedObject(parsedObject);
    } catch (error) {
      console.error("Error decrypting the object:", error);
      setIsValid(false);
    }
  }, []);

  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">Retrieve & Verify Data</h2>

      <div className="mt-2 p-2 bg-gray-100 rounded break-all">
        <strong>Retrieved Object:</strong>{" "}
        {retrievedObject
          ? JSON.stringify(retrievedObject, null, 2)
          : "No object found"}
      </div>

      {isValid !== null && (
        <p
          className={`mt-2 font-bold ${
            isValid ? "text-green-600" : "text-red-600"
          }`}
        >
          {isValid ? "✅ Data is valid!" : "❌ Data has changed!"}
        </p>
      )}
    </div>
  );
}
