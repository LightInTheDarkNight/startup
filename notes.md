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
- IP 100.24.112.206
- Connect: http://100.24.112.206/
  - http://delversdomain.click/
- SSH ssh -i [key pair file] ubuntu@100.24.112.206

## HTML Notes
- &lt;div&gt; creates a block of text; it is not an inline element or a meaningless one.
  - &lt;p&gt; and &lt;h#&gt; tags, for Paragraphs and headings, are also block creators
- &lt;span&gt; creates an inline division of the text, so something can be coded in the background as a name or as a reference without breaking the flow of the text for the viewer
  - &lt;a&gt; and &lt;b&gt; tags, for links and emphasis, are also inline
- The ID attribute of an element can be used as a link by using &lt;a href = "#&lt;id name here&gt;"&gt;
