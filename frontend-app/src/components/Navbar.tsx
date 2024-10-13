const sections = [
  { title: "Features", url: "#" },
  { title: "Solutions", url: "#" },
  { title: "Resources", url: "#" },
  { title: "Pricing", url: "#" },
];

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#1a1a1a] py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-[#5046e5] rounded-full"></div>
          <span className="text-xl font-bold  text-white">flaro</span>
        </div>
        <div className="hidden md:flex space-x-6">
          {sections.map((section, index) => (
            <a
              key={index}
              href={section.url}
              className="text-white font-medium hover:text-[#5046e5] transition-colors"
            >
              {section.title}
            </a>
          ))}
        </div>
        <button className="bg-white text-[#1a1a1a] px-4 py-2 rounded-md font-medium hover:bg-opacity-90 transition-colors">
          Create Free Account
        </button>
      </nav>
    </>
  );
}
