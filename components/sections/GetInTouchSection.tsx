import ContactUs from "../mvpblocks/contact-us-1";
import { Pill, PillIndicator } from "../ui/kibo-ui/pill";

export default function GetInTouchSection() {
  return (
    <section id="contact">
      <div className="container-layout mx-auto relative pb-20">
        <Pill className="m-10 bg-dark-purple/20 text-white border-[0.2px] border-white/20 font-lora w-fit">
          <PillIndicator pulse variant="section" />
          Get in Touch
        </Pill>
        <div>
          <ContactUs />
        </div>
      </div>
    </section>
  );
}
