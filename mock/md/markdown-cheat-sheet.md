# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

Common text

_Emphasized text_

~~Strikethrough text~~

**Strong text**

**_Strong emphasized text_**

[Named Link](http://www.google.fr/ 'Named link title') and http://www.google.fr/ or <http://example.com/>

[heading-1](#heading-1 'Goto heading-1')

Table, like this one :

| First Header | Second Header |
| ------------ | ------------- |
| Content Cell | Content Cell  |
| Content Cell | Content Cell  |

Left, right and center aligned table

| Left aligned Header | Right aligned Header | Center aligned Header |
| :------------------ | -------------------: | :-------------------: |
| Content Cell        |         Content Cell |     Content Cell      |
| Content Cell        |         Content Cell |     Content Cell      |

`code()`

```js
import fs from 'fs';
import path from 'path';

const navDirectory = path.join(process.cwd(), 'pages');

const getAllNavLinks = () => {
  const fileNames = fs.readdirSync(navDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
};

export default getAllNavLinks;
```

- Bullet list
  - Nested bullet
    - Sub-nested bullet etc
- Bullet list item 2

1. A numbered list
   1. A nested numbered list
   2. Which is numbered
2. Which is numbered

- [ ] An uncompleted task
- [x] A completed task

- [ ] An uncompleted task
  - [ ] A subtask

> Blockquote
>
> > Nested blockquote

_Horizontal line :_

---

_Image with alt :_

![picture alt](http://via.placeholder.com/200x150 'Title is optional')

Link to a specific part of the page:

[Go To TOP](#TOP)

Hotkey:

<kbd>⌘F</kbd>

<kbd>⇧⌘F</kbd>

Hotkey list:

| Key       | Symbol |
| --------- | ------ |
| Option    | ⌥      |
| Control   | ⌃      |
| Command   | ⌘      |
| Shift     | ⇧      |
| Caps Lock | ⇪      |
| Tab       | ⇥      |
| Esc       | ⎋      |
| Power     | ⌽      |
| Return    | ↩      |
| Delete    | ⌫      |
| Up        | ↑      |
| Down      | ↓      |
| Left      | ←      |
| Right     | →      |

Emoji:

:exclamation: Use emoji icons to enhance text. :+1: Look up emoji codes at [emoji-cheat-sheet.com](http://emoji-cheat-sheet.com/)
