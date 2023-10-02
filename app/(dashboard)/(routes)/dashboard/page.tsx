"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CodeIcon,
  ImageIcon,
  MessageSquare,
  MusicIcon,
  VideoIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

const DashboardPage = () => {
  const router = useRouter();

  const tools = [
    {
      lable: "Conversation",
      icon: MessageSquare,
      color: "text-violet-500",
      bgColor: "bg-violet-500/10",
      href: "/conversation",
    },
    {
      lable: "Image Generation",
      icon: ImageIcon,
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      href: "/image",
    },
    {
      lable: "Video Generation",
      icon: VideoIcon,
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      href: "/video",
    },
    {
      lable: "Music Generation",
      icon: MusicIcon,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      href: "/music",
    },
    {
      lable: "Code Generation",
      icon: CodeIcon,
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      href: "/code",
    },
  ];

  return (
    <>
      <div className="mb-8 space-y-4">
        <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Explore the power of AI
        </h2>
        <p className="text-muted-foreground text-xs md:text-sm lg:text-lg font-light text-center">
          Chat with smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            key={tool.href}
            className="p-4 border-black/5 flex item-center justify-between hover:shadow-md transition cursor-pointer"
            onClick={() => router.push(tool.href)}
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.lable}</div>
            </div>
            <ArrowRight className="w-5 h-5 mt-3" />
          </Card>
        ))}
      </div>
    </>
  );
};

export default DashboardPage;
