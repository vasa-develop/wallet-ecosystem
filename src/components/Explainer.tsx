import Image from 'next/image';

export default function Explainer({ content }: { content: any[] }) {
  return (
    <div className="text-gray-400 flex flex-col gap-2 leading-5 text-sm">
      {content.map((item) => {
        if (item.type === 'image') {
          return (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
          );
        } else if (item.type === 'html') {
          return (
            <div
              key={item.id}
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}
