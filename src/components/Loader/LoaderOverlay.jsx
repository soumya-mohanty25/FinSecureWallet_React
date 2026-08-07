import savingIcon from "../../assets/saving.png";

const LoaderOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div className="relative flex items-center justify-center w-48 h-48">
        
        {/* Center Image */}
        <img 
          src={savingIcon} 
          alt="Loading..." 
          className="w-16 h-16 object-contain animate-pulse relative z-10" 
        />
        
        {/* Circular Text Animation */}
        <div className="absolute inset-0 animate-[spin_4s_linear_infinite]">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white font-bold text-[9px] tracking-[2px] uppercase">
            <path
              id="circlePath"
              d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              fill="transparent"
            />
            <text fill="currentColor">
              <textPath href="#circlePath" startOffset="0%">
                Finsecure Wallet • Finsecure Wallet • 
              </textPath>
            </text>
          </svg>
        </div>

      </div>
    </div>
  );
};

export default LoaderOverlay;
