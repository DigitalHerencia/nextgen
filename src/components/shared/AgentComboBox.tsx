"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

// List of agents with associated avatars.
const agents = [
  {
    value: "Alex Morgan",
    label: "Talent Agent",
    avatar: "/agents/CarterPP.jpg",
  },
  {
    value: "Ivan Roman",
    label: "Tech Lead",
    avatar: "/talent/Kazzandra_Avatar.jpg",
  },
  {
    value: "Rafaella Silva",
    label: "Talent Manager",
    avatar: "/agents/ReedPP.jpg",
  },
  {
    value: "Jessica Garcia",
    label: "Business Lead",
    avatar: "agents/ReedPP.jpg",
  },
  {
    value: "Reina Torres",
    label: "CEO",
    avatar: "agents/ReedPP.jpg",
  },
]

interface Agent {
  value: string
  label: string
  avatar: string
}

interface AgentComboboxProps {
  selectedAgent: Agent | null
  onSelectAgent: (agent: Agent) => void
}

export function AgentComboBox({ selectedAgent, onSelectAgent }: AgentComboboxProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedAgent
            ? `${selectedAgent.value} - ${selectedAgent.label}`
            : "Select Agent..."}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search agent..." className="h-9" />
          <CommandList>
            <CommandEmpty>No agent found.</CommandEmpty>
            <CommandGroup>
              {agents.map((agent) => (
                <CommandItem
                  key={agent.value}
                  value={agent.value}
                  onSelect={() => {
                    onSelectAgent(agent)
                    setOpen(false)
                  }}
                >
                  {agent.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      selectedAgent?.value === agent.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
