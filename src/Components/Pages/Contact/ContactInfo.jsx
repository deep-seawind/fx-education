import React from "react";
import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineGlobe,
  HiOutlineChatAlt2,
} from "react-icons/hi";
import { SiTelegram, SiWhatsapp } from "react-icons/si";
import { SiInstagram, SiYoutube, SiFacebook, SiX } from "react-icons/si";

const ContactInfo = () => {

const contactMethods = [
  {
    icon: <HiOutlineMail />,
    title: "Email Dispatch",
    detail: "support@academy.com",
    desc: "Response within 2 hours",
    color: "bg-blue-500",
    isFullWidth: false,
  },
  {
    icon: <HiOutlineChatAlt2 />,
    title: "Live Chat Desk",
    detail: "24/5 Trading Support",
    desc: "Instant help from our analysts",
    color: "bg-indigo-500",
    isFullWidth: false,
  },
  {
    icon: <SiWhatsapp />,
    title: "WhatsApp Direct",
    detail: "+91 98765 43210",
    desc: "For enrollment queries",
    color: "bg-emerald-500",
    isFullWidth: false,
  },
  {
    icon: <HiOutlineLocationMarker />,
    title: "Corporate Headquarters",
    detail: "Financial District, Mumbai, MH 400051",
    desc: "Visit our trading floor",
    color: "bg-[#0e5da0]",
    isFullWidth: true,
    isDark: true,
  },
];

  const socialLinks = [
    {
      icon: <SiInstagram />,
      color: "hover:text-[#E1306C]",
      bg: "hover:bg-[#E1306C]/10",
      border: "hover:border-[#E1306C]/30",
    },
    {
      icon: <SiYoutube />,
      color: "hover:text-[#FF0000]",
      bg: "hover:bg-[#FF0000]/10",
      border: "hover:border-[#FF0000]/30",
    },
    {
      icon: <SiFacebook />,
      color: "hover:text-[#1877F2]",
      bg: "hover:bg-[#1877F2]/10",
      border: "hover:border-[#1877F2]/30",
    },
    {
      icon: <SiX />,
      color: "hover:text-black",
      bg: "hover:bg-black/5",
      border: "hover:border-black/30",
    },
  ];

  return (
    <section className="pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-12 gap-12 items-start">
          {/* LEFT: Content & Visuals */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-semibold text-slate-900 leading-[1.1] tracking-tighter italic mb-8">
                Establish Connection.
              </h2>
              <p className="text-slate-500 text-lg leading-relaxed mb-12 max-w-md">
                Have questions about our institutional modules or funded account
                programs? Our team is active 24/5 during market hours.
              </p>

              <div className="flex gap-4">
                {socialLinks.map((item, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`
            w-12 h-12 flex items-center justify-center rounded-2xl border border-slate-200 
            text-slate-400 transition-all duration-300 
            ${item.color} ${item.bg} ${item.border}
          `}
                  >
                    <span className="text-xl">{item.icon}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Contact Hub Cards */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-8 bg-slate-200/50 rounded-[2.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(14,93,160,0.1)] hover:-translate-y-2 transition-all duration-500"
              >
                <div
                  className={`w-14 h-14 ${method.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-8 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  {method.icon}
                </div>
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-[0.2em] mb-2">
                  {method.title}
                </h4>
                <p className="text-xl font-semibold text-slate-900 mb-2">
                  {method.detail}
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {method.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
