export interface Log {
  id: string;
  project_name?: string;
  project_id?: number;
  channel?: string;
  event: string;
  created_at: string;
}
