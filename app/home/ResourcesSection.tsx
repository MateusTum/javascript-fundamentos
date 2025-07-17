'use client';

import React from 'react';
import { 
  HiBookOpen, 
  HiAcademicCap, 
  HiExternalLink, 
  HiCube,
  HiGlobe,
  HiPlay,
  HiStar
} from 'react-icons/hi';
import { IconType } from 'react-icons';
import Section from "../../widgets/Section";
import { jsClasses } from '../../lib/colors';

interface ResourceCardProps {
  title: string;
  description: string;
  url?: string;
  icon: IconType;
  badge?: string | null;
  onClick?: () => void;
}

/**
 * ResourcesSection component - Learning resources and tools section
 * Displays curated links, courses, books and npm modules for JavaScript learning
 * Features organized cards with external links and recommendations
 */
export default function ResourcesSection() {
  const documentationLinks = [
    {
      title: "MDN Web Docs",
      description: "Documentação oficial completa sobre JavaScript",
      url: "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript",
      icon: HiBookOpen
    },
    {
      title: "JavaScript.info",
      description: "Tutorial moderno e detalhado do básico ao avançado",
      url: "https://javascript.info/",
      icon: HiGlobe
    },
    {
      title: "ECMAScript Specification",
      description: "Especificação oficial da linguagem JavaScript",
      url: "https://tc39.es/ecma262/",
      icon: HiCube
    }
  ];

  const courses = [
    {
      title: "JavaScript Completo ES6+",
      description: "Origamid - Curso completo em português",
      url: "https://www.origamid.com/curso/javascript-completo-es6",
      icon: HiPlay,
      type: "Português"
    },
    {
      title: "The Complete JavaScript Course",
      description: "Jonas Schmedtmann (Udemy) - Do zero ao expert",
      url: "https://www.udemy.com/course/the-complete-javascript-course/",
      icon: HiPlay,
      type: "Inglês"
    },
    {
      title: "JavaScript: Understanding the Weird Parts",
      description: "Anthony Alicea (Udemy) - Conceitos avançados",
      url: "https://www.udemy.com/course/understand-javascript/",
      icon: HiPlay,
      type: "Inglês"
    }
  ];

  const books = [
    {
      title: "Eloquent JavaScript",
      author: "Marijn Haverbeke",
      description: "Introdução moderna à programação",
      url: "https://eloquentjavascript.net/",
      icon: HiBookOpen,
      free: true
    },
    {
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      description: "Série completa sobre JavaScript",
      url: "https://github.com/getify/You-Dont-Know-JS",
      icon: HiBookOpen,
      free: true
    },
    {
      title: "JavaScript: O Guia Definitivo",
      author: "David Flanagan",
      description: "Referência completa da linguagem",
      url: "https://www.amazon.com.br/JavaScript-Guia-Definitivo-David-Flanagan/dp/856583719X",
      icon: HiBookOpen,
      free: false
    }
  ];

  const ResourceCard = ({ title, description, url, icon: Icon, badge = null, onClick }: ResourceCardProps) => (
    <div className={`${jsClasses.bg.secondary} rounded-xl p-4 md:p-6 shadow-lg border ${jsClasses.border.yellow} hover:shadow-xl hover:shadow-[#f7df1e]/10 transition-all duration-300 group h-full flex flex-col`}>
      <div className="flex items-start justify-between mb-3 md:mb-4">
        <div className={`text-xl md:text-2xl ${jsClasses.text.primary}`}>
          <Icon className="w-5 h-5 md:w-6 md:h-6" />
        </div>
        {badge && (
          <span className={`text-xs px-2 py-1 rounded-full shrink-0 ${badge === 'Gratuito' ? 'bg-green-500/20 text-green-400' : badge === 'Português' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'}`}>
            {badge}
          </span>
        )}
      </div>
      <h4 className={`font-bold text-base md:text-lg mb-2 ${jsClasses.text.primary} group-hover:text-[#f7df1e] transition-colors leading-tight`}>
        {title}
      </h4>
      <p className={`text-xs md:text-sm mb-3 md:mb-4 ${jsClasses.text.secondary} leading-relaxed flex-1`}>
        {description}
      </p>
      {url && (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer"
          className={`inline-flex items-center text-xs md:text-sm font-medium ${jsClasses.text.primary} hover:text-[#f7df1e] transition-colors mt-auto`}
        >
          Acessar <HiExternalLink className="ml-1 w-3 h-3 md:w-4 md:h-4" />
        </a>
      )}
      {onClick && (
        <button 
          onClick={onClick}
          className={`inline-flex items-center text-xs md:text-sm font-medium ${jsClasses.text.primary} hover:text-[#f7df1e] transition-colors mt-auto`}
        >
          Ver detalhes <HiExternalLink className="ml-1 w-3 h-3 md:w-4 md:h-4" />
        </button>
      )}
    </div>
  );

  return (
    <Section 
      id="resources" 
      title="Recursos para Aprender" 
      subtitle="Documentação, cursos, livros e ferramentas essenciais"
      backgroundColor="tertiary"
      className="!min-h-dvh"
    >
      <div className="text-left-custom h-full max-h-[calc(100dvh-200px)] overflow-y-auto">
        <div className="space-y-8 md:space-y-12 pb-8">
          {/* Documentação */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <HiBookOpen className={`w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 ${jsClasses.text.primary}`} />
              <h3 className={`text-xl md:text-2xl font-bold ${jsClasses.text.primary}`}>
                Documentação Essencial
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {documentationLinks.map((link, index) => (
                <ResourceCard key={index} {...link} />
              ))}
            </div>
          </div>

          {/* Cursos */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <HiAcademicCap className={`w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 ${jsClasses.text.primary}`} />
              <h3 className={`text-xl md:text-2xl font-bold ${jsClasses.text.primary}`}>
                Cursos Recomendados
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {courses.map((course, index) => (
                <ResourceCard 
                  key={index} 
                  {...course} 
                  badge={course.type}
                />
              ))}
            </div>
          </div>

          {/* Livros */}
          <div>
            <div className="flex items-center mb-4 md:mb-6">
              <HiBookOpen className={`w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 ${jsClasses.text.primary}`} />
              <h3 className={`text-xl md:text-2xl font-bold ${jsClasses.text.primary}`}>
                Livros Fundamentais
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {books.map((book, index) => (
                <ResourceCard 
                  key={index} 
                  title={book.title}
                  description={`${book.author} - ${book.description}`}
                  url={book.url}
                  icon={book.icon}
                  badge={book.free ? 'Gratuito' : null}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
} 