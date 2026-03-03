import React, { useState } from "react";
import Swal from "sweetalert2";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import TicketCard from "./components/TicketCard";
import TaskStatus from "./components/TaskStatus";
import ticketsData from "./data/tickets.json";

function App() {
  const [tickets, setTickets] = useState(ticketsData);
  const [activeTickets, setActiveTickets] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const handleTicketClick = (ticket) => {
    if (activeTickets.find((t) => t.id === ticket.id)) {
      Swal.fire({
        title: "Already Added!",
        text: "This ticket is already in your task status.",
        icon: "info",
        confirmButtonColor: "#7C3AED",
      });
      return;
    }

    if (resolvedTickets.find((t) => t.id === ticket.id)) {
      Swal.fire({
        title: "Already Resolved!",
        text: "This ticket has already been completed.",
        icon: "info",
        confirmButtonColor: "#7C3AED",
      });
      return;
    }

    setActiveTickets([...activeTickets, ticket]);

    // Update ticket status to In-Progress locally
    setTickets(
      tickets.map((t) =>
        t.id === ticket.id ? { ...t, status: "In-Progress" } : t,
      ),
    );

    Swal.fire({
      title: "Ticket Added!",
      text: `${ticket.title} has been added to Task Status.`,
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const handleComplete = (ticketId) => {
    const ticket = activeTickets.find((t) => t.id === ticketId);
    setActiveTickets(activeTickets.filter((t) => t.id !== ticketId));
    setResolvedTickets([...resolvedTickets, { ...ticket, status: "Resolved" }]);

    // Remove from main list when resolved
    setTickets(tickets.filter((t) => t.id !== ticketId));

    Swal.fire({
      title: "Task Completed!",
      text: `Ticket #${ticketId} has been resolved successfully.`,
      icon: "success",
      confirmButtonColor: "#7C3AED",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <Navbar />
      <main className="max-w-full mx-auto px-4 lg:px-12 py-12">
        <Banner
          inProgressCount={activeTickets.length}
          resolvedCount={resolvedTickets.length}
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side: Ticket Grid */}
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gray-800 mb-8">
              Customer Tickets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onClick={handleTicketClick}
                />
              ))}
            </div>
            {tickets.length === 0 && (
              <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
                <p className="text-gray-400 font-medium">
                  No more tickets to display.
                </p>
              </div>
            )}
          </div>

          {/* Right Side: Task Status */}
          <div className="w-full lg:w-80">
            <TaskStatus
              activeTickets={activeTickets}
              resolvedTickets={resolvedTickets}
              onComplete={handleComplete}
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
