import Stat from "./base/Stat";

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
      <Stat type="words" counter={stats?.numberOfWords} className=" border-r-[1px]" />
      <Stat type="characters" counter={stats?.numberOfCharacters} />
      <Stat type="instagram" counter={stats?.instagramCharactersLeft} className=" border-r-[1px]" />
      <Stat type="facebook" counter={stats?.facebookCharactersLeft}  />
    </div>
  );
}
