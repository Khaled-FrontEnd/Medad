// components/TrustedBySection.jsx
import Image from "next/image";

export default function TrustedBySection() {
  const partners = [
    { src: "/partners/google.png", alt: "Google" },
    { src: "/partners/ibm.png", alt: "IBM" },
    { src: "/partners/microsoft.png", alt: "Microsoft" },
    { src: "/partners/amazon.png", alt: "Amazon" },
    { src: "/partners/apple.png", alt: "Apple" },
  ];
  const demoData = [
    // {
    //   name: "Google",
    //   logo: "https://cdn-icons-png.flaticon.com/512/300/300221.png",
    // },
    // {
    //   name: "Microsoft",
    //   logo: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    // },
    {
      name: "Harvard University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR47kr9-qH6GNvEL90iVVykHpj-VUXProxfQA&s",
    },
    {
      name: "MIT",
      logo: "https://upload.wikimedia.org/wikipedia/en/4/44/MIT_Seal.svg",
    },
    {
      name: "Amazon",
      logo: "https://media.icn.com/media/storage/uploads/all/K9bQn9Mzl5A1m24A6b1Qu4jvvD0cRFZr1jj0JGtD.webp",
    },
    {
      name: "Stanford University",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwHMT7C6XJHzICYwZ9AdgNmli-SvPiII_F4w&s",
    },
    // {
    //   name: "Apple",
    //   logo: "https://cdn-icons-png.flaticon.com/512/731/731985.png",
    // },
    {
      name: "Oxford University",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Arms_of_University_of_Oxford.svg",
    },
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-container-max mx-auto px-margin-desktop text-center">
        <p className="font-label-md text-label-md text-outline mb-10">
          شركاء النجاح في رحلة العلم
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 ">
          {demoData.map((partner, index) => (
            <img
              key={index}
              src={partner?.logo}
              alt={partner?.name}
              className="h-12 w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
