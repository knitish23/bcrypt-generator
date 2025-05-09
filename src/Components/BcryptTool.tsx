import { useState } from "react";
import bcrypt from "bcryptjs";
import toast, { Toaster } from "react-hot-toast";

const BcryptTool = () => {
  const [encryptInput, setEncryptInput] = useState("");
  const [rounds, setRounds] = useState(12);
  const [hashResult, setHashResult] = useState("");

  const [decryptText, setDecryptText] = useState("");
  const [decryptHash, setDecryptHash] = useState("");
  const [matchResult, setMatchResult] = useState<null | boolean>(null);

  const handleEncrypt = async () => {
    if (!encryptInput) return toast.error("Please enter data to encrypt");
    const hash = await bcrypt.hash(encryptInput, rounds);
    setHashResult(hash);
    toast.success("Encrypted successfully!");
  };

  const handleDecrypt = async () => {
    if (!decryptText || !decryptHash) {
      return toast.error("Both fields required");
    }
    const isMatch = await bcrypt.compare(decryptText, decryptHash);
    setMatchResult(isMatch);
  };

  return (
    <>
    <div>
      <h1 className="text-3xl text-center text-bold" >Online Bcrypt Hash Generator & Checker</h1>
    </div>
      <div className="p-6 text-white ">      
      <Toaster />
      <div className="grid md:grid-cols-2 gap-8">
        {/* Encrypt Section */}
        <div className=" p-6  shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Encrypt</h2>
          <p className="text-sm mb-4 text-gray-400 font-bold">
          Encrypt some text. Result shown A Hashes will be encrypted according to the method you choose.
          </p>

          <label className="block font-medium mb-1">Enter the data</label>
          <input
            type="text"
            value={encryptInput}
            onChange={(e) => setEncryptInput(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
            p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter plain text"
          />

          <label className="block font-medium mb-1">Number of Rounds</label>
          <input
            type="number"
            value={rounds}
            min={4}
            max={15}
            onChange={(e) => setRounds(Number(e.target.value))}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
            p-3 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />

          <button
            onClick={handleEncrypt}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded p-3 font-semibold"
          >
            Encrypt
          </button>

          {hashResult && (
            <div className="mt-4">
              <label className="block font-medium mb-1">Encrypted Hash:</label>
              <div 
              className="bg-gray-600 p-3 rounded break-all text-green-400 relative">
             
                {hashResult}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(hashResult);
                    toast.success("Hash copied!");
                  }}
                  className="absolute top-2 right-2 text-sm bg-gray-700 hover:bg-gray-600 px-2 py-1 rounded"
                >
                  Copy
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Decrypt Section */}
        {/* <div className="bg-gray-900 p-6 rounded-lg shadow-lg"> */}
        <div className=" p-6  shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Decrypt</h2>
          <p className="text-sm mb-4 text-gray-400 font-bold">
          Test your hashes against some plain text to see if they match.
          </p>

          <label className="block font-medium mb-1">Enter the data</label>
          <input
            type="text"
            value={decryptText}
            onChange={(e) => setDecryptText(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Plain text to test"
          />

          <label className="block font-medium mb-1">Enter the encrypted code</label>
          <input
            type="text"
            value={decryptHash}
            onChange={(e) => setDecryptHash(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 mb-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Bcrypt hash"
          />

          <button
            onClick={handleDecrypt}
            className="w-full bg-green-600 hover:bg-green-700 rounded p-3 font-semibold"
          >
            Verify Hash
          </button>

          {matchResult !== null && (
            <div className={`mt-4 text-lg font-semibold ${matchResult ? 'text-green-400' : 'text-red-400'}`}>
              {matchResult ? "✔ Hash matched!" : "✘ Hash did not match."}
            </div>
          )}
        </div>       
      </div>
    </div>
    
    </>
  
  );
};

export default BcryptTool
