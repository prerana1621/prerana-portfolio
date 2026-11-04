import './globals.css';

export const metadata = {
  title: 'Prerana Acharyya — Curious by Nature. Builder by Choice.',
  description:
    'The portfolio of Prerana Acharyya — Chemical Engineering student, software developer by passion, and lifelong learner.',
  openGraph: {
    title: 'Prerana Acharyya — Curious by Nature. Builder by Choice.',
    description:
      'A different branch. The same curiosity. Explore my journey across engineering, software development and AI.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
