'use client';

import React from 'react';
import { IconType } from 'react-icons';
import { jsClasses } from '../lib/colors';

interface FeatureData {
  icon: IconType;
  title: string;
  description: string;
  examples?: string[];
  codeExample?: string;
  tips?: string[];
}

interface MainFeatureDisplayProps {
  feature: FeatureData | null;
  className?: string;
}

/**
 * Main feature display component for the detailed view area
 * Shows comprehensive information about the selected JavaScript concept
 * @param feature - The feature data to display
 * @param className - Additional CSS classes
 */
const MainFeatureDisplay: React.FC<MainFeatureDisplayProps> = ({
  feature,
  className = ''
}) => {
  if (!feature) {
    return (
      <div className={`
        flex items-center justify-center h-full
        ${jsClasses.bg.tertiary} rounded-2xl border-2 ${jsClasses.border.yellow}
        ${className}
      `}>
        <div className="text-center">
          <div className={`text-6xl mb-4 ${jsClasses.text.primary}`}>👆</div>
          <h3 className={`text-2xl font-bold mb-2 ${jsClasses.text.primary}`}>
            Selecione um Conceito
          </h3>
          <p className={`${jsClasses.text.secondary}`}>
            Clique em um dos conceitos ao lado para ver os detalhes
          </p>
        </div>
      </div>
    );
  }

  const IconComponent = feature.icon;

  return (
    <div className={`
      ${jsClasses.bg.tertiary} rounded-2xl border-2 ${jsClasses.border.yellow} 
      p-8 h-full overflow-y-auto
      ${className}
    `}>
      {/* Header */}
      <div className="mb-8">
        <div className={`mb-4 ${jsClasses.text.primary} flex justify-center`}>
          <IconComponent className="w-16 h-16" />
        </div>
        <h2 className={`text-3xl font-bold mb-4 ${jsClasses.text.primary}`}>
          {feature.title}
        </h2>
        <p className={`text-lg leading-relaxed ${jsClasses.text.secondary}`}>
          {feature.description}
        </p>
      </div>

      {/* Examples Section */}
      {feature.examples && feature.examples.length > 0 && (
        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>
            📋 Exemplos
          </h3>
          <ul className="space-y-2">
            {feature.examples.map((example, index) => (
              <li key={index} className={`flex items-start ${jsClasses.text.secondary}`}>
                <span className={`${jsClasses.text.primary} mr-3 text-lg`}>•</span>
                <span>{example}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Code Example */}
      {feature.codeExample && (
        <div className="mb-8">
          <h3 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>
            💻 Exemplo de Código
          </h3>
          <div className={`${jsClasses.bg.primary} ${jsClasses.text.primary} p-4 rounded-lg border ${jsClasses.border.yellow} font-mono text-sm overflow-x-auto`}>
            <pre className="whitespace-pre-wrap">{feature.codeExample}</pre>
          </div>
        </div>
      )}

      {/* Tips Section */}
      {feature.tips && feature.tips.length > 0 && (
        <div>
          <h3 className={`text-xl font-semibold mb-4 ${jsClasses.text.primary}`}>
            💡 Dicas Importantes
          </h3>
          <div className="space-y-3">
            {feature.tips.map((tip, index) => (
              <div key={index} className={`${jsClasses.bg.yellow} p-4 rounded-lg ${jsClasses.text.inverse} border border-[#e6c914]`}>
                <p className="font-medium">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export { type FeatureData };
export default MainFeatureDisplay; 