# Personal Portfolio Website

A modern, professional portfolio website built with React, FastAPI, and MongoDB showcasing my work, skills, and experience.

## 🌟 Features

- **Modern Design**: Clean, professional grey-themed design with smooth animations
- **Responsive Layout**: Fully responsive across all devices
- **Interactive Sections**:
  - Hero section with professional photo and stats
  - About Me with quick facts
  - Work Experience timeline
  - Featured Projects showcase
  - Skills visualization with progress bars
  - Education history
  - Interests & hobbies section
  - Working Contact form
  - CV download functionality

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Axios** - API requests
- **Lucide React** - Icons

### Backend
- **FastAPI** - Python web framework
- **MongoDB** - Database
- **Motor** - Async MongoDB driver
- **Pydantic** - Data validation

## 📦 Installation

### Prerequisites
- Node.js (v16+)
- Python (v3.8+)
- MongoDB
- Yarn package manager

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/pradyumnayerabati14/personal-protfolio.git
   cd personal-protfolio
   ```

2. **Frontend Setup**
   ```bash
   cd frontend
   yarn install
   cp .env.example .env
   # Update REACT_APP_BACKEND_URL in .env
   yarn start
   ```

3. **Backend Setup**
   ```bash
   cd backend
   pip install -r requirements.txt
   cp .env.example .env
   # Update MONGO_URL and DB_NAME in .env
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   ```

## 🚀 Usage

1. Start MongoDB service
2. Start the backend server (port 8001)
3. Start the frontend development server (port 3000)
4. Visit `http://localhost:3000` in your browser

## 📝 API Endpoints

- `GET /api/` - Health check
- `POST /api/contact` - Submit contact form
- `GET /api/contact/messages` - Get all contact messages
- `GET /api/download-cv` - Download CV file

## 🎨 Customization

### Update Personal Information
Edit `/frontend/src/utils/mock.js` to update:
- Name, title, description
- Work experience
- Projects
- Skills
- Education
- Interests

### Change Theme Colors
The portfolio uses a grey color scheme. To change:
- Update Tailwind classes in component files
- Modify `/frontend/src/components/ui/progress.jsx` for skill bar colors

### Add Your CV
Place your CV PDF in `/backend/static/Pradyumna_CV.pdf`

## 📧 Contact Form

The contact form stores messages in MongoDB. To view messages:
```bash
curl http://localhost:8001/api/contact/messages
```

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Pradyumna Yerabati**
- GitHub: [@pradyumnayerabati14](https://github.com/pradyumnayerabati14)
- LinkedIn: [Pradyumna Yerabati](https://linkedin.com/in/pradyumna-yerabati)
- Email: pradyumna1402@tamu.edu

## 🙏 Acknowledgments

- Built with [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

---

Made with ❤️ by Pradyumna Yerabati
