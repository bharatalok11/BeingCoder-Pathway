# HealthHive Server

Backend server for the HealthHive healthcare platform, providing APIs for user authentication, appointment management, and real-time chat functionality.

## 🚀 Features

- **Authentication & Authorization**
  - JWT-based authentication
  - Role-based access control (Patient/Doctor)
  - Secure password hashing with bcrypt
  - HTTP-only cookie session management

- **User Management**
  - User registration and profile management
  - Separate doctor and patient profiles
  - Password reset functionality
  - Profile image upload using Cloudinary

- **Appointment System**
  - Appointment scheduling and management
  - Doctor availability management
  - Real-time slot booking
  - Appointment reminders and notifications

- **Chat System**
  - Real-time chat functionality
  - File attachments support
  - Chat history management
  - Message status tracking

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT, bcrypt
- **File Storage:** Cloudinary
- **Real-time:** Socket.IO (planned)

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bharatalok11/BeingCoder-Pathway/server
   cd beingcoder-pathway/server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```env
   PORT=8000
   MONGODB_URI=your_mongodb_uri
   CORS_ORIGIN=http://localhost:5173
   ACCESS_TOKEN_SECRET=your_access_token_secret
   ACCESS_TOKEN_EXPIRY=1d
   REFRESH_TOKEN_SECRET=your_refresh_token_secret
   REFRESH_TOKEN_EXPIRY=10d
   CLOUDINARY_CLOUD_NAME=your_cloudinary_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
server/
├── src/
│   ├── controllers/    # Request handlers
│   ├── models/        # Database models
│   ├── routes/        # API routes
│   ├── middleware/    # Custom middleware
│   ├── utils/         # Utility functions
│   ├── db/           # Database configuration
│   ├── app.js        # Express app setup
│   └── index.js      # Server entry point
├── public/           # Static files
└── package.json      # Project dependencies
```

## 🔗 API Endpoints

### Authentication
- `POST /api/v1/user/register` - Register new user
- `POST /api/v1/user/login` - User login
- `POST /api/v1/user/logout` - User logout
- `POST /api/v1/user/refresh-token` - Refresh access token

### User Management
- `GET /api/v1/user/profile` - Get user profile
- `PATCH /api/v1/user/update-profile` - Update user profile
- `PATCH /api/v1/user/change-password` - Change password

### Appointments
- `POST /api/v1/appointments` - Create appointment
- `GET /api/v1/appointments` - List appointments
- `GET /api/v1/appointments/:id` - Get appointment details
- `PATCH /api/v1/appointments/:id` - Update appointment
- `DELETE /api/v1/appointments/:id` - Cancel appointment

### Chat
- `POST /api/v1/messages` - Send message
- `GET /api/v1/messages/:chatId` - Get chat messages
- `PATCH /api/v1/messages/:id/status` - Update message status

## 🔒 Authentication

The server uses JWT-based authentication:
1. Access tokens are short-lived (1 day)
2. Refresh tokens are long-lived (10 days)
3. Tokens are stored in HTTP-only cookies
4. CORS is configured for secure client-server communication

## 💻 Development

### Available Scripts
- `npm run dev` - Start development server with hot reload
- `npm test` - Run tests (to be implemented)
- `npm run lint` - Run ESLint (to be implemented)

### Code Style
- Use ES Modules for imports/exports
- Follow RESTful API design principles
- Implement proper error handling
- Write meaningful commit messages

## 🧪 Testing (To Be Implemented)

- Unit tests for utilities and helpers
- Integration tests for API endpoints
- Test coverage reporting
- API documentation testing

## 📈 Monitoring (To Be Implemented)

- Health check endpoints
- Error tracking and logging
- Performance monitoring
- API metrics collection

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Santosh Methre** - *Backend* - [Github](https://github.com/santoshmethre22)
- **Alok Ranjan** - *Backend* - [Github](https://github.com/bharatalok11)

---
# Happy Coding💓