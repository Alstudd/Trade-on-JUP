import './global.css';
import { AppLayout } from '@/components/ui/app-layout';
import { ClusterProvider } from '@/components/cluster/cluster-data-access';
import { SolanaProvider } from '@/components/solana/solana-provider';
import Head from 'next/head';

export const metadata = {
  title: 'Trade on JUP',
  description: 'Jupiter Trading Platform',
};

export default function RootLayout({children,}: {children: React.ReactNode; }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <script src="https://terminal.jup.ag/main-v2.js" data-preload></script>
      </Head>
      <body>
        <ClusterProvider>
          <SolanaProvider>
            {/* bruh moment */}
            <AppLayout>{children}</AppLayout>
          </SolanaProvider>
        </ClusterProvider>
      </body>
    </html>
  );
}
