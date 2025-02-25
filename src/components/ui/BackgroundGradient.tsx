import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface GradientProps {
  className: ClassValue;
}

export default function Gradient({ className }: GradientProps) {
  return (
    <div
      className={cn(
        "absolute top-0 left-0 size-60 rounded-full blur-3xl opacity-20 animate-spin duration-2000 bg-gradient-to-r from-purple-500 to-sky-500",
        className
      )}
    ></div>
  );
}
