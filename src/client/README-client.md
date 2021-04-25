# Client Components

- https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#capabilities--constraints-of-server-and-client-components

- Client Components are rendered on the Client only
- they can use state, effects, browser api etc.   
- They must not render Server Components, but might include Shared Components
  - They can get Server Components as (render) property/children
- If a Server Component has to Render a Client Component, rendering on the server finished, and will be continued
  on client side
- State get preserved, even if the parent Server Components are re-rendered on server
  