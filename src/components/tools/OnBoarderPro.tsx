"use client";

/* IMPORTS */
import { useState } from "react";
import { Button } from "@/components/ui/button";
import
{
  Upload,
  CheckCircle2,
  FileText,
  FileSignature,
  Landmark,
  UserCheck,
  ShieldAlert,
} from "lucide-react";
import "@/app/globals.css";

/* VARIABLES */
const onboardingChecklist = [
  {
    name: "Identity\nVerification",
    description: `
      Please upload a valid government-issued ID. Rest assured, we keep your documents safe and secure.
      Make sure the ID is not expired, and the photo is clear. If you have any issues uploading, contact
      our 24/7 support team at support@example.com.
    `,
    icon: <CheckCircle2 size={ 144 } className="text-primary" />,
  },
  {
    name: "Tax\nInformation",
    description: `
      Submit the necessary tax forms (W-9 for US, W-8BEN for non-US). Our team is here to help if you
      have any questions. You can upload PDFs or high-resolution images of your documents. 
      Need assistance? We’re just an email away.
    `,
    icon: <FileText size={ 144 } className="text-primary" />,
  },
  {
    name: "Banking\nDetails",
    description: `
      Enter your bank account details to ensure timely and accurate payments. Your financial
      information is kept confidential. Double-check your routing and account numbers to avoid
      any delays in payment.
    `,
    icon: <Landmark size={ 144 } className="text-primary" />,
  },
  {
    name: "Signed\nContract",
    description: `
      Please upload your signed model agreement. We value your collaboration and look forward to
      working together! If you have questions about contract terms or need an updated version,
      let us know and we’ll be happy to assist.
    `,
    icon: <FileSignature size={ 144 } className="text-primary" />,
  },
  {
    name: "Employee\nAgreement",
    description: `
      This outlines the company's code of conduct. Please review and acknowledge all policies.
      If you have any questions, feel free to reach out to HR or your direct manager.
    `,
    icon: <UserCheck size={ 144 } className="text-primary" />,
  },
  {
    name: "Testing",
    description: `
      Health and OSHA compliance. Please review and upload any relevant documents or certifications
      to confirm you meet all safety requirements.
    `,
    icon: <ShieldAlert size={ 144 } className="text-primary" />,
  },
];

/* DEFAULT COMPONENT FUNCTION */
const OnboardPro = () =>
{
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  const handleFileUpload = (docName: string) => {
    setSelectedDocument(docName);
    setModalOpen(true);
  };

  /* MAIN RETURN */
  return (
    <main className="flex p-8 h-[calc(100vh-8rem)] overflow-y-auto">
      {/* FORM UPLOAD ZONES */ }
      <section className="text-secondary w-full">
        <h2 className="text-5xl font-bold mb-2">
          <span className="text-primary">Required </span>
          Onboarding Documents
        </h2>

        {/* 
          Use a responsive grid: 1 column on small screens, 2 columns on md and above.
          gap-6 for spacing between cards.
        */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
          { onboardingChecklist.map( ( doc, index ) => (
            <li
              key={ index }
              className="bg-popover p-6 rounded-xl flex flex-col items-center justify-self-center w-full h-144 shadow-lg"
            >
              {/* ICON to the left of the title */ }
              <div className="flex items-center gap-4 px-4">
                { doc.icon }
                <p className="text-3xl font-bold text-secondary">{ doc.name }</p>
              </div>

              <div>
                <p className="text-md text-muted-foreground mt-2 px-2">
                  { doc.description }
                </p>
              </div>

              {/* UPLOAD BUTTON BELOW */ }
              <Button
                variant="default"
                className="flex items-center px-6 py-3 bg-primary text-lg text-primary-foreground hover:bg-secondary hover:text-primary rounded-lg mt-4"
                onClick={() => handleFileUpload(doc.name)}
              >
                <Upload size={ 18 } />
                <span>Upload</span>
              </Button>
            </li>
          ))}
        </ul>
      </section>

      {/* FILE UPLOAD MODAL */ }
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-popover p-6 rounded-lg shadow-lg w-96">
            <h3 className="text-3xl font-semibold text-popover-foreground mb-4">
              Upload { selectedDocument }
            </h3>
            <input
              type="file"
              className="mb-4 w-full p-2 bg-input text-foreground rounded-lg"
              placeholder="Select file"
            />
            <div className="flex justify-end space-x-4">
              <Button
                variant="secondary"
                className="rounded-lg text-lg text-border hover:text-primary"
                onClick={ () => setModalOpen( false ) }
              >
                Cancel
              </Button>
              <Button
                variant="default"
                className="rounded-lg text-lg hover:text-secondary text-primary-foreground"
              >
                Upload
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default OnboardPro;
