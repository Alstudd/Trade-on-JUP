import { ReactNode } from 'react';
import Link from 'next/link';
import { WalletButton } from '../solana/solana-provider';

export function AppLayout({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '6px 12px',
        }}
      >
        <div>
          <Link href="/">
            <img src="/solana-logo.png" height={24} alt="Solana Logo" />
          </Link>
        </div>
        <div>
          <WalletButton />
        </div>
      </div>
      <div style={{ flexGrow: 1, padding: '6px' }}>{children}</div>
      {/* <footer
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6px 10px',
        }}
      >
        <aside>
          <p>
            Created by{' '}
            <a
              href="https://github.com/Alstudd"
              target="_blank"
              rel="noopener noreferrer"
            >
              Alston Soares
            </a>
          </p>
        </aside>
      </footer> */}
    </div>
  );
}
