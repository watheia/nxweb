import CloudUploadIcon from "@heroicons/react/outline/CloudUploadIcon"
import CogIcon from "@heroicons/react/outline/CogIcon"
import LockClosedIcon from "@heroicons/react/outline/LockClosedIcon"
import RefreshIcon from "@heroicons/react/outline/RefreshIcon"
import ServerIcon from "@heroicons/react/outline/ServerIcon"
import ShieldCheckIcon from "@heroicons/react/outline/ShieldCheckIcon"
import { Feature } from "../types"

export const features: Feature[] = [
  {
    id: "0",
    name: "Infrastructure as Code",
    description:
      "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.",
    icon: CloudUploadIcon
  },
  {
    id: "1",
    name: "SSL Certificates",
    description:
      "Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.",
    icon: LockClosedIcon
  },
  {
    id: "2",
    name: "Simple Queues",
    description:
      "Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.",
    icon: RefreshIcon
  },
  {
    id: "3",
    name: "Advanced Security",
    description:
      "Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.",
    icon: ShieldCheckIcon
  },
  {
    id: "4",
    name: "Powerful API",
    description:
      "Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.",
    icon: CogIcon
  },
  {
    id: "5",
    name: "Database Backups",
    description:
      "Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.",
    icon: ServerIcon
  }
]
