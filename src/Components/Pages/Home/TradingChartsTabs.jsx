import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiApple, SiBitcoin, SiGoogle, SiTesla } from "react-icons/si";
import { FaExchangeAlt } from "react-icons/fa";

const charts = [
  { symbol: "NASDAQ:AAPL", title: "Apple", icon: <SiApple />, color: "#555555" }, 
  { symbol: "FX:EURUSD", title: "EUR/USD", icon: <FaExchangeAlt />, color: "#2e7d32" },
  { symbol: "BITSTAMP:BTCUSD", title: "Bitcoin", icon: <SiBitcoin />, color: "#f7931a" },
  { symbol: "NASDAQ:GOOGL", title: "Google", icon: <SiGoogle />, color: "#4285f4" },
  { symbol: "NASDAQ:TSLA", title: "Tesla", icon: <SiTesla />, color: "#e81123" },
];

const TradingChartsTabs = () => {
  const [activeTab, setActiveTab] = useState(charts[0].symbol);

  return (
    <div className="min-h-screen  ">
      <div className=" mx-auto">
        {/* Header Section */}
        <div className=" mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
              Market Intelligence
            </h2>
            <p className="text-slate-500 mt-1 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Real-time asset tracking
            </p>
          </div>

          {/* Creative Segmented Control Tabs */}
          <div className="relative flex bg-white p-1.5 mt-5 rounded-2xl shadow-sm border border-slate-200 overflow-x-auto no-scrollbar">
            {charts.map((chart) => {
              const isActive = activeTab === chart.symbol;
              return (
                <button
                  key={chart.symbol}
                  onClick={() => setActiveTab(chart.symbol)}
                  className={`relative px-5 py-2.5 rounded-xl w-full text-sm font-semibold transition-all duration-300 whitespace-nowrap z-10 ${
                    isActive ? "text-white" : "text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-color rounded-xl shadow-md shadow-blue-200"
                      transition={{ type: "spring", duration: 0.5 }}
                    />
                  )}
                  <span className="relative flex items-center justify-center gap-2">
                    <span>{chart.icon}</span>
                    {chart.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Chart Display Area */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative bg-white p-2 rounded-4xl shadow-2xl shadow-blue-100/50 border border-white"
        >
   

          <div className="rounded-3xl overflow-hidden border border-slate-100">
            {charts.map(
              (chart) =>
                chart.symbol === activeTab && (
                  <iframe
                    key={chart.symbol}
                    title={chart.title}
                    src={`https://s.tradingview.com/widgetembed/?symbol=${
                      chart.symbol
                    }&interval=60&theme=light&hidesidetoolbar=1&hideideas=1&style=1&timezone=Etc%2FUTC`}
                    className="w-full h-125 md:h-150"
                    frameBorder="0"
                    scrolling="no"
                  />
                )
            )}
          </div>
        </motion.div>

        {/* Footer Info */}
        <p className="text-center text-slate-400 text-sm mt-6 uppercase tracking-widest font-medium">
          Powered by TradingView API
        </p>
      </div>
    </div>
  );
};

export default TradingChartsTabs;