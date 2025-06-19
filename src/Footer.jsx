import React from "react";

const Footer = () => {
  return (
    <footer className="w-full min-h-[50vh] bg-white text-gray-700 py-16 px-8 border-t flex flex-col justify-between">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 w-full">
        {/* OODI logo */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-green-500 text-white font-bold rounded px-2 py-1 text-lg">F</div>
            <span className="text-xl font-semibold">OODI</span>
          </div>
          <p className="text-sm leading-6">
            Savor the artistry where <br /> every dish is a culinary masterpiece
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="font-semibold mb-3">Useful links</h3>
          <ul className="space-y-2 text-sm">
            <li>About us</li>
            <li>Events</li>
            <li>Blogs</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Main Menu */}
        <div>
          <h3 className="font-semibold mb-3">Main Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Offers</li>
            <li>Menus</li>
            <li>Reservation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>example@email.com</li>
            <li>+64 958 248 966</li>
            <li>Social media</li>
          </ul>
        </div>
      </div>

      {/* Social icons va copy */}
      <div className="mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between max-w-screen-xl mx-auto w-full">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <img src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png" alt="facebook" className="bg-green-500 p-2 rounded-full w-9 h-9" />
          <img src="https://img.icons8.com/ios-filled/50/000000/instagram-new.png" alt="instagram" className="bg-gray-100 p-2 rounded-full w-9 h-9" />
          <img src="https://img.icons8.com/ios-filled/50/000000/twitter.png" alt="twitter" className="bg-green-100 p-2 rounded-full w-9 h-9" />
          <img src="https://img.icons8.com/ios-filled/50/000000/youtube-play.png" alt="youtube" className="bg-green-100 p-2 rounded-full w-9 h-9" />
        </div>

        <div className="text-sm text-gray-500 text-center">
          Copyright © 2023 Dscode | All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
