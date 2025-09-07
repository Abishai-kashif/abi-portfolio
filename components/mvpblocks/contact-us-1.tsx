'use client';

import { Button } from '@/components/ui/button';
import Earth from '@/components/ui/globe';
import { Label } from '@/components/ui/label';
import { SparklesCore } from '@/components/ui/sparkles';
import { motion, useInView } from 'framer-motion';
import { Check, Loader2, Mail, MessageSquare, User } from 'lucide-react';
import { useRef, useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formRef = useRef(null);
  const isInView = useInView(formRef, { once: true, amount: 0.3 });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Perform form submission logic here
      console.log('Form submitted:', { name, email, message });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setName('');
      setEmail('');
      setMessage('');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div
        className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: `radial-gradient(circle at center, #ac6bbe, transparent 70%)`,
        }}
      />
      <div
        className="absolute right-0 bottom-0 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{
          background: `radial-gradient(circle at center, #ac6bbe, transparent 70%)`,
        }}
      />

      <div className="relative z-10 mx-auto">
        <div className="overflow-hidden rounded-[28px] shadow-xl backdrop-blur-sm">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-10" ref={formRef}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex w-full gap-2"
              >
                <h2 className="_h2 text-white">
                  Contact <span className="text-light-purple">Us</span>
                </h2>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.3 }}
                onSubmit={handleSubmit}
                className="mt-8 space-y-6"
              >
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    <div className="flex items-center gap-2">
                      <User className="text-light-purple" size={24} />
                      <Label htmlFor="name" className='text-lg sm:text-xl font-semibold text-white'>Name</Label>
                    </div>
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                       className="h-14 text-base sm:text-lg resize-none outline-none border-b-2 border-light-purple/70 focus:border-light-purple focus:ring-2 focus:ring-light-purple focus:ring-opacity-50 rounded-t-md transition-all duration-300 bg-transparent p-1 placeholder:text-white/60 pl-3 w-full text-white" 
                      required
                    />
                  </motion.div>

                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2">
                      <Mail className="text-light-purple" size={24} />
                      <Label htmlFor="email" className='text-lg sm:text-xl font-semibold text-white'>Email</Label>
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                       className="h-14 text-base sm:text-lg resize-none outline-none border-b-2 border-light-purple/70 focus:border-light-purple focus:ring-2 focus:ring-light-purple focus:ring-opacity-50 rounded-t-md transition-all duration-300 bg-transparent p-1 placeholder:text-white/60 pl-3 w-full text-white" 
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  className="space-y-2"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                   <div className="flex items-center gap-2">
                    <MessageSquare className="text-light-purple" size={24} />
                    <Label htmlFor="message" className='text-lg sm:text-xl font-semibold text-white'>Message</Label>
                    </div>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="h-48 text-base sm:text-lg resize-none outline-none border-b-2 text-white border-light-purple/70 focus:border-light-purple focus:ring-2 focus:ring-light-purple focus:ring-opacity-50 rounded-t-md transition-all duration-300 bg-transparent p-1 placeholder:text-white/60 pl-3 w-full" 
                    placeholder="Enter your message" />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full"
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </span>
                    ) : isSubmitted ? (
                      <span className="flex items-center justify-center">
                        <Check className="mr-2 h-4 w-4" />
                        Message Sent!
                      </span>
                    ) : (
                      <span>Send Message</span>
                    )}
                  </Button>
                </motion.div>
              </motion.form>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative my-8 flex items-center justify-center overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center overflow-hidden">
                <article className="relative mx-auto h-[350px] min-h-60 max-w-[450px] overflow-hidden rounded-3xl border border-light-purple bg-gradient-to-b from-dark-purple to-dark-purple/5 p-6 text-3xl tracking-tight text-white md:h-[450px] md:min-h-80 md:p-8 md:text-4xl md:leading-[1.05] lg:text-5xl">
                  <span className="_h3">
                    Connect with me, across the world.
                  </span>
                  <div className="absolute -right-20 -bottom-20 z-10 mx-auto flex h-full w-full max-w-[300px] items-center justify-center transition-all duration-700 hover:scale-105 md:-right-28 md:-bottom-28 md:max-w-[550px]">
                    <Earth
                      scale={1.1}
                      baseColor={[0.298, 0.125, 0.378]} // dark purple
                      markerColor={[0.803, 0.539, 0.902]} // light purple
                      glowColor={[0.854, 0, 0.949]} // bright purple
                    />
                  </div>
                </article>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      </>
  );
}
