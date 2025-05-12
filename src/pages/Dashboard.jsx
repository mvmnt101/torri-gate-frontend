import React from "react";
import { IoTrendingUp } from "react-icons/io5";
import { properties } from "../data";
import AdminPropertyCard from "../components/AdminPropertyCard";
import AdminPagination from "../components/AdminPagination";

const Dashboard = () => {
  return (
    <section className="max-w-[1157px]">
      <div className=" pt-4">
        <h1 className="w-full font-[500] font-[mona Sans] text-[22px] text-black capitalize mb-2">
          Dashboard
        </h1>
        <div className="flex items-center  gap-2 capitalize text-[14px]">
          <h4 className="text-[#666666]">dashboard</h4>
          <h3 className="text-[#666666]">.</h3>
          <h4 className="text-black ">overview</h4>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-3 mt-4">
        <div className="w-full lg:w-[568px] ">
          <h2 className="pl-3.5 mb-3 font-medium text-[16px] text-[#666]">
            Total Property
          </h2>
          <div className="w-full bg-white rounded-lg flex items-center h-[80px] pl-3.5">
            <h1 className="font-semibold text-2xl">08</h1>
          </div>
        </div>
        <div className="w-full lg:w-[568px]">
          <h2 className="pl-3.5 mb-3 font-medium text-[16px] text-[#666]">
            Profile View
          </h2>
          <div className="w-full bg-white rounded-lg flex items-center h-[80px] px-3.5 justify-between ">
            <h1 className="font-semibold text-2xl">14</h1>
            <div className="flex items-center gap-2">
              <p className="bg-[#EEFCEC] rounded-md text-[#24D50B] w-20 p-1 flex items-center gap-2">
                <IoTrendingUp color="#24D50B" />
                +30%
              </p>
              <p className="text-[#666666] text-[16px]">vs last month </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8 mb-4 ">
        <h1 className="text-[16px] text-[#0c0c0c] font-medium">
          Listed Properties
        </h1>
        <div className="flex items-center gap-2 text-[16px]">
          <h2 className="hidden md:block  text-[#666]">Status</h2>
          <form>
            <select className=" w-[124px] outline-0 ">
              <option value="all">All</option>
              <option value="rented">Rented</option>
              <option value="available">Available</option>
            </select>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {properties.slice(0, 5).map((property) => {
          return <AdminPropertyCard key={property._id} {...property} />;
        })}
      </div>
      <div>
        <AdminPagination />
      </div>
    </section>
  );
};

export default Dashboard;
