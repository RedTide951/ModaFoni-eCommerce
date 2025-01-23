import React from "react";

const ShopPage = () => {
  return (
    <section>
      <div className="p-12 border-2 flex justify-center flex-col items-center gap-14">
        <h3 className="font-semibold text-xl">Shop</h3>
        <div>Breadcrumbs</div>
      </div>
      <div className="gap-4 px-10 py-6 flex flex-col items-center">
        <div className="border-2 overflow-hidden aspect-square flex justify-center items-center relative">
          <span className="absolute text-white font-semibold">CLOTHS</span>
          <span className="absolute mt-20 text-white font-semibold">
            5 Items
          </span>
          <img
            src="https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbnmUNIdkpHNNwbl7hWOzkDeXijL1LuzfDAtYijrh-u1VeTMh83xDRrDdPljSmjZiYqQ0R0gBPtWH6p-nOfH3r7tdJF6gTWRk2CvsL0vcm0NUF4eu~wRVwCc8O2Hw4EIdThW~UqVyg9LG4SFEE9awH~mf~eT7EYFCHcKBPLk0tIqi9BDa9LAsrF9r~zFr5wUaBwBD3cBrAKEuNFMR5mh6HKInni7hH0Brrf7IRne-nebfjjhnDWl11p2tPyHG-nY7yL1OOGBYBsvP86zzKuMcg-xeXyetihZQ~37U81Y4niH-r3y~EZk7KTFCO0RCsBETdtFQy1MTpKV7Z6LuYXdJw__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-2 overflow-hidden aspect-square flex justify-center items-center relative">
          <span className="absolute text-white font-semibold">CLOTHS</span>
          <span className="absolute mt-20 text-white font-semibold">
            5 Items
          </span>
          <img
            src="https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbnmUNIdkpHNNwbl7hWOzkDeXijL1LuzfDAtYijrh-u1VeTMh83xDRrDdPljSmjZiYqQ0R0gBPtWH6p-nOfH3r7tdJF6gTWRk2CvsL0vcm0NUF4eu~wRVwCc8O2Hw4EIdThW~UqVyg9LG4SFEE9awH~mf~eT7EYFCHcKBPLk0tIqi9BDa9LAsrF9r~zFr5wUaBwBD3cBrAKEuNFMR5mh6HKInni7hH0Brrf7IRne-nebfjjhnDWl11p2tPyHG-nY7yL1OOGBYBsvP86zzKuMcg-xeXyetihZQ~37U81Y4niH-r3y~EZk7KTFCO0RCsBETdtFQy1MTpKV7Z6LuYXdJw__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="border-2 overflow-hidden aspect-square flex justify-center items-center relative">
          <span className="absolute text-white font-semibold">CLOTHS</span>
          <span className="absolute mt-20 text-white font-semibold">
            5 Items
          </span>
          <img
            src="https://s3-alpha-sig.figma.com/img/c9a6/4276/a14f623312021f83a598c945b5165068?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WbnmUNIdkpHNNwbl7hWOzkDeXijL1LuzfDAtYijrh-u1VeTMh83xDRrDdPljSmjZiYqQ0R0gBPtWH6p-nOfH3r7tdJF6gTWRk2CvsL0vcm0NUF4eu~wRVwCc8O2Hw4EIdThW~UqVyg9LG4SFEE9awH~mf~eT7EYFCHcKBPLk0tIqi9BDa9LAsrF9r~zFr5wUaBwBD3cBrAKEuNFMR5mh6HKInni7hH0Brrf7IRne-nebfjjhnDWl11p2tPyHG-nY7yL1OOGBYBsvP86zzKuMcg-xeXyetihZQ~37U81Y4niH-r3y~EZk7KTFCO0RCsBETdtFQy1MTpKV7Z6LuYXdJw__"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Filter Buttons */}
      <div className="py-6 px-20">
        <div className="flex flex-col align-middle text-center gap-4">
          <span className="">Showing All 12 Results</span>
          <div className="flex justify-center gap-4">
            <span>Views</span>
            <button>Grid</button>
            <button>List</button>
          </div>
          <div className="flex justify-center gap-4">
            <button>123</button> <button>123</button>
          </div>
        </div>
      </div>
      {/* Product Cards Container */}
      <div className="gap-4 px-10 py-20 flex flex-col items-center">
        <div className="border-2 overflow-hidden aspect-auto flex justify-center items-center relative">
          {/* Product Card */}
          <div className="flex flex-col gap-4 justify-center items-center">
            <img
              src="https://s3-alpha-sig.figma.com/img/9da5/ab42/c0357746eb27e42fff6279478e2c8a48?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z48ReVXi6AB-YLaBmjbdQ0yhazO72knZ3lBL1zn66-yrzOvOK7w0RvGZhR0z9pYLKCO8T9MYDIZYYlX4MOd~Xs4LQNuVBakdQJUaGaOmGCyHG8oyiflkGQzBMhRxKMu4-nyOhgSfYjQFeUjLr9p5JfASczlpb2sopaGw5Yvw08xdddZxvR7YsVtmp-LesNHlV308ySHTnXw97oEVFC95f~PbUpebb-Y8a-VRn4UCrNMWpkv~jUBA0cVTUnfWN4swxLlgwpaAAMOY1Ewo~jgj3X304VK4gjk1VjFYnfJiWzZ5r-ib0P2ZW5m34qExNxs1lnuMEVJcHtiJc83VikIsVw__"
              alt=""
              className="w-full h-full object-cover"
            />
            <h5 className="font-bold">Graphic Design</h5>
            <p style={{ color: "gray" }}>English Department</p>
            <div className="flex justify-center items-center gap-4">
              <span className="font-bold" style={{ color: "gray" }}>
                $16.48
              </span>
              <span className="font-bold" style={{ color: "green" }}>
                $6.48
              </span>
            </div>
            {/* color butons */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center">
                <span className="w-5 h-5 bg-blue-500 rounded-full"></span>
              </div>
              <div className="flex items-center justify-center">
                <span className="w-5 h-5 bg-green-500 rounded-full"></span>
              </div>
              <div className="flex items-center justify-center">
                <span className="w-5 h-5 bg-red-500 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
        {/* Pagination */}
        <div className="flex items-center">
          <button className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white hover:bg-gray-100">
            <svg
              width="9"
              fill="currentColor"
              height="8"
              className=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
          <button className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100">
            1
          </button>
          <button className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
            2
          </button>
          <button className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100">
            3
          </button>
          <button className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100">
            4
          </button>
          <button className="w-full p-4 border-t border-b border-r text-base rounded-r-xl text-gray-600 bg-white hover:bg-gray-100">
            <svg
              width="9"
              fill="currentColor"
              height="8"
              className=""
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
            </svg>
          </button>
        </div>
        {/* Logos */}
        <div></div>
      </div>
    </section>
  );
};

export default ShopPage;
