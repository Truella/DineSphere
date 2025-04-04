import React from "react";
export default function Footer() {
  return (
    <footer className="w-full py-8 border-t">
      <div className="w-[90vw] md:w-[80vw] mx-auto  grid md:grid-cols-3 gap-6">
        {/* Logo & About */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">The DinePhere</h2>
          <p className="text-sm">
            Experience the finest meals crafted with fresh ingredients and love.
            Visit us today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Menu
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-2">
          <h3 className="text-lg font-medium">Contact Us</h3>
          <p className="text-sm">123 Food Street, City, Country</p>
          <p className="text-sm">Email: info@restaurant.com</p>
          <p className="text-sm">Phone: +123 456 7890</p>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-6 text-center text-sm border-t pt-2w">
        &copy; {new Date().getFullYear()} The DinePhere. All rights reserved.
      </div>
    </footer>
  );
}
