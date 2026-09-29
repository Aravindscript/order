import React, { useState } from "react";
import confetti from "canvas-confetti";
import "./style.css";

function App() {
  const [status, setStatus] = useState("idle");

  const placeOrder = () => {
    if (status !== "idle") return;

    setStatus("delivery");

    setTimeout(() => {
      setStatus("success");

      // Confetti
      confetti({
        particleCount: 150,
        spread: 90,
        startVelocity: 35,
        origin: {
          x: 0.5,
          y: 0.55,
        },
      });

      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 100,
          origin: {
            x: 0.2,
            y: 0.6,
          },
        });

        confetti({
          particleCount: 80,
          spread: 100,
          origin: {
            x: 0.8,
            y: 0.6,
          },
        });
      }, 250);
    }, 5200);
  };

  return (
    <div className="page">

      <div className="order-card">

        <button
          className={`order-button ${status}`}
          onClick={placeOrder}
        >

          {/* TEXT */}

          <span className="button-text">

            {status === "idle" && "Order Now"}

            {status === "delivery" && "Delivering..."}

            {status === "success" && "Order Placed"}

          </span>


        
        {/* DELIVERY TRUCK */}

{status === "delivery" && (
  <svg
    className="delivery-car"
    viewBox="0 0 360 150"
    xmlns="http://www.w3.org/2000/svg"
  >

    {/* SHADOW */}
    <ellipse
      cx="175"
      cy="132"
      rx="145"
      ry="9"
      fill="rgba(0,0,0,0.7)"
    />

    {/* TRUCK BODY */}
    <rect
      x="35"
      y="48"
      width="205"
      height="70"
      rx="5"
      fill="#f7df08"
      stroke="#f1e20c"
      strokeWidth="4"
    />

    {/* TRUCK CAB */}
    <path
      d="
        M240 65
        L285 65
        L325 88
        L335 118
        L240 118
        Z
      "
      fill="#f7df08"
      stroke="#f1e20c"
      strokeWidth="4"
    />

    {/* CARGO BOX */}
    <rect
      x="48"
      y="55"
      width="175"
      height="55"
      rx="3"
      fill="#ffffff"
      stroke="#d8d8d8"
      strokeWidth="2"
    />

    {/* CARGO BOX LINE */}
    <line
      x1="135"
      y1="55"
      x2="135"
      y2="110"
      stroke="#dddddd"
      strokeWidth="2"
    />

    {/* DELIVERY TEXT */}
    <text
      x="136"
      y="88"
      textAnchor="middle"
      fill="#ff1744"
      fontSize="15"
      fontWeight="bold"
      fontFamily="Arial"
    >
      DELIVERY
    </text>

    {/* CAB WINDOW */}
    <path
      d="
        M247 70
        L280 70
        L308 89
        L247 89
        Z
      "
      fill="#071018"
      stroke="#555"
      strokeWidth="2"
    />

    {/* WINDOW HIGHLIGHT */}
    <path
      d="
        M253 74
        L276 74
        L294 85
      "
      fill="none"
      stroke="#6c8795"
      strokeWidth="2"
      opacity="0.7"
    />

    {/* FRONT GRILL */}
    <path
      d="
        M319 91
        L335 96
        L331 113
        L315 113
        Z
      "
      fill="#111111"
    />

    {/* HEADLIGHT */}
    <path
      d="
        M310 87
        L327 91
        L319 98
        L304 95
        Z
      "
      fill="#ffffff"
    />

    {/* RED REAR LIGHT */}
    <rect
      x="32"
      y="88"
      width="8"
      height="14"
      rx="2"
      fill="#ff0033"
    />

    {/* SIDE BODY LINE */}
    <line
      x1="40"
      y1="112"
      x2="330"
      y2="112"
      stroke="#ff4560"
      strokeWidth="3"
    />

    {/* FRONT BUMPER */}
    <rect
      x="318"
      y="112"
      width="20"
      height="8"
      rx="2"
      fill="#111111"
    />

    {/* WHEEL 1 */}
    <circle
      cx="95"
      cy="118"
      r="24"
      fill="#050505"
      stroke="#303030"
      strokeWidth="5"
    />

    <circle
      cx="95"
      cy="118"
      r="12"
      fill="#777"
    />

    <circle
      cx="95"
      cy="118"
      r="5"
      fill="#222"
    />

    {/* WHEEL 2 */}
    <circle
      cx="275"
      cy="118"
      r="24"
      fill="#050505"
      stroke="#303030"
      strokeWidth="5"
    />

    <circle
      cx="275"
      cy="118"
      r="12"
      fill="#777"
    />

    <circle
      cx="275"
      cy="118"
      r="5"
      fill="#222"
    />

  </svg>
)}


          {/* SUCCESS ICON */}

          {status === "success" && (
            <svg
              className="success-icon"
              viewBox="0 0 24 24"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
              />

              <path d="M7 12l3 3 7-7" />
            </svg>
          )}

        </button>

      </div>

    </div>
  );
}

export default App;
