import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BalanceProvider } from './context/BalanceContext.tsx'
import { TabProvider } from './context/TabContext.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TabProvider>
      <BalanceProvider>
        <App />
      </BalanceProvider>
    </TabProvider>
  </StrictMode>,
)
