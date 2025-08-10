import { Button } from "@/components/ui/button";
import { MailIcon, MapPin, Phone, PhoneCall } from "lucide-react";
import React from "react";
import { ContactForm } from "../contact-form";

export default function GetInTouchSection() {
  return (
    <section className="pt-20 pb-16 px-4">
      <div className="container-layout">
        <h2 className="_h2 text-center text-white mb-20">
          Get In <span className="text-light-purple">Touch</span>
        </h2>
        <div className="flex justify-center flex-col md:flex-row gap-10">
          {/* left */}
          <ContactForm />

          {/* right */}
          <div className="w-full h-full flex-center flex-col gap-5 min-h-[320px] flex-1">
            <div className="bg-white/90 w-full h-full rounded-t-lg text-center p-5">
              <h3 className="font-bold text-3xl mt-1 mb-2 text-[#050505]">
                Let's Work Together
              </h3>
              <p className="text-[#050505]/70">
                Ready to bring your ideas to life? I'd love to hear about your
                project.
              </p>
            </div>
            <div className="w-full flex-center gap-5">
              <Button size="lg" className="rounded-none w-full">
                Send Message
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none w-full group"
              >
                Schedule Call
                <PhoneCall
                  size={50}
                  className="group-hover:-translate-y-0.5 group-hover:rotate-3 transition-all duration-300"
                />
              </Button>
            </div>
            <div className="bg-white/90 w-full h-full rounded-b-lg">
              <div className="flex justify-evenly items-center text-left text-black/80 h-full p-5">
                <div>
                  <p className="flex-center gap-1.5">
                    <strong className="font-semibold">Phone</strong>
                    <Phone size={15} className="inline-block" />
                  </p>
                  <p>+92 (317) 264-8144</p>
                </div>
                <div>
                  <p className="flex-center gap-1.5">
                    <strong className="font-semibold">Email</strong>
                    <MailIcon size={15} className="inline-block" />
                  </p>
                  <p>abishaikashif975@gmail.com</p>
                </div>
                <div>
                  <p className="flex-center gap-1.5">
                    <strong className="font-semibold">Location</strong>
                    <MapPin size={15} className="inline-block" />
                  </p>
                  <p>Karachi, Sindh</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
