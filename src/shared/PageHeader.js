import HomeButton from "../client/HomeButton.client";
import OpenPostEditorButton from "../client/OpenPostEditorButton.client";

/**
 * Displays a header for each page, including some buttons (optionally)
 *
 * When this component is rendered on server, it stop's rendering at the buttons,
 * as the Buttons are Client-side components.
 *
 * The included PageTitle on the other hand is rendered on server side,
 * so its code won't be sent to the client.
 */
export default function PageHeader({ children, renderHomeButton, withOpenEditorButton }) {
  return (
    <div className={"PageHeader"}>
      <PageTitle>{children}</PageTitle>
      <div>
        {renderHomeButton && <HomeButton />}
        {withOpenEditorButton && <OpenPostEditorButton />}
      </div>
    </div>
  );
}

function PageTitle({ children }) {
  return <h1>{children}</h1>;
}
