import Image from 'next/image';
import HeaderItem from './HeaderItem';
import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';

function header() {
  return (
    <header className="flex flex-col sm:flex-row m-3 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly items-center max-w-2xl mt-3">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTION" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>

      <div className="w-120 h-120 pr-0 cursor-pointer sm:pr-10 items-center">
        <Image src="/hulu-w.png" width={125} height={55} alt="logo" />
      </div>
    </header>
  );
}

export default header;
