import Image from 'next/image';

export default function Explainer({ content }: { content: any[] }) {
  return (
    <div>
      {content.map((item) => {
        if (item.type === 'image') {
          return (
            <Image
              key={item.id}
              src={item.src}
              alt="Explainer Image"
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
