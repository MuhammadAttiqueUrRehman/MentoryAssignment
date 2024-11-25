import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTable, FaMoneyBill } from "react-icons/fa";
import { FaTableCells } from "react-icons/fa6";
import { SlGraph } from "react-icons/sl";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <nav className="w-64 bg-white shadow-xl fixed md:relative top-16 left-0 flex-col min-h-screen py-4 px-6 z-10">
      <div className="flex-col min-h-full px-0 flex flex-wrap items-center justify-between w-full mx-auto overflow-y-auto">
        <div className="flex flex-col items-stretch opacity-100 relative mt-4 overflow-y-auto h-auto z-40 flex-1 rounded w-full">
          <div className="md:flex-col md:min-w-full flex flex-col list-none">
            <Link
              to="tasks"
              className="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              <FaHome />
              <h6 className="ml-3">Home</h6>
            </Link>
            <Link
              to="shared"
              className="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              <FaTable />
              <h6 className="ml-3">Shared with me</h6>
            </Link>
            <Link
              to="balance-sheet"
              className="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              <FaTableCells />
              <h6 className="ml-3">Balance Sheet</h6>
            </Link>
            <Link
              to="cashflow-statement"
              className="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              <FaMoneyBill />
              <h6 className="ml-3">Cashflow Statement</h6>
            </Link>
            <Link
              to="historical-dividend"
              className="flex md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline"
            >
              <SlGraph />
              <h6 className="ml-3">Historical Dividend</h6>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
