<:utils/bannerRotationSystem.ts
export const calculateBannerScore = (banner: BannerConfig): number => {
  const impressions = getStoredImpressions();
  const bannerImpressions = impressions.filter(imp => imp.bannerId === banner.id);
