import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const BannerTabs = () => {
  return (
    // <Tabs className="text-center">
    //   <TabList>
    //     <Tab>Cat</Tab>
    //     <Tab>Dog</Tab>
    //     <Tab>Horse</Tab>
    //   </TabList>

    //   <TabPanel>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3">
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </TabPanel>
    //   <TabPanel>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3">
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </TabPanel>
    //   <TabPanel>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-3">
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="card card-compact w-96 bg-base-100 shadow-xl">
    //         <figure>
    //           <img
    //             src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
    //             alt="Shoes"
    //           />
    //         </figure>
    //         <div className="card-body">
    //           <h2 className="card-title">Shoes!</h2>
    //           <p>If a dog chews shoes whose shoes does he choose?</p>
    //           <div className="card-actions justify-end">
    //             <button className="btn btn-primary">Buy Now</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </TabPanel>
    // </Tabs>
    <div className="tabs">
      <a className="tab tab-lg tab-lifted">Large</a>
      <a className="tab tab-lg tab-lifted ">Large</a>
      <a className="tab tab-lg tab-lifted">Large</a>
    </div>
  );
};

export default BannerTabs;
