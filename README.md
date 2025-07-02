# MVP: Realtime Ordering App for a Single Food Truck

Features:
1. Mobile App (React Native):
- Login screen (Firebase Auth)
- Product listing
- Order screen with realtime status updates
- Status notifications (Firebase Cloud Messaging)

2. Backend (Node.js):
- Simple REST API (products, orders)
- WebSocket to update order status in realtime
- Firebase Firestore as the main database
- Redis for product caching

3. Infrastructure (GCP):
- Backend hosted on Cloud Run or App Engine
- Firebase for auth, database, and notifications
- Optional Kafka (to simulate internal order queue)

---

Tech Stack:
- Node.js: API + WebSocket  
- React Native: mobile client  
- Firebase Auth: email/password login  
- Firestore: product and order data  
- Redis: product cache (improves performance)  
- GCP: deployment + monitoring