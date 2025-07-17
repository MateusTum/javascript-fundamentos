'use client';

import React, { useState, useEffect } from 'react';
import { 
  HiSwitchVertical, 
  HiScale, 
  HiTrendingUp, 
  HiLockClosed, 
  HiLocationMarker, 
  HiCalculator,
  HiBookOpen,
  HiX 
} from 'react-icons/hi';
import Section from "../../widgets/Section";
import CompactFeatureCard from "../../widgets/CompactFeatureCard";
import MainFeatureDisplay, { type FeatureData } from "../../widgets/MainFeatureDisplay";
import { jsClasses } from '../../lib/colors';

// Expanded feature data with detailed information
const featuresData: FeatureData[] = [
  {
    icon: HiSwitchVertical,
    title: "Coerção de Tipos",
    description: "Entenda como JavaScript converte automaticamente entre tipos de dados de forma implícita.",
    examples: [
      "5 + '3' = '53' (número vira string)",
      "'5' - 3 = 2 (string vira número)",
      "true + 1 = 2 (boolean vira número)",
      "'0' == false retorna true"
    ],
    codeExample: `// Exemplos de coerção de tipos
console.log(5 + '3');        // '53'
console.log('5' - 3);        // 2
console.log(true + 1);       // 2
console.log('0' == false);   // true
console.log([] + {});        // '[object Object]'
console.log(null + 1);       // 1`,
    tips: [
      "Use sempre === ao invés de == para evitar coerção inesperada",
      "Number() e String() fazem conversões explícitas mais seguras"
    ]
  },
  {
    icon: HiScale,
    title: "Comparações Malucas",
    description: "Descubra os comportamentos estranhos dos operadores de comparação == e === em JavaScript.",
    examples: [
      "[] == false é true",
      "[] === false é false",
      "null == undefined é true",
      "'0' == 0 é true, mas '0' === 0 é false"
    ],
    codeExample: `// Comparações que surpreendem
console.log([] == false);        // true
console.log([] === false);       // false
console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log('0' == 0);          // true
console.log('0' === 0);         // false
console.log(NaN === NaN);       // false`,
    tips: [
      "Sempre prefira === (strict equality) ao invés de == (loose equality)",
      "Para verificar NaN, use Number.isNaN() ou Object.is()"
    ]
  },
  {
    icon: HiTrendingUp,
    title: "Hoisting Mágico",
    description: "Como JavaScript 'eleva' declarações de variáveis e funções para o topo do escopo.",
    examples: [
      "Funções podem ser chamadas antes de serem declaradas",
      "Variáveis var são 'elevadas' mas não inicializadas",
      "let e const também sofrem hoisting, mas ficam na 'temporal dead zone'"
    ],
    codeExample: `// Hoisting em ação
console.log(minhaFuncao()); // Funciona!

function minhaFuncao() {
  return "Função foi hoisted!";
}

console.log(varVariable); // undefined (não erro)
var varVariable = "Valor";

console.log(letVariable); // ReferenceError
let letVariable = "Valor";`,
    tips: [
      "Declare sempre as funções antes de usá-las para melhor legibilidade",
      "Use let e const ao invés de var para evitar comportamentos inesperados"
    ]
  },
  {
    icon: HiLockClosed,
    title: "Closures Poderosos",
    description: "Funções que 'lembram' do ambiente onde foram criadas, mantendo acesso às variáveis externas.",
    examples: [
      "Funções internas acessam variáveis da função externa",
      "Variáveis são preservadas mesmo após a função externa terminar",
      "Útil para criar módulos e encapsulamento"
    ],
    codeExample: `// Closure em ação
function criarContador() {
  let count = 0;
  
  return function() {
    count++;
    return count;
  };
}

const contador = criarContador();
console.log(contador()); // 1
console.log(contador()); // 2
console.log(contador()); // 3`,
    tips: [
      "Closures são fundamentais para programação funcional em JavaScript",
      "Cuidado com vazamentos de memória ao criar muitos closures"
    ]
  },
  {
    icon: HiLocationMarker,
    title: "Contexto 'this'",
    description: "O comportamento mais confuso do JavaScript: como o valor de 'this' muda dependendo do contexto.",
    examples: [
      "Em funções normais, 'this' depende de como a função é chamada",
      "Arrow functions herdam 'this' do escopo pai",
      "call(), apply() e bind() controlam o valor de 'this'"
    ],
    codeExample: `// Contexto 'this' variável
const obj = {
  nome: 'João',
  saudar: function() {
    console.log('Olá, ' + this.nome);
  },
  saudarArrow: () => {
    console.log('Olá, ' + this.nome); // undefined
  }
};

obj.saudar(); // "Olá, João"
obj.saudarArrow(); // "Olá, undefined"

const saudar = obj.saudar;
saudar(); // "Olá, undefined"`,
    tips: [
      "Use arrow functions quando quiser preservar o 'this' do escopo pai",
      "bind() é útil para fixar o contexto de uma função"
    ]
  },
  {
    icon: HiCalculator,
    title: "Números Peculiares",
    description: "Por que 0.1 + 0.2 !== 0.3? Explore os mistérios da matemática de ponto flutuante em JavaScript.",
    examples: [
      "0.1 + 0.2 = 0.30000000000000004",
      "JavaScript usa IEEE 754 para números",
      "Infinity e -Infinity são valores válidos",
      "NaN não é igual a si mesmo"
    ],
    codeExample: `// Peculiaridades numéricas
console.log(0.1 + 0.2);           // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);   // false
console.log(1/0);                 // Infinity
console.log(-1/0);                // -Infinity
console.log(Math.sqrt(-1));       // NaN
console.log(NaN === NaN);         // false
console.log(Number.MAX_VALUE);    // 1.7976931348623157e+308`,
    tips: [
      "Use parseFloat(num.toFixed(2)) para arredondar decimais",
      "Para comparar números decimais, use uma tolerância: Math.abs(a - b) < 0.0001"
    ]
  }
];

