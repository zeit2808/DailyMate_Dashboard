import type { CategoryShare, KpiCard, Partner, RecentUser, TokenUsage, TrafficPoint } from '../types/dashboard';

export const kpiCards: KpiCard[] = [
  { label: 'Total Users', value: '10,240', change: '+12.4%', color: '#D4622A' },
  { label: 'Total Partners', value: '350', change: '+5.2%', color: '#F0A96B' },
  { label: 'AI Token Cost', value: '$45.2k', change: '+8.1%', color: '#8B6E52' },
  { label: 'Daily Active Users', value: '2,150', change: '+18.7%', color: '#C4A882' },
];

export const trafficData: TrafficPoint[] = [
  { day: 'Mon', users: 1840, sessions: 3200 },
  { day: 'Tue', users: 2100, sessions: 3800 },
  { day: 'Wed', users: 1950, sessions: 3500 },
  { day: 'Thu', users: 2380, sessions: 4100 },
  { day: 'Fri', users: 2650, sessions: 4700 },
  { day: 'Sat', users: 3100, sessions: 5400 },
  { day: 'Sun', users: 2150, sessions: 3900 },
];

export const categoryShares: CategoryShare[] = [
  { name: 'Food', value: 40 },
  { name: 'Fashion', value: 35 },
  { name: 'Entertainment', value: 25 },
];

export const recentUsers: RecentUser[] = [
  { id: 'USR-001', name: 'Nguyen Minh', location: 'District 1, HCMC', activity: '2 mins ago', status: 'Active' },
  { id: 'USR-002', name: 'Tran Linh', location: 'District 3, HCMC', activity: '15 mins ago', status: 'Active' },
  { id: 'USR-003', name: 'Le Phuong', location: 'Binh Thanh, HCMC', activity: '1 hour ago', status: 'Away' },
  { id: 'USR-004', name: 'Pham Duc', location: 'Thu Duc, HCMC', activity: '3 hours ago', status: 'Inactive' },
  { id: 'USR-005', name: 'Hoang Anh', location: 'District 7, HCMC', activity: 'Yesterday', status: 'Inactive' },
];

export const partners: Partner[] = [
  { name: 'Pho Hung Restaurant', category: 'Food & Drink', rating: 4.8, status: 'Active' },
  { name: 'The Mist Cafe', category: 'Cafe', rating: 4.7, status: 'Active' },
  { name: 'Zara Vietnam', category: 'Fashion', rating: 4.5, status: 'Active' },
  { name: 'CGV Cinemas', category: 'Entertainment', rating: 4.6, status: 'Active' },
  { name: 'Bun Bo Hue 1994', category: 'Food & Drink', rating: 4.4, status: 'Under Review' },
];

export const tokenUsage: TokenUsage = {
  usedTokens: '45,200',
  budget: '$80.00',
  used: '$45.20',
  remaining: '$34.80',
  percent: 56,
};

export const chartColors = ['#D4622A', '#F0A96B', '#C4A882'];
