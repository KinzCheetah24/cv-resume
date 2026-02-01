import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GeneralInfo from './components/GeneralInfo.jsx'
import EducationalInfo from './components/EducationalInfo.jsx'
import PracticalInfo from './components/PracticalInfo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GeneralInfo />
    <EducationalInfo />
    <PracticalInfo />
  </StrictMode>
)
