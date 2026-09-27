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


          {/* =========================
              RED LAMBORGHINI STYLE CAR
             ========================= */}

          {status === "delivery" && (
            <svg
              className="delivery-car"
              viewBox="0 0 320 150"
              xmlns="http://www.w3.org/2000/svg"
            >

              {/* CAR SHADOW */}

              <ellipse
                cx="160"
                cy="128"
                rx="125"
                ry="10"
                fill="rgba(0,0,0,0.7)"
              />


              {/* MAIN BODY */}

              <path
                d="
                  M25 105
                  L40 88
                  L78 80
                  L112 45
                  L175 35
                  L220 45
                  L255 72
                  L290 84
                  L300 104
                  L292 119
                  L25 119
                  Z
                "
                fill="#f7df08"
                stroke="#f1e20c"
                strokeWidth="4"
              />


              {/* ROOF */}

              <path
                d="
                  M82 79
                  L115 45
                  L174 37
                  L215 47
                  L248 73
                  L225 79
                  Z
                "
                fill="#171717"
                stroke="#ff506b"
                strokeWidth="3"
              />


              {/* WINDSHIELD */}

              <path
                d="
                  M119 48
                  L171 41
                  L163 73
                  L94 73
                  Z
                "
                fill="#071018"
                stroke="#555"
                strokeWidth="2"
              />


              {/* SIDE WINDOW */}

              <path
                d="
                  M176 42
                  L210 51
                  L238 72
                  L170 72
                  Z
                "
                fill="#071018"
                stroke="#555"
                strokeWidth="2"
              />


              {/* WINDOW HIGHLIGHT */}

              <path
                d="
                  M183 48
                  L207 55
                  L218 64
                "
                fill="none"
                stroke="#6c8795"
                strokeWidth="2"
                opacity="0.7"
              />


              {/* SIDE BODY LINE */}

              <path
                d="
                  M42 94
                  L273 91
                "
                fill="none"
                stroke="#ff7184"
                strokeWidth="3"
              />


              {/* DOOR */}

              <path
                d="
                  M166 76
                  L169 108
                  L224 106
                  L230 78
                "
                fill="none"
                stroke="#b80025"
                strokeWidth="2"
              />


              {/* DOOR HANDLE */}

              <rect
                x="190"
                y="82"
                width="19"
                height="3"
                rx="2"
                fill="#ff8796"
              />


              {/* SIDE AIR INTAKE */}

              <path
                d="
                  M218 88
                  L257 78
                  L247 102
                  L219 104
                  Z
                "
                fill="#080808"
              />


              {/* FRONT BUMPER */}

              <path
                d="
                  M273 92
                  L300 97
                  L292 116
                  L270 116
                  Z
                "
                fill="#0a0a0a"
              />


              {/* HEADLIGHT */}

              <path
                d="
                  M263 78
                  L285 85
                  L273 91
                  L253 87
                  Z
                "
                fill="#ffffff"
              />

              <path
                d="
                  M260 81
                  L281 86
                "
                stroke="#b9f5ff"
                strokeWidth="3"
              />


              {/* REAR LIGHT */}

              <path
                d="
                  M38 85
                  L59 81
                  L54 94
                  L34 96
                  Z
                "
                fill="#ff0033"
              />


              {/* WHEEL 1 */}

              <circle
                cx="82"
                cy="112"
                r="25"
                fill="#050505"
                stroke="#303030"
                strokeWidth="5"
              />

              <circle
                cx="82"
                cy="112"
                r="13"
                fill="#777"
              />

              <circle
                cx="82"
                cy="112"
                r="6"
                fill="#222"
              />


              {/* WHEEL 2 */}

              <circle
                cx="247"
                cy="112"
                r="25"
                fill="#050505"
                stroke="#303030"
                strokeWidth="5"
              />

              <circle
                cx="247"
                cy="112"
                r="13"
                fill="#777"
              />

              <circle
                cx="247"
                cy="112"
                r="6"
                fill="#222"
              />


              {/* LOWER BODY */}

              <path
                d="
                  M28 108
                  L300 108
                "
                stroke="#ff4560"
                strokeWidth="3"
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
