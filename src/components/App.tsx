import React, { useState, useEffect } from 'react'
import Editor from './Editor'
import { useLocalStorage } from '../hooks/useLocalStorage'

function App() {
  const [html, setHtml] = useLocalStorage('html', '')
  const [css, setCss] = useLocalStorage('css', '')
  const [js, setJs] = useLocalStorage('js', '')
  const [srcDoc, setSrcDoc] = useState<string>('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <style>${css}</style>
          <body>${html}</body>
          <script>${js}</script>
        </html>
      `)
    }, 300)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHtml}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setCss}
        />
        <Editor
          displayName="JS"
          language="javascript"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          data-testid="1"
          srcDoc={srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width = "100%"
          height = "100%"
        ></iframe>
      </div>
    </>
  )
}

export default App
