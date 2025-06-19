export interface Log {
  id: number;
  project_name?: string;
  project_id?: number;
  channel?: string;
  event: string;
  created_at: string;
}
