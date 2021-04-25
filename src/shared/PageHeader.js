/**
 * Displays a header for each page, including some buttons (optionally)
 *
 * When this component is rendered on server, it stop's rendering at the buttons,
 * as the Buttons are Client-side components.
 *
 * The included PageTitle on the other hand is rendered on server side,
 * so its code won't be sent to the client.
 */
export default function PageHeader({ children, button }) {
  return (
    <div className={"PageHeader"}>
      <PageTitle>{children}</PageTitle>
      {!!button && <div>{button}</div>}
    </div>
  );
}

function PageTitle({ children }) {
  return <h1>{children}</h1>;
}
