import { useEffect, useRef } from "react";
 

const Simulator = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: containerRef.current.id,
        symbol: "FX:EURUSD",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "1",
        locale: "en",
        toolbar_bg: "#020617",
        enable_publishing: false,
        allow_symbol_change: true,
        hide_side_toolbar: false,
        width: "100%",
        height: "100%",
        backgroundColor: "#020617",
        gridColor: "rgba(30, 41, 59, 0.4)",
      });
    };

    containerRef.current.appendChild(script);
  }, []);

  return (
    <div className="group relative p-1 rounded-[2.5rem] bg-linear-to-b from-slate-800 to-slate-950 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden border border-white/5 lg:h-full h-80">
      {/* CHART CONTAINER */}
      <div className="relative h-full w-full rounded-[2.2rem] overflow-hidden">
        {/* Subtle Overlay Shadow to integrate header */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-linear-to-b from-slate-950/40 to-transparent z-10 pointer-events-none" />

        <div
          id="tradingview_chart"
          ref={containerRef}
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Simulator;
