"use client";
import React from "react";

export default function Contacts() {
  const contactList = [
    { id: 1, name: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { id: 2, name: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    { id: 3, name: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/65.jpg" },
    { id: 4, name: "Koray Okumus", avatar: "https://randomuser.me/api/portraits/men/45.jpg" },
    { id: 5, name: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/22.jpg" },
    { id: 6, name: "Melody Macy", avatar: "https://randomuser.me/api/portraits/women/79.jpg" },
  ];

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between px-4 pb-2">
        <h2 className="text-md font-semibold text-gray-900">Contacts</h2>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-2 space-y-3 thin-scrollbar">
        {contactList.map((contact) => (
          <button
            key={contact.id}
            className="w-full group flex items-center gap-3 p-2  cursor-pointer text-left"
          >
            {/* Avatar */}
            <div className="w-7 h-7 rounded-full overflow-hidden border border-gray-300 shadow-sm">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="
                  w-full h-full object-cover 
                  transition-transform duration-300 ease-out 
                  group-hover:scale-110
                "
                loading="lazy"
              />
            </div>

            {/* Name */}
            <span className="text-sm font-medium text-gray-900">
              {contact.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
