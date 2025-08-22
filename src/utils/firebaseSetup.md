# Firebase Setup Guide

## 1. Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project"
3. Enter project name (e.g., "siddharth-portfolio")
4. Enable Google Analytics (optional)
5. Create project

## 2. Setup Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" (for development)
4. Select a location close to your users

## 3. Setup Firebase Storage
1. Go to "Storage" in Firebase Console
2. Click "Get started"
3. Choose "Start in test mode"
4. Select same location as Firestore

## 4. Get Firebase Configuration
1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps"
3. Click "Web" icon to add web app
4. Register app with nickname
5. Copy the config object

## 5. Environment Variables
Create a `.env` file in your project root with:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

## 6. Firestore Collections Structure

### Skills Collection (`skills`)
```json
{
  "title": "AR Development",
  "description": "Creating immersive augmented reality experiences...",
  "level": 85,
  "slug": "ar-development",
  "image": "https://images.unsplash.com/photo-...",
  "icon": "Code",
  "expertise": ["Vuforia", "ARCore", "Unity AR"],
  "projects": [
    {
      "title": "AR Shopping Experience",
      "description": "An augmented reality app...",
      "image": "https://images.unsplash.com/photo-..."
    }
  ]
}
```

### Projects Collection (`projects`)
```json
{
  "title": "AR Shopping Experience",
  "description": "An augmented reality app for visualizing furniture...",
  "image": "https://images.unsplash.com/photo-...",
  "category": "AR Development",
  "link": "/projects/ar-development",
  "featured": true
}
```

### Profile Collection (`profile`)
```json
{
  "name": "Siddharth KS",
  "title": "AR Developer & Game Designer",
  "bio": "I'm a multidisciplinary developer...",
  "email": "siddharth.ks1566@gmail.com",
  "location": "Chennai, India",
  "profileImage": "https://your-image-url.com/profile.jpg",
  "socialLinks": {
    "github": "https://github.com/Siddharth-K-S",
    "linkedin": "https://in.linkedin.com/in/siddharth-k-s-302003301",
    "youtube": "http://www.youtube.com/@Siddharth-KS",
    "instagram": "#"
  }
}
```

## 7. Security Rules (for production)
Update Firestore rules for read-only access:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read: if true;
      allow write: if false; // Only allow writes through Firebase Console
    }
  }
}
```

## 8. Adding Data
1. Go to Firestore Database in Firebase Console
2. Create collections: `skills`, `projects`, `profile`
3. Add documents with the structure shown above
4. Use Firebase Storage to upload images and get URLs

## 9. Image Management
- Upload images to Firebase Storage
- Copy the download URLs
- Use these URLs in your Firestore documents
- Images will be automatically optimized and served via CDN