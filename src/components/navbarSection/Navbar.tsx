"use client";

import TopNavbar from "./TopNavbar";
import CenterNavbar from "./CenterNavbar";
import BottomNavbar from "./BottomNavbar";

export default function Navbar() {
  return (
    <header className="w-full">
      {/* Top info bar */}
      <TopNavbar />

      {/* Main navbar */}
      <CenterNavbar />

      {/* Sub-navbar (black bar) */}
      <BottomNavbar />
    </header>
  );
}
