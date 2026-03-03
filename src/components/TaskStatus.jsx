import React from 'react';

const TaskStatus = ({ activeTickets = [], resolvedTickets = [], onComplete }) => {
  const safeResolvedTickets = Array.isArray(resolvedTickets) ? resolvedTickets : [];
  const safeActiveTickets = Array.isArray(activeTickets) ? activeTickets : [];

  return (
    <div className="sticky top-12 h-fit">
      {/* Task Status Section */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Task Status</h2>
      
      <div className="space-y-4 mb-10">
        {safeActiveTickets.length === 0 ? (
          <p className="text-gray-400 text-sm">Select a ticket to add to Task Status</p>
        ) : (
          safeActiveTickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="text-[15px] font-semibold text-gray-800 mb-4">{ticket.title}</h3>
              <button 
                className="w-full bg-[#00A854] hover:bg-[#008F47] text-white py-2.5 rounded-lg font-medium transition-colors"
                onClick={() => onComplete(ticket.id)}
              >
                Complete
              </button>
            </div>
          ))
        )}
      </div>

      {/* Resolved Task Section */}
      <h2 className="text-xl font-bold text-gray-800 mb-6">Resolved Task</h2>
      
      <div className="space-y-3">
        {safeResolvedTickets.length === 0 ? (
          <p className="text-gray-400 text-sm">No resolved tasks yet.</p>
        ) : (
          safeResolvedTickets.map((ticket) => (
            <div key={ticket.id} className="bg-[#EFF6FF] text-gray-800 p-4 rounded-xl border-none font-medium text-sm">
              {ticket.title}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TaskStatus;
