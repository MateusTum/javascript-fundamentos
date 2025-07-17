'use client';

import React from 'react';
import Image from 'next/image';
import { jsClasses } from '../../lib/colors';

/**
 * HeroSection component - Simple homepage introduction section
 * Features centered JavaScript logo with title and subtitle
 * Responsive design for mobile, tablet, and desktop
 */
export default function HeroSection() {

  return (
    <section 
      id="hero"
      className={`min-h-screen w-full flex items-center justify-center ${jsClasses.bg.primary} px-4 relative`}
    >

        <div className="text-center">
          {/* JavaScript Logo */}
          <div className="mb-8">
            <Image
              src="/js_logo.png"
              alt="JavaScript Logo"
              width={200}
              height={200}
              className="mx-auto w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64"
              priority
            />
          </div>
          
          {/* JavaScript Title */}
          <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4 ${jsClasses.text.primary}`}>
            JavaScript
          </h1>
          
          {/* Programming Language Subtitle */}
          <p className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-light ${jsClasses.text.secondary} mb-6`}>
            Linguagem de programação
          </p>
          
          {/* Educational Project Information */}
          <div className={`max-w-2xl mx-auto ${jsClasses.text.muted}`}>
            <p className="text-sm sm:text-base md:text-lg mb-2">
              Projeto educacional apresentado no
            </p>
            <p className={`text-base sm:text-lg md:text-xl font-medium ${jsClasses.text.secondary} mb-2`}>
              IFG Campus Jataí
            </p>
            <p className="text-sm sm:text-base md:text-lg">
              Disciplina: Fundamentos da Computação • 1º Período
            </p>
          </div>
        </div>
    </section>
  );
} 