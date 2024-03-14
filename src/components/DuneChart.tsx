export default function DuneChart({
  src,
  width,
  height,
}: {
  src: string;
  width: number | string;
  height: number;
}) {
  return (
    <iframe
      className="invert"
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );
}
