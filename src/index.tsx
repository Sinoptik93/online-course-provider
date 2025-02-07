import { createRoot } from 'react-dom/client';
import { Counter } from "./components/Counter";

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);
root.render(
    <div>
        <Counter/>
    </div>
);
