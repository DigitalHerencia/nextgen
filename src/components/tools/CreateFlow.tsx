"use client";

import { useState } from "react";

// shadcn components
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

// Utility for converting a DateRange to a Date (e.g. using the "from" value)
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
// NOTE: Updated the import for DealCard in case it was misnamed.
import { DealCard } from "@/components/cards/deal.card";
import { ContentCard } from "@/components/cards/content.card";
import { TalentCard } from "@/components/cards/talent.card";

// Example avatar image
const CarlaAvatar = {
  src: "/talent/Carla_Avatar.jpg",
};

export default function CreateFlow ()
{
  const [ selectedDate, setSelectedDate ] = useState<Date>( new Date() );
  const [ modalOpen, setModalOpen ] = useState( false );
  const [ activeForm, setActiveForm ] = useState( "campaign" );

  // Accepts either a Date or a DateRange.
  const handleDateSelect = ( date: Date | DateRange | undefined ) =>
  {
    const selected = date instanceof Date ? date : dateRangeToDate( date );
    if ( selected )
    {
      setSelectedDate( selected );
      setModalOpen( true );
    }
  };

  // Tabs config for scheduling forms
  const formTabs = [
    { value: "campaign", label: "Campaign", component: <CampaignForm /> },
    { value: "content", label: "Content", component: <ContentForm /> },
    { value: "agent", label: "Agent", component: <AgentForm /> },
    { value: "deal", label: "Deal", component: <DealForm /> },
    { value: "manager", label: "Manager", component: <ManagerForm /> },
    { value: "payment", label: "Payment", component: <PaymentForm /> },
    { value: "talent", label: "Talent", component: <TalentForm /> },
  ];

  return (
    <div className="flex h-46 w-full overflow-y-auto p-8">
      {/* Central container */ }
      <div className="flex container gap-4">
        {/* Calendar and upcoming sessions side by side or stacked */ }
        <div className="bg-popover rounded-lg">
          <Calendar
            selected={ selectedDate }
            onSelect={ handleDateSelect }
            className="w-full"
          />

          {/* Upcoming Sessions */ }
          <h2 className="text-2xl font-semibold mb-4">Upcoming Sessions</h2>

          {/* Sample Cards */ }
          <DealCard
            deal={ {
              brand: "Acme Corp",
              talent: "Alice",
              agent: "Bob",
              offer_amount: 500,
              status: "pending",
            } }
          />
          <ContentCard
            content={ {
              id: 1,
              type: "video",
              engagement: "High",
              campaign: "Summer Launch",
            } }
          />
          <TalentCard
            talent={ {
              avatar: CarlaAvatar.src,
              name: "Carla",
              category: "Influencer",
              bio: "Lifestyle content and brand collabs.",
              earnings: 2000,
              agent: "Daisy",
              talentManager: "Edward",
              social_links: {
                instagram: "https://instagram.com/carla",
                twitter: "https://twitter.com/carla",
              },
            } }
          />
        </div>
      </div>
      {/* Dialog (Modal) for Scheduling Forms */ }
      <Dialog open={ modalOpen } onOpenChange={ setModalOpen }>
        <DialogContent className="bg-popover text-foreground max-w-3xl">
          <DialogHeader>
            <DialogTitle>
              Schedule for { selectedDate.toDateString() }
            </DialogTitle>
          </DialogHeader>
          <Tabs
            value={ activeForm }
            onValueChange={ ( val ) => setActiveForm( val ) }
            className="mt-2"
          >
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
          <DialogFooter>
            <Button variant="outline" onClick={ () => setModalOpen( false ) }>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
