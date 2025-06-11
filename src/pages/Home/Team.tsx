import cof1 from "../../assets/team/cof-1.png";
import cof2 from "../../assets/team/cof-2.png";
import cof3 from "../../assets/team/cof-3.png";
import cof4 from "../../assets/team/cof-4.png";
import cof5 from "../../assets/team/cof-5.png";
import cof6 from "../../assets/team/cof-6.png";


export default function Team() {
  const teamMembers = [
    {
      name: "NIKKIC",
      role: "Co-Founder",
      avatar: cof1,
      bgColor: "bg-teal-600"
    },
    {
      name: "THECUPCAKE",
      role: "Co-Founder",
      avatar: cof2,
      bgColor: "bg-purple-600"
    },
    {
      name: "GARTHERLY",
      role: "Co-Founder",
      avatar: cof3,
      bgColor: "bg-green-600"
    },
    {
      name: "STAMENIX",
      role: "Designer",
      avatar: cof4,
      bgColor: "bg-red-600"
    },
    {
      name: "DONTFEEDTHEWOLF",
      role: "Back-End Full-Time",
      avatar: cof5,
      bgColor: "bg-gray-600"
    },
    {
      name: "PROHARVESTER",
      role: "Developer",
      avatar: cof6,
      bgColor: "bg-indigo-600"
    }
  ];

  return (
    <>

        {/* Main Content */}
        <div className="relative z-10 pt-32 pb-20">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-gray-500 mb-4 tracking-wider">
              MEET THE TEAM
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Crypto Oasis is a multigaming platform for NFT communities to come together, compete, and have fun.
            </p>
          </div>

          {/* Team Grid */}
          <div className="max-w-6xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex flex-col items-center group">
                  {/* Avatar */}
                  <div className={`w-48 h-48 rounded-full ${member.bgColor} p-1 mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center overflow-hidden">
                      <div className="w-40 h-40 rounded-full overflow-hidden">
                        <img 
                          src={member.avatar} 
                          alt={member.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-lime-400 mb-2 tracking-wider">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-gray-400 text-lg">
                    {member.role}
                  </p>
                  
                  {/* Special highlight for DONTFEEDTHEWOLF */}
                  {member.name === "DONTFEEDTHEWOLF" && (
                    <div className="mt-2 px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                      Back-End Full-Time
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

    </>
  );
}