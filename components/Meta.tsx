import { Container } from '@chakra-ui/react';
import Head from 'next/head';

interface MetaProps {
  title: string;
  keywords: string;
  description: string;
}

export const Meta = ({ title, description, keywords }: MetaProps) => {
  return (
    <Container>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
      </Head>
    </Container>
  );
};

Meta.defaultProps = {
  title: 'Movies App',
  keywords: 'movie app, movies, movies app',
  description: 'Review movies and find the best ones',
};
