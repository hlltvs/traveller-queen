import PlanToVisitCity from "./PlanToVisitCity";
import * as React from "react";
import VisitedCity from "./VisitedCity";

function Data(props) {
  const { selectedCity } = props;
  const [selectedCityData, setSelectedCityData] = React.useState({});

  React.useEffect(() => {
    // todo: veri buradan çekilecek
    if (selectedCity.city == "Eskişehir") {
      let data = [
        {
          day: "Cumartesi",
          activities: [
            {
              time: "06:00",
              plan: "Ankara'dan Eskişehir'e yola çıkış.",
            },
            {
              time: "09:00",
              plan: "Eskişehir'e varış ve kahvaltı.",
            },
            {
              time: "10:30",
              plan: "Odunpazarı Evleri'ne hareket.",
            },
            {
              time: "10:45",
              plan: "Odunpazarı Evleri'ni gezme. Tarihi Odunpazarı Evleri'ni ve bölgede bulunan Atlıhan El Sanatları Çarşısı'nı ziyaret.",
            },
            {
              time: "13:00",
              plan: "Öğle yemeği.",
            },
            {
              time: "14:30",
              plan: "Sazova Bilim, Sanat ve Kültür Parkı'na hareket.",
            },
            {
              time: "15:00",
              plan: "Sazova Parkı'nda gezinti.",
            },
            {
              time: "18:00",
              plan: "Otele yerleşme.",
            },
            {
              time: "19:00",
              plan: "Akşam yemeği için hazırlık ve dinlenme.",
            },
            {
              time: "19:30",
              plan: "Akşam yemeği.",
            },
            {
              time: "21:00",
              plan: "Şehirde akşam yürüyüşü veya Porsuk Çayı kenarında gezinti.",
            },
            {
              time: "22:00",
              plan: "Otele dönüş ve dinlenme.",
            },
          ],
        },
        {
          day: "Pazar",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Eskişehir Eti Arkeoloji Müzesi'ne hareket.",
            },
            {
              time: "09:15",
              plan: "Eti Arkeoloji Müzesi'ni ziyaret.",
            },
            {
              time: "11:30",
              plan: "Kentpark'a hareket.",
            },
            {
              time: "11:45",
              plan: "Kentpark'ta gezinti ve Porsuk Çayı kıyısında yürüyüş.",
            },
            {
              time: "13:00",
              plan: "Öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Eskişehir Havacılık Müzesi'ne hareket.",
            },
            {
              time: "14:30",
              plan: "Eskişehir Havacılık Müzesi'ni ziyaret.",
            },
            {
              time: "16:00",
              plan: "Eskişehir merkezine dönüş ve dönüş için hazırlık.",
            },
            {
              time: "17:00",
              plan: "Ankara'ya dönüş yolculuğu.",
            },
            {
              time: "20:00",
              plan: "Ankara'ya varış.",
            },
          ],
        },
      ];
      setSelectedCityData(data);
    } else if (selectedCity.city == "Aksaray") {
      let data = [
        {
          day: "Cumartesi",
          activities: [
            {
              time: "06:00",
              plan: "Ankara'dan Aksaray'a yola çıkış.",
            },
            {
              time: "09:00",
              plan: "Aksaray'a varış ve kahvaltı.",
            },
            {
              time: "10:00",
              plan: "Ihlara Vadisi'ne hareket.",
            },
            {
              time: "10:30",
              plan: "Ihlara Vadisi'nde yürüyüş ve keşif.",
            },
            {
              time: "13:00",
              plan: "Vadide piknik veya yerel bir restoranda öğle yemeği.",
            },
            {
              time: "14:30",
              plan: "Selime Manastırı'na hareket.",
            },
            {
              time: "15:00",
              plan: "Selime Manastırı'nı ziyaret.",
            },
            {
              time: "17:00",
              plan: "Aksaray şehir merkezine dönüş ve otele yerleşme.",
            },
            {
              time: "18:30",
              plan: "Otel çevresinde dinlenme ve akşam yemeği hazırlığı.",
            },
            {
              time: "19:00",
              plan: "Aksaray'da yerel bir restoranda akşam yemeği.",
            },
            {
              time: "21:00",
              plan: "Otele dönüş ve dinlenme.",
            },
          ],
        },
        {
          day: "Pazar",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Aksaray Müzesi'ne hareket.",
            },
            {
              time: "09:30",
              plan: "Aksaray Müzesi'ni ziyaret.",
            },
            {
              time: "11:00",
              plan: "Somuncu Baba Türbesi ve Külliyesi'ne hareket.",
            },
            {
              time: "11:30",
              plan: "Somuncu Baba Türbesi ve Külliyesi'ni ziyaret.",
            },
            {
              time: "13:00",
              plan: "Yerel bir restoranda öğle yemeği.",
            },
            {
              time: "14:30",
              plan: "Saratlı Kırkgöz Yeraltı Şehri'ne hareket.",
            },
            {
              time: "15:00",
              plan: "Saratlı Kırkgöz Yeraltı Şehri'ni ziyaret.",
            },
            {
              time: "16:30",
              plan: "Aksaray şehir merkezine dönüş ve kısa bir gezinti.",
            },
            {
              time: "17:30",
              plan: "Ankara'ya dönüş için hazırlık.",
            },
            {
              time: "18:00",
              plan: "Ankara'ya dönüş yolculuğu.",
            },
            {
              time: "21:00",
              plan: "Ankara'ya varış.",
            },
          ],
        },
      ];

      setSelectedCityData(data);
    } else if (selectedCity.city == "Bangkok") {
      let data = [
        {
          day: "1. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otele varış ve check-in.",
            },
            {
              time: "09:00",
              plan: "Kahvaltı ve dinlenme.",
            },
            {
              time: "10:30",
              plan: "Grand Palace'a hareket.",
            },
            {
              time: "11:00",
              plan: "Grand Palace'ı ziyaret.",
            },
            {
              time: "13:00",
              plan: "Wat Pho'ya hareket ve öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Wat Pho'yu ziyaret (Yatan Buda Tapınağı).",
            },
            {
              time: "16:00",
              plan: "Wat Arun'a hareket.",
            },
            {
              time: "16:30",
              plan: "Wat Arun'u ziyaret (Şafak Tapınağı).",
            },
            {
              time: "18:00",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "19:30",
              plan: "Akşam yemeği için şehir merkezine hareket.",
            },
            {
              time: "20:00",
              plan: "Yerel bir restoranda akşam yemeği (örneğin, Thip Samai Pad Thai).",
            },
          ],
        },
        {
          day: "2. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Chatuchak Hafta Sonu Pazarı'na hareket.",
            },
            {
              time: "09:30",
              plan: "Chatuchak Pazarı'nda alışveriş ve gezinti.",
            },
            {
              time: "12:00",
              plan: "Pazarda öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Jim Thompson House'a hareket.",
            },
            {
              time: "14:30",
              plan: "Jim Thompson House'u ziyaret.",
            },
            {
              time: "16:30",
              plan: "Siam Paragon'a hareket.",
            },
            {
              time: "17:00",
              plan: "Siam Paragon'da alışveriş ve gezinti.",
            },
            {
              time: "19:30",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "20:00",
              plan: "Akşam yemeği için otel yakınlarında bir restorana gitmek.",
            },
          ],
        },
        {
          day: "3. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Ayutthaya'ya hareket (günübirlik tur).",
            },
            {
              time: "10:30",
              plan: "Ayutthaya'da tarihi tapınakları ziyaret.",
            },
            {
              time: "12:30",
              plan: "Yerel bir restoranda öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Ayutthaya'da tarihi yerleri gezmeye devam.",
            },
            {
              time: "16:00",
              plan: "Bangkok'a dönüş için hareket.",
            },
            {
              time: "18:00",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "19:30",
              plan: "Akşam yemeği için şehir merkezine hareket.",
            },
            {
              time: "20:00",
              plan: "Yerel bir restoranda akşam yemeği.",
            },
          ],
        },
        {
          day: "4. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Damnoen Saduak Yüzen Pazarı'na hareket (günübirlik tur).",
            },
            {
              time: "10:30",
              plan: "Yüzen Pazarı ziyaret ve alışveriş.",
            },
            {
              time: "12:00",
              plan: "Yerel bir restoranda öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Maeklong Tren Pazarı'na hareket.",
            },
            {
              time: "15:00",
              plan: "Maeklong Tren Pazarı'nı ziyaret.",
            },
            {
              time: "17:00",
              plan: "Bangkok'a dönüş için hareket.",
            },
            {
              time: "18:30",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "19:30",
              plan: "Akşam yemeği için şehir merkezine hareket.",
            },
            {
              time: "20:00",
              plan: "Yerel bir restoranda akşam yemeği.",
            },
          ],
        },
        {
          day: "5. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı ve check-out işlemleri.",
            },
            {
              time: "09:00",
              plan: "Bangkok Sanat ve Kültür Merkezi'ne hareket.",
            },
            {
              time: "09:30",
              plan: "Bangkok Sanat ve Kültür Merkezi'ni ziyaret.",
            },
            {
              time: "11:30",
              plan: "MBK Center'a hareket.",
            },
            {
              time: "12:00",
              plan: "MBK Center'da alışveriş ve öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Lumphini Park'a hareket.",
            },
            {
              time: "14:30",
              plan: "Lumphini Park'ta gezinti ve dinlenme.",
            },
            {
              time: "16:00",
              plan: "Otele dönüş ve havaalanına transfer için hazırlık.",
            },
            {
              time: "18:00",
              plan: "Havaalanına hareket ve Bangkok'tan ayrılış.",
            },
          ],
        },
      ];

      setSelectedCityData(data);
    } else if (selectedCity.city == "Phuket") {
      let data = [
        {
          day: "1. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otele varış ve check-in.",
            },
            {
              time: "09:00",
              plan: "Kahvaltı ve dinlenme.",
            },
            {
              time: "10:30",
              plan: "Patong Plajı'na hareket.",
            },
            {
              time: "11:00",
              plan: "Patong Plajı'nda deniz ve güneşin tadını çıkarma.",
            },
            {
              time: "13:00",
              plan: "Yerel bir restoranda öğle yemeği.",
            },
            {
              time: "14:30",
              plan: "Jungceylon Alışveriş Merkezi'nde alışveriş ve gezinti.",
            },
            {
              time: "16:30",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "19:00",
              plan: "Akşam yemeği için hazırlık ve şehir merkezine hareket.",
            },
            {
              time: "19:30",
              plan: "Yerel bir restoranda akşam yemeği (örneğin, Baan Rim Pa).",
            },
            {
              time: "21:00",
              plan: "Bangla Road'da gece hayatını keşfetme.",
            },
          ],
        },
        {
          day: "2. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Phi Phi Adaları'na günübirlik tur için hareket.",
            },
            {
              time: "10:30",
              plan: "Phi Phi Adaları'na varış ve adaları keşfetme.",
            },
            {
              time: "12:30",
              plan: "Adada öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Maya Bay ve diğer turistik yerleri ziyaret.",
            },
            {
              time: "16:30",
              plan: "Phuket'e dönüş için hareket.",
            },
            {
              time: "18:00",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "19:30",
              plan: "Akşam yemeği için şehir merkezine hareket.",
            },
            {
              time: "20:00",
              plan: "Yerel bir restoranda akşam yemeği.",
            },
          ],
        },
        {
          day: "3. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı.",
            },
            {
              time: "09:00",
              plan: "Phuket Old Town'a hareket.",
            },
            {
              time: "09:30",
              plan: "Phuket Old Town'da gezinti ve tarihi yerleri ziyaret.",
            },
            {
              time: "12:00",
              plan: "Yerel bir restoranda öğle yemeği.",
            },
            {
              time: "13:30",
              plan: "Wat Chalong Tapınağı'na hareket.",
            },
            {
              time: "14:00",
              plan: "Wat Chalong Tapınağı'nı ziyaret.",
            },
            {
              time: "15:30",
              plan: "Big Buddha'ya hareket.",
            },
            {
              time: "16:00",
              plan: "Big Buddha'yı ziyaret ve manzaranın tadını çıkarma.",
            },
            {
              time: "17:30",
              plan: "Otele dönüş ve dinlenme.",
            },
            {
              time: "19:00",
              plan: "Akşam yemeği için hazırlık ve şehir merkezine hareket.",
            },
            {
              time: "19:30",
              plan: "Yerel bir restoranda akşam yemeği.",
            },
          ],
        },
        {
          day: "4. Gün",
          activities: [
            {
              time: "08:00",
              plan: "Otelde kahvaltı ve check-out işlemleri.",
            },
            {
              time: "09:00",
              plan: "Kata ve Karon Plajlarına hareket.",
            },
            {
              time: "09:30",
              plan: "Kata ve Karon Plajlarında deniz ve güneşin tadını çıkarma.",
            },
            {
              time: "12:00",
              plan: "Yerel bir restoranda öğle yemeği.",
            },
            {
              time: "14:00",
              plan: "Nai Harn Plajı'na hareket.",
            },
            {
              time: "14:30",
              plan: "Nai Harn Plajı'nda gezinti ve dinlenme.",
            },
            {
              time: "16:00",
              plan: "Otele dönüş ve havaalanına transfer için hazırlık.",
            },
            {
              time: "18:00",
              plan: "Havaalanına hareket ve Phuket'ten ayrılış.",
            },
          ],
        },
      ];

      setSelectedCityData(data);
    } else {
      setSelectedCityData([]);
    }
  }, [selectedCity]);

  return (
    <>
      {selectedCity && selectedCity != {} && selectedCity.visited ? (
        <VisitedCity selectedCityData={selectedCityData} />
      ) : (
        <PlanToVisitCity selectedCityData={selectedCityData} />
      )}
    </>
  );
}

export default Data;
