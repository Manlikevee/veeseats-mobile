# Veeseats

![Veeseats Logo](https://your-logo-link-here)  

Veeseats is a **next-gen job portal and recruitment platform** that leverages **AI** to streamline hiring for recruiters and personalize the job-seeking experience for candidates. Built with **React, Next.js, Django, and Python**, Veeseats supports mobile, web, and backend applications in one cohesive ecosystem.

---

## 🚀 Project Overview

Veeseats transforms traditional recruitment by integrating AI-driven features that improve **efficiency, accuracy, and user experience**:

- **For Recruiters**: AI-generated job descriptions, automated candidate match validation, and real-time role notifications.  
- **For Job Seekers**: Personalized job alerts, AI-assisted resume creation, and tailored interview prep questions.  

By combining AI with a modern tech stack, Veeseats simplifies recruitment for both employers and candidates, creating a **future-ready hiring ecosystem**.

---

## ✨ Key Features

- **AI-Generated Job Descriptions** powered by Gemini AI  
- **Candidate Match Validation** with AI-powered insights  
- **Real-Time Role Notifications** for recruiters and candidates  
- **Personalized Job Alerts** for job seekers  
- **AI-Assisted Resume Builder**  
- **Tailored Interview Preparation Questions**  
- **Mobile & Web Friendly** with responsive design  

---

## 🛠 Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, Next.js, Expo (Mobile) |
| Backend | Django, Python, Django REST Framework |
| AI Integration | Gemini AI for job descriptions, application summarization, and candidate match insights |
| Database | PostgreSQL / SQLite (configurable) |
| Deployment | Vercel (Frontend), Heroku / Docker (Backend) |

---

## 📂 Repository Structure

veeseats/
├─ frontend-web/ # Next.js web application
├─ frontend-mobile/ # React Native mobile app
├─ backend/ # Django + DRF backend
├─ docs/ # Documentation
└─ README.md # Project overview


---

## ⚡ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/veeseats.git
cd veeseats


cd backend
python -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt

# Apply migrations
python manage.py migrate

# Create a superuser
python manage.py createsuperuser

# Start the backend server
python manage.py runserver


3. Web Frontend Setup (Next.js)
cd ../frontend-web
npm install
npm run dev


Open http://localhost:3000
 to view the web app.

4. Mobile Frontend Setup (React Native / Expo)
cd ../frontend-mobile
npm install
npx expo start
