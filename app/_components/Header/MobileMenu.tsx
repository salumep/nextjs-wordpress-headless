import Link from 'next/link';
import Image from 'next/image';
import Modal from 'react-modal';
import { menuItem } from '../../_lib/types/menuItem';

interface MobileMenuProps {
  toggle: boolean;
  onCloseModalHandler: () => void;
  items: menuItem[];
}
const MobileMenu: React.FC<MobileMenuProps> = ({
  toggle,
  onCloseModalHandler,
  items,
}) => {
  const customStyles = {
    content: {
      top: '0',
      right: '0',
      width: '300px',
      bottom: '0',
      border: 'none',
      inset: 'unset',
      height: '100%',
      zIndex: '50',
    },
    overlay: {
      background: '#8686866e',
      overflow: 'auto',
      zIndex: '40',
    },
  };
  return (
    <>
      <Modal
        isOpen={toggle}
        onRequestClose={onCloseModalHandler}
        style={customStyles}
        ariaHideApp={false}
      >
        <div className="MobileMenuWrap  h-full w-full z-20 bg-white right-0 top-0 ">
          <div className="MobileMenuLogo pt-4 pb-2  border-b mb-1 border-light-gray-150">
            <Image
              src="/images/logo.png"
              width={90}
              height={29}
              alt="barghchi"
            />
          </div>
          <div className="topMobileMenu text-sm">
            {items.map((item, index) => (
              <div key={index}>
                {item.children?.length ? (
                  //   <MobileDropDownMenu menu={item} />
                  <></>
                ) : (
                  <div className="py-4">
                    <Link href={`#`}>
                      <span className={`flex ${item.class}`}>
                        {item.icon && (
                          <span
                            className="icon pl-2"
                            dangerouslySetInnerHTML={{ __html: item.icon }}
                          />
                        )}
                        {item.title}
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default MobileMenu;
