# styled-components-rtl
Allows u add ltr-rtl direction switching for your styled components

## Using
```
import {ThemeProvider} from "styled-components"
import rtl from "styled-components-rtl";

const List = styled.div``;
const ListItem = styled.div`
    ${rtl`
        margin-left: 1rem;
    `}
`;

const theme = {
  dir: "rtl"
  // OR direction: "rtl"
};

render(
  <ThemeProvider theme={theme}>
    <List>
      <ListItem>Item 1</ListItem>
      <ListItem>Item 2</ListItem>
    </List>
  </ThemeProvider>
);
```

If `theme.dir` equal **rtl** instead of `margin-left` will be `margin-right`;

## Contributors

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/9202221?v=4" width="100px;"/><br /><sub><b>Max Kudla</b></sub>](https://github.com/maxkudla/styled-components-rtl/commits?author=MaxKudla "Code") | [<img src="https://avatars2.githubusercontent.com/u/7778796?v=4" width="100px;"/><br /><sub><b>Anees Hikmat Abu-hamid</b></sub>](https://github.com/maxkudla/styled-components-rtl/commits?author=aneeshikmat "Code")  | [<img src="https://avatars3.githubusercontent.com/u/7444066?v=4" width="100px;"/><br /><sub><b>Omar Houmz</b></sub>](https://github.com/maxkudla/styled-components-rtl/commits?author=omhoumz "Code")  |
| :---: | :---: | :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->
