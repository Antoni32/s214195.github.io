import { fetchData, login, loginWithGoogle, loginWithFacebook } from './api';

document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
        });
    });
});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('service-worker.js')
        .then(registration => {
          console.log('Service Worker zarejestrowany', registration);
        })
        .catch(error => {
          console.error('Błąd podczas rejestracji Service Workera', error);
        });
    });
}

// Pobierz dane z Firestore
fetchData().then(users => {
  console.log("here1")
  console.log(users);
});


const exampleEmail = 'user@example.com';
const examplePassword = 'your-password';

login(exampleEmail, examplePassword).then(userCredential => {
  console.log('Zalogowano:', userCredential);
});

document.getElementById('login-google').addEventListener('click', async () => {
  const result = await loginWithGoogle();
  console.log('Zalogowano przez Google:', result);
});

document.getElementById('login-facebook').addEventListener('click', async () => {
  const result = await loginWithFacebook();
  console.log('Zalogowano przez Facebook:', result);
});

async function fetchUser(userId) {
  try {
    const userDoc = await db.collection('users').doc(userId).get();
    if (userDoc.exists) {
      return userDoc.data();
    } else {
      console.error('Nie znaleziono użytkownika');
    }
  } catch (error) {
    console.error('Błąd podczas pobierania danych użytkownika:', error);
  }
}

// Pobierz wszystkich lekarzy
async function fetchDoctors() {
  try {
    const snapshot = await db.collection('doctors').get();
    const doctors = [];
    snapshot.forEach(doc => {
      doctors.push({id: doc.id, ...doc.data()});
    });
    return doctors;
  } catch (error) {
    console.error('Błąd podczas pobierania danych lekarzy:', error);
  }
}

// Aktualizuj sekcję 1 - Profil użytkownika
async function updateUserProfile(userId) {
  const userData = await fetchUser(userId);
  if (userData) {
    const profileSection = document.getElementById('sekcja1');
    profileSection.innerHTML = `
      <h2>Profil użytkownika</h2>
      <p>Imię: ${userData.name}</p>
      <p>Nazwisko: ${userData.surname}</p>
      <p>Wiek: ${userData.age}</p>
      <p>Miasto: ${userData.city}</p>
    `;
  }
}

// Aktualizuj sekcję 3 - Lista lekarzy
async function updateDoctorList() {
  const doctors = await fetchDoctors();
  const doctorsSection = document.getElementById('sekcja3');
  let doctorListHTML = '<h2>Lista lekarzy</h2>';

  doctors.forEach(doctor => {
    const avgRating = doctor.rating.reduce((a, b) => a + b, 0) / doctor.rating.length;
    doctorListHTML += `
      <div class="doctor">
        <h3>${doctor.name} ${doctor.surname}</h3>
        <p>Specjalizacja: ${doctor.specialization}</p>
        <p>Miasto: ${doctor.city}</p>
        <p>Średnia ocena: ${avgRating.toFixed(2)}</p>
      </div>
      <hr>
    `;
  });

  doctorsSection.innerHTML = doctorListHTML;
}

// Przykładowe ID użytkownika
const exampleUserId = '1';

// Aktualizuj sekcje
updateUserProfile(exampleUserId);
updateDoctorList();