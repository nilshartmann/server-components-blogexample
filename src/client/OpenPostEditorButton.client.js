import { useBlogNavigation } from "./useNavigation.client";

export default function OpenPostEditorButton() {
  const { openEditor } = useBlogNavigation();

  return <button onClick={openEditor}>Create new Post</button>;
}
