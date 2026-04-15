export const COMING_SOON_ROUTE = "/coming-soon";

export const buildComingSoonPath = (destination?: string) => {
  if (!destination) {
    return COMING_SOON_ROUTE;
  }

  const searchParams = new URLSearchParams({ destination });
  return `${COMING_SOON_ROUTE}?${searchParams.toString()}`;
};