"use client";

import { BiMailSend, BiMobile } from "react-icons/bi";
import { useQRCode } from "next-qrcode";
import { FaViber, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  const { Image } = useQRCode();
  return (
    <div className="min-h-[60vh] flex flex-col justify-between items-center text-xl">
      <h1 className="text-theme font-bold my-2 text-3xl">Contact</h1>

      <section className="w-full pb-10">
        <div className="flex flex-row justify-center items-center gap-2">
          <BiMailSend className="text-xl" />
          <a href="mailto:storejigu@gmail.com" className="hover:underline">
            storejigu@gmail.com
          </a>
        </div>
        <div className="flex flex-row justify-center items-center gap-2">
          <BiMobile className="text-xl" />
          <a href="tel:+9779868053067">+977-9868053067</a>
        </div>

        <hr className="border border-theme-gray my-4" />

        <h2 className="text-theme-gray font-bold my-8">Other Media</h2>
        <div className="flex flex-col sm:flex-row justify-evenly items-center gap-5 sm:gap-20">
          <a
            href="https://wa.me/+9868053067"
            className="flex flex-col justify-evenly items-center border border-theme-gray/30 shadow-sm rounded-md"
          >
            <Image
              text={"https://wa.me/+9868053067"}
              options={{
                type: "image/jpeg",
                quality: 0.3,
                errorCorrectionLevel: "M",
                margin: 1,
                scale: 4,
                width: 200,
              }}
            />
            <span>
              Whatsapp
              <FaWhatsapp className="text-theme-green text-3xl inline-block mx-1" />
            </span>
          </a>
          <a
            href="viber://chat/?number=+9779868053067"
            className="flex flex-col justify-evenly items-center border border-theme-gray/30 shadow-sm rounded-md"
          >
            <Image
              text={"viber://chat/?number=+9779868053067"}
              options={{
                type: "image/jpeg",
                quality: 0.3,
                errorCorrectionLevel: "M",
                margin: 1,
                scale: 4,
                width: 200,
              }}
            />
            <span>
              Viber
              <FaViber className="text-[#725ac1] text-3xl inline-block mx-1" />
            </span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
