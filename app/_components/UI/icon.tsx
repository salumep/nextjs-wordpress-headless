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
import standard from './standard.svg';
import quality from './quality.svg';
import orgonomic from './orgonomic.svg';
import consultation from './consultation.svg';
import hygienic from './hygienic.svg';
import resistant from './resistant.svg';
import easyToUse from './easyToUse.svg';
import location from './location.svg';
import message from './message.svg';
import phone from './phone.svg';
import more from './more.svg';
import close from './close.svg';

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
  consultation: consultation,
  orgonomic: orgonomic,
  quality: quality,
  standard: standard,
  hygienic: hygienic,
  resistant: resistant,
  easyToUse: easyToUse,
  location: location,
  message: message,
  phone: phone,
  more: more,
  close: close,
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  let IconComponent = iconTypes[name];
  return <IconComponent {...props} />;
};

export default Icon;
