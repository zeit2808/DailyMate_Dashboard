import { categoryShares, kpiCards, partners, recentUsers, tokenUsage, trafficData } from '../mocks/dashboard';

export async function getDashboardOverview() {
  return {
    kpiCards,
    trafficData,
    categoryShares,
    recentUsers,
    partners,
    tokenUsage,
  };
}
