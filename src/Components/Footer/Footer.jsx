import React from "react";
// Professional Financial & Interface Icons from BoxIcons and Remix Icon sets
import {  
  BiMailSend,
  BiPhoneCall, 
  BiLogoInstagramAlt,
  BiChevronRight, 
  BiSend, 
} from "react-icons/bi";
import { FaFacebookF, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo/white-logo.png";
import { motion } from "framer-motion";
import LoaderImage from "../../assets/logo/loaderimage.webp"


const footerLinks = {
   "Quick Links": [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Courses", href: "/main-courses" }, 
    { name: "Contact Us", href: "/contact" },
  ],

  courses: [
    {
      name: "Global Financial Markets & Trading Foundation",
      href: "/course-details",
    },
    {
      name: "Quantitative Trading, AI & Algorithmic Models",
      href: "/course-details",
    },
    {
      name: "Fund Management, Portfolio Science & Risk Systems",
      href: "/course-details",
    },
    {
      name: "Financial Compliance, Ethics, AML & Institutional Processes",
      href: "/course-details",
    },
  ],

  resources: [
    { name: "Blog", href: "/blog" },
    { name: "FAQs", href: "/faq" }, 
  ],

  legal: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-condition" }, 
  ],
};


const Footer = () => {
  return (
    <footer
      id="contact"
      className="bg-slate-900 text-slate-300 pt-20 pb-5 overflow-hidden border-t border-slate-800"
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
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white">
                  Join the Elite 1%
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-semibold text-white tracking-tighter">
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
              <div className="relative flex-1 sm:w-90">
                <input
                  type="email"
                  placeholder="Market Newsletter"
                  className="w-full px-5 py-4 bg-slate-900/50 border border-slate-700 rounded-xl focus:outline-none focus:border-indigo-400 transition-all text-sm"
                />
                <button className="absolute right-2 top-2 p-2.5 bg-primary-color rounded-lg hover:text-white transition-colors cursor-pointer">
                  <BiSend />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* --- 02. NAVIGATION ARCHITECTURE --- */}
        <div className="grid lg:grid-cols-5 gap-12 pb-16">
          {/* Brand & Corporate ID */}
          <div className="lg:col-span-1 space-y-8">
            <div className=" bg-white px-2 rounded-md table">
              <img src={Logo} alt="" className="lg:w-50 w-40 p-2 " />
            </div>
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-color transition-all">
                  <BiMailSend className="text-xl group-hover:text-white" />
                </div>

                <a
                  href="mailto:info@finansham.com"
                  className="text-sm font-semibold hover:text-color transition-colors"
                >
                  info@Finansham.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center group-hover:bg-color transition-all">
                  <BiPhoneCall className="text-xl group-hover:text-white" />
                </div>

                <a
                  href="tel:+911234567890"
                  className="text-sm font-semibold hover:text-color transition-colors"
                >
                  +91 123 456 7890
                </a>
              </div>

            </div>

          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {Object.entries(footerLinks).map(([title, links, ],index) => (
              <div key={index}>
                <h4 className=" font-semibold text-blue-400 capitalize mb-8">
                  {title}
                </h4>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.href}
                        className="text-sm  hover:text-white flex items-center group transition-colors"
                      >
                        <BiChevronRight className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-indigo-400" />
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- 03. COMPLIANCE & SOCIAL BAR --- */}
        <div className="pt-5 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-8">

        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          {/* Copyright */}
          <p className="text-slate-200 text-xs sm:text-sm">
            © {new Date().getFullYear()} Finansham Education Private Limited. All rights reserved.
          </p>

          {/* Developer Credit */}
          <p className="text-slate-400 text-xs sm:text-sm flex flex-wrap items-center justify-center md:justify-start gap-2">
            
            <span>Designed & Developed by</span>

            <a
              href="https://seawindsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:text-color transition-colors"
            >
              Seawind Solution Pvt. Ltd.
            </a>

            <motion.img
              src={LoaderImage}
              alt="Logo"
              className="w-4 h-4 sm:w-5 sm:h-5"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
            />

          </p>

        </div> 

          {/* Social Cluster */}
          <div className="flex items-center gap-3">
            {[
              { icon: FaXTwitter, label: "Twitter", links: "https://x.com/Finansham" },
              {
                icon: FaFacebookF,
                label: "Facebook",
                links: "https://www.facebook.com/Finansham",
              },
              {
                icon: FaLinkedin,
                label: "Linkedin",
                links: "https://www.linkedin.com/company/Finansham/",
              },
              {
                icon: BiLogoInstagramAlt,
                label: "Instagram",
                links: "https://www.instagram.com/Finansham/"
              },
            ].map((social) => (
              <Link
                key={social.label}
                to={social.links}
                target="_blank"
                className="w-11 h-11 rounded-xl bg-primary-color border border-slate-700 flex items-center justify-center text-xl text-white  hover:bg-white hover:text-slate-900 hover:-translate-y-1 transition-all duration-300"
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
