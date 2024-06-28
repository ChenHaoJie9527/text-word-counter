interface Props {
  className?: string;
}

export default function Counter({ className }: Props) {
  return (
    <div className={`grid grid-cols-2 grid-rows-2 bg-[#EBFDFF] ${className}`}>
      <div className="flex items-center justify-center border-b-[1px] flex-col border-r-[1px] font-bold text-[#5c6b73]">
        <span className=" text-[30px]">0</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px]">
          words
        </span>
      </div>
      <div className="flex items-center justify-center border-b-[1px] flex-col font-bold text-[#5c6b73]">
        <span className=" text-[30px]">0</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px]">
          characters
        </span>
      </div>
      <div className="flex items-center justify-center border-r-[1px] flex-col font-bold text-[#5c6b73]">
        <span className=" text-[30px]">0</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px]">
          instagram
        </span>
      </div>
      <div className="flex items-center justify-center flex-col font-bold text-[#5c6b73]">
        <span className=" text-[30px]">0</span>
        <span className=" uppercase tracking-[1px] opacity-70 text-[14px]">
          facebook
        </span>
      </div>
    </div>
  );
}
