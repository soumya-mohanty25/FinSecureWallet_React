import { createContext, useState, useContext, useRef } from 'react';

const AlertContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAlert = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
    const [alertConfig, setAlertConfig] = useState({ isOpen: false, message: "", type: "error", onClose: null });
    const timerRef = useRef(null);

    const showAlert = (message, type = "error", onClose = null) => {
        setAlertConfig({ isOpen: true, message, type, onClose });
        
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        
        timerRef.current = setTimeout(() => {
            closeAlert();
        }, 10000);
    };

    const closeAlert = () => {
        setAlertConfig((prev) => {
            if (!prev.isOpen) return prev;
            if (prev.onClose) {
                prev.onClose();
            }
            return { ...prev, isOpen: false };
        });
    };

    return (
        <AlertContext.Provider value={{ showAlert }}>
            {children}
            
            {/* Toast Alert popup */}
            {alertConfig.isOpen && (
                <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-10 fade-in duration-300">
                    <div className={`border border-white/5 rounded-2xl shadow-2xl p-4 pr-10 flex items-center gap-4 min-w-[320px] max-w-md relative overflow-hidden bg-[#24262b]`}>
                        
                        {/* Background subtle radial glow matching the image */}
                        <div className={`absolute top-0 left-0 w-32 h-full opacity-30 ${alertConfig.type === 'success' ? 'bg-gradient-to-r from-[#00D26A] to-transparent' : alertConfig.type === 'warning' ? 'bg-gradient-to-r from-[#FFB020] to-transparent' : 'bg-gradient-to-r from-[#F23A4D] to-transparent'}`}></div>

                        {/* Icon */}
                        <div className="shrink-0 relative z-10">
                            {alertConfig.type === 'success' ? (
                                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#00D26A]/20">
                                    <div className="flex items-center justify-center h-[22px] w-[22px] rounded-full bg-[#00D26A] text-[#1E1F23]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            ) : alertConfig.type === 'warning' ? (
                                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#FFB020]/20">
                                    <div className="flex items-center justify-center h-[22px] w-[22px] rounded-full bg-[#FFB020] text-[#1E1F23]">
                                        <span className="text-sm font-bold leading-none mb-[1px]">!</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex items-center justify-center h-9 w-9 rounded-full bg-[#F23A4D]/20">
                                    <div className="flex items-center justify-center h-[22px] w-[22px] rounded-full bg-[#F23A4D] text-[#1E1F23]">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Text */}
                        <div className="flex flex-col relative z-10">
                            <h3 className="text-white font-medium text-[15px] leading-tight">
                                {alertConfig.message}
                            </h3>
                        </div>
                        
                        {/* Optional manual close button */}
                        <button 
                            onClick={closeAlert} 
                            className="absolute top-1/2 -translate-y-1/2 right-4 text-gray-500 hover:text-white transition-colors z-10"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </AlertContext.Provider>
    );
};
