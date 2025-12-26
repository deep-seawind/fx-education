import React from "react";
// Professional Financial & Interface Icons from BoxIcons and Remix Icon sets
import {
  BiTrendingUp,
  BiMailSend,
  BiPhoneCall, 
  BiLogoYoutube,
  BiLogoInstagramAlt,
  BiChevronRight,
  BiShieldQuarter,
  BiSend,
  BiGlobe,
} from "react-icons/bi";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/white-logo.jpg";

const footerLinks = {
  company: [
    { name: "About NIFESD", href: "#" },
    { name: "Our Team", href: "#" },
    { name: "Careers", href: "#careers" },
    { name: "Press Kit", href: "#" },
  ],
  programs: [
    { name: "Global Markets", href: "#courses" },
    { name: "Quant Trading", href: "#courses" },
    { name: "Fund Management", href: "#courses" },
    { name: "Compliance", href: "#courses" },
  ],
  resources: [
    { name: "Institutional Blog", href: "#" },
    { name: "Live Webinars", href: "#" },
    { name: "Case Studies", href: "#" },
    { name: "FAQ", href: "#" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-slate-300 pt-20 pb-10 overflow-hidden border-t border-slate-800"
    >
      <div className="container mx-auto px-6">
        {/* --- 01. THE CALL-TO-ACTION BRIDGE --- */}
        <div className="relative mb-20">
          <div className="bg-slate-800/50 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-slate-700/50 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
            {/* Interior Glow Effect */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative z-10 text-center lg:text-left space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-2">
                <RiVerifiedBadgeFill className="text-color text-xl" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-color">
                  Join the Elite 1%
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white tracking-tighter">
                Ready to Trade{" "}
                <span className="italic font-serif font-normal">
                  Institutional?
                </span>
              </h3>
              <p className="text-slate-200 font-medium  ">
                Master the markets with the world's most rigorous certification.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              <button className="px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-color hover:text-white transition-all duration-300 active:scale-95 shadow-lg">
                Begin Application
              </button>
              <div className="relative flex-1 sm:w-64">
                <input
                  type="email"
                  placeholder="Market Newsletter"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-400 transition-all text-sm"
                />
                <button className="absolute right-2 top-2 p-2 bg-slate-800 rounded-lg hover:text-white transition-colors">
                  <BiSend />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- 02. NAVIGATION ARCHITECTURE --- */}
        <div className="grid lg:grid-cols-12 gap-12 pb-16">
          {/* Brand & Corporate ID */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-3">
               <img src={Logo} alt="" className="w-28 bg-white p-2 rounded-md"/>
            </div>
 
            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-color transition-all">
                  <BiMailSend className="text-xl group-hover:text-white" />
                </div>
                <span className="text-sm font-bold">admissions@nifesd.com</span>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-color transition-all">
                  <BiPhoneCall className="text-xl group-hover:text-white" />
                </div>
                <span className="text-sm font-bold">+91 123 456 7890</span>
              </div>
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className=" font-bold text-blue-400 capitalize tracking-[0.2em] mb-8">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-sm font-semibold hover:text-white flex items-center group transition-colors"
                      >
                        <BiChevronRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-indigo-400" />
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- 03. COMPLIANCE & SOCIAL BAR --- */}
        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-[11px] font-bold text-slate-200 uppercase tracking-widest">
              © {new Date().getFullYear()} NIFESD Institutional ecosystem
            </p>
            <div className="flex items-center gap-4 bg-slate-800/50 px-4 py-2 rounded-full border border-slate-700">
              <div className="flex items-center gap-2">
                <BiShieldQuarter className="text-emerald-500" />
                <span className="text-[9px] font-black text-slate-400 uppercase">
                  ISO 27001
                </span>
              </div>
              <div className="w-1px h-3 bg-slate-700" />
              <div className="flex items-center gap-2">
                <BiGlobe className="text-blue-400" />
                <span className="text-[9px] font-black text-slate-400 uppercase">
                  Global Access
                </span>
              </div>
            </div>
          </div>

          {/* Social Cluster */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaXTwitter, label: "Twitter", links: "https://x.com/" },
              {
                icon: FaFacebookF,
                label: "Facebook",
                links: "https://www.facebook.com/",
              },
              {
                icon: BiLogoYoutube,
                label: "YouTube",
                links: "https://www.youtube.com/",
              },
              {
                icon: BiLogoInstagramAlt,
                label: "Instagram",
                links: "https://www.instagram.com/",
              },
            ].map((social) => (
              <Link
                key={social.label}
                to={social.links}
                target="_blank"
                className="w-11 h-11 rounded-xl bg-color border border-slate-700 flex items-center justify-center text-xl text-white  hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
