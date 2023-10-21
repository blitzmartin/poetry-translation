import { RouterProvider } from 'react-router'
import '../src/languages/i18next'
import './index.css'
import { router } from './routes/react-router'

export const App = () => <RouterProvider router={router} />
