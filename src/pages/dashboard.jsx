import React from 'react';
import { MessageCircle, Phone, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import QRimage from "../assets/QrPixel.png";
import HeaderPage from './headerPage';

const openNewTab = () => {
    window.open("https://chat-steel-two.vercel.app", "_blank", "noopener,noreferrer");
};
const openJournal = () => {
    window.open("https://manish24ts.github.io/journal-entry-", "_blank", "noopener,noreferrer");
};
const openSchedule = () => {
    window.open("https://manish24ts.github.io/user-portal/index.html", "_blank", "noopener,noreferrer");
};

function Dashboard() {
    return (
        <div className="pt-20 bg-gradient-to-br from-indigo-900 via-purple-800 to-indigo-700 min-h-screen text-black">
            <HeaderPage />
            <main className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 items-center">
                {/* Left Section */}
                <div className="flex-1 space-y-8">
                    {/** Chat Forum Card */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <MessageCircle className="w-6 h-6 text-purple-600" /> Chat Forum
                        </h2>
                        <p className="mt-4 text-black">
                            Connect with people and share experiences anonymously in a safe, 
                            supportive environment. Your story matters, and your privacy is our priority.
                        </p>
                        <button onClick={openNewTab} className="mt-6 px-12 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors shadow-md shadow-black">
                            Join Now
                        </button>
                    </motion.div>

                    {/** Journal Entry Card */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Heart className="w-6 h-6 text-purple-600" /> Journal Entry
                        </h2>
                        <p className="mt-4 text-black-">
                            Write your thoughts, track your emotions, and reflect on your journey in a personal, safe space.
                        </p>
                        <button onClick={openJournal} className="mt-6 px-12 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors shadow-md shadow-black">
                            My Journal
                        </button>
                    </motion.div>

                    {/** Contact Therapist Card */}
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
                    >
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <Phone className="w-6 h-6 text-blue-400" /> Contact Therapist
                        </h2>
                        <p className="mt-4 text-black">
                            Our certified therapists are here to support you. Take the first step towards better mental health with confidential guidance.
                        </p>
                        <button onClick={openSchedule} className="mt-6 px-14 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors shadow-md shadow-black">
                            Contact
                        </button>
                    </motion.div>
                </div>

                {/* Right Section - QR Code */}
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.5 }}
                    className="w-96"
                >
                    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-8 shadow-lg">
                        <div className="w-full aspect-square border-2 border-dashed border-indigo-300 rounded-lg flex items-center justify-center">
                            <img src={QRimage} alt="QR Code" className="w-80 h-80"/>
                        </div>
                        <p className="mt-4 text-center text-black">
                            Scan to connect instantly
                        </p><br/>
                        <p><u>To Communicate with your Virtual Therapist</u><br/>
                        Step-1:Send your message<br/>
                        Step-2:After every message, send an "!" message saperately.<br/><br/>
                        Example:-<br/>Message1:"Hi, I am John . I am suddenly feeling anxious." <br/><br/>
                        Message2:"!"</p>
                    </div>
                </motion.div>
            </main>

            {/* Footer */}
            <footer className="border-t border-indigo-400 bg-white/10 backdrop-blur-lg py-6 text-center text-gray-300">
                <p className="flex items-center justify-center gap-2">
                    Made with <Heart className="w-4 h-4 text-red-500" /> for a better tomorrow
                </p>
            </footer>
        </div>
    );
}

export default Dashboard;
