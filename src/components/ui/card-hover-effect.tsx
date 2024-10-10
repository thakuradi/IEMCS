import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    icon: React.ReactNode; // Added icon property
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-rows-1 cols-3 gap-4 py-10 md:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
         <Link
         href={item?.link}
         key={item?.link || idx}  // Fallback to index if the link is empty or non-unique
         className="relative group block p-2 h-full w-full"
         onMouseEnter={() => setHoveredIndex(idx)}
         onMouseLeave={() => setHoveredIndex(null)}
       >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card icon={<CardIcon>{item.icon}</CardIcon>}>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </Link>
      ))}
    </div>
  );
};


export const Card = ({
  className,
  children,
  icon,
}: {
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode; // Optional icon prop for the Card
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-white border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="grid grid-rows-2 items-center h-full">
  {icon && (
    <div className="flex justify-center items-center row-span-1 h-12">
      {/* The icon in the first row with a smaller height */}
      <CardIcon>{icon}</CardIcon>
    </div>
  )}
  <div className="p-4 row-span-1">
    {/* Text content in the second row */}
    {children}
  </div>
</div>

    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-950 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-600 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
export const CardIcon = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "icons-container rounded-xl p-2 border-teal-500 border-2 shadow-sm bg-white inline-flex items-center justify-center",
        className
      )}
    >
      {children}
    </div>
  );
};

