import dynamic from "next/dynamic";

const App = dynamic(() => import("@/app/shared/app"), { ssr: false });

export default App;