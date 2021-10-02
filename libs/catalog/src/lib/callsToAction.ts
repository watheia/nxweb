import { CheckCircleIcon, PhoneIcon, PlayIcon } from "@heroicons/react/outline"
import { Listing } from "../types"

export const callsToAction: Listing[] = [
  { id: 1, name: "Watch Demo", href: "/demo/", icon: PlayIcon },
  { id: 2, name: "Learn More", href: "/solutions/", icon: CheckCircleIcon },
  { id: 3, name: "Contact Sales", href: "/contact/", icon: PhoneIcon }
]

export default callsToAction
