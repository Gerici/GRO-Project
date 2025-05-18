import Navbar from "./Navbar";
import { useEffect } from "react";

export default function Layout({ children }) {
  useEffect(() => {
    document.body.classList.add("bg-techno-eco");
    return () => {
      document.body.classList.remove("bg-techno-eco");
    };
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-20 relative z-10">{children}</main>

      {/* Global Background Pattern */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[radial-gradient(circle_at_1px_1px,#1f1f1f_1px,transparent_1px)] [background-size:30px_30px] opacity-10" />
      <div className="fixed inset-0 -z-20 pointer-events-none bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="fixed inset-0 -z-30 pointer-events-none">
        <svg viewBox="0 0 100 800" preserveAspectRatio="none" className="w-full h-full opacity-5">
          <path
            d="M50 0 C 50 100, 20 100, 20 200 S 80 300, 50 400 S 20 500, 50 600 S 80 700, 50 800"
            stroke="#10b981"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </>
  );
}