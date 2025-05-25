import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function PhysicalCleansing({ isLoggedIn }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="pt-28 p-6 space-y-16">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8">
        Fiziksel Arınma: Bedenin Uyanışı
      </h1>

      {/* Kişisel Temizlik */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <img src="/images/personal_hygiene.jpg" alt="Kişisel Temizlik" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">🧼 Kişisel Temizlik</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Fiziksel arınmanın ilk adımı, kişisel hijyenle başlar. Her gün düzenli olarak alınan bir duş, sadece vücudu değil ruhu da tazeler.
            Cildimize dokunmak, saçlarımızı taramak ve yüzümüzü yıkamak; kendimize verdiğimiz değerin bir göstergesidir.
            Temiz bir beden, zinde bir ruhun yuvasıdır. Unutma, bedenini sevmenin en basit yolu onu özenle temiz tutmaktan geçer.
          </p>
        </div>
      </section>

      {/* Egzersiz */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">🏃‍♀️ Düzenli Egzersiz</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Egzersiz yalnızca kasları çalıştırmak değildir; aynı zamanda stresin, yorgunluğun ve biriken negatif enerjilerin
            dışarı atılmasıdır. Vücudumuz hareket ettikçe kan dolaşımı artar, hücreler oksijenle dolar ve zihin berraklaşır.
            Sabahları yapılan kısa bir yürüyüş ya da 10 dakikalık esneme hareketleri bile yaşam kaliteni gözle görülür şekilde artırabilir.
            Her ter damlası, bedeninin arınmasına ve yenilenmesine hizmet eder.
          </p>
        </div>
        <img src="/images/exercise.jpg" alt="Egzersiz" className="rounded-xl shadow-lg" />
      </section>

      {/* Sağlıklı Beslenme */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <img src="/images/healthy_food.jpg" alt="Sağlıklı Beslenme" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">🥗 Sağlıklı Beslenme</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Ne yersek oyuz. Fiziksel arınma, vücuda giren her lokmanın bilinçli seçilmesiyle başlar.
            Renkli sebzeler, taze meyveler, yeterli su ve doğal besinler hem bağışıklık sistemini güçlendirir
            hem de sindirim sistemini temizler. İşlenmiş ve yapay gıdalardan uzak durmak; daha hafif, enerjik ve odaklanmış bir yaşamın kapılarını aralar.
            Bedenin sana teşekkür edecek, yeter ki ona hak ettiği yakıtı ver.
          </p>
        </div>
      </section>

      {/* Kaliteli Uyku */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">🛌 Kaliteli Uyku</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Uyku, bedenin yeniden doğduğu yerdir. Her gün zihnimizi ve bedenimizi yoran dış etkenlerden arınmak için derin bir uykuya ihtiyacımız vardır.
            Karanlık ve sessiz bir ortam, ekranlardan uzak bir saat ve uyumadan önce yapılan birkaç nefes egzersizi,
            gece boyunca vücudun kendini yenilemesini sağlar. Uyandığında daha dinç, daha huzurlu ve daha güçlü hissedersin.
            Unutma, iyi bir uyku günün temel taşıdır.
          </p>
        </div>
        <img src="/images/sleep.jpg" alt="Kaliteli Uyku" className="rounded-xl shadow-lg" />
      </section>

      {/* Son Mesaj */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">✨ Kendini Yenile, Bedenine İyi Bak</h3>
        <p className="text-gray-700 text-md max-w-3xl mx-auto leading-relaxed">
          Fiziksel arınma, sadece sağlıklı olmak değil; aynı zamanda kendine duyduğun saygının ve sevginin bir göstergesidir.
          Bu yolculukta atacağın her küçük adım, daha enerjik, dengeli ve huzurlu bir sen yaratır.
          Bedenin, senin en değerli evindir. Ona özen göster, onu dinle, onu sev.
        </p>
      </div>
    </div>
  );
}

export default PhysicalCleansing;
