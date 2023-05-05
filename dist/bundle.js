/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchData\": () => (/* binding */ fetchData),\n/* harmony export */   \"login\": () => (/* binding */ login),\n/* harmony export */   \"loginWithFacebook\": () => (/* binding */ loginWithFacebook),\n/* harmony export */   \"loginWithGoogle\": () => (/* binding */ loginWithGoogle)\n/* harmony export */ });\n/* harmony import */ var _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firebaseConfig */ \"./firebaseConfig.js\");\n\r\n\r\nasync function fetchData() {\r\n  try {\r\n    const snapshot = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__.db.collection('users').get();\r\n    const users = [];\r\n    snapshot.forEach(doc => {\r\n      users.push(doc.data());\r\n    });\r\n    return users;\r\n  } catch (error) {\r\n    console.error('Błąd podczas pobierania danych z Firestore:', error);\r\n    return [];\r\n  }\r\n}\r\n\r\nasync function login(email, password) {\r\n  try {\r\n    const userCredential = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__.auth.signInWithEmailAndPassword(email, password);\r\n    return userCredential;\r\n  } catch (error) {\r\n    console.error('Błąd podczas logowania:', error);\r\n    return null;\r\n  }\r\n}\r\n\r\nasync function loginWithGoogle() {\r\n  const provider = new firebase.auth.GoogleAuthProvider();\r\n\r\n  try {\r\n    const result = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__.auth.signInWithPopup(provider);\r\n    return result;\r\n  } catch (error) {\r\n    console.error('Błąd logowania przez Google:', error);\r\n    return null;\r\n  }\r\n}\r\n\r\nasync function loginWithFacebook() {\r\n  const provider = new firebase.auth.FacebookAuthProvider();\r\n\r\n  try {\r\n    const result = await _firebaseConfig__WEBPACK_IMPORTED_MODULE_0__.auth.signInWithPopup(provider);\r\n    return result;\r\n  } catch (error) {\r\n    console.error('Błąd logowania przez Facebook:', error);\r\n    return null;\r\n  }\r\n}\n\n//# sourceURL=webpack://projekt/./api.js?");

/***/ }),

