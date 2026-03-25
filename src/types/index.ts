export interface VeemStep {
  id: number;
  title: string;
  description: string;
  icon?: string;
}

export interface Service {
  title: string;
  description: string;
  slug: string;
}

export interface NavLink {
  name: string;
  path: string;
}