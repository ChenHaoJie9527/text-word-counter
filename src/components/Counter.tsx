interface Props {
  className?: string;
  stats?: {
    numberOfWords: number;
    numberOfCharacters: number;
    instagramCharactersLeft: number;
    facebookCharactersLeft: number;
  };
}

export default function Counter({ className, stats }: Props) {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 bg-[#EBFDFF] ${className}`}>
      <div className="flex items-center justify-center border-b-[1px] flex-col border-r-[1px] font-bold text-[#5c6b73]">
        <span className=" text-[30px]">{stats?.numberOfWords}</span>
        <span className=" uppercase tracking-[1px] opacity-70 xl:text-[14px] md:text-[14px] sm:text-[12px]">
          words
        </span>
      </div>
      <div className="flex items-center justify-center border-b-[1px] flex-col font-bold text-[#5c6b73]">
        <span className=" text-[30px]">{stats?.numberOfCharacters}</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px] xl:text-[14px] md:text-[14px] sm:text-[12px]">
          characters
        </span>
      </div>
      <div className="flex items-center justify-center border-r-[1px] flex-col font-bold text-[#5c6b73]">
        <span className=" text-[30px]">{stats?.instagramCharactersLeft}</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px] xl:text-[14px] md:text-[14px] sm:text-[12px]">
          instagram
        </span>
      </div>
      <div className="flex items-center justify-center flex-col font-bold text-[#5c6b73]">
        <span className=" text-[30px]">{stats?.facebookCharactersLeft}</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px] xl:text-[14px] md:text-[14px] sm:text-[12px]">
          facebook
        </span>
      </div>
    </div>
  );
}
