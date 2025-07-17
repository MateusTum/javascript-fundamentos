'use client';

import React, { useState } from 'react';
import { HiCheckCircle, HiXCircle, HiRefresh, HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import Section from "../../widgets/Section";

// Quiz questions based on FeaturesSection and TimelineSection content
const quizQuestions = [
  {
    id: 1,
    question: "O que acontece quando você executa: 5 + '3'?",
    category: "Coerção de Tipos",
    options: [
      { text: "Retorna 8 (soma numérica)", correct: false },
      { text: "Retorna '53' (concatenação de string)", correct: true }
    ],
    explanation: "JavaScript converte o número 5 para string e faz concatenação, resultando em '53'."
  },
  {
    id: 2,
    question: "Qual é o resultado de: [] == false?",
    category: "Comparações Malucas",
    options: [
      { text: "true", correct: true },
      { text: "false", correct: false }
    ],
    explanation: "Arrays vazios são convertidos para string vazia '', que é considerada falsy na comparação loose equality (==)."
  },
  {
    id: 3,
    question: "O que acontece com variáveis declaradas com 'var' devido ao hoisting?",
    category: "Hoisting Mágico",
    options: [
      { text: "São elevadas e inicializadas com undefined", correct: true },
      { text: "Geram erro ReferenceError quando acessadas antes da declaração", correct: false }
    ],
    explanation: "Variáveis 'var' são hoisted e inicializadas com undefined, diferente de 'let' e 'const' que ficam na temporal dead zone."
  },
  {
    id: 4,
    question: "Em qual versão do JavaScript foram introduzidas as arrow functions?",
    category: "História do JavaScript",
    options: [
      { text: "ES5 (2009)", correct: false },
      { text: "ES6/ES2015 (2015)", correct: true }
    ],
    explanation: "As arrow functions foram uma das principais novidades do ES6/ES2015, junto com let/const, classes e módulos."
  },
  {
    id: 5,
    question: "Por que 0.1 + 0.2 não é igual a 0.3 em JavaScript?",
    category: "Números Peculiares",
    options: [
      { text: "Devido à representação IEEE 754 de ponto flutuante", correct: true },
      { text: "É um bug do JavaScript que nunca foi corrigido", correct: false }
    ],
    explanation: "JavaScript usa IEEE 754 para números, causando imprecisões em operações decimais. 0.1 + 0.2 = 0.30000000000000004."
  },
  {
    id: 6,
    question: "O que diferencia async/await do ES2017 das Promises do ES2015?",
    category: "História do JavaScript",
    options: [
      { text: "Async/await é apenas açúcar sintático para Promises", correct: true },
      { text: "Async/await substitui completamente as Promises", correct: false }
    ],
    explanation: "Async/await é syntactic sugar para Promises, tornando código assíncrono mais legível e semelhante ao síncrono."
  },
  {
    id: 7,
    question: "Em arrow functions, como se comporta o 'this'?",
    category: "Contexto 'this'",
    options: [
      { text: "Herda o 'this' do escopo pai (lexical binding)", correct: true },
      { text: "Se comporta igual a funções normais", correct: false }
    ],
    explanation: "Arrow functions não têm seu próprio 'this' - elas capturam o 'this' do contexto em que foram definidas."
  },
  {
    id: 8,
    question: "O que são closures em JavaScript?",
    category: "Closures Poderosos",
    options: [
      { text: "Funções que 'lembram' do ambiente onde foram criadas", correct: true },
      { text: "Uma forma de declarar variáveis privadas com 'private'", correct: false }
    ],
    explanation: "Closures permitem que funções internas acessem variáveis da função externa, mesmo após ela ter terminado de executar."
  }
];

/**
 * CTASection component - Interactive JavaScript Quiz
 * Quiz based on concepts from FeaturesSection and TimelineSection
 * Responsive design with full screen height
 */
export default function CTASection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const question = quizQuestions[currentQuestion];
  const totalQuestions = quizQuestions.length;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerSelect = (optionIndex: number) => {
    if (showResult || isProcessing) return;
    setSelectedAnswer(optionIndex);
  };

  const handleNext = () => {
    if (selectedAnswer === null || isProcessing) return;

    // If showing result, advance to next question
    if (showResult) {
      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setShowResult(false);
        setIsProcessing(false);
      } else {
        setQuizCompleted(true);
        setIsProcessing(false);
      }
      return;
    }

    // If not showing result yet, process the answer
    setIsProcessing(true);
    const isCorrect = question.options[selectedAnswer].correct;
    const newAnswers = [...answers, isCorrect];
    setAnswers(newAnswers);
    
    if (isCorrect) {
      setScore(score + 1);
    }

    setShowResult(true);
    setIsProcessing(false);
  };

  const handlePrevious = () => {
    if (currentQuestion > 0 && !isProcessing) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
      setShowResult(false);
      // Adjust score and answers if going back
      if (answers.length > currentQuestion) {
        const newAnswers = answers.slice(0, currentQuestion);
        setAnswers(newAnswers);
        const newScore = newAnswers.filter(answer => answer).length;
        setScore(newScore);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
    setQuizCompleted(false);
    setIsProcessing(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 80) return "🏆 Excelente! Você domina JavaScript!";
    if (percentage >= 60) return "👏 Muito bem! Continue estudando!";
    if (percentage >= 40) return "📚 Bom trabalho! Há espaço para melhorar!";
    return "💪 Continue estudando e pratique mais!";
  };

  if (quizCompleted) {
    return (
      <Section 
        id="start" 
        title="Quiz JavaScript" 
        subtitle="Teste seus conhecimentos sobre os conceitos fundamentais"
        backgroundColor="primary"
        className="min-h-screen"
      >
        <div className="h-[calc(100vh-12rem)] flex items-center justify-center">
          <div className="bg-[#2d2d2d]/95 border-2 border-[#f7df1e] rounded-2xl p-8 max-w-2xl w-full mx-4 text-center backdrop-blur-sm">
            <div className="text-6xl mb-6">🎉</div>
            <h2 className="text-3xl font-bold mb-4 text-[#f7df1e]">
              Quiz Concluído!
            </h2>
            <div className="text-6xl font-bold mb-4 text-[#f7df1e]">
              {score}/{totalQuestions}
            </div>
            <p className="text-xl mb-6 text-[#f7f7f7]">
              {getScoreMessage()}
            </p>
            
            {/* Score breakdown */}
            <div className="bg-[#1a1a1a] rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold mb-4 text-[#f7df1e]">Resumo das Respostas</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {quizQuestions.map((q, index) => (
                  <div key={q.id} className="flex items-center justify-between text-sm">
                    <span className="text-[#cccccc]">{q.category}</span>
                    {answers[index] ? (
                      <HiCheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <HiXCircle className="w-5 h-5 text-red-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={resetQuiz}
              className="bg-[#f7df1e] hover:bg-[#e6c914] text-black font-semibold py-3 px-8 rounded-xl transition-colors duration-300 flex items-center gap-2 mx-auto"
            >
              <HiRefresh className="w-5 h-5" />
              Tentar Novamente
            </button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section 
      id="start" 
      title="Quiz JavaScript" 
      subtitle="Teste seus conhecimentos sobre os conceitos fundamentais"
      backgroundColor="primary"
      className="min-h-screen"
    >
      <div className="h-[calc(100vh-12rem)] flex items-center justify-center">
        <div className="bg-[#2d2d2d]/95 border-2 border-[#f7df1e] rounded-2xl p-6 md:p-8 max-w-3xl w-full mx-4 backdrop-blur-sm">
          {/* Header with Progress Bar and Reset Button */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-[#f7df1e] font-medium">
                  Pergunta {currentQuestion + 1} de {totalQuestions}
                </span>
                <span className="text-sm text-[#cccccc]">
                  {Math.round(progress)}%
                </span>
              </div>
              
              {/* Reset Button */}
              <button
                onClick={resetQuiz}
                disabled={isProcessing}
                className="flex items-center gap-2 px-3 py-1.5 text-sm bg-[#1a1a1a] hover:bg-[#333] text-[#cccccc] hover:text-[#f7df1e] border border-gray-600 hover:border-[#f7df1e]/50 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                title="Recomeçar Quiz"
              >
                <HiRefresh className="w-4 h-4" />
                <span className="hidden md:inline">Recomeçar</span>
              </button>
            </div>
            
            <div className="w-full bg-[#1a1a1a] rounded-full h-2">
              <div 
                className="bg-[#f7df1e] h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="bg-[#f7df1e]/20 text-[#f7df1e] px-3 py-1 rounded-full text-sm font-medium">
              {question.category}
            </span>
          </div>

          {/* Question */}
          <h2 className="text-xl md:text-2xl font-bold mb-8 text-[#f7f7f7] leading-relaxed">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-4 mb-8">
            {question.options.map((option, index) => {
              let buttonClass = "w-full p-4 md:p-6 text-left border-2 rounded-xl transition-all duration-300 ";
              
              if (showResult) {
                if (option.correct) {
                  buttonClass += "bg-green-500/20 border-green-400 text-green-100";
                } else if (selectedAnswer === index && !option.correct) {
                  buttonClass += "bg-red-500/20 border-red-400 text-red-100";
                } else {
                  buttonClass += "bg-[#1a1a1a] border-gray-600 text-gray-400";
                }
              } else if (selectedAnswer === index) {
                buttonClass += "bg-[#f7df1e]/20 border-[#f7df1e] text-[#f7df1e]";
              } else {
                buttonClass += "bg-[#1a1a1a] border-gray-600 text-[#f7f7f7] hover:border-[#f7df1e]/50 hover:bg-[#f7df1e]/10";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showResult || isProcessing}
                  className={buttonClass}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-base md:text-lg">{option.text}</span>
                    {showResult && option.correct && (
                      <HiCheckCircle className="w-6 h-6 text-green-400" />
                    )}
                    {showResult && selectedAnswer === index && !option.correct && (
                      <HiXCircle className="w-6 h-6 text-red-400" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explanation (shown after answer) */}
          {showResult && (
            <div className="bg-[#f7df1e]/10 border border-[#f7df1e]/30 rounded-xl p-4 mb-8">
              <h3 className="font-semibold text-[#f7df1e] mb-2">💡 Explicação:</h3>
              <p className="text-[#f7f7f7] text-sm md:text-base leading-relaxed">
                {question.explanation}
              </p>
            </div>
          )}

          {/* Processing indicator */}
          {isProcessing && (
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 text-[#f7df1e]">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#f7df1e]"></div>
                <span className="text-sm">Processando resposta...</span>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0 || isProcessing}
              className="flex items-center gap-2 px-4 py-2 text-[#cccccc] hover:text-[#f7df1e] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <HiArrowLeft className="w-5 h-5" />
              <span className="hidden md:inline">Anterior</span>
            </button>

            <div className="text-center">
              <div className="text-[#f7df1e] font-semibold">
                Pontuação: {score}/{currentQuestion + (showResult ? 1 : 0)}
              </div>
            </div>

            <button
              onClick={handleNext}
              disabled={(selectedAnswer === null && !showResult) || isProcessing}
              className="flex items-center gap-2 bg-[#f7df1e] hover:bg-[#e6c914] text-black font-semibold py-2 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="hidden md:inline">
                {showResult 
                  ? (currentQuestion === totalQuestions - 1 ? 'Finalizar' : 'Próxima')
                  : 'Responder'
                }
              </span>
              <span className="md:hidden">
                {showResult 
                  ? (currentQuestion === totalQuestions - 1 ? 'Fim' : 'OK')
                  : 'OK'
                }
              </span>
              {!isProcessing && <HiArrowRight className="w-5 h-5" />}
              {isProcessing && <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></div>}
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
} 