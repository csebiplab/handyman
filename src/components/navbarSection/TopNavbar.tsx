"use client";

import Link from "next/link";
import Image from "next/image";

// --- Icon Data ---
const icons = [
  {
    src: "/assets/navbarIconFacebook.png",
    alt: "Facebook",
    link: "https://www.facebook.com/share/1CURMHqadu/?mibextid=wwXIfr",
  },
  {
    src: "/assets/navbarIconHomestars.png",
    alt: "Homestars",
    link: "https://www.homestars.com/profile/torontohandymans",
  },
  {
    src: "/assets/navbarIconMap.png",
    alt: "Map",
    link: "https://maps.app.goo.gl/1vziReSzQt4oNK5p8?g_st=ipc",
  },
];

export default function TopNavbar() {
  return (
    <div className="bg-white border-b text-sm text-gray-900 flex items-center justify-between p-x-192 py-2">
      {/* Left Section */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <span className="text-red-600 text-lg">🍁</span>
        <span className="font-semibold whitespace-nowrap">
          Professional Handyman Services in Toronto
        </span>
      </div>

      {/* Center Navigation */}
      <nav className="hidden lg:flex flex-grow justify-end md:gap-5 lg:gap-16 3xl:gap-20 text-gray-800 font-medium mr-8 relative">
        <Link href="/aboutUs" className="hover:text-yellow-600 transition">
          About
        </Link>
        <Link href="/services" className="hover:text-yellow-600 transition">
          Services
        </Link>

        <Link href="/blogs" className="hover:text-yellow-600 transition">
          Blogs
        </Link>
        <Link href="/gallery" className="hover:text-yellow-600 transition">
          Gallery
        </Link>
        <Link href="/projects" className="hover:text-yellow-600 transition">
          Projects
        </Link>
        <Link href="/contactUs" className="hover:text-yellow-600 transition">
          Contact
        </Link>
      </nav>

      {/* Right Icons (Dynamic) */}
      <div className="hidden md:flex items-center gap-4">
        <div className="h-6 w-px bg-gray-300" />
        {icons.map((icon, index) => (
          <Link
            key={index}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <Image
              src={icon.src}
              alt={icon.alt}
              width={27}
              height={27}
              className="object-contain"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
