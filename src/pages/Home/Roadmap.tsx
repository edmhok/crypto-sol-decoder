export default function Roadmap() {
  return (
    <>
      {/* Roadmap Page */}
          <div className="text-center py-20">
            <h1 className="text-6xl md:text-6xl font-bold text-white mb-6">
              ROADMAP
            </h1>
          </div>

          {/* Roadmap Timeline */}
          <div className="container mx-auto px-6 py-10">
            <div className="max-w-6xl mx-auto">
              
              {/* Roadmap Item 01 - BETA */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="text-8xl font-bold text-lime-500 opacity-80">
                    01
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold text-white mb-2">BETA</h3>
                  <p className="text-gray-400 text-lg mb-4">Q2 2023</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Beta will be a soft launch between 0.5 select communities to test the gameplay to site.
                  </p>
                </div>
              </div>

              {/* Roadmap Item 02 - LAUNCH */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="text-8xl font-bold text-lime-500 opacity-80">
                    02
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold text-white mb-2">LAUNCH</h3>
                  <p className="text-gray-400 text-lg mb-4">Q2 2023</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The end is open for all to be able to use the marketplace and play holders will remain. Crypto Oasis will officially be launched for all to use multiple in the space. They'll be able to play bit within their community or a Community vs community engaging possibilities.
                  </p>
                </div>
              </div>

              {/* Roadmap Item 03 - NFT */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="text-8xl font-bold text-lime-500 opacity-80">
                    03
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold text-white mb-2">NFT</h3>
                  <p className="text-gray-400 text-lg mb-4">Q2 2023</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The NFT drop launch will be giving 10,000 to 15,000 NFTs. There will be 3 types of rarity: <span className="text-lime-400">Common Pass</span>, <span className="text-lime-400">Rare Pass</span>, and <span className="text-lime-400">Ultra Rare</span>.
                  </p>
                </div>
              </div>

              {/* Roadmap Item 04 - $CCCoin AIRDROP */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="text-8xl font-bold text-lime-500 opacity-80">
                    04
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold text-white mb-2">$CCCoin AIRDROP</h3>
                  <p className="text-gray-400 text-lg mb-4">Q3 2023</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Everyone who played will be airdropped $CCCoin. $CCCoin can be used within the games to purchase items within the games. They can also use it to purchase items within the games.
                  </p>
                </div>
              </div>

              {/* Roadmap Item 05 - THE LAB */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20">
                <div className="lg:col-span-2 flex justify-center lg:justify-end">
                  <div className="text-8xl font-bold text-lime-500 opacity-80">
                    05
                  </div>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-3xl font-bold text-white mb-2">THE LAB</h3>
                  <p className="text-gray-400 text-lg mb-4">Q4 2023</p>
                </div>
                <div className="lg:col-span-6">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    The whitelist "shop" for the Crypto Oasis ecosystem. The shop will be populated with items to be bought with $CCCoin that have been created by community members. Whitelist provided by community members.
                  </p>
                </div>
              </div>

            </div>
          </div>
    </>
  );
}