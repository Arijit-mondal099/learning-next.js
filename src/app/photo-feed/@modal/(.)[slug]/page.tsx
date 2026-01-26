import ImageModal from "@/components/Modal";
import wondersImages, { WonderImage } from "../../wonders";
import Image from "next/image";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const Page: React.FC<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const photo: WonderImage = wondersImages.find((p) => p.id === slug)!;

  return (
    <ImageModal>
      <Image
        src={photo.src}
        alt={photo.name}
        className="w-full object-cover aspect-square"
      />

      <div className="space-y-2 p-4">
        <h2 className="text-2xl font-bold">{photo.name}</h2>
        <p className="text-lg font-medium">{photo.photographer}</p>
        <p className="text-lg font-medium">{photo.location}</p>
      </div>
    </ImageModal>
  );
};

export default Page;
