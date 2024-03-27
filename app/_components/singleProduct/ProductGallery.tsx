'use client';
import React from 'react';
import { IAttachment } from '../../_lib/types/products';
import Image from 'next/image';
import { useState } from 'react';
import Modal from 'react-modal';
import Icon from '../UI/icon';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/virtual';

interface ProductGalleryProps {
  images: IAttachment[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [swiperRef, setSwiperRef] = useState<SwiperCore | null>(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const slideTo = (index: number) => {
    swiperRef?.slideTo(index, 0);
    setSelectedImage(index);
  };

  const onClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      {images?.length > 0 ? (
        <>
          <div className="hidden lg:flex flex-row-reverse ">
            <div className="relative mr-2  overflow-hidden  mx-auto border border-light-gray-200 rounded-md">
              <Image
                src={images[currentImage].url}
                alt={''}
                placeholder="blur"
                blurDataURL="/images/no-image.jpg"
                width={520}
                height={520}
              />
            </div>
            <div className=" gap-x-4">
              {images.map((image, index) => {
                if (index < 4) {
                  return (
                    <div
                      key={index}
                      className={`relative h-[100px] w-[100px] mb-2  cursor-pointer border border-transparent rounded-md overflow-hidden ${
                        index === currentImage
                          ? ' border-ocean-blue-900 '
                          : 'border-light-gray-200'
                      }`}
                      onClick={() => setCurrentImage(index)}
                    >
                      <Image
                        src={image.url}
                        layout="fill"
                        alt={''}
                        placeholder="blur"
                        blurDataURL="/images/no-image.jpg"
                      />
                    </div>
                  );
                }
              })}
              {images.length > 4 && (
                <>
                  <div
                    // key={index}
                    className="relative w-24 h-24 p-2 cursor-pointer border border-light-gray-300 rounded-md overflow-hidden"
                    onClick={() => setOpenModal(true)}
                  >
                    <div className="p-2">
                      <Image
                        src={images[5]?.url}
                        layout="fill"
                        alt={''}
                        placeholder="blur"
                        blurDataURL="/images/no-image.jpg"
                        className="blur"
                      />
                    </div>

                    <div className="absolute top-8 left-8">
                      <Icon name="more" />
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="lg:hidden border border-light-gray rounded-md mb-6">
            <Swiper
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative h-auto w-full">
                    <Image
                      src={image.url}
                      width="660"
                      height="720"
                      alt={''}
                      layout="responsive"
                      objectFit="contain"
                      placeholder="blur"
                      blurDataURL="/images/no-image.jpg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Modal
            isOpen={openModal}
            onRequestClose={onClose}
            ariaHideApp={false}
            portalClassName=""
            className=""
            overlayClassName=""
            style={{
              content: {
                maxWidth: '872px',
                background: '#fff',
                border: '1px solid #DADADA',
                borderRadius: '15px',

                margin: '0 auto',
                overflowY: 'hidden',
              },
              overlay: {
                zIndex: 999,
              },
            }}
          >
            <div className=" modal-header p-5 pb-1 flex justify-between">
              <h2>تصاویر محصول</h2>
              <button onClick={onClose}>
                <Icon name="close" />
              </button>
            </div>
            <div className="pt-2 pb-4">
              <div className="w-full border-t border-light-gray-200"></div>
            </div>
            <div className="popupGalleryWrap p-6 ">
              <div className="flex -mx-3">
                <div className="w-[60%] px-3  rounded-md">
                  <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={1}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                      type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Virtual]}
                  >
                    {images.map((image, index) => (
                      <SwiperSlide key={index} virtualIndex={index}>
                        <Image
                          src={image.url}
                          width={720}
                          height={660}
                          alt=""
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <div className="w-[40%] px-3">
                  <div className="mb-2">{''}</div>
                  <p className="append-buttons flex flex-wrap">
                    {images.map((image, index) => (
                      <div
                        className={` border-2 m-1 flex border-light-gray-300 rounded-md overflow-hidden ${
                          selectedImage == index
                            ? 'border-ocean-blue'
                            : 'border-light-gray-300'
                        }`}
                        key={index}
                      >
                        <Image
                          src={image.url}
                          onClick={() => slideTo(index)}
                          width="80"
                          height="80"
                          alt={''}
                        />
                      </div>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          </Modal>
        </>
      ) : (
        <div>
          <Image src="/images/no-image.jpg" width={720} height={660} alt={''} />
        </div>
      )}
    </>
  );
};

export default ProductGallery;
