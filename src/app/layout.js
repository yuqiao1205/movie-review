import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Providers from './Providers';
import Navbar from '@/components/Navbar';
import SearchBox from '@/components/SearchBox';
import Footer from '@/components/Footer';
import { Suspense } from 'react'


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata = {
  title: 'Movie Review',
  description: 'This is a movie database',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <Providers>
          <Header />
          <Suspense>
            <Navbar />
          </Suspense>
          <SearchBox />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
