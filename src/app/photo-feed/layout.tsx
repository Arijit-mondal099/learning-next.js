interface PhotoFeedLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

const PhotoFeedLayout: React.FC<PhotoFeedLayoutProps> = ({
  children,
  modal,
}) => {
  return (
    <div className="min-h-screen my-10 bg-gray-50">
      {modal}
      {children}
    </div>
  );
};

export default PhotoFeedLayout;
