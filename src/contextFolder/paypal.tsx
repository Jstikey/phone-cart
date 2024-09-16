//AfK-8q-tgINPkT8uga00aEzMIrQUC0QPh674oC0jAxRGRbO6iS4jJg9wGhNJ0YFzIRAWbn9vsbZ3Z72S

import { useEffect, useRef } from "react";
import { useGlobalContext } from "../contextFolder/context";

declare global {
  interface Window {
    paypal: any;
  }
}

export const PaypalModal = () => {
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

// import { useEffect, useRef } from "react";

// declare global {
//   interface Window {
//     paypal: any;
//   }
// }

// export const PaypalModal = () => {
//   const paypal = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     // Dynamically load the PayPal script if it's not already loaded
//     if (!window.paypal) {
//       const script = document.createElement("script");
//       script.src =
//         "https://www.paypal.com/sdk/js?client-id=AfK-8q-tgINPkT8uga00aEzMIrQUC0QPh674oC0jAxRGRbO6iS4jJg9wGhNJ0YFzIRAWbn9vsbZ3Z72S&currency=USD";
//       script.async = true;
//       script.onload = () => {
//         if (paypal.current && window.paypal) {
//           window.paypal
//             .Buttons({
//               createOrder: (data: any, actions: any) => {
//                 return actions.order.create({
//                   intent: "CAPTURE",
//                   purchase_units: [
//                     {
//                       description: "Cool looking table",
//                       amount: {
//                         currency_code: "USD",
//                         value: "500.88", // Use a string for value
//                       },
//                     },
//                   ],
//                 });
//               },
//               onApprove: async (data: any, actions: any) => {
//                 try {
//                   const order = await actions.order.capture();
//                   console.log("Order captured:", order);
//                 } catch (error) {
//                   console.error("Error capturing order:", error);
//                 }
//               },
//               onError: (err: any) => {
//                 console.error("PayPal error:", err);
//               },
//             })
//             .render(paypal.current);
//         }
//       };
//       document.body.appendChild(script);
//     } else if (paypal.current && window.paypal) {
//       window.paypal
//         .Buttons({
//           createOrder: (data: any, actions: any) => {
//             return actions.order.create({
//               intent: "CAPTURE",
//               purchase_units: [
//                 {
//                   description: "Cool looking table",
//                   amount: {
//                     currency_code: "USD",
//                     value: "500.88", // Use a string for value
//                   },
//                 },
//               ],
//             });
//           },
//           onApprove: async (data: any, actions: any) => {
//             try {
//               const order = await actions.order.capture();
//               console.log("Order captured:", order);
//             } catch (error) {
//               console.error("Error capturing order:", error);
//             }
//           },
//           onError: (err: any) => {
//             console.error("PayPal error:", err);
//           },
//         })
//         .render(paypal.current);
//     }
//   }, []);

//   return (
//     <div className="paypalModal">
//       <div className="paypalcontainer">
//         <div ref={paypal}></div>
//       </div>
//     </div>
//   );
// };

// const sampleCartItems = [
//   { id: 1, description: "Cool looking table", amount: "250.00" },
//   { id: 2, description: "Awesome chair", amount: "150.00" },
//   // Add more items as needed
// ];

// export const PaypalModal = () => {
//   const paypal = useRef<HTMLDivElement>(null);
//   const [cartItems, setCartItems] = useState(sampleCartItems);

//   useEffect(() => {

//     if (!window.paypal) {
//       const script = document.createElement("script");
//       script.src =
//         "https://www.paypal.com/sdk/js?client-id=AfK-8q-tgINPkT8uga00aEzMIrQUC0QPh674oC0jAxRGRbO6iS4jJg9wGhNJ0YFzIRAWbn9vsbZ3Z72S&currency=USD";
//       script.async = true;
//       script.onload = () => {
//         if (paypal.current && window.paypal) {
//           renderPayPalButtons();
//         }
//       };
//       document.body.appendChild(script);
//     } else if (paypal.current && window.paypal) {
//       renderPayPalButtons();
//     }
//   }, [cartItems]); // Re-render buttons if cartItems change

//   const renderPayPalButtons = () => {
//     window.paypal
//       .Buttons({
//         createOrder: (data: any, actions: any) => {

//           return actions.order.create({
//             intent: "CAPTURE",
//             purchase_units: cartItems.map((item) => ({
//               description: item.description,
//               amount: {
//                 currency_code: "USD",
//                 value: item.amount,
//               },
//             })),
//           });
//         },
//         onApprove: async (data: any, actions: any) => {
//           try {
//             const order = await actions.order.capture();
//             console.log("Order captured:", order);
//             // Handle order success (e.g., show a success message)
//           } catch (error) {
//             console.error("Error capturing order:", error);
//             // Handle order error
//           }
//         },
//         onError: (err: any) => {
//           console.error("PayPal error:", err);
//         },
//       })
//       .render(paypal.current);
//   };

//   return (
//     <div className="paypalPodal">
//       <div ref={paypal}>PayPal Button</div>
//     </div>
//   );
// };
