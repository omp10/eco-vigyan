"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import CategoryFilter from "@/components/CategoryFilter";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/components/Map"), { ssr: false });

export default function MapPage() {
  const [data, setData] = useState([]);
  const [mode, setMode] = useState("category");
  const [filters, setFilters] = useState({});
  const [selectedMushroom, setSelectedMushroom] = useState(null); // New State for selection
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    fetch("/api/mushrooms")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        initializeFilters(d, "category");
      });
  }, []);

  const initializeFilters = (dataset, filterMode) => {
    const f = {};
    if (filterMode === "category") {
      dataset.forEach((item) => (f[item.category] = true));
    } else {
      dataset.forEach((item) => (f[item.use] = true));
    }
    setFilters(f);
  };

  const toggleFilter = (key) => {
    setFilters((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    initializeFilters(data, newMode);
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-gray-900">
      <Navbar />

      {/* MAIN CONTENT CONTAINER - FLEX ROW */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* --- LEFT SIDEBAR (Filters, Toggle, Info) --- */}
        <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-800 border-r border-gray-700 flex flex-col overflow-y-auto z-20 shadow-xl">
          <div className="p-6 space-y-6">
            {/* 1. SELECTION DETAILS PANEL */}
            {/* 1. SELECTION DETAILS PANEL */}
            <div className="bg-gray-700/50 rounded-xl p-4 border border-gray-600 min-h-[150px]">
              <h2 className="text-lg font-bold text-green-400 mb-2">
                Selected Mushroom Info
              </h2>

              {selectedMushroom ? (
                <div className="space-y-3 text-gray-200 animate-in fade-in slide-in-from-left-4 duration-300">
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    {selectedMushroom.name}
                  </h3>

                  {/* Grid for Category & Use */}
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="bg-gray-800/80 p-2 rounded-lg border border-gray-700">
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider font-bold">
                        Category
                      </span>
                      <span className="capitalize">
                        {selectedMushroom.category}
                      </span>
                    </div>
                    <div className="bg-gray-800/80 p-2 rounded-lg border border-gray-700">
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider font-bold">
                        Use
                      </span>
                      <span className="capitalize">{selectedMushroom.use}</span>
                    </div>
                  </div>

                  {/* Coordinates Section (NEW) */}
                  <div className="bg-gray-900/40 p-3 rounded-lg border border-gray-700/50 flex justify-between items-center">
                    <div>
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider font-bold">
                        Latitude
                      </span>
                      <span className="font-mono text-green-300 text-sm">
                        {selectedMushroom.latitude}
                      </span>
                    </div>
                    <div className="h-8 w-px bg-gray-700"></div>{" "}
                    {/* Vertical Divider */}
                    <div className="text-right">
                      <span className="text-gray-500 block text-[10px] uppercase tracking-wider font-bold">
                        Longitude
                      </span>
                      <span className="font-mono text-green-300 text-sm">
                        {selectedMushroom.longitude}
                      </span>
                    </div>
                  </div>

                  {/* Contributor */}
                  <p className="text-xs text-gray-400 pt-1 flex items-center gap-1">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      ></path>
                    </svg>
                    Contributor:{" "}
                    <span className="text-gray-300">
                      {selectedMushroom.contributor}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="h-32 flex flex-col items-center justify-center text-gray-500 text-sm italic border-2 border-dashed border-gray-700 rounded-lg">
                  <svg
                    className="w-6 h-6 mb-2 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                  <p>Select a location on the map</p>
                </div>
              )}
            </div>

            <hr className="border-gray-700" />

            {/* 2. TOGGLE SWITCH (Moved from fixed position) */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-semibold text-gray-300">
                Filter Mode:
              </p>
              <div className="relative flex p-1 bg-gray-900 rounded-full w-full shadow-inner">
                <div
                  className={`absolute top-1 bottom-1 w-1/2 bg-green-700 rounded-full transition-transform duration-300 ease-in-out ${
                    mode === "category" ? "translate-x-0" : "translate-x-full"
                  }`}
                ></div>
                <button
                  className={`w-1/2 py-2 text-xs z-10 transition-colors duration-300 ${
                    mode === "category"
                      ? "text-white font-bold"
                      : "text-gray-400"
                  }`}
                  onClick={() => switchMode("category")}
                >
                  Category
                </button>
                <button
                  className={`w-1/2 py-2 text-xs z-10 transition-colors duration-300 ${
                    mode === "use" ? "text-white font-bold" : "text-gray-400"
                  }`}
                  onClick={() => switchMode("use")}
                >
                  Use
                </button>
              </div>
            </div>

            {/* 3. CHECKBOXES */}
            <div>
              <p className="text-sm font-semibold text-gray-300 mb-2">
                Active Filters:
              </p>
              {/* Remove the bg-gray-900 and border classes from this div below */}
              <div className="">
                <CategoryFilter
                  categories={Object.keys(filters)}
                  filters={filters}
                  toggle={toggleFilter}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE (Map) --- */}
        <div className="flex-1 relative h-full bg-gray-900">
          {isMounted ? (
            <Map
              data={data}
              filters={filters}
              mode={mode}
              onMarkerSelect={setSelectedMushroom} // Pass handler
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white">
              Loading Map...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
