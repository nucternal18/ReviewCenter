import React from "react";

const Categories = () => {
  return (
    <div className=" w-full h-full flex flex-col flex-grow bg-gray-300">
      <div className="w-full bg-white h-auto sm:h-32 mb-8">
        <div className="container-md py-12">
          <h2 className="text-3xl font-bold">
            Compare the best wedding services companies on ReviewCenter
          </h2>
        </div>
      </div>
      <div className="container-md flex flex-col sm:flex-row mb-4">
        <div
          className="max-w-md bg-white rounded overflow-hidden shadow-md px-4 py-8 mr-4"
          style={{ height: "400px" }}
        >
          <h2 className="text-2xl font-bold mb-4">View Category</h2>
          <ul>
            <li className="mb-4">Beauty & Well-being</li>
            <li className="mb-4">Events & Entertainment</li>
            <li className="mb-4">Restaurants & Bars</li>
            <li className="mb-4">Shopping & Fashion</li>
            <li className="mb-4">Travel & Vacation</li>
          </ul>
        </div>
        <div
          className="max-w-2xl bg-white rounded overflow-hidden shadow-md px-2 py-4"
          style={{ width: "auto" }}
        >
          <div className="text-xl flex flex-row justify-between mb-4 ">
            <div className="w-2/5 p-2">
              <p>Beauty & Well-being</p>
            </div>
            <div className="flex w-4/5 flex-wrap text-base justify-between border-b">
              <p className="mb-2 w-3/5 p-2">Cosmetics & Makeup</p>
              <p className="mb-2 w-2/5 p-2">Personal Care</p>
              <p className="mb-2 w-2/5 p-2">Tattoos & Piercings</p>
              <p className="mb-2 w-2/5 p-2">Yoga & Meditation</p>
              <p className="mb-2 w-2/5 p-2">Hair Care & Styling</p>
              <p className="mb-2 w-2/5 p-2">Salons & Clinics</p>
              <p className="mb-2 w-2/5 p-2">Wellness & Spa</p>
            </div>
          </div>
          <div className="text-xl flex flex-row justify-between  mb-4">
            <div className="w-2/5 p-2">
              <p>Events & Entertainment</p>
            </div>
            <div className="flex w-4/5 flex-wrap text-base justify-between border-b">
              <p className="mb-2 w-3/5 p-2">Adult Entertainment</p>
              <p className="mb-2 w-2/5 p-2">Clubbing & Nightlife</p>
              <p className="mb-2 w-2/5 p-2">Gambling</p>
              <p className="mb-2 w-2/5 p-2">Wedding & Party</p>
              <p className="mb-2 w-2/5 p-2">Events & Venues</p>
            </div>
          </div>
          <div className="text-xl flex flex-row justify-between  mb-4">
            <div className="w-2/5 p-2">
              <p>Restaurants & Bars</p>
            </div>
            <div className="flex w-4/5 flex-wrap text-base justify-between border-b">
              <p className="mb-2 w-3/5 p-2">Bars & Cafes</p>
              <p className="mb-2 w-2/5 p-2">General Restaurants</p>
              <p className="mb-2 w-2/5 p-2">Middle Eastern Cuisine</p>
              <p className="mb-2 w-2/5 p-2">Southeast Asian Cuisine</p>
              <p className="mb-2 w-2/5 p-2">European Cuisine</p>
              <p className="mb-2 w-2/5 p-2">Mediterranean Cuisine</p>
            </div>
          </div>
          <div className="text-xl flex flex-row justify-between mb-4 ">
            <div className="w-2/5 p-2">
              <p>Shopping & Fashion</p>
            </div>
            <div className="flex w-4/5 flex-wrap text-base justify-between border-b">
              <p className="mb-2 w-3/5 p-2">Accessories</p>
              <p className="mb-2 w-2/5 p-2">Clothing & Underwear</p>
              <p className="mb-2 w-3/5 p-2">Clothing Rental & Repair</p>
              <p className="mb-2 w-2/5 p-2">Costume & Wedding</p>
              <p className="mb-2 w-2/5 p-2">Jewelry & Watches</p>
              <p className="mb-2 w-2/5 p-2">Malls & Marketplaces</p>
            </div>
          </div>
          <div className="text-xl flex flex-row justify-between mb-4 ">
            <div className="w-2/5 p-2">
              <p>Travel & Vacation</p>
            </div>
            <div className="flex w-4/5 flex-wrap text-base justify-between">
              <p className="mb-2 w-3/5 p-2">Accommodation & Lodging</p>
              <p className="mb-2 w-2/5 p-2">Airlines & Air Travel</p>
              <p className="mb-2 w-2/5 p-2">Travel Agencies</p>
              <p className="mb-2 w-2/5 p-2">Activities & Tours</p>
              <p className="mb-2 w-2/5 p-2">Hotels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
