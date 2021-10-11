import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import NavBar from '../components/NavBar';
import theme from "../theme";

const SiteHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta name="title" content="PEC ACM Voting" />
    <meta name="description" content="PEC ACM Voting" />
    <meta name="author" content="Rahul Sharma" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <meta name="theme-color" content="#252934" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://pec-acm-voting.vercel.app/" />
    <meta
      property="og:title"
      content="PEC ACM Voting"
    />
    <meta
      property="og:description"
      content="PEC ACM Voting"
    />
    <meta property="og:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png" />
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://pec-acm-voting.vercel.app/" />
    <meta
      property="twitter:title"
      content="PEC ACM Voting"
    />
    <meta
      property="twitter:description"
      content="PEC ACM Voting"
    />
    <meta property="twitter:image" content="https://res.cloudinary.com/rahulsharma/image/upload/v1627928959/logo_okieap.png" />
    <script
      async
      defer
      src="https://scripts.simpleanalyticscdn.com/latest.js"
    />
    <noscript>
      <img
        src="https://queue.simpleanalyticscdn.com/noscript.gif"
        alt=""
        referrerPolicy="no-referrer-when-downgrade"
      />
    </noscript>
  </Head>
);

const PageWrapper = ({ children, title }) => (
  <div className="container">
    <SiteHead title={title} />
    <NavBar />
    <main className="main">{children}</main>
  </div>
);

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const pathToTitle = {
    '/': 'Voting',
  };

  return (
    <ChakraProvider theme={theme}>
      <PageWrapper title={pathToTitle[router.pathname]}>
        <Component {...pageProps} />
      </PageWrapper>
    </ChakraProvider>
  );
}

export default MyApp
