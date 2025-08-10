import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

import { faqs } from "@/data" 
import GradientBackground from "../gradient-background";

export default function FrequentlyAskedQuestionsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* <GradientBackground /> */}
      <div className="container-layout section-padding">
        <h2 className="_h2 text-center text-white mb-20">
          Frequently Asked <span className="text-light-purple">Questions</span>
        </h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-6 px-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-light-purple px-2"
              >
                <AccordionTrigger className="font-hind text-lg lg:text-[20px] leading-normal">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="_p text-white/80 ">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
