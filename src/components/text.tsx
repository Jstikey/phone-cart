import { useEffect, useRef } from "react";
import { useGlobalContext } from "../contextFolder/context";

declare global {
  interface Window {
    paypal: any;
  }
}

export const PayPal = () => {
  const paypal = useRef<HTMLDivElement>(null);
  const context = useGlobalContext();
  const { state } = context;
  const { cart } = state;

  useEffect(() => {
    if (!window.paypal) {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=AfK-8q-tgINPkT8uga00aEzMIrQUC0QPh674oC0jAxRGRbO6iS4jJg9wGhNJ0YFzIRAWbn9vsbZ3Z72S&currency=USD";
      script.async = true;
      script.onload = () => {
        if (window.paypal && paypal.current) {
          payPalButton();
        }
      };
      document.body.appendChild(script);
    } else if (window.paypal && paypal.current) {
      payPalButton();
    }
  }, [cart]);

  const payPalButton = () => {
    if (window.paypal && paypal.current) {
      window.paypal
        .Buttons({
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              intent: "CAPTURE",
              purchase_unit: cart.map((item) => ({
                description: item.title,
                amount: {
                  currency_code: "USD",
                  value: item.price,
                },
              })),
            });
          },
          onApprove: async (data: any, actions: any) => {
            try {
              const order = await actions.order.capture();
              console.log(order);
            } catch (error) {
              console.log(error);
            }
          },
          onError: (err: any) => {
            console.log(err);
          },
        })
        .render(paypal.current);
    }
  };

  return (
    <div className="paypalModal">
      <div className="paypalcontainer">
        <div ref={paypal}></div>
      </div>
    </div>
  );
};
