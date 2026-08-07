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
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white font-sans overflow-hidden relative flex">
      
      {/* 🔵 Animated Glow Effects in Background */}
      <div className="fixed w-[30rem] h-[30rem] bg-blue-600 opacity-20 blur-[120px] top-[-10%] left-[-5%] animate-float-slow pointer-events-none"></div>
      <div className="fixed w-[30rem] h-[30rem] bg-purple-600 opacity-20 blur-[120px] bottom-[-10%] right-[-5%] animate-float-fast pointer-events-none"></div>
      <div className="fixed w-[20rem] h-[20rem] bg-pink-500 opacity-10 blur-[100px] top-1/2 left-1/3 animate-float-slow pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.1),transparent)] pointer-events-none"></div>

      {/* Sidebar */}
      <div className="relative z-10 w-64 bg-white/5 backdrop-blur-2xl border-r border-white/10 p-6 flex-col justify-between hidden md:flex shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        <div>
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-lg shadow-[0_0_20px_rgba(59,130,246,0.4)]">
              FS
            </div>
            <h1 className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 text-transparent bg-clip-text">FinSecure</h1>
          </div>

          <nav className="space-y-3">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === item.name 
                  ? 'bg-blue-500/20 border-l-4 border-blue-400 text-blue-300 shadow-[inset_0px_0px_20px_rgba(59,130,246,0.15)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span className="font-semibold tracking-wide">{item.name}</span>
              </button>
            ))}
          </nav>
        </div>

        <button 
          onClick={() => navigate('/login')}
          className="flex items-center gap-4 px-4 py-3 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-xl transition-all mt-auto font-semibold"
        >
          <LogoutIcon />
          <span>Logout</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10 overflow-y-auto relative z-10">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-extrabold mb-1 tracking-tight text-white">Welcome back, Alex! 👋</h2>
            <p className="text-gray-400 text-sm font-medium">Here's what's happening with your finances today.</p>
          </div>
          <div className="flex items-center gap-6">
            <button className="relative p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all shadow-lg hover:shadow-blue-500/20">
              <BellIcon />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-gray-900 animate-pulse"></span>
            </button>
            <div className="flex items-center gap-3 cursor-pointer group">
              <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-blue-500/50 group-hover:border-blue-400 transition-all overflow-hidden shadow-[0_0_15px_rgba(59,130,246,0.3)]">
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
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.5)] relative overflow-hidden group">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-blue-500/30 rounded-full blur-[60px] group-hover:bg-blue-500/40 transition-all duration-700"></div>
              <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-purple-500/30 rounded-full blur-[60px] group-hover:bg-purple-500/40 transition-all duration-700"></div>
              
              <div className="relative z-10 flex justify-between items-start">
                <div>
                  <p className="text-gray-300 font-semibold mb-1 text-sm uppercase tracking-wider">Total Balance</p>
                  <h3 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 text-white">$24,562.00</h3>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="text-emerald-400 flex items-center bg-emerald-400/10 px-3 py-1 rounded-lg border border-emerald-400/20 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                      <TrendUpIcon /> <span className="ml-1">+2.4%</span>
                    </span>
                    <span className="text-gray-400">vs last month</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-[0_12px_30px_rgba(59,130,246,0.4)]">
                  <WalletIcon />
                </div>
              </div>

              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
                <ActionButton icon={<SendIcon />} label="Send" />
                <ActionButton icon={<ReceiveIcon />} label="Receive" />
                <ActionButton icon={<TopUpIcon />} label="Top Up" />
                <ActionButton icon={<MoreIcon />} label="More" />
              </div>
            </div>

            {/* Recent Transactions */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Recent Transactions</h3>
                <button className="text-blue-400 text-sm font-bold hover:text-blue-300 transition-colors bg-blue-500/10 px-4 py-2 rounded-lg hover:bg-blue-500/20">View All</button>
              </div>
              
              <div className="space-y-3">
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
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black border border-white/20 rounded-[24px] p-7 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden h-60 flex flex-col justify-between group cursor-pointer hover:shadow-[0_20px_50px_rgba(59,130,246,0.3)] transition-all duration-500">
              {/* Card Pattern & Glows */}
              <div className="absolute top-0 right-0 w-full h-full opacity-30 pointer-events-none bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-full h-full opacity-20 pointer-events-none bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-600 via-transparent to-transparent"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl pointer-events-none group-hover:bg-blue-500/20 transition-all duration-500"></div>
              
              <div className="flex justify-between items-start relative z-10">
                <span className="text-gray-300 font-bold tracking-[0.2em] text-xs">VIRTUAL CARD</span>
                <WifiIcon />
              </div>
              
              <div className="relative z-10 mt-auto">
                <p className="text-3xl font-mono tracking-widest mb-4 text-white drop-shadow-md">**** **** **** 4289</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">Card Holder</p>
                    <p className="font-bold tracking-wide text-sm">ALEX JOHNSON</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1 text-right">Expires</p>
                    <p className="font-bold tracking-wide text-sm">12/28</p>
                  </div>
                  <div className="ml-4">
                     <MastercardIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-7 shadow-xl">
              <h3 className="text-lg font-bold mb-6 text-white">Monthly Summary</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">Income</span>
                    <span className="font-bold text-emerald-400">$5,400.00</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2.5 border border-white/5 overflow-hidden">
                    <div className="bg-emerald-400 h-full rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">Expenses</span>
                    <span className="font-bold text-rose-400">$3,240.00</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2.5 border border-white/5 overflow-hidden">
                    <div className="bg-rose-400 h-full rounded-full shadow-[0_0_10px_rgba(251,113,133,0.5)]" style={{ width: '60%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-400 font-medium">Savings Goal</span>
                    <span className="font-bold text-blue-400">$1,000.00</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-2.5 border border-white/5 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full rounded-full shadow-[0_0_10px_rgba(139,92,246,0.5)]" style={{ width: '45%' }}></div>
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
  <button className="flex flex-col items-center justify-center gap-3 p-5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 cursor-pointer">
    <div className="text-gray-300 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300">
      {icon}
    </div>
    <span className="text-sm font-bold tracking-wide text-gray-400 group-hover:text-white transition-colors">{label}</span>
  </button>
);

const TransactionItem = ({ title, date, amount, type, icon }) => (
  <div className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-white/10 hover:shadow-md">
    <div className="flex items-center gap-4">
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        type === 'income' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
      }`}>
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-gray-100">{title}</h4>
        <p className="text-xs text-gray-400 mt-1 font-medium">{date}</p>
      </div>
    </div>
    <div className={`font-extrabold ${type === 'income' ? 'text-emerald-400' : 'text-white'}`}>
      {amount}
    </div>
  </div>
);


/* --- SVG Icons --- */

const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>;
const ListIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>;
const CreditCardIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>;
const GridIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>;
const SettingsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
const LogoutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>;
const BellIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>;
const WalletIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/></svg>;
const TrendUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>;
const ReceiveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>;
const TopUpIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>;
const MoreIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>;
const FilmIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M17 3v18"/><path d="M3 7h4"/><path d="M3 12h4"/><path d="M3 17h4"/><path d="M17 7h4"/><path d="M17 12h4"/><path d="M17 17h4"/></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>;
const CartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
const ZapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
const WifiIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>;
const MastercardIcon = () => (
  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="12" fill="#eb001b" fillOpacity="0.8"/>
    <circle cx="28" cy="12" r="12" fill="#f79e1b" fillOpacity="0.8"/>
  </svg>
);

