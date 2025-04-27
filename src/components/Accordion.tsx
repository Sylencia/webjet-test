import { type ReactNode, useState } from 'react';

interface AccordionProps {
  title: string;
  children: ReactNode;
}

export const Accordion = ({ title, children }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border-b border-gray-200 py-2">
      <button
        className="flex w-full items-center justify-between py-2 text-xs font-medium text-gray-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {isOpen ? '▼' : '▲'} {title}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="py-2">{children}</div>
      </div>
    </div>
  );
};
