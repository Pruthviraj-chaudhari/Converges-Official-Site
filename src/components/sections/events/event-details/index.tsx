"use client";

import { motion } from 'framer-motion';
import { EventHeader } from './event-header';
import { EventInfo } from './event-info';
import { RoundDetails } from './round-details';
import { RulesSection } from './rules-section';
import { CoordinatorInfo } from './coordinator-info';
import { RegisterButton } from './register-button';

export interface EventDetailsProps {
  event: {
    name: string;
    logo:string;
    department: string;
    description: string;
    teamSize: string;
    entryFee: string;
    rounds: {
      name: string;
      description: string;
    }[];
    rules: string[];
    coordinators: {
      student: { name: string; contact: string; }[];
      faculty: { name: string; contact: string; }[];
    };
    registrationLink: string;
  }
}

export function EventDetails({ event }: EventDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-4xl mx-auto p-6 space-y-8 bg-transparent"
    >
      
      <EventHeader name={event.name} department={event.department}logo={event.logo} />
      <EventInfo description={event.description} teamSize={event.teamSize} entryFee={event.entryFee} />
      <RoundDetails rounds={event.rounds} />
      <RulesSection rules={event.rules} />
      <CoordinatorInfo coordinators={event.coordinators} />
      <RegisterButton link={event.registrationLink} />
    </motion.div>
  );
}