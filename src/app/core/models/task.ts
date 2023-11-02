import { Team } from "./team";

export interface Task {
  id: number,
  status: string,
  order: number,
  title: string,
  content: string,
  priority: string,
  startDate: string,
  team: Team[]
}
