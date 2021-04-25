# Shared Components

- https://github.com/josephsavona/rfcs/blob/server-components/text/0000-server-components.md#sharing-code-between-server-and-client

- Shared Components can be both rendered on server and on client
- Thus they must fullfill both requirements of server- and client components
  - not use state/effect
  - not use browser api
  - ...
    
- Code for shared component is loaded on the client only, if the client actually *uses* the component at runtime
  - Example: a shared component is used on the client only, if some conditions are true (user is logged in,
    user has selected a checkbox, ...) then the code is loaded, otherwise it's not, even in this case it's not:
    ```function MyClient() { return userLoggedIn ? <SharedEditComponent /> : null }``` 
    In this case SharedEditComponent is only downloaded to the client as early as `userLoggedIn` becomes `true`
    