import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
        homeGreeting: "Join The Organic Movement!",
        homeContent: "The customer is very important, the customer will be followed by the customer. As the land of the land, the mourning nor the corporal of the land, the pillow of the lion.",
        shopNowButton: "SHOP NOW",
        everything: "Everything",
        groceries: "Groceries",
        juice: "Juices",
        about: "About",
        contact: "Contact",
      // Thêm các chuỗi dịch khác
    }
  },
  vi: {
    translation: {
        homeGreeting: "Tham gia Phong trào Hữu cơ!",
        homeContent: "Khách hàng rất quan trọng, khách hàng sẽ được khách hàng theo đuổi. Là đất của đất, là tang vật cũng không phải là hạ sĩ của đất, là gối của sư tử.",
        shopNowButton: "MUA NGAY",
        everything: "Tất cả",
        groceries: "Thực phẩm",
        juice: "Nước",
        about: "Giới thiệu",
        contact: "Liên hệ",
      // Thêm các chuỗi dịch khác
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Ngôn ngữ mặc định
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
