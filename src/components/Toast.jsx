import React from "react";
import { Check, Info, X } from "lucide-react";
import { useShop } from "../context/ShopContext";

// Notification Toast Component
const Toast = () => {
  const { notification, closeNotification } = useShop();

  if (!notification.show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <div
        className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl text-white ${
          notification.type === "success" ? "bg-gray-900" : "bg-blue-600"
        }`}
      >
        {notification.type === "success" ? (
          <div className="bg-green-500 rounded-full p-1">
            <Check className="w-3 h-3 text-white" />
          </div>
        ) : (
          <Info className="w-5 h-5" />
        )}
        <p className="font-medium pr-4">{notification.message}</p>
        <button
          onClick={closeNotification}
          className="hover:bg-white/20 rounded-full p-1 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Toast;
