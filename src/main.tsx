/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { PuzzleWalletProvider } from '@puzzlehq/sdk';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className='h-screen w-screen'>
    <PuzzleWalletProvider
      dAppName="Find Me Alex!"
      dAppDescription='Inspired by Matty'
      dAppUrl='https://find-me-alex.vercel.app/'
      dAppIconURL='https://find-me-alex.vercel.app/alex_head.png'
    >
      <App />
    </PuzzleWalletProvider>
  </div>
);
