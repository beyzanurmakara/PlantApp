## 🚀 Kurulum

### Bağımlılıkları yükle

npm install && cd ios && pod install && cd .. && npm install 

## Uygulama Akışı

1.Kullanıcı ilk kez uygulamayı açtığında Onboarding Flow'a yönlendirilir

2.Close butonuna bastığında bu bilgi MMKV ile local storage'a kaydedilir

3.Bir sonraki açılışta doğrudan Home ekranı gösterilir

### Proje Yapısı
```bash
src/
├── assets/
├── components/
├── external/
├── navigation/
├── redux/
│   └── Slice/
├── pages/
│   ├── Boarding/
│   ├── Home/
│   ├── Details/
│   ├── Walkthrough/
├── styles/
├── theme/
└── types/