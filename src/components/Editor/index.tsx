import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/css/css'
import 'codemirror/mode/javascript/javascript'
import { Controlled as ControlledEditor } from 'react-codemirror2'
import SizeUpIcon from '../SizeUpIcon'
import SizeDownIcon from '../SizeDownIcon'

interface EditorProps {
  displayName: string
  language: string
  value: string
  onChange: (value: string) => void
}

function Editor(props: EditorProps) {
  const { displayName, value, onChange, language } = props;
  const [open, setOpen] = useState<boolean>(true)

  function handleChange(
    _editor: CodeMirror.Editor,
    _data: CodeMirror.EditorChange,
    value: string
  ) {
    onChange(value)
  }

  function toggleCollapsed() {
    setOpen(prevValue => !prevValue)
  }

  return (
    <div className={`editor-container ${open ? '' : 'collapsed'}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={toggleCollapsed}
        >
          { open ? <SizeDownIcon /> : <SizeUpIcon /> }
        </button>
      </div>

      <ControlledEditor
        className="code-mirror-wrapper"
        onBeforeChange={handleChange}
        value={value}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: 'material'
        }}
      />
    </div>
  )
}

export default Editor
