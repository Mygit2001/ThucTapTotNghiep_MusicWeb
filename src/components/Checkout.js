import React, { useState } from "react";
import { toast } from "react-toastify";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {LoadingListSong} from './'
import { NotificateSuccess} from './'
const Checkout = () => {
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
  const [currency, setCurrency] = useState(options.currency);

  const onCurrencyChange = ({ target: { value } }) => {
    setCurrency(value);
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: value,
      },
    });
  };

  const onCreateOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            name : "Gói VIP 1",
            value: "15",
          },
        },
      ],
    });
  };

  const onApproveOrder = (data, actions) => {
    return actions.order.capture().then((details) => {
      const name = details.payer.name.given_name;
      // console.log(name);
      //  <NotificateSuccess />
      toast.success("Bạn đã thanh toán thành công !");
    });
  };

  return (
    <div className="checkout">
      {isPending ? (
        <div className="absolute top-0 bottom-0 right-0 left-0 z-20 bg-transparent flex items-center justify-center">
        <LoadingListSong color = 'white'/>
      </div>
      ) : (
        <div className="flex items-center justify-around pt-16">
          <div className="px-2  flex flex-col items-center justify-center w-[290px] h-[420px] border border-orange-300 bg-purple-400 text-center rounded-[50px]">
            <div className="mb-4">
              <h1 className="text-[45px] font-bold text-amber-800">
                Gói VIP 1
              </h1>
              <div className="flex justify-between">
                <h1 className="text-[40px]  font-semibold">{`15 ${currency}`}</h1>
                <span className="text-amber-700 font-semibold">6 tháng</span>
              </div>
              <select className="bg-purple-300 rounded-md text-[12px] py-1 flex" value={currency} onChange={onCurrencyChange}>
                <option value="USD">💵 USD</option>
                <option value="EUR">💶 Euro</option>
              </select>
            </div>
            <button className="text-[#003087] w-[200px] py-[5px] rounded-[4px] px-3 bg-[#ffc439] mb-3 font-semibold hover:opacity-90">
              Mua gói
            </button>

            <PayPalButtons
              className="w-[200px]"
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          </div>
          <div className="px-2  flex flex-col items-center justify-center w-[290px] h-[420px] border border-orange-300 bg-purple-400 text-center rounded-[50px]">
            <div className="mb-4">
              <h1 className="text-[45px] font-bold text-amber-800">
                Gói VIP 2
              </h1>
              <div className="flex justify-between">
                <h1 className="text-[40px]  font-semibold">{`38 ${currency}`}</h1>
                <span className="text-amber-700 font-semibold">12 tháng</span>
              </div>
              <select className="bg-purple-300 rounded-md text-[12px] py-1 flex" value={currency} onChange={onCurrencyChange}>
                <option value="USD">💵 USD</option>
                <option value="EUR">💶 Euro</option>
              </select>
            </div>
            <button className="text-[#003087] w-[200px] py-[5px] rounded-[4px] px-3 bg-[#ffc439] mb-3 font-semibold hover:opacity-90">
              Mua gói
            </button>

            <PayPalButtons
              className="w-[200px]"
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          </div>
          <div className="px-2  flex flex-col items-center justify-center w-[290px] h-[420px] border border-orange-300 bg-purple-400 text-center rounded-[50px]">
            <div className="mb-4">
              <h1 className="text-[45px] font-bold text-amber-800">
                Gói VIP 3
              </h1>
              <div className="flex justify-between">
                <h1 className="text-[40px]  font-semibold">{`56 ${currency}`}</h1>
                <span className="text-amber-700 font-semibold">24 tháng</span>
              </div>
              <select className="bg-purple-300 rounded-md text-[12px] py-1 flex" value={currency} onChange={onCurrencyChange}>
                <option value="USD">💵 USD</option>
                <option value="EUR">💶 Euro</option>
              </select>
            </div>
            <button className="text-[#003087] w-[200px] py-[5px] rounded-[4px] px-3 bg-[#ffc439] mb-3 font-semibold hover:opacity-90">
              Mua gói
            </button>

            <PayPalButtons
              className="w-[200px]"
              style={{ layout: "vertical" }}
              createOrder={(data, actions) => onCreateOrder(data, actions)}
              onApprove={(data, actions) => onApproveOrder(data, actions)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
