'use client';

import React, { useState, useEffect } from 'react';
import { HiQrcode, HiX, HiShare } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import QRCode from 'react-qr-code';
import { jsClasses } from '../lib/colors';

/**
 * FloatingButtons component - Global floating action buttons
 * Features QR code sharing modal and GitHub repository link
 * Fixed positioned buttons that appear on all pages
 */
export default function FloatingButtons() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);
  const [currentURL, setCurrentURL] = useState('');

  // Get current URL dynamically on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentURL(window.location.href);
    }
  }, []);

  const openQRModal = () => {
    setIsQRModalOpen(true);
  };

  const closeQRModal = () => {
    setIsQRModalOpen(false);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentURL);
      // You could add a toast notification here
    } catch (err) {
      console.error('Failed to copy to clipboard:', err);
    }
  };

  return (
    <>
      {/* QR Code Button - Top Right */}
      <button
        onClick={openQRModal}
        className={`
          fixed top-6 right-4 z-30 p-3 rounded-full transition-all duration-300 cursor-pointer
          ${jsClasses.bg.secondary} ${jsClasses.border.yellow} border-2
          ${jsClasses.hover.bgYellow} ${jsClasses.hover.textBlack}
          ${jsClasses.text.primary} shadow-lg hover:shadow-xl hover:scale-110
          group
        `}
        aria-label="Compartilhar site via QR Code"
      >
        <HiQrcode className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
      </button>

      {/* GitHub Button - Below QR Code */}
      <a
        href="https://github.com/MateusTum/javascript-fundamentos"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          fixed top-20 right-4 z-30 p-3 rounded-full transition-all duration-300 cursor-pointer
          ${jsClasses.bg.secondary} ${jsClasses.border.yellow} border-2
          ${jsClasses.hover.bgYellow} ${jsClasses.hover.textBlack}
          ${jsClasses.text.primary} shadow-lg hover:shadow-xl hover:scale-110
          group
        `}
        aria-label="Ver código no GitHub"
      >
        <FaGithub className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
      </a>

      {/* QR Code Modal */}
      {isQRModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={closeQRModal}
          />
          
          {/* Modal Content */}
          <div className={`
            relative ${jsClasses.bg.secondary} rounded-2xl p-12 shadow-2xl 
            border-2 ${jsClasses.border.yellow} w-full mx-2 sm:mx-4
            max-w-xs sm:max-w-sm max-h-screen
            transform transition-all duration-300 scale-100
          `}>
            {/* Close Button */}
            <button
              onClick={closeQRModal}
              className={`
                absolute top-3 right-3 p-1.5 rounded-full
                ${jsClasses.bg.primary} ${jsClasses.text.primary}
                hover:bg-red-500 hover:text-white transition-colors duration-200
              `}
              aria-label="Fechar modal"
            >
              <HiX className="w-4 h-4" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-3">
              <div className={`inline-flex items-center justify-center w-8 h-8 md:w-10 md:h-10 rounded-full ${jsClasses.bg.yellow} mb-2`}>
                <HiQrcode className="w-4 h-4 md:w-5 md:h-5 text-black" />
              </div>
              <h3 className={`text-base md:text-lg font-bold ${jsClasses.text.primary} mb-1`}>
                Compartilhar Site
              </h3>
              <p className={`text-xs ${jsClasses.text.secondary}`}>
                Escaneie o QR code para acessar
              </p>
            </div>

            {/* QR Code */}
            {currentURL && (
              <div className="bg-white p-2 rounded-lg mb-3 flex justify-center">
                <QRCode
                  value={currentURL}
                  size={100}
                  style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                  viewBox={`0 0 100 100`}
                />
              </div>
            )}

            {/* URL Display */}
            <div className={`${jsClasses.bg.primary} rounded-lg p-2 mb-3`}>
              <p className={`text-xs ${jsClasses.text.muted} mb-1`}>URL:</p>
              <p className={`text-xs ${jsClasses.text.primary} font-mono break-all leading-tight`}>
                {currentURL}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={copyToClipboard}
                className={`
                  flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg
                  ${jsClasses.bg.yellow} text-black font-medium text-sm
                  hover:bg-[#e6c914] transition-colors duration-200
                `}
              >
                <HiShare className="w-3.5 h-3.5" />
                Copiar
              </button>
              <button
                onClick={closeQRModal}
                className={`
                  px-4 py-2 rounded-lg border-2 ${jsClasses.border.yellow}
                  ${jsClasses.text.primary} hover:bg-[#f7df1e]/10 text-sm
                  transition-colors duration-200
                `}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 