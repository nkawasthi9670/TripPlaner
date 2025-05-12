 TripPlaner
 TripPlaner

TripPlaner is a travel planning web application that helps users create personalized travel plans based on their preferences. Built with **React.js** and Tailwind CSS on the frontend, and Node.js on the backend, this project dynamically generates travel suggestions based on user inputs.

---

 Project Structure

Frontend: React.js + Tailwind CSS
Backend: Node.js + Express.js
Database: (Specify here — MongoDB)

---

 Features

 Plan Page (`plan.js`)
- Users fill in trip details:
  - Destination
  - Duration (number of days)
  - Travel type (solo or with someone)
- On clicking the **Continue** button:
  - The entered data is sent to the backend and saved in the database.
  - The user is redirected to the Home Page.

 Home Page (homePage.js)
- Displays dynamic content based on the user's trip details.
- Components included:
  - ActivityCard: Shows relevant activities based on the selected destination.
 - FlightDetails: Displays flight options or summaries.
  - HotelsDetail`: Lists hotels based on location and trip length.
  -Header & Footer: Navigation and footer components for consistent UI.

---

 Getting Started

 Installation

1. Clone the repository
   ``bash
   git clone https://github.com/your-username/TripPlaner.git
   cd TripPlaner
