import calenderBg from "../../assets/klfCalender/calenderBg.png";
import leafs from "../../assets/klfCalender/claenderLeafs.png";
import image2 from "../../assets/klfCalender/engaging.png";
import image1 from "../../assets/klfCalender/dialouges.png";
import image3 from "../../assets/klfCalender/music.png";

export const Program8thDec = () => {
  // Array of content items
  const calendarItems = [
    {
      id: 1,
      image: image1,
      title: "Enriching dialogues",
    },
    {
      id: 2,
      image: image2,
      title: "Engaging interactions",
    },
    {
      id: 3,
      image: image3,
      title: "Music Gala Performances",
    },
  ];

  return (
    <div
      className="relative bg-cover bg-center min-h-screen md:min-h-[55vh] lg:min-h-screen"
      style={{ backgroundImage: `url(${calenderBg})` }}
    >
      <div className="w-full h-full bg-white bg-opacity-30 flex flex-col justify-center items-center text-black font-inter">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center mb-4 mt-8">
          <p className="text-lg md:text-xl mt-2 font-semibold">8th December</p>
          <div className="flex mt-2 items-center">
            <img src={leafs} alt="leaf" className="-rotate-45 h-10"/>
            <p className="text-lg">Theme:</p>
            <img src={leafs} alt="leaf" className="h-10"/>
          </div>
          <p className="italic ">
           "Manthan by The Dal Lake”
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-3">
          {calendarItems.map((item) => (
            <div key={item.id} className="p-2 text-center">
              <div className="rounded-3xl border-[1px] border-white overflow-hidden">
                    <img
                    src={item.image}
                    alt={item.title}
                    className="w-[230px] h-72"
                    />
              </div>
              <h2 className="text-sm font-semibold mt-2">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
