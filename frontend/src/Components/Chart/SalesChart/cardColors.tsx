type CardColorsProps = {
    background: string,
    src: string,
    alt: string,
    valor: string,
    total: string,
    porcentagem: string,
};

export function CardColors({
    background,
    src,
    alt,
    valor,
    total,
    porcentagem,
}: CardColorsProps) {
  return (
    <div
    className={`flex flex-col flex-wrap items-start w-160 gap-1 p-3 ${background} rounded-xl`}
  >
    <img src={src} alt={alt} width={30} height={30} />
    <h3 className="text-[16px] text-text font-bold ">{valor}</h3>
    <h4 className="text-[14px] text-nowrap">{total}</h4>
    <span className="text-[9px] text-xxs text-[#4079ED]">{porcentagem}</span>
  </div>
  );
}
