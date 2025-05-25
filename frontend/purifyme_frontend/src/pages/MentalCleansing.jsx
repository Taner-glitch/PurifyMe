import React, { useEffect } from 'react';

function MentalCleansing({ isLoggedIn, navigate }) {
  useEffect(() => {
    if (!isLoggedIn && navigate) {
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
        Zihinsel Arınma: Zihninizin Uyanışı
      </h1>

      {/* 🧘 Meditasyon */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/28387142/pexels-photo-28387142.jpeg"
            alt="Meditasyon"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">🧘 Meditasyon</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Zihinsel arınmanın temel adımlarından biri meditasyondur. Günlük sadece 10 dakika bile ayırsanız,
            zihninizi sakinleştirmeye ve düşüncelerinizi berraklaştırmaya yardımcı olur.
            Oturun, gözlerinizi kapatın ve nefesinize odaklanın. Düşüncelerinizi yargılamadan gözlemleyin ve
            geçmesine izin verin. Bu basit pratik, stresi azaltır ve iç huzuru artırır.
          </p>
        </div>
      </section>

      {/* 📝 Bilinçli Günlük Tutma */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">📝 Bilinçli Günlük Tutma</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Düşüncelerinizi ve duygularınızı kağıda dökmek zihinsel arınma için güçlü bir araçtır.
            Her gün 5-10 dakika ayırarak aklınızdan geçenleri yazın. Endişelerinizi, sevinçlerinizi,
            hedeflerinizi not edin. Bu alışkanlık, zihinsel yükünüzü hafifletir, netlik sağlar ve
            duygusal farkındalığınızı artırır. Unutmayın, yazıya dökülmeyen düşünceler zihnimizde daha fazla yer kaplar.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/15662457/pexels-photo-15662457.jpeg"
            alt="Günlük Tutma"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* 📵 Dijital Detoks */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/5601769/pexels-photo-5601769.jpeg"
            alt="Dijital Detoks"
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">📵 Dijital Detoks</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Modern yaşamın getirdiği sürekli uyarılar ve bildirimler zihinsel yorgunluğa neden olur.
            Günde en az birkaç saat telefonunuzu ve diğer elektronik cihazlarınızı kapatın veya uzak tutun.
            Bu süreyi kitap okumak, doğada yürümek veya sevdiklerinizle sohbet etmek için kullanın.
            Dijital detoks, zihin bulanıklığını giderir ve gerçek dünya ile yeniden bağlantı kurmanızı sağlar.
          </p>
        </div>
      </section>

      {/* 🌬️ Nefes Egzersizleri */}
      <section className="grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-3">🌬️ Nefes Egzersizleri</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Nefes, zihinsel arınmanın en güçlü ve her an yanımızda olan aracıdır.
            Derin ve bilinçli nefes almak, stres hormonlarını azaltır ve parasempatik sinir sistemini aktive eder.
            4-7-8 tekniğini deneyin: 4 saniye nefes alın, 7 saniye tutun ve 8 saniye verin.
            Bu basit egzersiz bile anında sakinleşmenizi ve zihninizin berraklaşmasını sağlar.
          </p>
        </div>
        <div className="overflow-hidden rounded-xl shadow-lg">
          <img
            src="https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg"
            alt="Nefes Egzersizleri"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* ✨ Son Mesaj */}
      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">✨ Zihninizi Arındırın, İç Huzura Kavuşun</h3>
        <p className="text-gray-700 text-md max-w-3xl mx-auto leading-relaxed">
          Zihinsel arınma, günlük yaşamın kaosunda kendi içinizdeki huzuru bulma yolculuğudur.
          Bu yolculukta atacağınız her küçük adım, daha net düşünmenize, duygusal dengenizi korumanıza ve
          yaşamdan daha fazla keyif almanıza yardımcı olur. Zihniniz sizin en değerli varlığınızdır.
          Ona iyi bakın, onu dinleyin, ona zaman ayırın.
        </p>
      </div>
    </div>
  );
}

export default MentalCleansing;
