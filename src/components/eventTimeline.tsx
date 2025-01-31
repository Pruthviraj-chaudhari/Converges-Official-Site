"use client";
import { motion } from 'framer-motion';
import { JSX } from 'react';

interface TimelineItem {
  time: string;
  title: string;
  description?: string;
  icon?: JSX.Element;
}

interface TimelineProps {
  timelineData: TimelineItem[]; // Accept timelineData as a prop
}

export function Timeline({ timelineData }: TimelineProps) {
  return (
    <div id="schedule" className="bg-black">
    <div className="max-w-4xl mx-auto py-8 md:px-4 ">
      <div className="flex text-4xl md:text-5xl font-bold  text-sky-400 justify-center my-20">
        <h1>Event Schedule</h1>
      </div>
     
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 h-full w-0.5 bg-border -translate-x-1/2" />

        {/* Timeline items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline point */}
              <div className="absolute left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 z-10">
                <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
              </div>

              {/* Content wrapper */}
              <div className={`flex justify-center items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Left/Right content */}
                <div className={`w-[calc(50%-2rem)] ${index % 2 === 0 ? 'text-right md:pr-8' : 'text-left md:pl-8'}`}>
                  <div className="bg-card p-1 md:p-4 rounded-lg shadow-md  border border-sky-500 transition-transform hover:scale-110">
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      {index % 2 === 1 && item.icon}
                      <span className="text-sm font-medium text-primary">
                        {item.time}
                      </span>
                      {index % 2 === 0 && item.icon}
                    </div>
                    <h3 className="text-md font-semibold mb-1 px-2">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm hidden md:block text-muted-foreground">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-[calc(50%-2rem)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
