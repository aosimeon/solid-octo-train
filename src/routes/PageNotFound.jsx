import MetaTags from 'react-meta-tags';

export default function PageNotFound() {
  return (
    <>
      <div>
        <MetaTags>
          <title>Page not found</title>
          <meta name="description" content="The page you are looking for does not exist" />
        </MetaTags>
        <h1>Hey, are you lost?</h1>
        <p>Please click here to go back to the home page.</p>
      </div>
    </>
  );
}
