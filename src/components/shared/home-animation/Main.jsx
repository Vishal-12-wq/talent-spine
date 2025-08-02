import React from "react";
import { motion } from "framer-motion";

const AnimatedBoxes = ({ currentImage, currentIndex }) => {
  const isSmallScreen = window.matchMedia("(max-width: 769px)").matches;
  const isMediumScreen = window.matchMedia("(min-width: 769px) and (max-width: 1025px)").matches; // New check for 1024px screens

  const positions = {
    small: [
      [
        { x: 1000, y: 10000 }, // Slide 1 positions
        { x: 100, y: -60 },
        { x: -230, y: 130 },
      ],
      [
        { x: 20, y: -120 }, // Slide 2 positions
        { x: 230, y: -60 },
        { x: 100, y: -260 },
      ],
      [
        { x: 100, y: -270 }, // Slide 3 positions
        { x: 20, y: -50 },
        { x: 250, y: -170 },
      ],
      [
        { x: 100, y: -270 }, // Slide 3 positions
        { x: 20, y: -50 },
        { x: 250, y: -170 },
      ],
      [
        { x: 30, y: -170 }, // Slide 5 positions
        { x: 180, y: -290 },
        { x: 190, y: -30 },
      ],
    ],
    large: [
      [
        { x: -120, y: -200 }, // Slide 1 positions
        { x: 100, y: -60 },
        { x: -230, y: 130 },
      ],
      [
        { x: -260, y: 20 }, // Slide 2 positions
        { x: 130, y: 120 },
        { x: -100, y: -300 },
      ],
      [
        { x: -140, y: -280 }, // Slide 3 positions
        { x: 110, y: -100 },
        { x: -230, y: 100 },
      ],
      [
        { x: -140, y: -240 }, // Slide 3 positions
        { x: 110, y: -80 },
        { x: -280, y: 150 },
      ],
      [
        { x: 35, y: -280 }, // Slide 5 positions
        { x: -220, y: -70 },
        { x: 80, y: 160 },
      ],
    ],
    medium: [ // New set for 1024px screens
      [
        { x: -100, y: -150 }, // Slide 1
        { x: 100, y: -80 },
        { x: -200, y: 120 },
      ],
      [
        { x: 540, y: -50 }, // Slide 2
        { x: 380, y: -320 },
        { x: 280, y: -130 },
      ],
      [
        { x: 350, y: -340 }, // Slide 3
        { x: 300, y: -80 },
        { x: 530, y: -220 },
      ],
      [
        { x: 350, y: -340 }, // Slide 3
        { x: 300, y: -80 },
        { x: 530, y: -220 },
      ],
      [
        { x: 470, y: -330 }, // Slide 5
        { x: 500, y: -60 },
        { x: 300, y: -210 },
      ],
    ],
  };

  const cardPositions = {
    small: [
      [
        { top: "5%", left: "10%" },
        { top: "5%", right: "5%" },
        { bottom: "5%", left: "5%" },
        { bottom: "5%", right: "5%" },
      ],
      [
        { top: "30%", left: "0%" },
        { top: "30%", right: "-8%" },
        { bottom: "25%", left: "-1%" },
        { right: "1%", bottom: '25%' },
      ],
      [
        { top: "28%", left: "-2%" },
        { top: "24%", right: "-3%" },
        { bottom: "30%", left: "0%" },
        { bottom: "28%", right: "0%" },
      ],
      [
        { top: "25%", left: "0%" },
        { top: "20%", right: "0%" },
        { bottom: "44%", left: "0%" },
        { bottom: "26%", right: "10%" },
      ],
      [
        { top: "26%", left: "0%" },
        { top: "25%", right: "-10%" },
        { bottom: "25%", left: "1%" },
        { bottom: "20%", right: "0%" },
      ],
    ],
    large: [
      [
        { top: "38%", left: "10%" },
        { top: "28%", right: "20%" },
        { bottom: "37%", left: "15%" },
        { bottom: "26%", right: "10%" },
      ],
      [
        { top: "37%", left: "15%" },
        { top: "34%", right: "16%" },
        { bottom: "10%", left: "13%" },
        { bottom: "10%", right: "8%" },
      ],
      [
        { top: "33%", left: "12%" },
        { top: "22%", right: "17%" },
        { bottom: "28%", left: "14%" },
        { bottom: "20%", right: "6%" },
      ],
      [
        { top: "36%", left: "10%" },
        { top: "24%", right: "20%" },
        { bottom: "37%", left: "15%" },
        { bottom: "20%", right: "10%" },
      ],
      [
        { top: "29%", left: "18%" },
        { top: "32%", right: "10%" },
        { bottom: "20%", left: "15%" },
        { bottom: "14%", right: "13%" },
      ],
    ],
    medium: [
      [
        { top: "40%", left: "15%" },
        { top: "28%", right: "10%" },
        { bottom: "25%", left: "10%" },
        { bottom: "20%", right: "10%" },
      ],
      [
        { top: "40%", left: "25%" },
        { top: "35%", right: "25%" },
        { bottom: "12%", left: "25%" },
        { bottom: "15%", right: "20%" },
      ],
      [
        { top: "35%", left: "22%" },
        { top: "20%", right: "25%" },
        { bottom: "25%", left: "25%" },
        { bottom: "20%", right: "18%" },
      ],
      [
        { top: "40%", left: "22%" },
        { top: "30%", right: "28%" },
        { bottom: "36%", left: "25%" },
        { bottom: "21%", right: "20%" },
      ],
      [
        { top: "26%", left: "24%" },
        { top: "40%", right: "20%" },
        { bottom: "18%", left: "26%" },
        { bottom: "15%", right: "20%" },
      ],
    ],
  };

  const arrayOfPosition = positions[isSmallScreen ? "small" : isMediumScreen ? "medium" : "large"];
  const arrayOfCards = cardPositions[isSmallScreen ? "small" : isMediumScreen ? "medium" : "large"];

  const boxPositions = arrayOfPosition[currentIndex % arrayOfPosition.length] || [];
  const smallCardPositions = arrayOfCards[currentIndex % arrayOfCards.length] || [];


  return (
    <div className="animated-boxes-container max-xl-25:!h-[400px] max-xl-25:w-full">
      <motion.div
        className="user-model h-full"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 0.4 }}
      >
        <img src={currentImage} alt="Dynamic" className="model-image image-change " />
      </motion.div>

      {/* Small Cards with Bounce Animation */}
      {smallCardPositions.map((pos, index) => (
        <motion.div
          key={`${index}-${currentIndex}`}
          className={`small-card card-${index + 1}`}
          style={{
            position: "absolute",
            ...pos,
            zIndex: 9999,
          }}
          initial={{
            opacity: 0, // Start fully transparent
            y: 20, // Start slightly below
          }}
          animate={{
            opacity: 1, // Fade in
            y: 0, // Move to final position
          }}
          transition={{
            duration: 0.6, // Duration for a smooth transition
            ease: "easeInOut", // Smooth easing
            delay: index * 0.2, // Add staggered delay for each card
          }}
        >
          {index === 0 && (
            <div className="bg-white font-medium max-sm:text-[10px] text-sm rounded-2xl z-[100000] p-3 shadow-2xl flex items-center gap-2">
              <img src="/assets/svg/carasol/yes (2).svg" alt="" className="h-5 w-5" />
              Interview in 24 Hours
            </div>
          )}
          {index === 1 && (
            <div className="bg-white rounded-2xl p-3 shadow-2xl flex items-center gap-2 z-[10000]">
              <img src="/assets/svg/carasol/yes (2).svg" alt="" className="h-5 w-5" />
              <div className="text-xs font-medium max-sm:text-[10px]">
                Trusted by
                <div className="text-sm text-secondarys1">Stakeholder & ratings</div>
              </div>
            </div>
          )}
          {index === 2 && (
            <div className="bg-white rounded-2xl p-3 shadow-2xl flex items-center gap-2 z-[1000000]">
              <img src="/assets/svg/carasol/yes (2).svg" alt="" className="h-5 w-5" />
              <div className="text-sm font-medium max-sm:text-[10px]">Pre-vetted talents</div>
            </div>
          )}
          {index === 3 && (
            <div className="bg-white border border-primary rounded-2xl p-2 shadow-2xl z-[100000] flex items-center gap-1 sm:gap-3">
              <div className="text-sm max-sm:text-[9px] font-medium max-w-[170px] max-sm:max-w-[100px]">
                <span className="font-bold">Tarun</span> helps people move abroad for education and work
              </div>
              <div className="bg-[#E6F3FC] p-3 flex items-center gap-2 rounded-md flex-row-reverse">
                <img src="/assets/svg/carasol/right-24.svg" alt="" className="h-5 w-5 max-sm:w-3 max-sm:h-3" />
                <div className="text-sm">1M+</div>
              </div>
            </div>
          )}
        </motion.div>
      ))}


      {/* Boxes */}
      {boxPositions?.map((pos, index) => (
        <motion.div
          key={index}
          className={`triangle-block block1  box-${index + 1}`}
          initial={{ x: 0, y: 0 }} // Start at the center
          animate={{ x: pos.x, y: pos.y }} // Move to the new position
          transition={{ duration: 0.8 }}
        />
      ))}
    </div>
  );
};

export default AnimatedBoxes;
