
const translations = {
    vi: {
        home: "Trang chủ",
        rentBike: "Thuê xe",
        aboutUs: "Giới thiệu",
        contactUs: "Liên hệ",
        welcomeMessage: "Dịch Vụ Cho Thuê Xe Máy Uy Tín và Chất Lượng",
        description: "Chúng tôi cung cấp dịch vụ cho thuê xe máy chất lượng, với nhiều loại xe từ phổ thông đến cao cấp, đảm bảo đáp ứng nhu cầu di chuyển của bạn.",
        contactButton: "Liên Hệ Với Chúng Tôi",
        searchFormTitle: "Tìm xe cho thuê",
        feedbackTitle: "Feedback"
    },
    en: {
        home: "Home",
        rentBike: "Rent Bike",
        aboutUs: "About Us",
        contactUs: "Contact",
        welcomeMessage: "Quality and Trustworthy Motorcycle Rental Service",
        description: "We provide quality motorcycle rental services with a wide range of vehicles from popular to premium options to meet your transportation needs.",
        contactButton: "Contact Us",
        searchFormTitle: "Find a rental bike",
        feedbackTitle: "Feedback"
    }
};

function setLanguage(lang) {
    document.querySelector('.nav-link-home').textContent = translations[lang].home;
    document.querySelector('.nav-link-rent').textContent = translations[lang].rentBike;
    document.querySelector('.nav-link-about').textContent = translations[lang].aboutUs;
    document.querySelector('.nav-link-contact').textContent = translations[lang].contactUs;
    document.querySelector('.welcome-message').textContent = translations[lang].welcomeMessage;
    document.querySelector('.description').textContent = translations[lang].description;
    document.querySelector('.contact-button').textContent = translations[lang].contactButton;
    document.querySelector('.search-form-title').textContent = translations[lang].searchFormTitle;
    document.querySelector('.feedback-title').textContent = translations[lang].feedbackTitle;
}

// Mặc định sử dụng tiếng Việt
setLanguage('vi');
