import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

const FoodAssistant = () => {
  //url from context
  const { url } = useContext(StoreContext);
  // state stores what the user types in the textarea
  const [message, setMessage] = useState("");
  //state stores what the AI response from backend
  const [reply, setReply] = useState("");
  //state in use to show loading text while AI is thinking
  const [loading, setLoading] = useState(false);
  //state stores error messages if something goes wrong
  const [error, setError] = useState("");
  //state to open assistant
  const [isOpen, setIsOpen] = useState(false);
  //function sends the user's message to the backend Ai route
  const askAssistant = async () => {
    if (!message.trim()) {
      setError("Please write what kind of food you want.");
      return;
    }
    try {
      setLoading(true); //start loading
      setReply(""); //clear old AI response
      setError(""); //clear old errors
      //send post request to Express backend (axios)
      const { data } = await axios.post(url + "/api/ai/food-assistant", {
        message: message,
      });
      ///ai resonse
      setReply(data.reply);
    } catch (error) {
      setError(error.response?.data?.message || "AI assistant error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
          <div className="bg-orange-500 text-white px-4 py-3 flex justify-between items-center">
            <div>
              <h3 className="font-bold">AI Food Assistant</h3>

              <p className="text-xs opacity-90">Ask me what to eat</p>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="text-white text-xl leading-none"
            >
              ×
            </button>
          </div>

          <div className="p-4 max-h-[420px] overflow-y-auto">
            <textarea
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);

                setError("");
              }}
              rows="3"
              placeholder="Example: any veg salad?"
              className="w-full border border-gray-300 rounded-xl p-3 outline-none resize-none focus:ring-2 focus:ring-orange-400"
            />

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              onClick={askAssistant}
              disabled={loading}
              className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold disabled:opacity-50"
            >
              {loading ? "Thinking..." : "Ask AI"}
            </button>

            {reply && (
              <div className="mt-4 bg-gray-100 rounded-xl p-3">
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {reply}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 px-6 py-4 rounded-full bg-orange-500 hover:bg-orange-600 text-white shadow-2xl flex items-center justify-center text-2xl"
      >
        {isOpen ? "×" : "AI assistant click to ask"}
      </button>
    </>
  );
};

export default FoodAssistant;
