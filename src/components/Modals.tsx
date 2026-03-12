import { X, Lock } from "lucide-react";

interface ModalsProps {
  isLoginOpen: boolean;
  isHelpOpen: boolean;
  onClose: () => void;
  onOpenHelp: () => void;
}

export default function Modals({ isLoginOpen, isHelpOpen, onClose, onOpenHelp }: ModalsProps) {
  if (!isLoginOpen && !isHelpOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div 
        className="absolute inset-0" 
        onClick={onClose}
      />
      
      {isLoginOpen && (
        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in duration-200">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-[#040768]/10 p-4 rounded-full mb-4">
              <Lock className="w-8 h-8 text-[#040768]" />
            </div>
            <h2 className="font-outfit text-2xl font-bold text-[#040768] mb-2">
              Welcome to Your Rewards!
            </h2>
            <p className="font-satoshi text-gray-600">
              Please Login!
            </p>
          </div>
          
          <p className="font-satoshi text-sm text-gray-500 mb-6 text-center leading-relaxed">
            To login, please enter your username and password below. If this is your first time logging in, your temporary password is your zip or postal code.
          </p>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone or Email</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F00480] focus:border-transparent transition-all"
                placeholder="Enter your phone or email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F00480] focus:border-transparent transition-all"
                placeholder="Enter your password"
              />
            </div>
            <button 
              type="button"
              className="mt-4 w-full bg-[#040768] hover:bg-[#0A0F3C] text-white font-bold py-3 px-6 rounded-full transition-colors flex justify-center items-center gap-2 shadow-lg hover:shadow-xl"
            >
              LOG IN &rarr;
            </button>
            <div className="mt-4 text-center">
              <button 
                type="button"
                onClick={onOpenHelp}
                className="text-[#F00480] font-medium hover:underline text-sm"
              >
                Need help logging in?
              </button>
            </div>
          </form>
        </div>
      )}

      {isHelpOpen && (
        <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 animate-in fade-in zoom-in duration-200">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="flex flex-col items-center text-center mb-8">
            <h2 className="font-outfit text-2xl font-bold text-[#040768] mb-2">
              Trouble Logging In?
            </h2>
            <p className="font-satoshi text-[#F00480] font-bold">
              We Can Help!
            </p>
          </div>
          
          <p className="font-satoshi text-sm text-gray-500 mb-6 text-center leading-relaxed">
            Enter your Phone Number or Email below and we'll send you a quick email to help you get logged in.
          </p>
          
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone or Email</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F00480] focus:border-transparent transition-all"
                placeholder="Enter your phone or email"
              />
            </div>
            <button 
              type="button"
              className="mt-4 w-full bg-[#040768] hover:bg-[#0A0F3C] text-white font-bold py-3 px-6 rounded-full transition-colors flex justify-center items-center gap-2 shadow-lg hover:shadow-xl"
            >
              SUBMIT &rarr;
            </button>
            <div className="mt-4 text-center">
              <a 
                href="#support"
                className="text-[#F00480] font-medium hover:underline text-sm"
              >
                Contact Customer Support
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
