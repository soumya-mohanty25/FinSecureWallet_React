import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CitizenDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');

  const menuItems = [
    { name: 'Overview', icon: <HomeIcon /> },
    { name: 'Transactions', icon: <ListIcon /> },
    { name: 'Cards', icon: <CreditCardIcon /> },
    { name: 'Services', icon: <GridIcon /> },
    { name: 'Settings', icon: <SettingsIcon /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071a2f] via-[#0d2d50] to-[#123d69] flex text-white font-sans overflow-hidden">
      
      {/* Sidebar */}
      <div className="w-64 bg-[#1e293b]/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between hidden md:flex">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(139,92,246,0.35)]">
              FS
            </div>
            <h1 className="text-xl font-bold tracking-wider">FinSecure</h1>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === item.name 
                  ? 'bg-gradient-to-r from-[#8b5cf6]/20 to-transparent border-l-4 border-[#8b5cf6] text-[#a78bfa]' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-4 px-4 py-3 text-white/60 hover:text-[#ef4444] hover:bg-[#ef4444]/10 rounded-xl transition-all mt-auto"
        >
          <LogoutIcon />
          <span className="font-medium">Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10 overflow-y-auto">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-1">Welcome back, Alex! 👋</h2>
            <p className="text-white/60 text-sm">Here's what's happening with your finances today.</p>
          </div>
          <div className="flex items-center gap-5">
            <button className="relative p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
              <BellIcon />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-[#ef4444] rounded-full border-2 border-[#071a2f]"></span>
            </button>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1e293b] border border-white/20 overflow-hidden">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (Main Stats) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Balance Card */}
            <div className="bg-[#1e293b]/65 backdrop-blur-xl border border-white/10 rounded-[24px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.45)] relative overflow-hidden group">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#8b5cf6]/30 rounded-full blur-[50px] group-hover:bg-[#8b5cf6]/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-[#6366f1]/30 rounded-full blur-[50px] group-hover:bg-[#6366f1]/40 transition-all duration-700"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <p className="text-white/60 font-medium mb-1">Total Balance</p>
                  <h3 className="text-5xl font-bold tracking-tight mb-2">$24,562.00</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-emerald-400 flex items-center bg-emerald-400/10 px-2 py-1 rounded-md">
                      <TrendUpIcon /> +2.4%
                    </span>
                    <span className="text-white/50">vs last month</span>
                  </div>
                </div>
                <div className="p-3 bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-2xl shadow-[0_12px_30px_rgba(139,92,246,0.4)]">
                  <WalletIcon />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
                <ActionButton icon={<SendIcon />} label="Send" />
                <ActionButton icon={<ReceiveIcon />} label="Receive" />
                <ActionButton icon={<TopUpIcon />} label="Top Up" />
                <ActionButton icon={<MoreIcon />} label="More" />
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-white/10 rounded-[24px] p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Recent Transactions</h3>
                <button className="text-[#a78bfa] text-sm font-semibold hover:underline">View All</button>
              </div>
              
              <div className="space-y-4">
                <TransactionItem 
                  title="Netflix Subscription" 
                  date="Today, 10:00 AM" 
                  amount="- $15.99" 
                  type="expense" 
                  icon={<FilmIcon />} 
                />
                <TransactionItem 
                  title="Salary Deposit" 
                  date="Yesterday, 09:00 AM" 
                  amount="+ $4,250.00" 
                  type="income" 
                  icon={<BriefcaseIcon />} 
                />
                <TransactionItem 
                  title="Grocery Store" 
                  date="28 Jul, 04:30 PM" 
                  amount="- $124.50" 
                  type="expense" 
                  icon={<CartIcon />} 
                />
                <TransactionItem 
                  title="Electric Bill" 
                  date="25 Jul, 11:20 AM" 
                  amount="- $85.00" 
                  type="expense" 
                  icon={<ZapIcon />} 
                />
              </div>
            </div>
            
          </div>

          {/* Right Column (Cards & Quick Info) */}
          <div className="space-y-8">
            
            {/* Virtual Card */}
            <div className="bg-gradient-to-br from-[#8b5cf6] to-[#6366f1] rounded-[24px] p-6 shadow-[0_20px_50px_rgba(139,92,246,0.3)] relative overflow-hidden h-56 flex flex-col justify-between">
              {/* Card Pattern */}
              <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 100% 0%, #ffffff 0%, transparent 50%)' }}></div>
              <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-white/80 font-medium tracking-widest text-sm">VIRTUAL CARD</span>
                <WifiIcon />
              </div>
              
              <div className="relative z-10">
                <p className="text-2xl font-mono tracking-widest mb-2 shadow-sm">**** **** **** 4289</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/60 text-xs mb-1">Card Holder</p>
                    <p className="font-semibold tracking-wide">ALEX JOHNSON</p>
                  </div>
                  <div>
                    <p className="text-white/60 text-xs mb-1 text-right">Expires</p>
                    <p className="font-semibold tracking-wide">12/28</p>
                  </div>
                  <MastercardIcon />
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-[#1e293b]/40 backdrop-blur-xl border border-white/10 rounded-[24px] p-6">
              <h3 className="text-lg font-bold mb-4">Monthly Summary</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Income</span>
                    <span className="font-semibold text-emerald-400">$5,400.00</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Expenses</span>
                    <span className="font-semibold text-rose-400">$3,240.00</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-rose-400 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">Savings Goal</span>
                    <span className="font-semibold text-[#a78bfa]">$1,000.00</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-2">
                    <div className="bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] h-2 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CitizenDashboard;

/* --- UI Components --- */

const ActionButton = ({ icon, label }) => (
  <button className="flex flex-col items-center justify-center gap-2 p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-2xl transition-all group">
    <div className="text-white/80 group-hover:text-white group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <span className="text-xs font-semibold tracking-wide text-white/70 group-hover:text-white">{label}</span>
  </button>
);

const TransactionItem = ({ title, date, amount, type, icon }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all cursor-pointer border border-transparent hover:border-white/5">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        type === 'income' ? 'bg-emerald-400/10 text-emerald-400' : 'bg-rose-400/10 text-rose-400'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className="font-semibold text-white/90">{title}</h4>
        <p className="text-xs text-white/50 mt-1">{date}</p>
      </div>
    </div>
    <div className={`font-bold ${type === 'income' ? 'text-emerald-400' : 'text-white'}`}>
      {amount}
    </div>
  </div>
);


/* --- SVG Icons --- */

const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const ListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const CreditCardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>;
const GridIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const WalletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>;
const TrendUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const ReceiveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>;
const TopUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;
const MoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>;
const FilmIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7h4"/><path d="M3 12h4"/><path d="M3 17h4"/><path d="M17 7h4"/><path d="M17 12h4"/><path d="M17 17h4"/></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const WifiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>;
const MastercardIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#eb001b" fillOpacity="0.8"/>
    <circle cx="28" cy="12" r="12" fill="#f79e1b" fillOpacity="0.8"/>
  </svg>
);
