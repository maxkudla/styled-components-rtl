# styled-components-rtl
Allows u add ltr-rtl direction switching for your styled components

##Using
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
