## DueUtil Guide
This repo is the guide for the crappy Discord bot DueUtil.
The guide is written in some weird hacky HTML/MD crossover.

### How to make edits.
#### HTML
All HTML is works like normal except for the caveat that new lines are changed to ``<br>``.

#### Supported markdown
You can only use a very small subset of markdown.

\*\*Bold\*\*           
\_\_Underline\_\_ 
\`\`Code\`\` 
\#\#Header\#\# (only one header size) 

#### Font icons      

``:icon-slime:`` - slime  
``:icon-quest:`` - quest (crossed daggers)
``:icon-fist:`` - fist (the den emoji)
``:icon-dagger:`` - dagger  
``:icon-fist-profile:`` - the fist on the default profile.
``:icon-strg:``-  strg     
``:icon-accy:`` - accy     
``:icon-weapon:`` - weapon

#### Templates 
You insert basic templates into the guide, currently you cannot pass any arguments to the templates.
A template is pretty much just a HTML file with the .tpl extension it's just used to keep big chunks of $

To insert a template you just do ``<TPL:path/to/template.tpl>``
Note: The path is relative to inside the templates folder.

#### Misc
You can escape characters such as quotes by doing ``\"`` or the standard HTML ``&quot;``.

### Testing
You must test any edits before you make a pull request.
You can do this with the provided test page in (test.html in the testing folder). Just open it up and in a browser.

P.s.
(I know it's a pretty weird system)

