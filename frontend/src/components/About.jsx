import React from "react";

const About = () => {
  return (
    <div className="max-w-3xl mx-auto text-center mt-10 px-6">
      <h2 className="text-4xl font-bold text-gray-800">About TranscriberPro</h2>
      <p className="text-gray-600 mt-4 leading-relaxed">
        TranscriberPro is a simple and powerful AI-based transcription service. Upload your audio files, and we’ll transcribe them using advanced AI models. Once completed, you’ll receive the transcript directly in your email.
      </p>

      <h3 className="text-2xl font-semibold mt-6 text-gray-700">Why Choose Us?</h3>
      <ul className="list-disc list-inside text-gray-600 mt-3">
        <li>Fast and accurate AI transcription</li>
        <li>Secure and private</li>
        <li>Supports multiple audio formats</li>
        <li>Simple and easy-to-use interface</li>
      </ul>

      <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">About the Developer</h2>
            <div className="bg-white rounded-lg shadow-md p-8 mb-8">
              <div className="flex items-center justify-center mb-6">
                <img 
                  src="https://avatars.githubusercontent.com/u/178072799?v=4" 
                  alt="Developer Profile" 
                  className="w-32 h-32 rounded-full"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">Ghafoor Nazari</h3>
              <p className="mb-4">
              Self Taught Developer and Cybersecurity Enthusiast
              </p>
              <div className="flex justify-center">
                <a 
                  href="https://github.com/notaglitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-900 hover:bg-gray-800"
                >
                  Visit My GitHub
                </a>
              </div>
            </div>
    </div>
  );
};

export default About;
