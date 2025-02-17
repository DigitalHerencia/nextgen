"use client";

import { useState } from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { AgentComboBox } from "@/components/shared/AgentComboBox";
import { Upload } from "lucide-react";
import "@/app/globals.css";

const onboardingChecklist = [
  { name: "Identity Verification", description: "Upload a valid government-issued ID." },
  { name: "Tax Information", description: "Provide tax forms (W-9 for US, W-8BEN for non-US)." },
  { name: "Banking Details", description: "Submit bank account details for payments." },
  { name: "Signed Contract", description: "Upload the signed model agreement." },
];

const OnboardPro = () => {
  const [agent, setAgent] = useState({
    value: "Alex Morgan",
    label: "Talent Agent",
    avatar: "/assets/example-profile-pic.jpg",
  });
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const handleFileUpload = (docName: string) => {
    setSelectedDocument(docName);
    setModalOpen(true);
  };

  return (
    <main className="flex-1 p-8 overflow-y-auto">
      <header className="flex justify-between items-center pb-6">
        <TypographyH2>
          Onboard<span className="text-primary">Pro</span>
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
        <h2 className="text-xl font-semibold mb-4">Required Onboarding Documents</h2>
        <ul className="space-y-4">
          {onboardingChecklist.map((doc, index) => (
            <li key={index} className="bg-popover p-4 rounded-lg flex justify-between items-center">
              <div>
                <p className="text-lg font-bold text-popover-foreground">{doc.name}</p>
                <p className="text-sm text-muted-foreground">{doc.description}</p>
              </div>
              <Button
                variant="default"
                className="flex items-center space-x-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg"
                onClick={() => handleFileUpload(doc.name)}
              >
                <Upload size={16} />
                <span>Upload</span>
              </Button>
            </li>
          ))}
        </ul>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-popover p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-xl font-semibold text-popover-foreground mb-4">Upload {selectedDocument}</h3>
            <input type="file" className="mb-4 w-full p-2 bg-input text-foreground rounded" placeholder="Select file" />
            <div className="flex justify-end space-x-4">
              <Button variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
              <Button variant="default" className="bg-primary text-primary-foreground">Upload</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default OnboardPro;
