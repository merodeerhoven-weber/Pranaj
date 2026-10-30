# House Archive — Family Website

Website archive keluarga dengan tema hitam dan emas. Klik portrait untuk membuka dossier/profil.

## Isi website
- 1 ayah + 1 ibu
- 8 anak (4 laki-laki dan 4 perempuan)
- Detail profil dibuka dalam modal saat portrait diklik
- Responsif untuk desktop dan mobile
- Data keluarga dapat diedit dari `script.js`

## Cara mengganti nama, bio, dan foto
1. Buka `script.js`.
2. Cari array `family` di bagian atas.
3. Untuk setiap anggota, edit `name`, `role`, `subtitle`, `age`, `position`, dan `bio`.
4. Ganti `image` dengan URL gambar langsung.
5. Ganti `source` dengan URL halaman Pinterest tempat gambar ditemukan.

Contoh:
```js
image: "https://i.pinimg.com/originals/xxxxxx.jpg",
source: "https://www.pinterest.com/pin/123456789/"
```

**Catatan Pinterest:** URL halaman pin seperti `pinterest.com/pin/...` biasanya bukan file gambar, jadi tidak bisa dipakai langsung sebagai `image`. Buka gambar pin dan gunakan alamat gambar langsung dari domain `i.pinimg.com` jika tersedia. Untuk penggunaan yang lebih stabil, download gambar yang memang boleh digunakan lalu simpan di folder proyek, misalnya `images/portrait-01.jpg`, kemudian isi `image: "images/portrait-01.jpg"`.

## Cara publish gratis lewat GitHub Pages
1. Login ke GitHub dan buat repository baru, misalnya `family-archive`.
2. Upload `index.html`, `style.css`, `script.js`, dan `README.md` ke root repository.
3. Buka **Settings → Pages**.
4. Pada **Build and deployment**, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu klik **Save**.
6. Tunggu proses publish. GitHub akan menampilkan alamat website di halaman Pages.

Website ini statis, jadi tidak memerlukan database atau server. Untuk mengubah konten, edit `script.js` lalu commit perubahan ke repository.

## Catatan privasi
GitHub Pages cocok untuk arsip publik. Jangan masukkan data pribadi atau informasi rahasia yang tidak ingin dilihat orang lain.
