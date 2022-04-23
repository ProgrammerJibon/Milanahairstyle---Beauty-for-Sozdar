-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 23, 2022 at 08:36 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `project_38`
--

-- --------------------------------------------------------

--
-- Table structure for table `booking`
--

CREATE TABLE `booking` (
  `id` int(255) NOT NULL,
  `book_email` varchar(255) NOT NULL,
  `book_phone` varchar(255) NOT NULL,
  `book_name` varchar(255) NOT NULL,
  `book_time` varchar(255) NOT NULL,
  `book_date` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `ip` varchar(255) NOT NULL,
  `user-agent` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `info`
--

CREATE TABLE `info` (
  `id` int(255) NOT NULL,
  `name` varchar(1024) NOT NULL,
  `value` longtext NOT NULL,
  `time` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `info`
--

INSERT INTO `info` (`id`, `name`, `value`, `time`) VALUES
(1, 'logo', 'uploads/2022/Apr/image-1650488829-978676149.png', 0),
(2, 'title', 'Milanahairstyle & Beauty', 0),
(3, 'top_banner_men', 'cdn/1594922460-image.jpg', 0),
(4, 'facebook', 'https://www.facebook.com//', 0),
(5, 'twitter', 'https://twitter.com/', 0),
(6, 'instagram', 'https://www.instagram.com/', 0),
(8, 'youtube', 'https://www.youtube.com/', 0),
(11, 'email', 'info@milanahairstyle.de', 0),
(15, 'phone', '+49020145880699', 0),
(16, 'address', 'Vereinstraße:18,45127 Essen', 0),
(17, 'password', '2853d3544f105dd7b0bc4376e4f55c14', 0),
(18, 'hours', 'Monday to Saturday: 09:00 - 20:00\r\nSunday: Closed', 0),
(19, 'top_banner_women', 'cdn/2090262.jpg', 0),
(20, 'beside_prices', 'cdn/image-2-2.png', 0),
(21, 'intro', 'uploads/2022/Apr/video-1650489247-858631205.mp4', 0);

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `id` int(255) NOT NULL,
  `title` varchar(1024) NOT NULL DEFAULT 'N/A',
  `took_date` varchar(1024) NOT NULL,
  `pic` longtext NOT NULL,
  `time` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`id`, `title`, `took_date`, `pic`, `time`) VALUES
(1, 'N/A', '2011-7-10', '/cdn/0.jpg', 0),
(2, 'N/A', '2011-7-10', '/cdn/1.jpg', 0),
(3, 'N/A', '2011-7-10', '/cdn/2.jpg', 0),
(4, 'N/A', '2011-7-10', '/cdn/3.jpg', 0),
(5, 'N/A', '2011-7-10', '/cdn/4.jpg', 0),
(6, 'N/A', '2011-7-10', '/cdn/5.jpg', 0),
(7, 'N/A', '2011-7-10', '/cdn/6.jpg', 0),
(8, 'N/A', '2011-7-10', '/cdn/7.jpg', 0),
(9, 'N/A', '2011-7-10', '/cdn/8.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `prices_list`
--

CREATE TABLE `prices_list` (
  `id` int(11) NOT NULL,
  `name` varchar(1024) NOT NULL DEFAULT 'N/A',
  `price` int(255) NOT NULL DEFAULT 0,
  `gender` varchar(255) NOT NULL DEFAULT 'men',
  `time` int(255) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prices_list`
--

INSERT INTO `prices_list` (`id`, `name`, `price`, `gender`, `time`) VALUES
(1, 'Haarschnitt mit Maschine', 12, 'men', 0),
(2, 'Bartrasur', 9, 'men', 0),
(3, 'Haar färben', 20, 'men', 0),
(4, 'Bart färben', 10, 'men', 0),
(6, 'Waschen, Schneiden, Föhnen', 30, 'women', 0),
(7, 'Waschen, Schneiden', 24, 'women', 0),
(8, 'Waschen, Föhnen', 20, 'women', 0),
(11, 'Trockenhaarschnitt', 20, 'women', 1650490843);

-- --------------------------------------------------------

--
-- Table structure for table `subscribed`
--

CREATE TABLE `subscribed` (
  `id` int(255) NOT NULL,
  `email` varchar(1024) NOT NULL,
  `ip` varchar(1024) NOT NULL,
  `time` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `translations`
--

CREATE TABLE `translations` (
  `id` int(11) NOT NULL,
  `en` varchar(1024) NOT NULL COMMENT 'English',
  `de` varchar(1024) NOT NULL COMMENT 'Germany',
  `ar` varchar(1024) NOT NULL COMMENT 'Arabic',
  `tr` varchar(1024) NOT NULL COMMENT 'Turkish'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='English, Germany , Arabic and Turkish';

--
-- Dumping data for table `translations`
--

INSERT INTO `translations` (`id`, `en`, `de`, `ar`, `tr`) VALUES
(1, 'English', 'Deutschland', 'عربى', 'Türkçe'),
(2, 'About Us', 'über uns', 'حولنا', 'Hakkımızda'),
(3, 'All Categories', 'Alle Kategorien', 'جميع الفئات', 'Tüm Kategoriler'),
(4, 'My Account', 'Mein Konto', 'حسابي', 'Aritmetik'),
(5, 'Profile Settings', 'Profileinstellungen', 'إعدادات الملف الشخصي', 'Profil ayarları'),
(6, 'Orders', 'Aufträge', 'تعيينات', 'atamalar'),
(7, 'Payments', 'Zahlungen', 'المدفوعات', 'ödemeler'),
(8, 'Carts', 'Karren', 'عربات', 'Arabalar'),
(9, 'Logout', 'Ausloggen', 'تسجيل خروج', 'Oturumu Kapat'),
(10, 'Contact', 'Kontaktiere uns', 'اتصل بنا', 'bizi ara'),
(11, 'Shop now', 'Jetzt einkaufen', 'تسوق الأن', 'Şimdi satın al'),
(12, 'Intro', 'Einführung', 'المقدمة', 'Tanıtım'),
(13, 'Address', 'Adresse', 'عنوان', 'Adres'),
(14, 'Director and owner', 'Direktor und Inhaber', 'المخرج والمالك', 'Yönetmen ve sahibi'),
(15, 'Mobile number', 'Handy Nummer', 'رقم الهاتف المحمول', 'Cep numarası'),
(16, 'Email address', 'E-Mail-Addresse', 'عنوان البريد الالكترونى', 'e-posta adresi'),
(17, 'Tax ID', 'Steuer ID', 'الرقم الضريبي', 'Vergi numarası'),
(18, 'VAT ID', 'Umsatzsteuer-ID', 'رقم تعريف الضريبة على القيمة المضافة', 'KDV Kimliği'),
(19, 'Library details', 'Angaben zur Bibliothek', 'تفاصيل المكتبة', 'Kitaplık ayrıntıları'),
(20, 'Confirm your email address', 'Bestätigen Sie Ihre E-Mail-Adresse', 'قم بتأكيد عنوان بريدك الإلكتروني', 'Email adresini onayla'),
(21, 'Code', 'Kode', 'الشفرة', 'kod'),
(22, 'Resend', 'Erneut senden', 'إعادة إرسال', 'Yeniden gönder'),
(23, 'Confirm', 'Bestätigen Sie', 'يتأكد', 'Teyit etmek'),
(24, 'Please fill add your addresses', 'Bitte füllen Sie die Adressen aus', 'يرجى ملء العناوين', 'Lütfen adresleri doldurun'),
(25, 'Be careful, use your address where to deliver', 'Seien Sie vorsichtig, verwenden Sie Ihre Lieferadresse', 'كن حذرًا ، استخدم عنوانك في مكان التسليم', 'Dikkatli olun, teslimat için adresinizi kullanın'),
(26, 'Country', 'Land', 'دولة', 'Ülke'),
(27, 'State', 'Zustand', 'ولاية', 'Eyalet'),
(28, 'No more products yet in this category', 'Noch keine Produkte in dieser Kategorie', 'لا مزيد من المنتجات حتى الآن في هذه الفئة', 'Bu kategoride henüz ürün yok'),
(29, 'Other categories you may like', 'Andere Kategorien, die Ihnen gefallen könnten', 'الفئات الأخرى التي قد تعجبك', 'Beğenebileceğiniz diğer kategoriler'),
(30, 'OUR COMPANY', 'UNSER UNTERNEHMEN', 'شركتنا', 'ŞİRKETİMİZ'),
(31, 'Terms and Condition', 'Geschäftsbedingung', 'أحكام وشروط', 'Şartlar ve koşullar'),
(32, 'Secure Payment', 'Sichere Bezahlung', 'دفع امن', 'Güvenli ödeme'),
(33, 'All right Reserved to ', 'Alle Rechte vorbehalten', 'جميع الحقوق محفوظة', 'Tüm Hakları Saklıdır'),
(34, 'More for you', 'Meer voor jou', 'مير فور جو', 'daha fazla'),
(35, 'Categories you may like', 'Schauen Sie nach Kategorien, die Ihnen gefallen könnten', 'تحقق من الفئات التي قد تعجبك', 'Beğenebileceğiniz Kategorilere göre göz atın'),
(36, 'Read More', 'Weiterlesen', 'اقرأ أكثر', 'Daha fazla oku'),
(37, 'Login to account', 'Melden Sie sich beim Konto an', 'تسجيل الدخول للحساب', 'hesaba giriş yap'),
(38, 'Email', 'E-Mail', 'بريد الالكتروني', 'E-posta'),
(39, 'Password', 'Passwort', 'كلمة المرور', 'Parola'),
(40, 'Register', 'Registrieren', 'يسجل', 'Kayıt olmak'),
(41, 'Login', 'Anmeldung', 'تسجيل الدخول', 'Giriş yapmak'),
(42, 'Home', 'Startseite', 'الصفحة الرئيسية', 'Ana Sayfa'),
(43, 'Manage your wishlist', 'Verwalten Sie Ihre Wunschliste', 'إدارة قائمة الرغبات الخاصة بك', 'İstek listenizi yönetin'),
(44, 'Pricing', 'Preis', 'السعر', 'Fiyat'),
(45, 'Total', 'Gesamt', 'مجموع', 'Toplam'),
(46, 'Change', 'Veränderung', 'يتغير', 'değişiklik'),
(47, 'Change Account Information', 'Kontoinformationen ändern', 'تغيير معلومات الحساب', 'Hesap Bilgilerini Değiştir'),
(48, 'First Name', 'Vorname', 'الاسم الاول', 'İlk adı'),
(49, 'Last Name', 'Nachname', 'اسم العائلة', 'Soyadı'),
(50, 'Men', 'Männlich', 'ذكر', 'Erkek'),
(51, 'Women', 'Weiblich', 'أنثى', 'Dişi'),
(52, 'Other', 'Andere', 'أخرى', 'Diğer'),
(53, 'Date of birth', 'Geburtsdatum', 'تاريخ الولادة', 'Doğum tarihi'),
(54, 'Sex', 'Geschlecht', 'الجنس', 'seks'),
(55, 'Search Result for', 'Suchergebnis für', 'نتيجة البحث عن', 'Arama Sonucu'),
(56, 'Categories', 'Kategorien', 'التصنيفات', 'Kategoriler'),
(57, 'Cash on Delivery Available', 'Nachnahme möglich', 'الدفع نقدا عند التسليم متاح', 'Kapıda Ödeme Mevcuttur'),
(58, 'Only Pre Payment accepted', 'Nur Vorauszahlung akzeptiert', 'يتم قبول الدفع المسبق فقط', 'Sadece Ön Ödeme kabul edildi'),
(59, 'Quantity', 'Menge', 'الكمية', 'Miktar'),
(60, 'Add To Wishlist', 'Zur Wunschliste hinzufügen', 'أضف إلى قائمة الامنيات', 'İstek listesine ekle'),
(61, 'Order Now', 'Jetzt bestellen', 'اطلب الان', 'Şimdi sipariş ver'),
(62, 'Product description', 'Produktbeschreibung', 'وصف المنتج', 'Ürün Açıklaması'),
(63, 'Reviews', 'Bewertungen', 'المراجعات', 'incelemeler'),
(64, 'Gallery', 'Galerie', 'صالة عرض', 'Galeri'),
(65, 'No reviews yet', 'Noch keine Bewertungen', 'لا توجد تعليقات حتى الآن', 'Henüz yorum yok'),
(66, 'items were in stock and sold', 'Artikel waren auf Lager und verkauft', 'كانت العناصر في المخازن وبيعت', 'ürünler stokta vardı ve satıldı'),
(67, 'Create an account', 'Ein Konto erstellen', 'انشئ حساب', 'Bir hesap oluşturun'),
(68, 'I agree to the terms and conditions and the privacy policy', 'Ich stimme den AGB und der Datenschutzerklärung zu', 'أوافق على الشروط والأحكام وسياسة الخصوصية', 'Şartlar ve koşullar ile gizlilik politikasını kabul ediyorum'),
(69, 'Check Out Most Popular', 'Am beliebtesten', 'الأكثر شهرة', 'En popüler'),
(70, 'Join Us & Get Updates on Special Events', 'Machen Sie mit und erhalten Sie Updates zu besonderen Ereignissen', 'انضم إلينا واحصل على تحديثات الأحداث الخاصة', 'Bize Katılın ve Özel Etkinliklerle İlgili Güncellemeleri Alın'),
(71, 'Subscribe to newsletter', 'Abonnieren', 'يشترك', 'Abone'),
(72, 'Privacy & Policy', 'Datenschutz-Bestimmungen', 'سياسة الخصوصية', 'Gizlilik Politikası'),
(73, 'New Books you may like', 'Neue Bücher, die Ihnen gefallen könnten', 'كتب جديدة قد تعجبك', 'Beğenebileceğiniz Yeni Kitaplar'),
(74, 'Book an appointment', 'Vereinbare einen Termin', 'حجز موعد', 'randevu al'),
(75, 'Opening hours', 'Öffnungszeiten', 'ساعات العمل', 'açılış saatleri'),
(76, 'Admin panel', 'Administrationsmenü', 'لوحة الادارة', 'Admin Paneli'),
(77, 'Stay up to date', 'Auf dem Laufenden bleiben', 'ابق على اطلاع', 'Güncel kal'),
(78, 'Men\'s styling', 'Herren-Styling', 'تصميم الرجال', 'erkek stili'),
(79, 'MEN\'S HAIRSTYLES FOR ALL AGE', 'HERRENFRISUREN FÜR JEDES ALTER', 'تصفيفات شعر الرجال لجميع الأعمار', 'HER YAŞ İÇİN ERKEK SAÇ MODELLERİ'),
(80, 'Women\'s styling', 'Damen-Styling', 'تصميم المرأة', 'Kadın stili'),
(81, 'Womens\'S HAIRSTYLES FOR ALL AGE', 'Damenfrisuren für jedes Alter', 'تصفيفات الشعر النسائية لجميع الأعمار', 'HER YAŞ İÇİN KADIN SAÇ STİLLERİ'),
(82, 'Select date', 'Datum auswählen', 'حدد تاريخ', 'Tarih seç'),
(83, 'Select time', 'Zeit auswählen', 'حدد الوقت', 'Zaman seçin'),
(84, 'Booking has been successfully confirmed!', 'Die Buchung wurde erfolgreich bestätigt!', 'تم تأكيد الحجز بنجاح!', 'Rezervasyon başarıyla onaylandı!'),
(85, 'Please check your mail', 'Bitte überprüfen Sie Ihre Post', 'رجاء تفحص بريدك الإلكتروني', 'Lütfen mailinizi kontrol ediniz'),
(86, 'Check all the fields', 'Überprüfen Sie alle Felder', 'تحقق من جميع الحقول', 'Tüm alanları kontrol edin'),
(87, 'Links', 'Verknüpfungen', 'الروابط', 'Bağlantılar');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `booking`
--
ALTER TABLE `booking`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `info`
--
ALTER TABLE `info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prices_list`
--
ALTER TABLE `prices_list`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subscribed`
--
ALTER TABLE `subscribed`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `translations`
--
ALTER TABLE `translations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `booking`
--
ALTER TABLE `booking`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `info`
--
ALTER TABLE `info`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `prices_list`
--
ALTER TABLE `prices_list`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `subscribed`
--
ALTER TABLE `subscribed`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `translations`
--
ALTER TABLE `translations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=88;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
