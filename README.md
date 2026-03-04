Course Registration System

A full-stack Course Registration System built using React for the frontend and Spring Boot for the backend. This application allows students to browse courses, register for them, and manage enrollments while administrators can manage course offerings.

🚀 Features
Student

View available courses

Register for courses

Drop enrolled courses

View registered courses

User authentication and authorization

Admin

Add new courses

Update course details

Delete courses

View registered students per course

🏗️ Tech Stack
Frontend

React

Axios

React Router

Bootstrap / Tailwind CSS

Backend

Spring Boot

Spring Data JPA

Spring Security

REST APIs

Database

MySQL / PostgreSQL

📂 Project Structure
course-registration-system
│
├── backend (Spring Boot)
│   ├── controller
│   ├── service
│   ├── repository
│   ├── model
│   └── config
│
├── frontend (React)
│   ├── components
│   ├── pages
│   ├── services
│   └── App.js
│
└── README.md
⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/course-registration-system.git
cd course-registration-system
2. Backend Setup (Spring Boot)

Navigate to backend folder:

cd backend

Configure database in application.properties:

spring.datasource.url=jdbc:mysql://localhost:3306/course_db
spring.datasource.username=root
spring.datasource.password=password
spring.jpa.hibernate.ddl-auto=update

Run the Spring Boot application:

mvn spring-boot:run

Backend will start at:

http://localhost:8080
3. Frontend Setup (React)

Navigate to frontend folder:

cd frontend

Install dependencies:

npm install

Run the React application:

npm start

Frontend will start at:

http://localhost:3000
🔗 API Endpoints (Sample)
Method	Endpoint	Description
GET	/api/courses	Get all courses
POST	/api/courses	Add new course
DELETE	/api/courses/{id}	Delete course
POST	/api/enroll	Register student to course
GET	/api/students/{id}/courses	Get registered courses
🔒 Authentication

Authentication can be implemented using:

Spring Security

JWT Token Authentication

🧪 Future Improvements

Course capacity management

Email notifications

Student dashboard analytics

Role-based access control

Docker deployment
