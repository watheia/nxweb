import {
  ChartBarIcon,
  CursorClickIcon,
  ShieldCheckIcon,
  ViewGridIcon
} from "@heroicons/react/outline"
import { Listing } from "../types"

export const solutions: Listing[] = [
  {
    id: 1,
    name: "Analytics",
    description: "Get a better understanding of where your traffic is coming from.",
    href: "/solutions/analytics",
    icon: ChartBarIcon
  },
  {
    id: 2,
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/solutions/engagement",
    icon: CursorClickIcon
  },
  {
    id: 3,
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "/solutions/security",
    icon: ShieldCheckIcon
  },
  {
    id: 4,
    name: "Integration",
    description: "Connect with third-party tools that you're already using.",
    href: "/solutions/integration",
    icon: ViewGridIcon
  }
]

export default solutions
