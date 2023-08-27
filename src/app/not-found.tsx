type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="h-screen flex gap-4 items-center justify-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p>This page could not be found</p>
    </div>
  );
};

export default NotFoundPage;
