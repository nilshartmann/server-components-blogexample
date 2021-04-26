import { useBlogNavigation, useCurrentLocation } from "./useNavigation.client";

export default function OrderByButton({ orderBy }) {
  const { openHome, currentLocation } = useBlogNavigation();

  const label = orderBy === "dateDesc" ? "Desc" : "Asc";

  return (
    <button disabled={currentLocation.orderBy === orderBy} onClick={() => openHome(orderBy)}>
      Order by date {label}
    </button>
  );
}
