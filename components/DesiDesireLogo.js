export default function DesiDesireLogo(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width || "200"}
            height={props.height || "200"}
            viewBox="0 0 200 200"
            {...props}
        >
            {/* Background Circle */}
            <circle
                cx="100"
                cy="100"
                r="95"
                fill="#fff4e6"
                stroke="#d4a373"
                strokeWidth="10"
            />

            {/* Sari Pallu - Flowing Fabric */}
            <path
                d="M50,50 
                   Q80,30 130,60 
                   Q150,80 130,150 
                   Q90,180 70,130 
                   Z"
                fill="#ff4081"
                stroke="#d81b60"
                strokeWidth="2"
            />

            {/* Sari Pleats */}
            <path
                d="M70,120 
                   L90,170 
                   L110,170 
                   L130,120 
                   Q100,100 70,120"
                fill="#ff80ab"
                stroke="#d81b60"
                strokeWidth="2"
            />

            {/* Border Decoration */}
            <line
                x1="60"
                y1="55"
                x2="130"
                y2="85"
                stroke="#ffd700"
                strokeWidth="3"
            />
            <line
                x1="70"
                y1="125"
                x2="120"
                y2="125"
                stroke="#ffd700"
                strokeWidth="2"
            />

            {/* Embellishment Dots */}
            <circle cx="80" cy="80" r="2" fill="#ffd700" />
            <circle cx="90" cy="90" r="2" fill="#ffd700" />
            <circle cx="100" cy="100" r="2" fill="#ffd700" />
            <circle cx="110" cy="110" r="2" fill="#ffd700" />

            {/* Text */}
            <text
                x="100"
                y="190"
                textAnchor="middle"
                fill="#3e2723"
                fontSize="18"
                fontFamily="Georgia, serif"
            >
                DesiDesire
            </text>
        </svg>
    );
}
