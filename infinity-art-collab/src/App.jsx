import React from "react";
import "remixicon/fonts/remixicon.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Collections from "./pages/Collections";

const App = () => {
  const arr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZIMJQprZl3r8J9QKqbHgUE3z7LAfZzl2NgQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1K_ou9G53t-o5r9mBOI4wehrE-23ae9zyYg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCmpRPRdmQOhLcC2I5slBXOREWxUkDMKPCfA&s",
    "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/51948/279472/1593506744955_EEFEC98C-24E2-432B-9D45-589AC1293679__32193.1687413036.jpg?c=2&imbypass=on",
  ];

  const art = [
    "https://scontent.fisk3-1.fna.fbcdn.net/v/t1.6435-9/105740276_180288416821134_2705081218138621356_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TjbBGoEIqpsQ7kNvwEhOftF&_nc_oc=AdlTVtJioeOjAT6c0Jw_OGo6u-mIGNUQR-3BHgiBtLO-0uJPsu4vJECfNSQaFLmcTSJR2_qzBgAi_a0oDW7_kqNx&_nc_zt=23&_nc_ht=scontent.fisk3-1.fna&_nc_gid=Wyf8Opn7S5BLxKAyCxxUoQ&oh=00_AfgbxgpdDz78nJdT7VdXHS-fIaqXZq79IcRG5JSVuAsbog&oe=6944D0E2",
    "https://scontent.fisk3-1.fna.fbcdn.net/v/t1.6435-9/104925846_180288436821132_1071789239064960803_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aedjWJfkoYsQ7kNvwHsz1w_&_nc_oc=AdklQiHh6nWwIMpQnm5LjRiu8EhK8I-dqDZKkPkoYaf3qG2Qni4_JgMH66TakcbG2IPfwFWvptfvB0OXQDf-uMCo&_nc_zt=23&_nc_ht=scontent.fisk3-1.fna&_nc_gid=FxYKmJXJUGkR6nev8biHRA&oh=00_AfgzlRnSqdX4L5OWfsNkxH8yACiQZi6M_Pqzyz9WvpMM8A&oe=6944EF06",
    "https://scontent.fisk3-1.fna.fbcdn.net/v/t1.6435-9/115688025_187812779402031_1472259445459778536_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=s3DPyVCPKEAQ7kNvwGjAdBl&_nc_oc=Adker05fKLmDf2dWJA6jy1B6blRBw_x2W23l0Hy4VromgJTgo7ku0ip9Iel8LC-g5v7OmN6MO-CC6XUVHRtRUxEx&_nc_zt=23&_nc_ht=scontent.fisk3-1.fna&_nc_gid=8mKqIjg88Sikc2Bq1DDu3g&oh=00_AfiB9mdBfMXmRLYlCMFjPO94XwNct9XdziRjvyLNQ6tZ_w&oe=6944DE36",
    "https://scontent.fisk3-1.fna.fbcdn.net/v/t1.6435-9/128172427_227433662106609_6622816081856168914_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=JQ2eAFhqlJwQ7kNvwEYm6nk&_nc_oc=Adm4AVCCzzeFR-Inhy9znMA7EKzvEZ34dfbthmihGNZmKTbHkg2PjPtxU0KqF9YTnSmRWQpDkR7H9sPdB3T8T4h_&_nc_zt=23&_nc_ht=scontent.fisk3-1.fna&_nc_gid=9Ic3ESuT8nFO9q6vJy06eg&oh=00_AfgiDKgg7qcMz1ZyMxTC7AH8-3JlrhNZWOs-g37SwNdwJA&oe=6944CE87"
  ];

  return (
    <div className="bg-amber-50 min-h-screen flex flex-col">
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <div className="mt-8 px-4">
                <h1 className="text-center text-lg sm:text-xl text-gray-700 font-medium leading-relaxed">
                  Welcome to I.A.C - Infinity Art Collaborators <br />
                  I.A.C is an Open Canvas for Art <br />
                  An <strong>Infinite Size Canvas</strong> made available to all
                  Art forms and its Artist by Artist <br />
                  Performing Arts, Literary Arts, Visual Arts &
                  Multidisciplinary Arts
                </h1>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-8 px-4">
                {arr.map((elem, idx) => (
                  <Hero key={idx} elem={elem} />
                ))}
              </div>
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Collections Gallery */}
        <Route
          path="/collections"
          element={
            <div className="p-6 sm:p-10">
              <h1 className="text-center text-2xl sm:text-3xl text-gray-700 font-semibold mb-6">
                Art Gallery
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
                {art.map((elem, idx) => (
                  <Collections key={idx} elem={elem} />
                ))}
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
