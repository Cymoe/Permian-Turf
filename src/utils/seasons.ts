/**
 * Get the current season based on the month
 * Returns the appropriate season for marketing offers
 */
export const getCurrentSeason = (): string => {
  const month = new Date().getMonth(); // 0-11 (0=January, 11=December)
  
  // Spring: March, April, May (months 2, 3, 4)
  if (month >= 2 && month <= 4) return 'Spring';
  
  // Summer: June, July, August (months 5, 6, 7)
  if (month >= 5 && month <= 7) return 'Summer';
  
  // Fall: September, October, November (months 8, 9, 10)
  if (month >= 8 && month <= 10) return 'Fall';
  
  // Winter: December, January, February (months 11, 0, 1)
  return 'Winter';
};

/**
 * Get season-specific marketing message
 * Returns appropriate seasonal messaging for offers
 */
export const getSeasonalOffer = (): string => {
  const season = getCurrentSeason();
  
  switch(season) {
    case 'Spring':
      return 'Beat the summer heat with water-free landscaping';
    case 'Summer':
      return 'Stay cool with zero-water turf solutions';
    case 'Fall':
      return 'Prepare for next year\'s drought season';
    case 'Winter':
      return 'Plan your spring transformation now';
    default:
      return 'Transform your property today';
  }
};
