# Server Components

- https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#capabilities--constraints-of-server-and-client-components

- Server Components are rendered on server side only
- Rendering the tree stops at the first Client component
  - (Client components must not use Server Components)
- they cannot use State, Effects and native Browser APIs
- they can access the server environment (Database, Filesystem, ...)