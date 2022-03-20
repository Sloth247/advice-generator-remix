import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix';

import globalStylesUrl from './styles/global.css';

import faviconUrl from '../public/favicon-32x32.png';

export const links = () => [
  { rel: 'stylesheet', href: globalStylesUrl },
  {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: faviconUrl,
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'true',
  },
  {
    rel: 'preconnect',
    href: 'https://fonts.googleapis.com',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap',
  },
];

export function meta() {
  return {
    charset: 'utf-8',
    title: 'Frontend Mentor | Advice generator app',
    viewport: 'width=device-width,initial-scale=1',
  };
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <main className="main">
          <h1>Oops! Something Went Wrong...</h1>
          <p className="error-message">{error.message}</p>
        </main>
      </body>
    </html>
  );
}
