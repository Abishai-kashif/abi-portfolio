'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { ArrowRight, Code, FileText, Layers, Palette, Zap } from 'lucide-react';
import GradientBackground from '../gradient-background';
import { useRouter } from 'next/navigation';

interface BentoGridItemProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

const BentoGridItem = ({
  title,
  description,
  icon,
  className,
  size = 'small',
}: BentoGridItemProps) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring' as const, damping: 25 },
    },
  };

  const router = useRouter()

  return (
    <motion.div
      onClick={() => router.push('#contact')}
      variants={variants}
      className={cn(
        'group border-light-purple/10 bg-[#050505] hover:border-light-purple/30 text-white relative flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-xl border px-6 pt-6 pb-10 shadow-md transition-all duration-500',
        className,
      )}
    >
      <GradientBackground className='z-10' />
      <div className="absolute top-0 -right-1/2 z-0 size-full cursor-pointer bg-[linear-gradient(to_right,#ac6bbe5e_1px,transparent_1px),linear-gradient(to_bottom,#ac6bbe5e_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] bg-[size:24px_24px]"></div>

      <div className="text-light-purple/5 group-hover:text-light-purple/10 absolute right-1 bottom-3 scale-[6] transition-all duration-700 group-hover:scale-[6.2]">
        {icon}
      </div>

      <div className="relative z-10 flex h-full flex-col justify-between">
        <div>
          <div className="bg-light-purple/10 text-light-purple shadow-light-purple/10 group-hover:bg-light-purple/20 group-hover:shadow-light-purple/20 mb-4 flex h-12 w-12 items-center justify-center rounded-full shadow transition-all duration-500">
            {icon}
          </div>
          <h3 className="_h4 mb-2">{title}</h3>
          <p className="_p text-white/60 text-sm">{description}</p>
        </div>
        <div className="text-light-purple mt-4 flex items-center text-sm">
          <span className="mr-1">Contact Now</span>
          <ArrowRight className="size-4 transition-all duration-500 group-hover:translate-x-2" />
        </div>
      </div>
      <div className="from-light-purple to-light-purple/30 absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r blur-2xl transition-all duration-500 group-hover:blur-lg" />
    </motion.div>
  );
};

const items = [
  {
    title: 'AI Automation',
    description:
      'Streamline your workflows with intelligent automation solutions.',
    icon: <Code className="size-6" />,
    size: 'large' as const,
  },
  {
    title: 'Accessibility',
    description:
      'Built with a11y best practices to ensure your app is usable by everyone.',
    icon: <Layers className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'Responsive Design',
    description: 'Create layouts that adapt to any screen size with ease.',
    icon: <Layers className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Customizable',
    description: "Tailor components to match your brand's unique style.",
    icon: <Palette className="size-6" />,
    size: 'medium' as const,
  },
  {
    title: 'Performance',
    description: 'Optimized for speed and efficiency across all devices.',
    icon: <Zap className="size-6" />,
    size: 'small' as const,
  },
  {
    title: 'MVP and Saas',
    description: 'Build your MVP or SaaS product with our robust strategy.',
    icon: <FileText className="size-6" />,
    size: 'large' as const,
  },
];

export default function BentoGrid() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <motion.div
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {items.map((item, i) => (
          <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              icon={item.icon}
              size={item.size}
              className={cn(
                item.size === 'large'
                  ? 'sm:col-span-4'
                  : item.size === 'medium'
                    ? 'sm:col-span-3'
                    : 'sm:col-span-2',
                'h-full col-span-1',
              )}
            />
        ))}
      </motion.div>
    </div>
  );
}
