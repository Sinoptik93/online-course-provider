import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root') as Element;
const root = createRoot(domNode);
root.render(<p>Test</p>);
