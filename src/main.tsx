import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import 'antd/dist/reset.css'
import './index.css'
import CtxProvider from './api/Ctx/CtxProvider.tsx'

createRoot(document.getElementById('root')!).render(
    <CtxProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </CtxProvider>
)
