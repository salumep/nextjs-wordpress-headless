import React from 'react';
import BreadCrumb from '../../../_components/share/BreadCrumb';
import Image from 'next/image';
export default function AboutUs() {
  return (
    <div className="container ">
      <div className="breadCrumbWrap mb-6 ">
        <BreadCrumb currentpageTitle={'  درباره ما '} />
        <div className="staticPageWrap shadow-lg rounded-lg my-6 text-sm leading-10 p-6 h-full">
          <div>
            فروشگاه اینترنتی کرومات در تابستان ۹۹ تاسیس شد، اما بیش از دو دهه
            تجربه و اعتبار پشت این مجموعه است. این مجموعه به صورت تخصصی در زمینه
            فروش تجهیزات آشپزخانه و مواد اولیه فعالیت دارد و در حال حاضر کالاهای
            زیادی در زمینه شیرآلات، هود، سینک، گاز ، فر توکار و … در سایت به
            صورت آنلاین و فروشگاه حضوری به فروش می رساند. فروشگاه کرومات فروشگاه
            کرومات کرومات به طور مستقیم با تولید کنندگان در ارتباط می باشد و
            کالاها را بدون واسطه به دست مشتریان میرساند. در فروشگاه کرومات ما
            سعی خواهیم کرد که اطلاعات کامل در مورد هر محصول را در اختیار شما
            بگذاریم تا بتوانید بهترین خرید را انجام دهید. در صورت نیاز و تردید
            در مورد خریدتان میتوانید با کارشناسان فروش این مجموعه تماس گرفته و
            راهنمایی کامل در جهت داشتن خریدی مطمئن دریافت کنید.
          </div>
          <div className="grid grid-cols-3"></div>
        </div>
      </div>
    </div>
  );
}
