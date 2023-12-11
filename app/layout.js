import { Roboto_Condensed } from 'next/font/google';
import './globals.css';

const roboto_condensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'Play-o-graphy',
  description: 'A description of my gamer experience, from the first day I used a videogame console to the goals I have stablished to myself in the present and the future.',
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>{/*Agrego la etiqueta head aquí para poder agregar la etiqueta meta de http-equiv, la cual no está soportada por Next JS*/}
      </head>
      <body className={roboto_condensed.className}>{children}</body>
    </html>
  )
}