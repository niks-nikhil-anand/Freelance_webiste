import { useState } from "react";
import { VideoChatMessage } from "./design/Services";
import { socials } from '../constants'
import Section from "./Sections";


const RequestCallback = () => {
  const [mobile, setMobile] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log("Callback request submitted:", { mobile });
    setConfirmation(true);
  };

  return (
    <Section>

    
    <div className="max-w-7xl mx-auto bg-n-7 shadow-lg rounded-lg overflow-hidden relative mb-[-100px] z-10">
      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 p-4 flex justify-center items-center">
        <h2 className="text-white text-xl font-bold h4 mb-4">Request Callback</h2>
      </div>
      <div className="flex relative pl-15 pt-10 pb-10 justify-around">
        <div>      
          <h4 className="h4 mb-4 ml-10">Smartest AI</h4>
          <p className="body-2 text-n-3 ml-10">
            Brainwave unlocks the potential of AI-powered applications
          </p>
          <div className="relative">
            <VideoChatMessage/>
          </div>
          
        </div>
        <div className="pl-15 pt-5" style={{ minWidth: "300px" }}>
          {confirmation ? (
            <div className="text-green-600 font-semibold mb-4">We will get back to you soon!</div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="mb-4">
                <label htmlFor="mobile" className="block text-white-700 font-semibold h4 mb-4">
                  Your Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  placeholder="Enter your mobile number"
                  style={{ padding: "0.75rem", margin: "0" }} // Adjust padding and margin here
                />
              </div>
              <button
                type="submit"
                className="bg-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors"
              >
                Request Callback
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </Section>
  );
};

export default RequestCallback;
