"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import
{
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import
{
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

// Utility for converting a DateRange to a Date
import { dateRangeToDate } from "@/lib/utils";
import type { DateRange } from "react-day-picker";

// Forms
import { AgentForm } from "@/components/forms/agent.form";
import { CampaignForm } from "@/components/forms/campaign.form";
import { ContentForm } from "@/components/forms/content.form";
import { DealForm } from "@/components/forms/deal.form";
import { ManagerForm } from "@/components/forms/manager.form";
import { PaymentForm } from "@/components/forms/payment.form";
import { TalentForm } from "@/components/forms/talent.form";

// Cards for upcoming sessions
import { DealCard } from "@/components/cards/deal.card";
import { ContentCard } from "@/components/cards/content.card";
import { TalentCard } from "@/components/cards/talent.card";

export default function CreateFlow ()
{
  const [ selectedDate, setSelectedDate ] = useState<Date>( new Date() );
  const [ modalOpen, setModalOpen ] = useState( false );
  const [ activeForm, setActiveForm ] = useState( "campaign" );

  // Sample upcoming sessions (placeholder data)
  // Define local interfaces (if not already imported) to help with type assertions:
  // Define the types for each card:
  interface Deal
  {
    talent: string;
    agent: string;
    brand: string;
    dealAmount: number;
    status: "pending" | "accepted" | "rejected" | "completed";
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  }

  interface Content
  {
    _id: string;
    talent: string;
    type: "video" | "photo" | "audio" | "text";
    engagement: number;
    campaign: string;
    fileUrl?: string;
    description?: string;
    createdBy: string;
    createdAt: Date;
    updatedAt: Date;
  }

  interface Talent
  {
    avatar: string;
    name: string;
    category: string;
    bio: string;
    earnings: number;
    agent: string;
    talentManager: string;
    social_links?: {
      instagram?: string;
      twitter?: string;
    };
  }

  // Define a discriminated union type for sessions:
  type UpcomingSession =
    | { type: "deal"; data: Deal }
    | { type: "content"; data: Content }
    | { type: "talent"; data: Talent };

  // Now, define your sample data using the union type:
  const upcomingSessions: UpcomingSession[] = [
    {
      type: "deal",
      data: {
        talent: "Talent A",
        agent: "Agent X",
        brand: "Brand Alpha",
        dealAmount: 5000,
        status: "accepted",
        createdBy: "User123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    {
      type: "content",
      data: {
        _id: "content1",
        talent: "Talent B",
        type: "video",
        engagement: 120,
        campaign: "Campaign Beta",
        fileUrl: "https://example.com/video.mp4",
        description: "A creative video piece.",
        createdBy: "User456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    {
      type: "talent",
      data: {
        avatar: "/talent/Carla_Avatar.jpg",
        name: "Carla",
        category: "Model",
        bio: "Experienced model with a passion for art.",
        earnings: 8000,
        agent: "Agent Y",
        talentManager: "Manager Z",
        social_links: {
          instagram: "https://instagram.com/carla",
          twitter: "https://twitter.com/carla",
        },
      },
    },
  ];


  // Tabs configuration for scheduling forms
  const formTabs = [
    { value: "campaign", label: "Campaign", component: <CampaignForm /> },
    { value: "content", label: "Content", component: <ContentForm /> },
    { value: "agent", label: "Agent", component: <AgentForm /> },
    { value: "deal", label: "Deal", component: <DealForm /> },
    { value: "manager", label: "Manager", component: <ManagerForm /> },
    { value: "payment", label: "Payment", component: <PaymentForm /> },
    { value: "talent", label: "Talent", component: <TalentForm /> },
  ];

  // Handle date selection from the calendar
  const handleDateSelect = ( date: Date | DateRange | undefined ) =>
  {
    const selected = date instanceof Date ? date : dateRangeToDate( date );
    if ( selected )
    {
      setSelectedDate( selected );
      setModalOpen( true );
    }
  };

  return (
    <div className="flex flex-col p-8 h-full pb-32 space-y-8 overflow-y-auto">
      {/* Header */ }
      <header className="mb-4">
        <h1 className="text-3xl font-bold">
          CreateFlow: Content Scheduling &amp; Workflow
        </h1>
      </header>

      {/* Main content area split into two panels */ }
      <div className="flex flex-row space-x-8">
        {/* Left Panel: Calendar and Upcoming Sessions */ }
        <div className="w-1/3 bg-card rounded-lg shadow-lg p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Select a Date</h2>
            <Calendar mode="single" selected={ selectedDate } onSelect={ handleDateSelect } />
          </div>
          <div className="bg-transparent">
            <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>
            <div className="space-y-4">
              { upcomingSessions.map( ( session, index ) =>
              {
                switch ( session.type )
                {
                  case "deal":
                    return <DealCard key={ index } deal={ session.data } />;
                  case "content":
                    return <ContentCard key={ index } content={ session.data } />;
                  case "talent":
                    return <TalentCard key={ index } talent={ session.data } />;
                  default:
                    return null;
                }
              } ) }
            </div>

          </div>
        </div>

        {/* Right Panel: Create New Session via Tabs */ }
        <div className="w-2/3 bg-card rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Create New Session</h2>
          <Tabs value={ activeForm } onValueChange={ ( value ) => setActiveForm( value ) }>
            <TabsList className="mb-4">
              { formTabs.map( ( tab ) => (
                <TabsTrigger key={ tab.value } value={ tab.value }>
                  { tab.label }
                </TabsTrigger>
              ) ) }
            </TabsList>
            { formTabs.map( ( tab ) => (
              <TabsContent key={ tab.value } value={ tab.value }>
                { tab.component }
              </TabsContent>
            ) ) }
          </Tabs>
        </div>
      </div>

      {/* Modal for scheduling on a selected date */ }
      <Dialog open={ modalOpen } onOpenChange={ setModalOpen }>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Schedule Session for { selectedDate.toLocaleDateString() }
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <Tabs value={ activeForm } onValueChange={ ( value ) => setActiveForm( value ) }>
              <TabsList className="mb-4">
                { formTabs.map( ( tab ) => (
                  <TabsTrigger key={ tab.value } value={ tab.value }>
                    { tab.label }
                  </TabsTrigger>
                ) ) }
              </TabsList>
              { formTabs.map( ( tab ) => (
                <TabsContent key={ tab.value } value={ tab.value }>
                  { tab.component }
                </TabsContent>
              ) ) }
            </Tabs>
          </div>
          <DialogFooter>
            <Button onClick={ () => setModalOpen( false ) }>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
