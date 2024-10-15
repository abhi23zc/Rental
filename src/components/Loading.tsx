import { motion } from 'framer-motion';

const Loading = () => {
    
  const spinTransition  = {
    loop: Infinity,
    ease: "linear",
    duration: 1.5,
  };

  const scaleTransition :any = {
    loop: Infinity,
    ease: "easeInOut",
    duration: 0.75,
    repeat: Infinity,
    repeatType: "loop",
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="relative">
        {/* Outer pulsating circle */}
        <motion.div
          className="absolute w-32 h-32 border-4 border-blue-500 rounded-full opacity-80"
          animate={{ scale: [1, 1.2, 1] }}
          transition={scaleTransition}
        />

        {/* Inner rotating circles */}
        <motion.div
          className="w-24 h-24 border-4 border-t-4 border-t-blue-500 border-gray-300 rounded-full"
          animate={{ rotate: 360 }}
          transition={spinTransition}
        />
        <motion.div
          className="w-16 h-16 border-4 border-t-4 border-t-green-400 border-gray-300 rounded-full absolute top-1/4 left-1/4"
          animate={{ rotate: -360 }}
          transition={spinTransition}
        />

        {/* Pulsating center dot */}
        <motion.div
          className="w-8 h-8 bg-yellow-400 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-xl"
          animate={{ scale: [1, 1.5, 1] }}
          transition={scaleTransition}
        />
      </div>
    </div>
  );
};

export default Loading;
