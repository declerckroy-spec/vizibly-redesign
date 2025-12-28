'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  /** Array of FAQ items */
  items: FAQItem[];
  /** Optional label above heading */
  label?: string;
  /** Section heading */
  heading?: string;
  /** Show divider line under heading */
  showDivider?: boolean;
  /** Container max width */
  maxWidth?: 'default' | 'narrow';
}

export function FAQSection({
  items,
  label = 'WAT JE MISSCHIEN NOG WIL WETEN',
  heading = 'Veelgestelde vragen',
  showDivider = true,
  maxWidth = 'narrow',
}: FAQSectionProps) {
  const containerClass = maxWidth === 'narrow' ? 'max-w-5xl' : 'max-w-screen-2xl';

  return (
    <section className="border-b-4 border-black bg-[#fafaf8] py-32 lg:py-40">
      <div className={`mx-auto ${containerClass} px-6`}>
        {/* Header */}
        <div className="mb-16">
          {label && (
            <p className="mb-6 text-base font-semibold uppercase tracking-widest text-black/60 lg:text-lg">
              {label}
            </p>
          )}
          <h2 className="mb-6 text-brutalist-h2 text-black">{heading}</h2>
          {showDivider && <div className="h-1 w-32 bg-black"></div>}
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {items.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-4 border-black bg-white px-8 py-2 transition-colors last:border-b-4 hover:border-accent"
            >
              <AccordionTrigger className="text-left text-base font-bold uppercase transition-colors hover:no-underline lg:text-lg">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="mt-4 border-t-2 border-black/10 pt-4 text-base text-black/80 lg:text-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
