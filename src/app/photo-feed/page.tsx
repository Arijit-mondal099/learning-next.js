import Link from "next/link";
import wondersImages from "./wonders";
import Image from "next/image";

const PhotoFeedPage = () => {
  return (
    <div className="container mx-auto p-4 space-y-6">
      <h1 className="text-4xl font-bold">Images feed</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {wondersImages.map(({ id, name, src }) => (
          <Link
            href={`/photo-feed/${id}`}
            key={id}
            className="border border-gray-200 rounded-lg shadow"
          >
            <Image src={src} alt={name} width={500} height={500} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PhotoFeedPage;
