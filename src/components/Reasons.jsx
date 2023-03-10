const dataLists = [
  {
    iconList: "/images/icon-search-white.svg",
    text: "MANUFACTURED WITH QUALITY MATERIALS",
  },
  {
    iconList: "5",
    text: "5 YEARS OF WARRANTY FOR EACH PROFUCT",
  },
  {
    iconList: "/images/icon-work.svg",
    text: "20 YEARS OF EXPERTISE",
  },
];

function List({ iconList, text }) {
  return (
    <div className="list flex items-center gap-4 even:my-6">
      {iconList.split("/").length > 1 ? (
        <img
          src={iconList}
          className="rounded-lg bg-light-green-500 p-3"
          alt=""
        />
      ) : (
        <p className="rounded-lg bg-light-green-500 py-2 px-4 text-2xl font-extrabold text-white">
          {iconList}
        </p>
      )}
      <p className="text-left font-bold">{text}</p>
    </div>
  );
}

export default function Reasons() {
  return (
    <section className="bg-very-black-brown px-6 py-8 text-center text-light-green md:px-32 md:py-24 md:text-left">
      <h3 className="text-lg md:text-xl">WHY CHOOSE US?</h3>
      <h4 className="upper pt-6 pb-8 text-2xl font-extrabold leading-10 md:mb-4 md:text-7xl">
        We care about details and the quality of our products
      </h4>
      <div className="lists md:flex md:justify-between">
        {dataLists.map((item, index) => (
          <List key={index} {...item} />
        ))}
      </div>
    </section>
  );
}
