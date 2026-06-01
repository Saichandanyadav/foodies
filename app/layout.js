import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShowcaseBadge from '@/components/ShowcaseBadge'; // <-- Import the badge here
import './globals.css';

export const metadata = {
  title: 'foodies | Exquisite Royal Indian Restaurant',
  description: 'A premium regional Indian culinary responsive showcase demo platform layout engineered via Next.js framework architectures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        
        {/* Global Floating Badge Component */}
        <ShowcaseBadge />
      </body>
    </html>
  );
}