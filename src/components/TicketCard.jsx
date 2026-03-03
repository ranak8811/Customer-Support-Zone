import React from "react";
import { HiOutlineCalendar, HiOutlineUser } from "react-icons/hi2";

const TicketCard = ({ ticket, onClick }) => {
  const { id, title, description, customer, priority, status, createdAt } =
    ticket;

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case "high priority":
        return "text-red-500";
      case "medium priority":
        return "text-yellow-500";
      case "low priority":
        return "text-green-500";
      default:
        return "text-gray-500";
    }
  };

  const getStatusBadge = (status) => {
    const baseClasses =
      "flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium";
    switch (status.toLowerCase()) {
      case "open":
        return `${baseClasses} bg-green-100 text-green-700`;
      case "in-progress":
        return `${baseClasses} bg-yellow-100 text-yellow-700`;
      default:
        return `${baseClasses} bg-gray-100 text-gray-700`;
    }
  };

  return (
    <div
      className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 cursor-pointer hover:shadow-md transition-shadow"
      onClick={() => onClick(ticket)}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-bold text-gray-800 flex-1 leading-tight mr-2">
          {title}
        </h3>
        <span className={getStatusBadge(status)}>
          <span
            className={`w-2 h-2 rounded-full ${status === "Open" ? "bg-green-500" : "bg-yellow-500"}`}
          ></span>
          {status}
        </span>
      </div>

      <p className="text-gray-500 text-sm mb-6 line-clamp-2">{description}</p>

      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-50">
        <div className="flex gap-4">
          <span className="text-[10px] uppercase tracking-wider text-gray-400 font-bold">
            #{id}
          </span>
          <span
            className={`text-[10px] uppercase tracking-wider font-bold ${getPriorityColor(priority)}`}
          >
            {priority}
          </span>
        </div>

        <div className="flex items-center gap-4 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <HiOutlineUser className="w-4 h-4" />
            <span>{customer}</span>
          </div>
          <div className="flex items-center gap-1">
            <HiOutlineCalendar className="w-4 h-4" />
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
