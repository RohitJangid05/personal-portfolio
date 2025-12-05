import { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MyContext } from "../context/AppContext";

const Contact = ({ style, onClose }) => {
    let { isDark } = useContext(MyContext);

    const formRef = useRef(null);
    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState("");
    useEffect(() => {
        if (status) {
            const timer = setTimeout(() => {
                setStatus("");
            }, 2000);

            return () => clearTimeout(timer);
        }
    }, [status]);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatus("");
        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(
                () => {
                    setIsSending(false);
                    setStatus("Message sent successfully ✅");
                    formRef.current.reset();
                },
                (error) => {
                    console.error(error);
                    setIsSending(false);
                    setStatus("Failed to send message Please try again ❌.");
                }
            );
    };

    return (
        <div
            style={style}
            className={`w-full min-h-screen flex items-center justify-center 
        ${isDark ? "bg-black/80" : "bg-gray-700/60"} backdrop-blur-md z-50`}>
            <div
                className={`relative p-10 rounded-lg shadow-lg max-w-lg w-full transition-all
            ${isDark ? "bg-white/10 text-white" : "bg-white text-black"}`}>
                <button
                    onClick={onClose}
                    className={`absolute right-4 top-4 text-xl transition cursor-pointer
                ${isDark ? "text-white hover:text-red-400" : "text-black hover:text-red-500"}`}>
                    ✕
                </button>

                <h1
                    className={`text-3xl font-semibold mb-5 text-center 
                ${isDark ? "text-white" : "text-black"}`}>
                    Get in Touch
                </h1>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="flex flex-col gap-5">
                    <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className={`p-3 rounded outline-none 
                        ${isDark
                                ? "bg-white/10 text-white placeholder-gray-300"
                                : "bg-gray-300 text-black placeholder-gray-800 caret-black"
                            }`}
                        required />
                    <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        className={`p-3 rounded outline-none 
                        ${isDark
                                ? "bg-white/10 text-white placeholder-gray-300"
                                : "bg-gray-300 text-black placeholder-gray-800 "
                            }`}
                        required
                    />

                    <textarea
                        rows="5"
                        name="message"
                        placeholder="Message"
                        className={`p-3 rounded outline-none resize-none caret-black
                        ${isDark
                                ? "bg-white/10 text-white placeholder-gray-300"
                                : "bg-gray-300 text-black placeholder-gray-800 "
                            }`}
                        required
                    ></textarea>

                    <button
                        type="submit"
                        disabled={isSending}
                        className={`p-3 rounded font-semibold transition bg-[#ffa500] disabled:opacity-60 cursor-pointer`}>
                        {isSending ? "Sending..." : "Send"}
                    </button>

                    {status && (
                        <p className="text-sm mt-2 text-center">
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Contact;
