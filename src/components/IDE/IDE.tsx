import Editor from "@monaco-editor/react";
import { emmetHTML, emmetCSS } from "emmet-monaco-es";
import { useCallback, useEffect, useState } from "react";
import "./index.scss";

export default function IDE() {
  const textToShow =
    "<h1>Aprenda a construir websites incríveis</h1> \n<h2>Conheça o meu método abaixo ↓</h2>";

  let [textToRender, setTextToRender] = useState({
    __html: textToShow,
  });

  const [displayText, setDisplayText] = useState<string>("");

  function createMarkup(html: string) {
    return { __html: html };
  }

  const handleEditorDidMount = () => {
    emmetHTML(window.monaco);
    emmetCSS(window.monaco);
  };

  const testFunction = (e) => {
    setTextToRender(createMarkup(e));
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayText(textToRender.__html.slice(0, displayText.length + 1));
    }, 100);
    return () => clearTimeout(timeout);
  }, [displayText, textToRender]);

  const textEditorComponent = useCallback(() => {
    const displayShit = { __html: displayText };
    displayShit.__html += "<span ></span>";
    return (
      <>
        <div
          className={"text__edited"}
          dangerouslySetInnerHTML={displayShit}
        ></div>
        <span className="blink"></span>
      </>
    );
  }, [displayText]);

  return (
    <div className="double">
      {textEditorComponent()}
      <Editor
        theme={"vs-dark"}
        language={"html"}
        className={"editor"}
        beforeMount={handleEditorDidMount}
        value={`${textToShow}  \n<!--Divirta-se neste sandbox--> \n<!-- Segure as seguintes teclas C O D E para se surpreender-->`}
        options={{
          minimap: {
            enabled: false,
          },
        }}
        onChange={(e) => testFunction(e)}
      />
    </div>
  );
}
