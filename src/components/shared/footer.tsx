import {
  Facebook,
  Globe,
  Headphones,
  Instagram,
  Navigation2,
  Youtube,
} from "lucide-react";
import Container from "./Container";


export default function Footer() {
  return (
    <div className="bg-[#1A1A1A]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-4 py-26 px-10 text-white">
          <div className="">
            <div>
              <h1 className="text-4xl font-bold">Web Logo</h1>
            </div>
            {/* Social Media Links */}
            <div className="flex gap-4 mt-4">
              <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer text-gray-500 hover:text-blue-600">
                <Facebook />
              </div>
              <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer text-gray-500 hover:text-pink-500">
                <Instagram />
              </div>
              <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer text-gray-500 hover:text-green-500">
                <Globe />
              </div>
              <div className="transition-transform duration-300 transform hover:scale-110 cursor-pointer text-gray-500 hover:text-red-600">
                <Youtube />
             </div>
          </div>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-xl font-bold mb-4">Support</h1>
              <ul className="space-y-2 *:leading-[1.5] *:font-normal *:flex *:items-center *:cursor-pointer">
                <li className="inline-block">
                  <span className="ml-2 group inline-block transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">How it works</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Trust & Safety</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Help Centre</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <div className="">
              <h1 className="text-xl font-bold mb-4">Discover</h1>
              <ul className="space-y-2 *:leading-[1.5] *:font-normal *:flex *:items-center *:cursor-pointer">
                <li className="inline-block">
                  <span className="ml-2 group inline-block transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Guides</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Stories</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">News</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
              <div className="">
              <h1 className="text-xl font-bold mb-4">Resources</h1>
              <ul className="space-y-2 *:leading-[1.5] *:font-normal *:flex *:items-center *:cursor-pointer">
                <li className="inline-block">
                  <span className="ml-2 group inline-block transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">TalentDesk</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Business Cost Calculator</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Startup Cities</span>
                </li>
                <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Freelance Services</span>
                </li>
                 <li className="inline-block">
                  <span className="ml-2 group cursor-pointer flex items-center transition-all duration-200 hover:pl-2 hover:text-project-textPrimary hover:underline">Freelance Skills</span>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
      </Container>
      <hr />
      <Container>
        <div className="md:flex md:justify-between md:items-center text-center text-white py-4">
          <h1>
            <span className="font-bold">© 2025 Rubix.</span> All rights reserved
          </h1>
          {/* Socail Media Links */}
          <div>
            <p>Terms of Service | Privacy Policy</p>
          </div>
        </div>
      </Container>
    </div>
  );
}