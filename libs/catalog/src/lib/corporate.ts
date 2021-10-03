import {
  BriefcaseIcon,
  InformationCircleIcon,
  NewspaperIcon,
  OfficeBuildingIcon,
  ShieldCheckIcon
} from "@heroicons/react/outline"

import { Listing } from "../types"

export const corporate: Listing[] = [
  { id: 1, name: "About", href: "/corporate/about/", icon: InformationCircleIcon },
  { id: 2, name: "Corporate", href: "/corporate/", icon: OfficeBuildingIcon },
  { id: 3, name: "Press", href: "/contact/", icon: NewspaperIcon },
  { id: 4, name: "Careers", href: "/corporate/careers/", icon: BriefcaseIcon },
  { id: 5, name: "Privacy", href: "/terms-and-conditions/", icon: ShieldCheckIcon }
]

export default corporate
