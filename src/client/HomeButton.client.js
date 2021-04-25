import { useBlogNavigation } from "./useNavigation.client";

export default function HomeButton() {
  const { openHome } = useBlogNavigation();

  return <button onClick={openHome}>Home</button>;
}
