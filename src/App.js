import './App.css';
import { marked } from 'marked';
import React, {useState} from 'react';
function App() {
   
  const placeholder = ` # This is a h1 element 
  ## This is a h2 element 
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  const [updateMarkdown, setUpdateMarkdown] = useState(placeholder)
  marked.setOptions({
    breaks: true,
  });
  
    return (
        <div className="App">
          <h1 className="title">Markdown preview</h1>
          <div className='cards'>
            <div className='editor'>
              <h2 className="subtitle">Editor</h2>
              <textarea id="editor"
                onChange={(e) => {setUpdateMarkdown(e.target.value)}}
                >
               {placeholder}
              </textarea>
            </div>
            <div className='preview'>
              <h2 className="subtitle">Preview</h2>
              <div id="preview" 
                dangerouslySetInnerHTML={{
                    __html: marked(updateMarkdown),
                  }} >
              </div>
            </div>
          </div>
        </div>
    );
}

export default App;
