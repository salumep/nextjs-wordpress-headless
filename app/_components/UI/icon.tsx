import React, { FC } from 'react';
import SearchIcon from './search.svg';
import CartIcon from './cart.svg';
import DownloadIcon from './download.svg';
import NotesIcon from './notes.svg';
import AparatIcon from './aparat.svg';
import TelegramIcon from './telegram.svg';
import InstagramIcon from './instagram.svg';
import UsersIcon from './users.svg';
import ShopIcon from './shop.svg';
import BarsIcon from './bars.svg';
import callIcon from './call.svg';

interface IconProps {
  name: string;
  [key: string]: string;
}

interface IconTypes {
  [key: string]: FC<React.SVGProps<SVGSVGElement>>;
}

const iconTypes: IconTypes = {
  search: SearchIcon,
  cart: CartIcon,
  download: DownloadIcon,
  notes: NotesIcon,
  telegram: TelegramIcon,
  instagram: InstagramIcon,
  aparat: AparatIcon,
  users: UsersIcon,
  shop: ShopIcon,
  bars: BarsIcon,
  call: callIcon,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  let IconComponent = iconTypes[name];
  return <IconComponent {...props} />;
};

export default Icon;
