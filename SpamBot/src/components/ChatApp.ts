import { Sidebar } from './Sidebar'
import { ChatArea } from './ChatArea'

export function ChatApp(): string {
  return `
    <div class="flex h-screen bg-gray-900">
      ${Sidebar()}
      ${ChatArea()}
    </div>
  `
}