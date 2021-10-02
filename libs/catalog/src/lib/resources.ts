import {
  BookmarkAltIcon,
  DesktopComputerIcon,
  GlobeAltIcon,
  UserGroupIcon
} from "@heroicons/react/outline"
import { Listing } from "../types"

export const resources: Listing[] = [
  { id: 1, name: "Community", href: "#", icon: UserGroupIcon },
  { id: 2, name: "Partners", href: "#", icon: GlobeAltIcon },
  { id: 3, name: "Guides", href: "#", icon: BookmarkAltIcon },
  { id: 4, name: "Webinars", href: "#", icon: DesktopComputerIcon }
]

export default resources
