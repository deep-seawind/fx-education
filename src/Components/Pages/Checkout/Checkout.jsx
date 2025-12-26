import React from "react";
import CheckoutForm from "./CheckoutForm";
import Breadcrumbs from "../../common/Breadcrumbs";
import OrderSummary from "./OrderSummary";
import { isLoggedIn } from "../../../utils/auth";
import CheckoutLogin from "./CheckoutLogin";

const Checkout = () => {
  const loggedIn = isLoggedIn();
  return (
    <>
      <Breadcrumbs paths={["Home", "Forex Mastery", "Checkout"]} />
      <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-[#0e5da0]/10">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20">
          <div className="grid lg:grid-cols-12 grid-cols-1 gap-16 items-start">
            {/* LEFT SIDE: Payment & Billing (The Action) */}
            <div className="lg:col-span-7 space-y-10">
              {loggedIn ? <CheckoutForm /> : <CheckoutLogin />}
            </div>

            {/* RIGHT SIDE: Order Summary (The Insight) */}
            <aside className="lg:col-span-5 lg:sticky lg:top-30">
              <OrderSummary />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
