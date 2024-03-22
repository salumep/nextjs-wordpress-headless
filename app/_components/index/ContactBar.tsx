'use client';
import { contactBarInfo } from '../../_lib/constants/contactBar';
import Icon from '../UI/icon';

export default function ContactBar() {
  return (
    <div className="container">
      <div className="max-w-[1076px] md:bg-white mx-auto rounded-2xl  md:-mt-12 relative z-10 py-7 md:px-4   md:shadow-[0_5px_39px_rgba(67,73,79,0.09)]">
        <div className="md:grid-cols-4 grid-cols-2 grid gap-2 md:gap-2">
          {contactBarInfo.map((contact) => (
            <div className=" flex items-center text-center cursor-pointer border md:border-none border-gray-600 rounded-md p-2 md:p-0">
              <div className="  bg-primary w-[52px] h-[52px] rounded-md flex items-center justify-center  hover:scale-105 transition-transform   ">
                <Icon name={contact.icon} />
              </div>
              <div className="md:text-sm text-xs text-right pr-2 ">
                <p className="mb-2">{contact.title}</p>
                <span className="text-xs text-color-text-200 hidden lg:block">
                  {contact.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
