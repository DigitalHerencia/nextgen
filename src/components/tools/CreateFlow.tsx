"use client";

import { useState } from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AgentComboBox } from "@/components/shared/AgentComboBox";
import { Calendar } from "lucide-react";
import "@/app/globals.css";

const CreateFlow = () => {
  const [agent, setAgent] = useState({
    value: "Alex Morgan",
    label: "Talent Agent",
    avatar: "/assets/example-profile-pic.jpg",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [appointments, setAppointments] = useState<{
    title: string;
    time: string;
    type: string;
    date: Date;
  }[]>([
    { title: "Photoshoot", time: "10:00 AM", type: "Photography", date: new Date() },
    { title: "Video Recording", time: "2:00 PM", type: "Video", date: new Date() },
  ]);
  const [appointmentDetails, setAppointmentDetails] = useState({ title: "", time: "", type: "" });

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setModalOpen(true);
  };

  const handleAppointmentSubmit = () => {
    if (appointmentDetails.title && appointmentDetails.time && appointmentDetails.type) {
      setAppointments([...appointments, { ...appointmentDetails, date: selectedDate }]);
      setModalOpen(false);
      setAppointmentDetails({ title: "", time: "", type: "" });
    }
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center pb-6">
        <TypographyH2>
          Create<span className="text-primary">Flow</span>
        </TypographyH2>
        <div className="flex items-center space-x-4">
          <AgentComboBox selectedAgent={agent} onSelectAgent={setAgent} />
          <Image
            src={agent.avatar}
            alt={`${agent.value} Avatar`}
            width={48}
            height={48}
            className="rounded-full border-2 border-primary"
          />
        </div>
      </header>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-4">Content Creation Calendar</h2>
        <div className="bg-popover p-4 rounded-lg">
          <Calendar className="w-full text-popover-foreground" onClick={() => handleDateClick(new Date())} />
        </div>

        <h3 className="text-lg font-bold mt-6">At a Glance</h3>
        <ul className="mt-4 space-y-2">
          {appointments.map((appt, index) => (
            <li key={index} className="bg-muted p-3 rounded-lg">
              <p className="font-bold">{appt.title} ({appt.type})</p>
              <p className="text-sm text-muted-foreground">{appt.time} on {appt.date.toDateString()}</p>
            </li>
          ))}
        </ul>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-popover p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-popover-foreground mb-4">Schedule Content for {selectedDate.toDateString()}</h3>
            <input 
              type="text" 
              title="Content Title"
              placeholder="Title" 
              className="mb-4 w-full p-2 bg-input text-foreground rounded"
              value={appointmentDetails.title}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, title: e.target.value })}
            />
            <input 
              type="time"
              title="Content Time" 
              className="mb-4 w-full p-2 bg-input text-foreground rounded"
              value={appointmentDetails.time}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, time: e.target.value })}
            />
            <select 
              title="Content Type"
              className="mb-4 w-full p-2 bg-input text-foreground rounded"
              value={appointmentDetails.type}
              onChange={(e) => setAppointmentDetails({ ...appointmentDetails, type: e.target.value })}
            >
              <option value="">Select Type</option>
              <option value="Photography">Photography</option>
              <option value="Video">Video</option>
              <option value="Editing">Editing</option>
            </select>
            <div className="flex justify-end space-x-4">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="default" className="bg-primary text-primary-foreground" onClick={handleAppointmentSubmit}>Save</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default CreateFlow;