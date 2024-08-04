import Image from "next/image";
import backgroundImage from "@/assest/images/banner-bg.png";
import user from "@/assest/icons/user+.png";
import search from "@/assest/icons/search.png";
import fingerRing from "@/assest/icons/fingerRing.png";

const Works = () => {
  return (
    <div>
      <div
        className=" bg-center bg-no-repeat bg-cover h-fit py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(71, 88, 110, 0.65), rgba(71, 88, 110, 0.65)),url(${backgroundImage.src})`,
        }}
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-[#FDFDFD] text-center">
          How Muslims Matrimony Works
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-5 text-center ">
          <div className="border p-4 rounded bg-white w-[250px] md:w-[300px] flex justify-center items-center flex-col">
            <Image
              src={user}
              alt="ring_image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[40px] w-[40px] mb-2 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-3">Create Biodata</h3>
            <p className="text-sm">
              You can easily create a biodata on OrdhekDeen completely free of
              cost within some steps.
            </p>
          </div>
          <div className="border p-4 rounded bg-white w-[250px] md:w-[300px] flex justify-center items-center flex-col">
            <Image
              src={search}
              alt="ring_image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[40px] w-[40px] mb-2 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-3">Search Biodata</h3>
            <p className="text-sm">
              You can easily search biodata using many filters including age,
              upazila, profession, education qualification.
            </p>
          </div>
          <div className="border p-4 rounded bg-white w-[250px] md:w-[300px] flex justify-center items-center flex-col">
            <Image
              src={fingerRing}
              alt="ring_image"
              width={0}
              height={0}
              sizes="100vw"
              className="h-[40px] w-[40px] mb-2 mx-auto"
            />
            <h3 className="text-xl font-semibold mb-3">Get Married</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
