import './App.css';

import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "Build2.loader.js",
    dataUrl: "Build2.data",
    frameworkUrl: "Build2.framework.js",
    codeUrl: "Build2.wasm",
  });

  return <Unity style={{width:'100%', height:'100%'}} unityProvider={unityProvider} />;
}

export default App;
