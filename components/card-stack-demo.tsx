"use client";
import { CardStack } from "./ui/card-stack";
import { cn } from "@/lib/utils";
export function CardStackDemo() {
  return (
    <div className="h-[25rem] lg:h-[32rem] flex items-center justify-center w-[100%] lg:w-[50%]">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-accent/40 rounded-sm px-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Abdullah",
    designation: "Senior Software Engineer",
    content: (
      <p>
        Me and Abishai is working on same project - He didn't just technically performed well but he also very <Highlight>understandable</Highlight>, working with him is very easy. If you're looking for a Developer <Highlight>don't miss the opportunity to work with him</Highlight>
      </p>
    ),
    imageUrl: "/friends/friend2.png",
  },
  {
    id: 1,
    name: "Muhammad Ubaid Hussain",
    designation: "Full-Stack AI Engineer",
    imageUrl: "/friends/friend1.png",
    content: (
      <p>
        I've recently have worked with him on our <Highlight>Hackathon Project</Highlight> and his technical knowledge is soo deep 🔥
        If you have project he is a right person to reach
      </p>
    ),
  },
  {
    id: 2,
    name: "Nadeem Khan",
    designation: "Software Engineer",
    imageUrl: "/friends/friend5.jpeg",
    content: (
      <p>
        We are working in same working place and the experience with Abishai so far <Highlight>has been Great</Highlight>
        I highly recommend him
      </p>
    ),
  },
];
