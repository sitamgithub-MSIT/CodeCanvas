"use client";
import React from "react";
import AceEditor from "react-ace";
import { Resizable } from "re-resizable";

function CodeEditor() {
  return (
    <Resizable minWidth={510} maxWidth={1000} minHeight={466}>
      <div>
        <AceEditor
          value="function() {return 'Hello World';}"
          name="UNIQUE_ID_OF_DIV"
          fontSize={16}
          showGutter={false}
          wrapEnabled={true}
          showPrintMargin={false}
          highlightActiveLine={false}
          editorProps={{ $blockScrolling: true }}
          className="ace-editor-container"
        />
      </div>
    </Resizable>
  );
}

export default CodeEditor;
