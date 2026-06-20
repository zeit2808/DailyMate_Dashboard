export type UserStatus = 'Active' | 'Away' | 'Inactive';
export type PartnerStatus = 'Active' | 'Under Review' | 'Inactive';

export interface KpiCard {
  label: string;
  value: string;
  change: string;
  color: string;
}

export interface TrafficPoint {
  day: string;
  users: number;
  sessions: number;
}

export interface CategoryShare {
  name: string;
  value: number;
}

export interface RecentUser {
  id: string;
  name: string;
  location: string;
  activity: string;
  status: UserStatus;
}

export interface Partner {
  name: string;
  category: string;
  rating: number;
  status: PartnerStatus;
}

export interface TokenUsage {
  usedTokens: string;
  budget: string;
  used: string;
  remaining: string;
  percent: number;
}