/**
 * FeaturesSection component - Interactive JavaScript concepts section
 * Responsive design: Desktop (sidebar + main), Tablet (stacked), Mobile (modal)
 * Displays detailed information about selected JavaScript concepts
 */
export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState<FeatureData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleFeatureSelect = (feature: FeatureData) => {
    setSelectedFeature(feature);
    // On mobile, open modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <Section 
      id="features" 
      title="Conceitos Fundamentais" 
      subtitle="Descubra os recursos e características que tornam o JavaScript único"
      backgroundColor="secondary"
    >
      {/* Desktop Layout (lg+): Sidebar + Main */}
      <div className="hidden lg:flex gap-6 h-[calc(100vh-12rem)]">
        {/* Scrollable sidebar - 1/4 width */}
        <div className="w-1/4 flex flex-col h-full">
          <h3 className="text-xl font-semibold mb-4 text-[#f7df1e] flex items-center gap-2 flex-shrink-0">
            <HiBookOpen className="w-6 h-6" />
            Conceitos
          </h3>
          <div className="flex-1 overflow-y-auto space-y-4 p-3" style={{scrollbarWidth: 'thin', scrollbarColor: '#f7df1e #2a2a2a'}}>
            {featuresData.map((feature, index) => (
              <CompactFeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                isActive={selectedFeature?.title === feature.title}
                onClick={() => setSelectedFeature(feature)}
              />
            ))}
          </div>
        </div>

        {/* Main display area - 3/4 width */}
        <div className="w-3/4 h-full">
          <MainFeatureDisplay feature={selectedFeature} />
        </div>
      </div>

      {/* Tablet Layout (md-lg): Stacked Vertical */}
      <div className="hidden md:block lg:hidden space-y-6">
        {/* Horizontal scrollable cards */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-[#f7df1e] flex items-center gap-2">
            <HiBookOpen className="w-6 h-6" />
            Conceitos
          </h3>
          <div className="flex overflow-x-auto space-x-4 pb-4" style={{scrollbarWidth: 'thin', scrollbarColor: '#f7df1e #2a2a2a'}}>
            {featuresData.map((feature, index) => (
              <div key={index} className="flex-shrink-0 w-64">
                <CompactFeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  isActive={selectedFeature?.title === feature.title}
                  onClick={() => setSelectedFeature(feature)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Main display below */}
        <div className="h-96">
          <MainFeatureDisplay feature={selectedFeature} />
        </div>
      </div>

      {/* Mobile Layout (sm and below): List + Modal */}
      <div className="block md:hidden">
        <h3 className="text-xl font-semibold mb-4 text-[#f7df1e] flex items-center gap-2">
          <HiBookOpen className="w-6 h-6" />
          Conceitos - Toque para ver detalhes
        </h3>
        <div className="space-y-3">
          {featuresData.map((feature, index) => (
            <CompactFeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={selectedFeature?.title === feature.title}
              onClick={() => handleFeatureSelect(feature)}
            />
          ))}
        </div>

        {/* Mobile Modal */}
        {isModalOpen && selectedFeature && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <div 
              className={`
                relative w-full max-w-lg max-h-[90vh] ${jsClasses.bg.secondary} rounded-2xl 
                border-2 ${jsClasses.border.yellow} flex flex-col shadow-2xl
                transform transition-all duration-300 scale-100
              `}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className={`
                  absolute top-3 right-3 p-1.5 rounded-full
                  ${jsClasses.bg.primary} ${jsClasses.text.primary}
                  hover:bg-red-500 hover:text-white transition-colors duration-200
                `}
                aria-label="Fechar modal"
              >
                <HiX className="w-4 h-4" />
              </button>
              
              {/* Modal content */}
              <div className="flex-1 overflow-y-auto p-8 pt-16">
                <div className="min-h-full">
                  {selectedFeature && (
                    <>
                      {/* Header */}
                      <div className="mb-8">
                        <div className={`${jsClasses.text.primary} mb-4 flex justify-center`}>
                          <selectedFeature.icon className="w-16 h-16" />
                        </div>
                        <h2 className={`text-3xl font-bold mb-4 ${jsClasses.text.primary}`}>
                          {selectedFeature.title}
                        </h2>
                        <p className={`text-lg leading-relaxed ${jsClasses.text.secondary}`}>
                          {selectedFeature.description}
                        </p>
                      </div>

                      {/* Examples Section */}
                      {selectedFeature.examples && selectedFeature.examples.length > 0 && (
                        <div className="mb-8">
                          <h3 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>
                            📋 Exemplos
                          </h3>
                          <ul className="space-y-2">
                            {selectedFeature.examples.map((example, index) => (
                              <li key={index} className={`flex items-start ${jsClasses.text.secondary}`}>
                                <span className={`${jsClasses.text.primary} mr-3 text-lg`}>•</span>
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Code Example */}
                      {selectedFeature.codeExample && (
                        <div className="mb-8">
                          <h3 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>
                            💻 Exemplo de Código
                          </h3>
                          <div className={`${jsClasses.bg.primary} ${jsClasses.text.primary} p-4 rounded-lg border ${jsClasses.border.yellow} font-mono text-sm overflow-x-auto`}>
                            <pre className="whitespace-pre-wrap">{selectedFeature.codeExample}</pre>
                          </div>
                        </div>
                      )}

                      {/* Tips Section */}
                      {selectedFeature.tips && selectedFeature.tips.length > 0 && (
                        <div>
                          <h3 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>
                            💡 Dicas Importantes
                          </h3>
                          <div className="space-y-3">
                            {selectedFeature.tips.map((tip, index) => (
                              <div key={index} className={`${jsClasses.bg.yellow} p-4 rounded-lg text-black border border-[#e6c914]`}>
                                <p className="font-medium">{tip}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
} 