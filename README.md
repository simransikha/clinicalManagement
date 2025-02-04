# Clinical Management System

The Clinical Management System is designed to streamline the operations of medical clinics by providing efficient management of patients, appointments, and administrative tasks.

## Features

- **Patient Management**: Maintain comprehensive records of patient information, including personal details, medical history, and contact information.

- **Appointment Scheduling**: Efficiently schedule, reschedule, and cancel patient appointments with an intuitive calendar interface.

- **User Authentication**: Secure login system for administrators and staff to ensure data privacy and integrity.

## Project Structure

The project is organized into the following directories:

- **admin**: Contains administrative configurations and management tools.

- **backend**: Includes server-side code responsible for handling business logic, database interactions, and API endpoints.

- **frontend**: Houses client-side code, including user interfaces and related assets.

## Technologies Used

- **Frontend**: Developed using tailwind, react to create a responsive and user-friendly interface.

- **Backend**: Built with Node.js and Express.js to handle server-side operations and API requests.

- **Database**: Utilizes MongoDB for efficient and scalable data storage.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/simransikha/clinicalManagement.git
   cd clinicalManagement
   ```

2. **Install Dependencies**:

   - For the backend:

     ```bash
     cd backend
     npm install
     ```

   - For the frontend:

     ```bash
     cd ../frontend
     npm install
     ```

3. **Configure Environment Variables**:

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Start the Application**:

   - Start the backend server:

     ```bash
     cd backend
     npm start
     ```

   - Start the frontend application:

     ```bash
     cd ../frontend
     npm start
     ```

   The frontend will typically run on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Usage

- **Admin Access**: Admins can manage patient records, view appointment schedules, and perform other administrative tasks.

- **Staff Access**: Staff members can view their schedules, manage patient appointments, and update patient information as permitted.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your proposed changes.

