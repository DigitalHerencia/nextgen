import { clsx, type ClassValue } from "clsx"
import type { DateRange } from "react-day-picker";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function dateRangeToDate ( dateRange: DateRange | undefined ): Date | undefined
{
  if ( dateRange )
  {
    return dateRange.from;
  }
  return undefined;
}
