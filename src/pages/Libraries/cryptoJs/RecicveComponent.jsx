
export default function RecicveComponent() {



      // Retrieve and verify hash
  const verifyStoredHash = (obj) => {
    try {
      const storedHash = localStorage.getItem("hashedObject");
      if (!storedHash) {
        console.warn("No hash found in LocalStorage.");
        setIsValid(null);
        return;
      }

      // Hash the object again
      const jsonString = JSON.stringify(obj);
      const newHash = CryptoJS.SHA256(jsonString).toString();

      // Compare hashes
      setIsValid(newHash === storedHash);
      console.log("Verification Result:", newHash === storedHash);
    } catch (error) {
      console.error("Error verifying the hash:", error);
    }
  };


  return (
    <div>
      
    </div>
  )
}
