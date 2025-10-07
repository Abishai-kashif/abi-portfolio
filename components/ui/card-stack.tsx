"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react";
import GradientBackground from "../gradient-background";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 4000);
  };

  return (
    <div className="relative h-60 w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute h-80 rounded-3xl p-5 shadow-xl border-[0.5px] border-white/20 shadow-black/[0.1] bg-[#050505]/80 flex flex-col items-center backdrop-blur text-center"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR,
              zIndex: cards.length - index,
            }}
          >
            <GradientBackground className="rounded-3xl" />
            <Quote className="text-light-purple fill-light-purple text-4xl mb-7 mt-5" />
            <div className="font-medium text-white text-lg sm:text-xl">
              {card.content}
            </div>
            <div className="absolute -bottom-7 left-0 right-0 flex-center flex-col gap-y-1">
              <div>
                <p className="font-bold text-white leading-tight">
                  {card.name}
                </p>
                <p className="font-medium text-white/70 text-sm">
                  {card.designation}
                </p>
              </div>
              <div className="flex-center p-2 rounded-full bg-dark-purple/50 border-[0.5px] border-white/20">
                <Avatar className="size-12 border-[0.2px] border-white/20">
                  <AvatarImage src={card.imageUrl} />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
