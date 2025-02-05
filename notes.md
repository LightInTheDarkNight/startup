# Notes for the Class!

## Useful git commands
- gh repo clone
    - for cloning repositories
- git push
- git pull
  - In the event of a conflict, using VS Code is much easier than trying to use notepad, lol.
- git fetch
- git commit -am "(message)"
    - commits all tracked files with the message


## Markdown Syntax
- Links:
  - [text](link.com)
  - section links can be done more easily on github
  - relative links:
      - root: /
      - from current directory: folder/folder/file
        - e.g. Here is the link to the [ReadMe](README.md) file
- images:
  - ![Alt Text](image link - this one doesn't work)


## Server Details
- IP 54.92.152.99
- https://delvers-domain.click/
- SSH: ssh ubuntu@delvers-domain.click

## HTML Notes
- &lt;div&gt; creates a block of text; it is not an inline element or a meaningless one.
  - &lt;p&gt; and &lt;h#&gt; tags, for Paragraphs and headings, are also block creators
- &lt;span&gt; creates an inline division of the text, so something can be coded in the background as a name or as a reference without breaking the flow of the text for the viewer
  - &lt;a&gt; and &lt;b&gt; tags, for links and emphasis, are also inline
- The ID attribute of an element can be used as a link by using &lt;a href = "#&lt;id name here&gt;"&gt;

## CSS Notes
### Selectors
- By element type: elementName
 - e.g. "body {}"
- Decendants: element element
 - body p {}
- Direct child: element > child
 - body > p {}
- General sibling: element ~ sibling
 - p ~ div {} (selects all divs that are siblings to p elements)
- Adjacent sibling: element + sibling
 - p + div {}
- By class: ".class"
 - .id-display {} (all elements with the class "id-display")
 - p.id-display {} (p elements with that class)
- By id: "#id"
 - #password-field {}
- By Attribute: "\[attribute(optional: =value)]"
