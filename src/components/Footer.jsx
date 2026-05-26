import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook } from "react-icons/fa";
import { LiaLinkedin } from "react-icons/lia";


const links = {
  Product: ["Job discovery", "Worker AI", "Companies", "Salary data"],
  Navigations: ["Help center", "Career library", "Contact"],
  Resources: ["Brand Guideline", "Newsroom"],
};


const Footer = () => {
  return (
    <footer
      className="bg-gray-950 dark:bg-gray-950 text-gray-400 px-8 md:px-16 pt-12 pb-6"
    >
      {/* Top row */}
      <div
        className="flex flex-col md:flex-row justify-between gap-12 mb-12"
      >
        {/* Brand */}
        <div className="max-w-55">
          <Image src="/logo.png" alt="HireLoop" width={140} height={40} className="mb-4" />
          <p className="text-sm text-gray-400 leading-relaxed">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
        </div>

        {/* Link columns */}
        <div
          className="flex gap-16 flex-wrap"
        >
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-indigo-500 font-semibold mb-4 text-sm">{category}</h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-gray-300 hover:text-white dark:text-gray-300 dark:hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div
        className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"

      >
        {/* Social icons */}
        <div
          className="flex items-center gap-3"
        >
          <Link href="#" className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors">
            <FaFacebook size={16} />
          </Link>
          <Link href="#" className="bg-indigo-600 hover:bg-indigo-500 text-white p-2 rounded-lg transition-colors">
            {/* Pinterest P icon */}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
            </svg>
          </Link>
          <Link href="#" className="bg-gray-800 hover:bg-gray-700 text-white p-2 rounded-lg transition-colors">
            <LiaLinkedin size={16} />
          </Link>
        </div>

        {/* Copyright & legal */}
        <div
          className="flex flex-wrap items-center gap-4 text-xs text-gray-500"
        >
          <span>Copyright 2026 — Hireloop</span>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">Terms & Policy</Link>
          <span>-</span>
          <Link href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Guideline</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
