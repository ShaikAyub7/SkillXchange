import Image from "next/image";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 p-8 justify-around items-center">
      <div className="p-10  flex items-center justify-around">
        <Image
          src={"./homeImage.svg"}
          width={500}
          height={500}
          alt="loading..."
        />
      </div>
      <div className="p-10 w-full">
        <h1 className="text-4xl mb-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
          facilis.
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum esse
          dolorum quod sunt possimus vel totam eos? Sapiente, corporis voluptate
          eos, amet cupiditate laboriosam eveniet perferendis dolores ipsam
          ullam commodi reiciendis minus minima ab beatae distinctio aliquid,
          similique saepe velit. Ea, dicta voluptatem? Quisquam, enim corporis
        </p>
      </div>
    </div>
  );
};

export default HomePage;