/***/ "./firebaseConfig.js":
/*!***************************!*\
  !*** ./firebaseConfig.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"auth\": () => (/* binding */ auth),\n/* harmony export */   \"db\": () => (/* binding */ db)\n/* harmony export */ });\n// Firebase configuration\r\nconst firebaseConfig = {\r\n  apiKey: \"AIzaSyDgznTMkxgRTJq34IlkPbv1b7go4Is_tQk\",\r\n  authDomain: \"e-doctor-923d0.firebaseapp.com\",\r\n  projectId: \"e-doctor-923d0\",\r\n  storageBucket: \"e-doctor-923d0.appspot.com\",\r\n  messagingSenderId: \"321148660890\",\r\n  appId: \"1:321148660890:web:e20db85c65a91fd1c70323\",\r\n  measurementId: \"G-BT5VX0BDF8\"\r\n};\r\n\r\n// Initialize Firebase\r\nconst firebaseApp = firebase.initializeApp(firebaseConfig);\r\nconst db = firebaseApp.firestore();\r\nconst auth = firebaseApp.auth();\r\n\n\n//# sourceURL=webpack://projekt/./firebaseConfig.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ \"./api.js\");\n\r\n\r\ndocument.querySelectorAll('a.nav-link').forEach(link => {\r\n    link.addEventListener('click', function (e) {\r\n        e.preventDefault();\r\n        const target = document.querySelector(this.getAttribute('href'));\r\n        window.scrollTo({\r\n            top: target.offsetTop,\r\n            behavior: 'smooth'\r\n        });\r\n    });\r\n});\r\n\r\nif ('serviceWorker' in navigator) {\r\n    window.addEventListener('load', () => {\r\n      navigator.serviceWorker.register('service-worker.js')\r\n        .then(registration => {\r\n          console.log('Service Worker zarejestrowany', registration);\r\n        })\r\n        .catch(error => {\r\n          console.error('Błąd podczas rejestracji Service Workera', error);\r\n        });\r\n    });\r\n}\r\n\r\n// Pobierz dane z Firestore\r\n(0,_api__WEBPACK_IMPORTED_MODULE_0__.fetchData)().then(users => {\r\n  console.log(\"here1\")\r\n  console.log(users);\r\n});\r\n\r\n\r\nconst exampleEmail = 'user@example.com';\r\nconst examplePassword = 'your-password';\r\n\r\n(0,_api__WEBPACK_IMPORTED_MODULE_0__.login)(exampleEmail, examplePassword).then(userCredential => {\r\n  console.log('Zalogowano:', userCredential);\r\n});\r\n\r\ndocument.getElementById('login-google').addEventListener('click', async () => {\r\n  const result = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.loginWithGoogle)();\r\n  console.log('Zalogowano przez Google:', result);\r\n});\r\n\r\ndocument.getElementById('login-facebook').addEventListener('click', async () => {\r\n  const result = await (0,_api__WEBPACK_IMPORTED_MODULE_0__.loginWithFacebook)();\r\n  console.log('Zalogowano przez Facebook:', result);\r\n});\r\n\r\nasync function fetchUser(userId) {\r\n  try {\r\n    const userDoc = await db.collection('users').doc(userId).get();\r\n    if (userDoc.exists) {\r\n      return userDoc.data();\r\n    } else {\r\n      console.error('Nie znaleziono użytkownika');\r\n    }\r\n  } catch (error) {\r\n    console.error('Błąd podczas pobierania danych użytkownika:', error);\r\n  }\r\n}\r\n\r\n// Pobierz wszystkich lekarzy\r\nasync function fetchDoctors() {\r\n  try {\r\n    const snapshot = await db.collection('doctors').get();\r\n    const doctors = [];\r\n    snapshot.forEach(doc => {\r\n      doctors.push({id: doc.id, ...doc.data()});\r\n    });\r\n    return doctors;\r\n  } catch (error) {\r\n    console.error('Błąd podczas pobierania danych lekarzy:', error);\r\n  }\r\n}\r\n\r\n// Aktualizuj sekcję 1 - Profil użytkownika\r\nasync function updateUserProfile(userId) {\r\n  const userData = await fetchUser(userId);\r\n  if (userData) {\r\n    const profileSection = document.getElementById('sekcja1');\r\n    profileSection.innerHTML = `\r\n      <h2>Profil użytkownika</h2>\r\n      <p>Imię: ${userData.name}</p>\r\n      <p>Nazwisko: ${userData.surname}</p>\r\n      <p>Wiek: ${userData.age}</p>\r\n      <p>Miasto: ${userData.city}</p>\r\n    `;\r\n  }\r\n}\r\n\r\n// Aktualizuj sekcję 3 - Lista lekarzy\r\nasync function updateDoctorList() {\r\n  const doctors = await fetchDoctors();\r\n  const doctorsSection = document.getElementById('sekcja3');\r\n  let doctorListHTML = '<h2>Lista lekarzy</h2>';\r\n\r\n  doctors.forEach(doctor => {\r\n    const avgRating = doctor.rating.reduce((a, b) => a + b, 0) / doctor.rating.length;\r\n    doctorListHTML += `\r\n      <div class=\"doctor\">\r\n        <h3>${doctor.name} ${doctor.surname}</h3>\r\n        <p>Specjalizacja: ${doctor.specialization}</p>\r\n        <p>Miasto: ${doctor.city}</p>\r\n        <p>Średnia ocena: ${avgRating.toFixed(2)}</p>\r\n      </div>\r\n      <hr>\r\n    `;\r\n  });\r\n\r\n  doctorsSection.innerHTML = doctorListHTML;\r\n}\r\n\r\n// Przykładowe ID użytkownika\r\nconst exampleUserId = '1';\r\n\r\n// Aktualizuj sekcje\r\nupdateUserProfile(exampleUserId);\r\nupdateDoctorList();\n\n//# sourceURL=webpack://projekt/./main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;