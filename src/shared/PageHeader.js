import HomeButton from "../client/HomeButton.client";
import OpenPostEditorButton from "../client/OpenPostEditorButton.client";

export default function PageHeader({ children, renderHomeButton, withOpenEditorButton }) {
  return (
    <div className={"PageHeader"}>
      <h1>{children}</h1>
      <div>
        {renderHomeButton && <HomeButton />}
        {withOpenEditorButton && <OpenPostEditorButton />}
      </div>
    </div>
  );
}
