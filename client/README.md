# HealthHive Client

A modern healthcare platform frontend built with React, providing a seamless interface for patients and doctors to interact, manage appointments, and access healthcare services.

## 🚀 Features

- **User Authentication**
  - Secure login and registration system
  - Role-based access (Patient/Doctor)
  - JWT-based authentication with secure cookie storage

- **Responsive Design**
  - Modern UI built with Tailwind CSS
  - Mobile-first approach
  - Smooth animations and transitions

- **Real-time Chat**
  - Built-in chat system with HealthHive Assistant
  - File attachment support
  - Message history

## 🛠️ Tech Stack

- **Framework:** React 19
- **Routing:** React Router v7
- **Styling:** Tailwind CSS 4
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Code Quality:** ESLint

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bharatalok11/BeingCoder-Pathway/client
   cd beingcoder-pathway/client
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the client directory:
   ```env
   VITE_API_URL=http://localhost:8000/api/v1
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Structure

```
client/
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Login.jsx     # Authentication components
│   │   ├── Signup.jsx
│   │   ├── Navbar.jsx    # Navigation component
│   │   └── Footer.jsx    # Footer with chat functionality
│   ├── pages/            # Page components
│   │   ├── Home.jsx      # Landing page
│   │   └── Dashboard.jsx # User dashboard
│   ├── App.jsx          # Main application component
│   └── main.jsx         # Application entry point
├── public/              # Static assets
└── package.json         # Project dependencies and scripts
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🔒 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | http://localhost:8000/api/v1 |

## 🌐 API Integration

The frontend communicates with the backend through these main endpoints:

- **Authentication**
  - POST `/user/register` - User registration
  - POST `/user/login` - User login
  - POST `/user/logout` - User logout

## 💻 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.



## 👥 Authors

- **ALOK RANAJN** - *Fronted* - [Github](https://github.com/bharatalok11)
- **Karan Kumar** - *Design* - [Github](https://github.com/KaranOps)

---