// resources/js/components/frontend/Footer.tsx

import { Link } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        // KITA GANTI 'footer' DENGAN 'grid' UNTUK KONTROL PENUH
        <footer className="bg-neutral text-neutral-content grid grid-cols-1 gap-8 p-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Kolom 1: Brand */}
            <div>
                <h2 className="text-3xl font-bold">Webify</h2>
                <p className="mt-4 max-w-xs">Mewujudkan ide digital Anda menjadi website yang fungsional, cepat, dan memukau.</p>
                <p className="mt-4 font-semibold">© {currentYear} Webify. All rights reserved.</p>
            </div>

            {/* Kolom 2: Navigasi */}
            <div>
                <h6 className="footer-title">Navigasi</h6>
                <div className="flex flex-col gap-2">
                    <Link href="#features" className="link link-hover">
                        Fitur
                    </Link>
                    <Link href="#portofolio" className="link link-hover">
                        Portofolio
                    </Link>
                    <Link href="#pricing" className="link link-hover">
                        Harga
                    </Link>
                    <Link href={route('posts.index')} className="link link-hover">
                        Blog
                    </Link>
                </div>
            </div>

            {/* Kolom 3: Kontak */}
            <div>
                <h6 className="footer-title">Kontak</h6>
                <div className="flex flex-col gap-2">
                    <a href="mailto:kontak@webify.com" className="link link-hover inline-flex items-center gap-2">
                        <Mail size={16} />
                        <span>kontak@webify.com</span>
                    </a>
                    <a href="tel:+622112345678" className="link link-hover inline-flex items-center gap-2">
                        <Phone size={16} />
                        <span>+62 21 1234 5678</span>
                    </a>
                    <a href="#" className="link link-hover inline-flex items-center gap-2">
                        <MapPin size={16} />
                        <span>Jakarta, Indonesia</span>
                    </a>
                </div>
            </div>

            {/* Kolom 4: Sosial Media */}
            <div>
                <h6 className="footer-title">Sosial Media</h6>
                <div className="flex items-center gap-4">
                    <a href="#" className="link link-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                        </svg>
                    </a>
                    <a href="#" className="link link-hover">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
