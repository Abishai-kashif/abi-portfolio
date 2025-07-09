import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { faqs } from "@/data" 

export default function FrequentlyAskedQuestionsSection() {
  return (
    <section className="py-16 px-4 bg-white/5 backdrop-blur-sm">
      <div className="container-layout">
        <h2 className="text-4xl font-bold text-center text-white mb-12">
          Frequently Asked <span className="text-bright-purple">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white/10 border-light-purple/30 rounded-lg px-6"
              >
                <AccordionTrigger className="text-light-purple hover:text-bright-purple">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
