"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { faqs } from "@/data";
import Underline from "../underline";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function FrequentlyAskedQuestionsSection() {
  const router = useRouter();

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container-layout section-padding">
        <div className="flex-center flex-col mb-28">
          <Pill className="mb-8 bg-dark-purple/20 text-white border-[0.2px] border-white/20 font-lora w-fit">
            <PillIndicator pulse variant="section" />
            FAQS
          </Pill>
          <h2 className="_h2 text-center text-white">
            Frequently Asked{" "}
            <span className="text-light-purple relative">
              Questions
              <Underline className="hidden md:inline absolute -bottom-2 left-0 text-light-purple" />
            </span>
          </h2>
        </div>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={cn("mx-auto mt-12 max-w-md rounded-lg p-6 text-center")}
        >
          <div className="bg-light-purple/10 text-light-purple mb-4 inline-flex items-center justify-center rounded-full p-2">
            <Mail className="h-4 w-4" />
          </div>
          <p className="_p text-white/80 mb-1 text-base font-medium">
            Still have questions?
          </p>
          <p className="_p text-white/50 mb-4 text-sm">
            We&apos;re here to help you
          </p>
          <Button onClick={() => router.push("#contact")}>
            Contact Support
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
