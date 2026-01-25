import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";

interface PhotoPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ slug: string }>;
}

const PhotoPage: React.FC<PhotoPageProps> = async ({ params }) => {
  const { slug } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === slug)!;

  return (
    <div className="container mx-auto p-4 space-y-5">
      <h2 className="text-center text-2xl font-bold">{photo.name}</h2>
      <Image src={photo.src} alt={photo.name} className="border border-gray-200 rounded-lg shadow mx-auto" />
      <div className="text-lg font-medium text-center">
        <p>{photo.location}</p>
        <p>{photo.photographer}</p>
      </div>
    </div>
  );
};

export default PhotoPage;
